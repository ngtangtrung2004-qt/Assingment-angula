
const createUsers = require("../models/user");
const { sequelize } = require("../models/index");
const { DataTypes,Op } = require("sequelize");
var jwt = require("jsonwebtoken");
const User = createUsers(sequelize, DataTypes);
const LIMIT=5;
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);


class usersController {
  static async index(req, res, next) {
    console.log("trời quơ");
    let q = req.query.timkiem ? req.query.timkiem : '';
    let page = req.query.page ? req.query.page : 1;
    console.log(page);
    let offset = (page - 1) * LIMIT;
    try {
      const  { count, rows } = await User.findAndCountAll({ where: {
        name: {
          [Op.like]: `%${q}%`
        }
      },
        paranoid: true,
        offset:offset,
        limit:LIMIT
});

let totalPage = Math.ceil(count / LIMIT);
      res
        .status(200)
        .json({ message: "Get All Data successfully !", data: rows,page,q,totalPage });
    } catch (error) {
      next(error);
    }
  }


  static async createSession(req, res, next) {
    const { email, password } = req.body;
    let user = await User.findOne({ where: { email } });
    if (user){
      let checkPass = bcrypt.compareSync(password, user.password);
      if (checkPass){
        req.session.user = user;
        const payload ={id:user.id,email:user.email,role:user.role,khuvuc:user.khuvuc,sdt:user.sdt,name:user.name,status:user.status }
        let accesToken = jwt.sign(payload, "fpoly", { expiresIn: "3000s" });
        res.status(200).json({message:"Đăng nhập thành công", accesToken,payload});
      }else{
        res.status(400).json({message:"Sai mật khẩu"})
      }
    } else {
      res.status(400).json({message:"Sai Người dùng"})
    }
  }


  static async getuserbyToken(req, res, next) {
    try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    var ketqua= jwt.verify(token, "fpoly");
    if(ketqua){
  let idUser=ketqua.id;
  console.log(idUser);
  let user = await User.findOne({ where: { id:idUser } });
  console.log(user);
  const role=user.role;
  res.status(200).json({mesage:"Lấy Role Thành Công",user})
    }else{
      res.status(400).json({mesage:"Token Sai"}) 
    }
    } catch (error) {
      res.status(400).json({mesage:"Chưa Đăng Nhập"}) 
      console.log(error);
    }
    } 
  
  static async show(req, res, next) {
    try {
      let id = req.params.id;
      console.log(id);
      let user = await User.findByPk(id);
      let message = "";
      if (user) {
        message = "Get Data By ID successfully !";
      } else {
        user = {};
        message = "Cant not find ID!!!";
      }
      res.status(200).json({ message, data: user });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      let {name,
        email,
        sdt,
        khuvuc,
        role=1,
        status=1,
        avatar,
        password} = req.body;
      const hash = bcrypt.hashSync(password, salt);
      let result = await User.create({
        name,
        email,
        sdt,
        khuvuc,
        role:role,
        status:status,
        avatar,
        password:hash,
       
      });
      res
        .status(200)
        .json({ message: "Create Data successfully !", data: result });
    } catch (error) {
      next(error);
    }
  }


  static async update(req, res, next) {
    try {
      let message = "";
      let id = req.params.id;
      let user = req.body;
      let result = await User.update(user, {
        where: {
          id: id,
        },
      });
      if (result[0]) {
        message = "Update Data successfully !";
      } else {
        message = "Cant not find ID!!!";
      }
      res.status(200).json({ message, data: result });
    } catch (error) {
      next(error);
    }
  }
  static async destroy(req, res, next) {
    try {
      let id = req.params.id;
      let message;
      let result = await User.destroy({
        where: {
          id: id,
        },
      });
      if (result) {
        message = "Delete Data successfully !";
      } else {
        message = "Cant not find ID!!!";
      }
      res.status(200).json({ message, data: result });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = usersController;
