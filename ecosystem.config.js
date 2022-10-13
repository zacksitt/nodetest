var app = {apps:[],deploy:{}};

var all_apps = [
  {name:'nodetest',port:7000,"watch":true},
];

all_apps.forEach(function(element) {

  element.watch = true;
  element.script="./app.js";
  element.exec_mode = "fork";
  element.env = {

    PORT:element.port,
    NODE_ENV:'development',
    DEBUG:"nodetest:*"
  }
});

var deply = {
  "development" : {
     
     }
};

app.apps = all_apps;
app.deploy = deply;
module.exports = app;
