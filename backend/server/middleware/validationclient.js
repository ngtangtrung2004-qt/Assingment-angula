//mid : là 1 function
var _=require('lodash');
var validator = require('validator');
function validationLogin(req,res,next){
    // 1.lay du lieu
    // 2.xu ly 
    // 3.kiem tra du lieu 
    // 3.1 du lieu dung goi next()
    // 3.2  sai thi tra ve loi 
   let errors={
   };

    let postParams=req.body;
    console.log(postParams);
        
     let email=_.trim(_.get(postParams,"email",""));
     let password=_.trim(_.get(postParams,"password",""));

     req.body.email=email;
     req.body.password=password;
     console.log(email);
     console.log(password);
    
     if(validator.isEmpty(email)){
        errors.email="Email không được để trống";
     }
     if(validator.isEmpty(password)){
      errors.password="Password không được để trống";
  } else if(!validator.isLength(password,{min:4})){
      errors.password="Password phải lớn hơn 4 ký tự";
  }

     if(_.isEmpty(errors)){
        next();
     }else{
        res.status(400).json(errors);
     }
}
module.exports = validationLogin;