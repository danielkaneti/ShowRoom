


export interface Products{
    _id:number,
    title: {type:String, unique: true},
    year: Number,
    genre: String,  
    description: String,
    image_url: String
}