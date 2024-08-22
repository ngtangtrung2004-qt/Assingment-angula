'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Duans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ten_du_an: {
        type: Sequelize.STRING
      },
      so_thanh_vien: {
        type: Sequelize.DOUBLE
      },
      thanhvien: {
        type: Sequelize.JSON
      },
      chiphi: {
        type: Sequelize.DOUBLE
      },
      leader: {
        type: Sequelize.DOUBLE
      },
      ngaytao: {
        type: Sequelize.DATE
      },
      ngayhethan: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Duans');
  }
};