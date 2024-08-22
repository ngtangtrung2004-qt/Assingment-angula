'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    ten_task: DataTypes.STRING,
    id_du_an: DataTypes.NUMBER,
    nhan_vien_id: DataTypes.NUMBER,
    mota: DataTypes.STRING,
    tinh_trang: DataTypes.NUMBER,
    priority: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};