const express= require("express");
const app=express();
const https=require("https");
const ejs = require("ejs");
//const request = require('request');
const fetch = require('node-fetch');

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.get("/",function (req,res) {
  const url="https://api.wazirx.com/api/v2/tickers#";
  https.get(url, function (response) {
    let value="";
    response.on("data",function (data) {
      value+=data;
    });
    response.on('end',()=>{
      const help=JSON.parse(value);
    //  console.log(help.btcinr);
    var first=Object.entries(help).slice(0,10);
    //console.log(first[1][1].buy);
      res.render("list",{all:first});
    });


  });

  // fetch(url)
  //   .then(res => res.json())
  //   .then(json => console.log(json));

});







app.listen(3000,function (req,res) {
    console.log("running");

});
