module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("vehicles", {
      model: {
        type: Sequelize.STRING
      },
      driver_id: {
        type: Sequelize.INTEGER
      },
      license_number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      remark: {
        type: Sequelize.STRING
      }
    });
    
    return Vehicle;
  };