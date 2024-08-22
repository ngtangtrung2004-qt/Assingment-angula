//mid : là 1 function
var _=require('lodash');
var validator = require('validator');
function validationPost(req,res,next){
    // 1.lay du lieu
    // 2.xu ly 
    // 3.kiem tra du lieu 
    // 3.1 du lieu dung goi next()
    // 3.2  sai thi tra ve loi 
   let errors={
   };

    let postParams=req.body;
     console.log(postParams);
     let title=_.trim(_.get(postParams,"title",""));
     let des=_.trim(_.get(postParams,"description",""));
     let image=_.trim(_.get(postParams,"image",""));

     req.body.title=title;
     req.body.description=des;
     req.body.image=image;
     if(validator.isEmpty(title)){
        errors.title="Title Khong dc de trong";
     }

     if(validator.isLength(title,{min:10})){
        errors.titleLength="Title > 10 ki tu";
     }

     if(_.isEmpty(errors)){
        next();
     }else{
        res.status(400).json(errors);
     }
}
module.exports = validationPost;