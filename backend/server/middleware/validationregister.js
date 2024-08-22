//mid : là 1 function
var _ = require('lodash');
var validator = require('validator');
function validationRegister(req, res, next) {
    // 1.lay du lieu
    // 2.xu ly 
    // 3.kiem tra du lieu 
    // 3.1 du lieu dung goi next()
    // 3.2  sai thi tra ve loi 
    let errors = {
    };

    let postParams = req.body;
    console.log(postParams);


    let name = _.trim(_.get(postParams, "name", ""));
    let sdt = _.trim(_.get(postParams, "sdt", ""));
    let email = _.trim(_.get(postParams, "email", ""));
    let password = _.trim(_.get(postParams, "password", ""));
    let khuvuc = _.trim(_.get(postParams, "khuvuc", ""));


    req.body.name = name;
    req.body.password = password;
    req.body.sdt = sdt;
    req.body.email = email;
    req.body.khuvuc = khuvuc;


    if (validator.isEmpty(email)) {
        errors.email = "Email không được để trống";
    } else if (!validator.contains(email, '@')) {
        errors.email = "Phải đúng dạng (abc@gmail.com)";
    }

    if (validator.isEmpty(sdt)) {
        errors.sdt = "Số điện thoại không được để trống";
    } else if (!validator.isLength(sdt, { min: 10, max: 10 })) {
        errors.phone = "Số điện thoại phải có 10 số";
    }

    if (validator.isEmpty(password)) {
        errors.password = "Password không được để trống";
    } else if (!validator.isLength(password, { min: 4 })) {
        errors.password = "Password phải lớn hơn 4 ký tự";
    }

    if (validator.isEmpty(khuvuc)) {
        errors.khuvuc = "Địa chỉ không được để trống";
    }

    if (validator.isEmpty(name)) {
        errors.name = "Tên của bạn không được để trống";
    }

    if (_.isEmpty(errors)) {
        next();
    } else {
        res.status(400).json(errors);
    }
}
module.exports = validationRegister;