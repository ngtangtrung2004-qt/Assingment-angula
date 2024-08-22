const createDuan = require("../models/duan");
const { sequelize } = require("../models/index");
const { DataTypes, Op } = require("sequelize");
const Duans = createDuan(sequelize, DataTypes);
const LIMIT=5;

class DuanController {
    static async index(req, res, next) {
      let q = req.query.q ? req.query.q.q : '';
      console.log(q);
      let page = req.query.page ? req.query.page : 1;
      let offset = (page - 1) * LIMIT;
     
      try {
          const { count, rows } = await Duans.findAndCountAll({
            where: {
              ten_du_an: {
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
              .json({ message: "Get All Data successfully !", data: rows,page,q,totalPage});
      } catch (error) {
          next(error);
      }
  }


  static async index2(req, res, next) {
        const duan = await Duans.findAll(); 
        res
            .status(200)
            .json({ message: "Get All Data successfully !", data: duan});
    } catch (error) {
        next(error);
    }
    
    
  static async show1(req, res, next) {
    try {
      let leader = req.params.leader;
      console.log(leader);
      let duan = await Duans.findAndCountAll({
        where: {
          leader: {
            [Op.like]: leader,
          },
        }
      });
      let message = "";
      if (duan) {
        message = "Get Data By ID successfully !";
      } else {
        duan = {};
        message = "Cant not find ID!!!";
      }
      res.status(200).json({ message, data: duan });
    } catch (error) {
      next(error);
    }
  }

  static async show(req, res, next) {
    try {
      let id = req.params.id;
      console.log(id);
      let duan = await Duans.findAndCountAll({
        where: {
          id: {
            [Op.like]: id,
          },
        }
      });
      let message = "";
      if (duan) {
        message = "Get Data By ID successfully !";
      } else {
        duan = {};
        message = "Cant not find ID!!!";
      }
      res.status(200).json({ message, data: duan });
    } catch (error) {
      next(error);
    }
  }


    // static async show(req, res, next) {
    //   try {
    //     let id = req.params.id;
    //     console.log(id);
    //     let duans = await Duans.findByPk(id);
    //     let message = "";
    //     if (duans) {
    //       message = "Get Data By ID successfully !";
    //     } else {
    //         duans = {};
    //       message = "Cant not find ID!!!";
    //     }
    //     res.status(200).json({ message, data: duans });
    //   } catch (error) {
    //     next(error);
    //   }
    // }




    static async create(req, res, next) {
      try {
        let duans = req.body;
        let result = await Duans.create(duans);
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
        let duans = req.body;
        let result = await Duans.update(duans, {
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
        let result = await Duans.destroy({
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
  
  module.exports = DuanController;
  