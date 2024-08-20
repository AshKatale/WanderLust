const wrapAsync = require("./utils/wrapAsync");
const Listing = require("./models/listing.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");



module.exports.validateListing =(req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
            let errmsg = error.details.map((el)=>el.message).join(",");
            throw new ExpressError(400, error);
        }
        else{
            next();
        }
}

module.exports.validateReview =(req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
            let errmsg = error.details.map((el)=>el.message).join(",");
            throw new ExpressError(400, error);
        } 
        else{
            next();
        }
}

module.exports.isLoggedIn  = (req,res, next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in");
        return res.redirect("/login");
    }
    next();
}


module.exports.saveRedirectUrl = (req,res, next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl =  req.session.redirectUrl;
    }
    next();
} 


module.exports.isOwner = wrapAsync(async(req,res, next)=>{
    const {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "Access Denied");
        return res.redirect(`/listings/${id}`);
    }
    next();
});


module.exports.isReviewAuthor = wrapAsync(async(req,res, next)=>{
    const {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error", "Access Denied");
        return res.redirect(`/listings/${id}`);
    }
    next();
});