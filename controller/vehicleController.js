
const db = require("../model");
const Vehicle = db.vehicles;
const Record = db.records;

const Op = db.Sequelize.Op;

let getlist = async function(req,res){
  
  try {

    
    let vehicles = await Vehicle.findAll()
    res.send({status:1,data:vehicles});

  } catch (error) {
    res.send({status:0,msg:error.message}) 
  }
};


let register = async function(req,res){
  
  try {
    // Validate request
    if (!req.body.name || !req.body.model) {
      res.status(400).send({
        status:0,
        msg: "Content can not be empty!"
      });
      return;
    }

    // Create a vehicle
    const vehicle = {

      name: req.body.name,
      model:req.body.model,
      license_number:req.body.license_number,
      color:req.body.color,
      year:req.body.year,
      driver_id: req.body.driver_id,
      remark:req.body.remark

    };

    // Save Vehicle in the database
    await Vehicle.create(vehicle);
    res.send({status:1,msg:"Registered"});
  } catch (error) {
    res.send({status:0,msg:error.message}) 
  }
};

let update_record = async function(req,res){

  try {

    if (!req.body.vehicle_id || !req.body.longitude || !req.body.latitude) {
      res.status(400).send({
        status:0,
        msg: "Content can not be empty!"
      });
      return;
    }

    // Create a record
    const record = {
      vehicle_id: req.body.vehicle_id,
      longitude:req.body.longitude,
      latitude: req.body.latitude,
      bearing: req.body.bearing,
      speed: req.body.speed,
      odometer: req.body.odometer,
      latitude: req.body.latitude,
      latitude: req.body.latitude,
    };

    Record.create(record)
          .then( result => {
            res.send({status:1,msg:"Inserted new record!!!"});
          })
          .catch(error => {
            res.send({status:0,msg:error.message})         
          });
    
  } catch (error) {
    res.send({status:0,msg:error.message}) 
  }
}

let get_records = async function(req,res){

  if (!req.body.vehicle_id) {
    res.status(400).send({
      status:0,
      msg: "Content can not be empty!"
    });
    return;
  }

  try {

    let records = await Record.findAll({
      where: {
        vehicle_id: req.body.vehicle_id
      }
    })
    res.send({status:1,data:records});

  } catch (error) {
    res.send({status:0,msg:error.message}) 
  }
};
module.exports = {
    register,
    update_record,
    getlist,
    get_records
}