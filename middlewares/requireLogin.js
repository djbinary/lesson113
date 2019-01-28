// Lower case r in the file name, cause exporting a Function not a class

//next if a function we call when middleware is complete. 
// similar to Done from Passport
//After middleware 1 finishes NEXT middleware

module.exports = (req, res, next) => {

    if (!req.user) {
        return res.status(401).send({error: 'You must login"'});
    }
    // if user is logged in, everything looks good, next
    next();
};