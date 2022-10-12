var createError = require('http-errors');
var express = require('express');
var http = require('http');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./model");

const vehicleCtrl = require('./controller/vehicleController');

const cors = require('cors');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


var authRoutes = require('express').Router()
authRoutes.use((req,res,next) => {

    // -----------------------------------------------------------------------
    // authentication middleware
    // let basicToken = "Basic " + new Buffer("clientx" + ":" + "Th@R@P@3RO@DC@S7").toString("base64");
    // console.log("Auth",basicToken);
    const auth = {login: 'clientx', password: 'Th@R@P@3RO@DC@S7'} // change this
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    // Verify login and password are set and correct
    if (login && password && login === auth.login && password === auth.password) {
      // Access granted...
      return next()
    }

    // Access denied...
    res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    res.status(401).send('Authentication required.') // custom message

    // -----------------------------------------------------------------------
})

authRoutes.post("/vehicle",vehicleCtrl.register);
authRoutes.post("/vehicles",vehicleCtrl.getlist);
authRoutes.post("/update-record",vehicleCtrl.update_record);
authRoutes.post("/records",vehicleCtrl.get_records);

app.use('/auth', authRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
	console.log(err.message);
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});


db.sequelize.sync()
.then(() => {
  console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

const hostname = "localhost";
var server = http.createServer(app);
let port = process.env.PORT;
server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
    console.log("DB Host" + process.env.DB_Host);
    console.log("DB User " + process.env.DB_USER);

});

module.exports = app;
