# NodeJS Test Project

## Setup

###### Pull project from github
github link: https://github.com/zacksitt/nodetest

###### Run npm install
> npm install

###### Please install pm2 to run node application

>npm install pm2

###### Run node application

>pm2 start ecosystem.config.js

###### Please import db. Sql file is under db directory.
###### Fill your mysql configration in config.js file

## APIs

--------------------------------------------
	--- Vehicle Register API --
--------------------------------------------

Url : http://localhost:7000/auth/vehicle </br>
Desc: "Vehicle registration api";</br></br>

header: {</br>
    "Content-Type":"application/json",</br>
    “Authorization”: “Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3</br>
}</br></br>

Request Param {</br>
   "name":"Nissan Note",</br>
   "driver_id":1,</br>
   "model":"E11-2018",</br>
   "color":"grey",</br>
   "year":2018,</br>
   "license_number":"YGN-8854",</br>
   "remark":"Testing Note"</br>
}</br></br>

Response : {</br>
    "status": 1,</br>
    "msg": "Registered"</br>
}</br></br>

--------------------------------------------
	--- Record Update --
--------------------------------------------

Url : http://localhost:7000/auth/update-record</br>
Desc: "Vehicle position update api";</br></br>

header: {</br>
    "Content-Type":"application/json",</br>
    “Authorization”: “Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3</br>
}</br></br>

Request Param {</br>
   "latitude":"NSA2323534.3432432",</br>
   "longitude":"ANS34342,3235",</br>
   "bearing":"6305ZZ",</br>
   "speed":150.55,</br>
   "odometer":100.5,</br>
   "vehicle_id":2</br>
}</br></br>

Response : {</br>
    "status": 1,</br>
    "msg": "Inserted new record!!!"</br>
}</br></br>


--------------------------------------------
	--- Vehicle Records API --
--------------------------------------------

Url : http://localhost:7000/auth/records</br>
Desc: "Vehicle records api";</br></br>

header: {</br>
    "Content-Type":"application/json",</br>
    “Authorization”: “Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3</br>
}</br></br>

Request Param {</br>
  "vehicle_id":2</br>
}</br></br>

Response : {</br>
    "status": 1,</br>
    "data": [</br>
        {</br>
            "id": 1,</br>
            "vehicle_id": 2,</br>
            "latitude": "NSA2323534.3432432",</br>
            "longitude": "ANS34342,3235",</br>
            "bearing": "6305ZZ",</br>
            "odometer": 100.5,</br>
            "speed": 150.55,</br>
            "stoppedAt": null,</br>
            "createdAt": "2022-10-12T03:57:13.000Z",</br>
            "updatedAt": "2022-10-12T03:57:13.000Z"</br>
        }</br>
    ]</br>
}</br></br>

--------------------------------------------
	--- Vehicle List API --
--------------------------------------------

Url : http://localhost:7000/auth/vehicles</br>
Desc: "Vehicle registration api";</br></br>

header: {</br>
    "Content-Type":"application/json",</br>
    “Authorization”: “Basic Y2xpZW50eDpUaEBSQFBAM1JPQERDQFM3</br>
}</br></br>

Request Param {
}</br>

Response : {</br>
    "status": 1,</br>
    "data": [</br>
        {</br>
            "id": 1,</br>
            "model": "E11-2018",</br>
            "driver_id": 1,</br>
            "license_number": "YGN-8854",</br>
            "color": "grey",</br>
            "year": 2018,</br>
            "remark": "Testing Note",</br>
            "createdAt": "2022-10-12T04:01:06.000Z",</br>
            "updatedAt": "2022-10-12T04:01:06.000Z"</br>
        }</br>
    ]</br>
}</br></br>


## Unit Testing

###### Run npm test</br>
>npm test