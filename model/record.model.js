module.exports = (sequelize, Sequelize) => {
    const Record = sequelize.define("records", {
      vehicle_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      latitude: {
        allowNull: false,
        type: Sequelize.STRING
      },longitude: {
        allowNull: false,
        type: Sequelize.STRING
      },bearing: {
        type: Sequelize.STRING
      },odometer: {
        type: Sequelize.FLOAT
      },speed: {
        type: Sequelize.FLOAT
      },
      stoppedAt: {
        type: Sequelize.DATE
      }
    },
    {
      indexes:[
       {
         unique: false,
         fields:['vehicle_id']
       }
      ]
    });
    return Record;
};