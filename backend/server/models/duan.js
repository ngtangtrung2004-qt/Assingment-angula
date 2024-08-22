'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Duan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Duan.init({
    ten_du_an: DataTypes.STRING,
    so_thanh_vien: DataTypes.NUMBER,
    chiphi: DataTypes.NUMBER,
    leader: DataTypes.NUMBER,
    thanhvien:DataTypes.JSON,
    ngaytao: DataTypes.DATE,
    ngayhethan: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Duan',
  });
  return Duan;
};