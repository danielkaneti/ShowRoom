const fetch = require('node-fetch');
const cheerio = require('cheerio');
const Scraper = require('images-scraper');
const probe = require('probe-image-size');

const productUrl = 'https://www.imdb.com/title/';
const productCache = {};


const getGoggleImage = async (title) => {

    const google = new Scraper({
        puppeteer: {
            headless: false,
        },
    });

    const googleResults = await google.scrape(title + " product 16:9", 40);
    for (const image of googleResults) {
        let imageMetadata = await probe(image.url);
        if(imageMetadata.width > 1799 && imageMetadata.width < 1999 && imageMetadata.height > 999 && imageMetadata.height < 1100){
            console.log(imageMetadata);
            return image.url
        }
    }
    return NaN
};

async function getImage(title){

    return new Promise((resolve, reject) => {
        getGoggleImage(title).then(imageURL=> resolve(imageURL));
    });

}


// get a specific product
function getProduct(imdbID) {
    // caching for the searched products
    if (productCache[imdbID]) {
        console.log('Serving from cache: ', imdbID);
        return Promise.resolve(productCache[imdbID]);
    }

    return fetch(`${productUrl}${imdbID}`)
        .then(response => response.text())
        .then(async body => {
            const $ = cheerio.load(body);
            const $title = $('.title_wrapper h1');

            // get title
            const title = $title
                .first()
                .contents()
                .filter(function() {
                    return this.type === 'text';
                })
                .text()
                .trim();


            var obj = $("script[type='application/ld+json']");

            for(var i in obj){
                for(var j in obj[i].children){
                    var data = obj[i].children[j].data;
                    if(data){
                        data = data.replace('!DOCTYPE html ""','');
                        var dataStringify = JSON.stringify(data);
                        if(dataStringify.length > 2){
                            var dataJson = JSON.parse(data);
                        }
                    }
                }
            }

            let genre = dataJson.genre[0];
            if(typeof dataJson.genre === "string"){
                genre = dataJson.genre;
            }
            const year = parseInt(dataJson.datePublished.split('-')[0]);
            const description = dataJson.description;
            const image = await getImage(title);

            if(!genre || !year || !description || !image){
                return
            }

            const product = {
                title: title,
                year: year,
                genre:genre,
                description: description,
                image_url: image
            };
            productCache[imdbID] = product;

            return product;

        });

}

module.exports = {
    getProduct
};