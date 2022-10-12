
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block

/*
* Test the Vehicle list post
*/
describe('/POST veihicles', () => {
    it('it should GET all the vehicles', (done) => {
    chai.request(server)
        .post('/auth/vehicles')
        .set({Authorization:"Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3"})
        .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a('array');
            done();
        });
    });
});

/*
* Test the Vehicle register post
*/
describe('/POST vehicle', () => {
    it('it should not POST a vehicle without name field', (done) => {
        let vehicle = {
            driver_id:1,
            model:"Nissan Note 2018"
        }
          chai.request(server)
          .post('/auth/vehicle')
          .set({Authorization:"Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3"})
          .send(vehicle)
          .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('msg').eql("Content can not be empty!")
                res.body.should.have.property('status').eql(0)
            done();
          });
    });
    it('it should POST a vehicle ', (done) => {
        let vehicle = {
            driver_id:1,
            model:"Nissan E12",
            name:"Nissan Note",
            license_number:"YGN-8854",
        }
          chai.request(server)
          .post('/auth/vehicle')
          .set({Authorization:"Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3"})
          .send(vehicle)
          .end((err, res) => {

                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(1);
                res.body.should.have.property('msg').eql('Registered');
            done();
          });
    });
});

/*
* Test the record update post
*/
describe('/POST update-record', () => {
    it('it should not POST a vehicle without name field', (done) => {
        let record = {
            "latitude":"NSA2323534.3432432",
            "longitude":"ANS34342,3235"
         }

          chai.request(server)
          .post('/auth/update-record')
          .set({Authorization:"Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3"})
          .send(record)
          .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('msg').eql("Content can not be empty!")
                res.body.should.have.property('status').eql(0)
            done();
          });
    });
    it('it should POST a update-record ', (done) => {
        let record = {
            "latitude":"NSA2323534.3432432",
            "longitude":"ANS34342,3235",
            "vehicle_id":1
         }
          chai.request(server)
          .post('/auth/update-record')
          .set({Authorization:"Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3"})
          .send(record)
          .end((err, res) => {

                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql(1);
                res.body.should.have.property('msg').eql('Inserted new record!!!');
            done();
          });
    });
});

/*
* Test the records list post
*/

describe('/POST records', () => {
    it('it should GET all the records', (done) => {
    chai.request(server)
        .post('/auth/records')
        .set({Authorization:"Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3"})
        .send({vehicle_id:2})
        .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a('array');
            done();
        });
    });
});
