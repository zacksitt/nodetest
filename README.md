#NodeJS Test Project

##Setup

######Please install pm2 to run node application

>npm install pm2

######Run node application

>pm2 start ecosystem.config.js

######Please import db. Sql file is under db directory.

##APIs

--------------------------------------------
	--- Vehicle Register API --
--------------------------------------------

Url : http://localhost:7000/auth/vehicle
Desc: "Vehicle registration api";

header: {
    "Content-Type":"application/json",
    “Authorization”: “Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3
}

Request Param {
   "name":"Nissan Note",
   "driver_id":1,
   "model":"E11-2018",
   "color":"grey",
   "year":2018,
   "license_number":"YGN-8854",
   "remark":"Testing Note"
}

Response : {
    "status": 1,
    "msg": "Registered"
}

--------------------------------------------
	--- Record Update --
--------------------------------------------

Url : http://localhost:7000/auth/update-record
Desc: "Vehicle position update api";

header: {
    "Content-Type":"application/json",
    “Authorization”: “Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3
}

Request Param {
   "latitude":"NSA2323534.3432432",
   "longitude":"ANS34342,3235",
   "bearing":"6305ZZ",
   "speed":150.55,
   "odometer":100.5,
   "vehicle_id":2
}

Response : {
    "status": 1,
    "msg": "Inserted new record!!!"
}


--------------------------------------------
	--- Vehicle Records API --
--------------------------------------------

Url : http://localhost:7000/auth/records
Desc: "Vehicle records api";

header: {
    "Content-Type":"application/json",
    “Authorization”: “Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3
}

Request Param {
  "vehicle_id":2
}

Response : {
    "status": 1,
    "data": [
        {
            "id": 1,
            "vehicle_id": 2,
            "latitude": "NSA2323534.3432432",
            "longitude": "ANS34342,3235",
            "bearing": "6305ZZ",
            "odometer": 100.5,
            "speed": 150.55,
            "stoppedAt": null,
            "createdAt": "2022-10-12T03:57:13.000Z",
            "updatedAt": "2022-10-12T03:57:13.000Z"
        }
    ]
}

--------------------------------------------
	--- Vehicle List API --
--------------------------------------------

Url : http://localhost:7000/auth/vehicles
Desc: "Vehicle registration api";

header: {
    "Content-Type":"application/json",
    “Authorization”: “Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3
}

Request Param {
}

Response : {
    "status": 1,
    "data": [
        {
            "id": 1,
            "model": "E11-2018",
            "driver_id": 1,
            "license_number": "YGN-8854",
            "color": "grey",
            "year": 2018,
            "remark": "Testing Note",
            "createdAt": "2022-10-12T04:01:06.000Z",
            "updatedAt": "2022-10-12T04:01:06.000Z"
        }
    ]
}


##Unit Testing

#######Run npm test
>npm test