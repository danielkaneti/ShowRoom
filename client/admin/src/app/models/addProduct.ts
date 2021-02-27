


export interface AddProduct{
    title: string,
    year: number,
    genre: string,  // delimiter ','
    description: string,
    image_url: string,
    trailer_video: string
}
export interface groupProduct{
 
    genre: string,  // delimiter ','
    products:[]
}
export interface scrapeM{
 
    url:string
}
