module.exports = (sequelize, Sequelize) => {
    const Driver = sequelize.define("drivers", {
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_name: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      license_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      address: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      remark: {
        type: Sequelize.STRING
      }
    });
  
    return Driver;
  };