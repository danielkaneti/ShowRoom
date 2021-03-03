import { Products } from "./products";



export interface AddProduct{
    title: string,
    year: number,
    genre: string,  // delimiter ','
    description: string,
    image_url: string,
}
export interface groupProduct{
 
    genre: string,  // delimiter ','
    products: Products[]
}
export interface scrapeM{
 
    url:string
}
