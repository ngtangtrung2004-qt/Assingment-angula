
const createTask = require("../models/task");
const { sequelize } = require("../models/index");
const { DataTypes, Op } = require("sequelize");
const Task = createTask(sequelize, DataTypes);
const LIMIT=5;

class TaskController {
  static async index(req, res, next) {
      let q = req.query.timkiem ? req.query.timkiem : '';
      let page = req.query.page ? req.query.page : 1;
      console.log(page);
      let offset = (page - 1) * LIMIT;
      try {
      const { count, rows } = await Task.findAndCountAll({  
        where: {
        ten_task:{
          [Op.like]: `%${q}%`
        }
      },
      paranoid: true,
      offset:offset,
      limit:LIMIT
    });
    console.log("h");
    let totalPage = Math.ceil(count / LIMIT);
      res
        .status(200)
        .json({ message: "Get All Data successfully !", data: rows,page,q,totalPage});
      } catch (error) {
      next(error);
    }
  }


  static async show1(req, res, next) {
    try {
      let iduser = req.params.iduser;
      console.log(iduser);
      let task = await Task.findAndCountAll({
        where: {
          nhan_vien_id: {
            [Op.like]: iduser,
          },
        }
      });
      let message = "";
      if (task) {
        message = "Get Data By ID successfully !";
      } else {
        task = {};
        message = "Cant not find ID!!!";
      }
      res.status(200).json({ message, data: task });
    } catch (error) {
      next(error);
    }
  }

  static async show(req, res, next) {
    try {
      let id = req.params.id;
      console.log(id);
      let task = await Task.findByPk(id);
      let message = "";
      if (task) {
        message = "Get Data By ID successfully !";
      } else {
        task = {};
        message = "Cant not find ID!!!";
      }
      res.status(200).json({ message, data: task });
    } catch (error) {
      next(error);
    }
  }


  static async create(req, res, next) {
    try {
      let task = req.body;
      console.log(task);
      let result = await Task.create(task);
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
      let task = req.body;
      console.log(task);
      let result = await Task.update(task, {
        where: {
          id: id,
        },
      });
      if (result[0]) {
        message = "Update Data successfully !";
      } else {
        message = "Cant not find ID!!!";
      }
      console.log(result);
      res.status(200).json({ message, data: result });
    } catch (error) {
      next(error);
    }
  }
  
  static async destroy(req, res, next) {
    try {
      let id = req.params.id;
      let message;
      let result = await Task.destroy({
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

module.exports = TaskController;
