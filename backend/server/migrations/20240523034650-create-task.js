'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ten_task: {
        type: Sequelize.STRING
      },
      id_du_an: {
        type: Sequelize.DOUBLE
      },
      nhan_vien_id: {
        type: Sequelize.DOUBLE
      },
      mota: {
        type: Sequelize.STRING
      },
      tinh_trang: {
        type: Sequelize.DOUBLE
      },
      priority: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('Tasks');
  }
};