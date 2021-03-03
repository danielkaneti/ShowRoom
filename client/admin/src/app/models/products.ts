


export interface Products{
    _id:number,
    title: {type:string, unique: true},
    year: number,
    genre: string,  
    description: string,
    image_url: string
}