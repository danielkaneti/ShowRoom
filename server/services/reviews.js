const Reviews = require('../models/reviews');
const serviceUser = require('../services/users');
const productsService = require('../services/products');


const createReview = async (body) => {

    const review = new Reviews({
      
        reviewContent: body.reviewContent,
    
        products: body.products,
        users: body.users
    });

    await serviceUser.updateReviewOfUser(body.users, review);
    await productsService.updateReviewOfProduct(body.products, review);

    if (body.lastUpdated)
        review.lastUpdated = body.lastUpdated;

    return await review.save();
};

const getReviews = async () => {
    return await Reviews.find({});
};


const getReviewsProductsUsers = async (userName=null) => {

    var match = {};
    

    if(userName!==null){
        match["user.username"] = new RegExp(userName, 'i')
    }

    var query = [
        {
            $lookup:
                {
                    from: "products",
                    localField: "products",
                    foreignField: "_id",
                    as: "product"
                }
        },
        {
            $unwind:"$product"
        },
        {
            $lookup:
                {
                    from: "users",
                    localField: "users",
                    foreignField: "_id",
                    as: "user"
                }
        },
        {
            $unwind:"$user"
        },
        {
            $project:
                {
                    "_id": 1,
                    "reviewContent": 3,
                    "lastUpdated": 5,
                    "product._id":6,
                    "product.title": 7,
                    "product.year": 8,
                    "product.genre": 9,
                    "product.description": 10,
                    "product.image_url": 11,
                    "user._id":13,
                    "user.username": 14,
                    "user.firstName": 15,
                    "user.lastName": 16
                }
        },
        {
            $match:match
        }
    ]

    return Reviews.aggregate(query)};


const searchReview = async (user=null) => {

    var match = {};

    if(user!==null){
        match["user.username"] = new RegExp(user, 'i')
    }

    var query = [
        {
            $lookup:
                {
                    from: "products",
                    localField: "products",
                    foreignField: "_id",
                    as: "product"
                }
        },
        {
            $unwind:"$product"
        },
        {
            $lookup:
                {
                    from: "users",
                    localField: "users",
                    foreignField: "_id",
                    as: "user"
                }
        },
        {
            $unwind:"$user"
        },
        {
            $project:
                {
                    "_id": 1,
                    "reviewContent": 3,
                    "lastUpdated":5,
                    "user.username": 6,
                    "product.title":7
                }
        },
        {
            $match:match
        }
    ]

    return await Reviews.aggregate(query)
};


const getReviewsByIds = async (review_ids) => {

    var query = [
        {
            $match: {
                "_id": {$in: review_ids}
            }
        },
        {
            $lookup:
                {
                    from: "users",
                    localField: "users",
                    foreignField: "_id",
                    as: "user"
                }
        },
        {
            $unwind:"$user"
        },
        {
            $project:
                {
                    "_id": 1,
                    "reviewContent": 3,
                    "user._id":5,
                    "user.username": 6,
                    "user.firstName": 7,
                    "user.lastName": 8
                }
        }
    ]
    return await Reviews.aggregate(query);
    // return await Reviews.find({'_id':{ $in:review_ids }});
};


const topReviewsByDate = async (topNumber) => {

    var query = [
        {
            $lookup:
                {
                    from: "products",
                    localField: "products",
                    foreignField: "_id",
                    as: "product"
                }
        },
        {
            $unwind:"$product"
        },
        {
            $lookup:
                {
                    from: "users",
                    localField: "users",
                    foreignField: "_id",
                    as: "user"
                }
        },
        {
            $unwind:"$user"
        },
        {
            $project:
                {
                    "_id": 1,
                    "reviewContent": 3,
                    "lastUpdated":5,
                    "product._id":6,
                    "product.title": 7,
                    "product.year": 8,
                    "product.genre": 9,
                    "product.description": 10,
                    "product.image_url": 11,
                    "user._id":13,
                    "user.username": 14,
                    "user.firstName": 15,
                    "user.lastName": 16
                }
        },
        {
            $sort:{
                'lastUpdated': -1
            }
        },
        {
            $limit:parseInt(topNumber)
        }
    ]

    return await Reviews.aggregate([query])
};


const countReviews = async () => {
    return await Reviews.countDocuments({});
};


const getReviewByProductId = async (id) => {
    return await Reviews.find({'products': [id]});
};


const getReviewByUserId = async (id) => {
    return await Reviews.find({'users': Object(id)},{'_id': 1});
};



const getReviewById = async (id) => {
    return await Reviews.findById(id);
};


const updateReview = async (id, body) => {
    const review = await getReviewById(id);
    if (!review)
        return null;

    review.reviewContent = body.reviewContent;

    await review.save();
    return review;
};


const deleteReview = async (id) => {
    const review = await getReviewById(id);
    if (!review)
        return null;

    await review.remove();
    return review;
};



module.exports = {
    createReview,
    getReviews,
    updateReview,
    deleteReview,
    getReviewByProductId,
    getReviewByUserId,
    getReviewById,
    countReviews,
    topReviewsByDate,
    getReviewsByIds,
    getReviewsProductsUsers,
    searchReview
}