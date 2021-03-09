const fetch = require('node-fetch');
const cheerio = require('cheerio');
const Scraper = require('images-scraper');
const probe = require('probe-image-size');

const axios = require('axios');
const products = require('../models/products');

const productsService = require('./products');

const mainPageUrl = 'https://jlmwines.com/shop/';
const catalogPageUrlPrefix = 'https://jlmwines.com/shop/?product-page=';

const getWinePagesCount = async() => {
    const mainShopPage = await axios.get(mainPageUrl);
    const $ = cheerio.load(mainShopPage.data);
    const pageNumberButtons = $('a.page-numbers').toArray();

    const lastPageButton = pageNumberButtons[pageNumberButtons.length - 2];
    const lastPageNumber = +$(lastPageButton).text();

    return lastPageNumber;
};

const scrapeProductPage = async (productPageUrl) => {
    const productPage = await axios.get(productPageUrl);
    const $ = cheerio.load(productPage.data);

    const wineTitle = $($('div.et_pb_wc_title_0_tb_body').first()).text();

    const wineDescription = $('div.et_pb_wc_description_0_tb_body').first();

    wineDescription.find('br').replaceWith('\n');

    const descriptionParagraphs = wineDescription.children("div.et_pb_module_inner").first().children("p");

    const descriptionTextWithKosher = $(descriptionParagraphs[0]).text() + $(descriptionParagraphs[1]).text();

    const kosherLocation = descriptionTextWithKosher.indexOf('Kosher Certification:');

    const fixedDescriptionText = descriptionTextWithKosher.substring(0, kosherLocation);

    const vintageYearStartIndex = fixedDescriptionText.indexOf("Vintage");
    const vintageYear = +fixedDescriptionText.substr(vintageYearStartIndex + "Vintage: ".length).split("\n")[0];

    const grapeType = $($('tr.woocommerce-product-attributes-item.woocommerce-product-attributes-item--attribute_pa_grape').first().children('td').first().children('p').first()).text().split(",")[0];

    const product = new products();
    product.title = wineTitle;
    product.year = vintageYear;
    product.genre = grapeType;
    product.description = fixedDescriptionText;
    product.image_url = $('div.woocommerce-product-gallery__image').first().children("a").first().attr('href');

    return product;
};

const scrapePage = async (pageIndex) => {
    const catalogPage = await axios.get(catalogPageUrlPrefix + pageIndex);
    const $ = cheerio.load(catalogPage.data);

    const itemsLinks = $('a.woocommerce-LoopProduct-link').toArray();

    for (let item of itemsLinks) {
        const product = await scrapeProductPage($(item).attr('href'));
        await productsService.createProduct(product);
    }
};

const scrapeProductsFromWinery = async() => {
    const pages = await getWinePagesCount();

    for (let i = 1; i <= pages; i++) {
        await scrapePage(i);
    }
};

module.exports = {
    scrapeProductsFromWinery
};