const host = "localhost"
const port = 3000;

const fs = require('fs')
const path = require("path")
const morgan = require('morgan')
const express = require("express"),
    app = express();

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan('dev'));

// static file serving
app.use(express.static(path.join(__dirname, 'public')));
//setting view engine to ejs
app.set("view engine", "ejs");

// ROUTERS
app.get("/", function (req, res) {
    res.render("landingPage"); 
});

app.get("/dashboard", function (req, res) {
    res.render("dashboard");
});

app.get("/Login", function (req, res) {
    res.render("Login");
});

app.get("/SignUp", function (req, res) {
    res.render("SignUp");
});

app.get("/SignUp2", function (req, res) {
    res.render("SignUp2");
});

app.get("/e-ticket", function (req, res) {
    res.render("e-ticket");
});
app.get("/History", function (req, res) {
    res.render("History");
});
app.get("/profil", function (req, res) {
    res.render("Profil");
});
app.get("/editVehicle", function (req, res) {
    res.render("editVehicle");
});

app.get("/addVehicle", function (req, res) {
    res.render("addVehicle");
});

app.get("/employe", function (req, res) {
    res.render("employe");
});
app.get("/admin", function (req, res) {
    res.render("admin");
});
app.get("/employeList", function (req, res) {
    res.render("employeList");
});
app.get("/adminList", function (req, res) {
    res.render("adminList");
});
app.get("/adminHistory", function (req, res) {
    res.render("adminHistory");
});
app.get("/adminHistory2", function (req, res) {
    res.render("adminHistory2");
});
app.get("/adminEmploye", function (req, res) {
    res.render("adminEmploye");
});
app.get("/adminEmployeEdit", function (req, res) {
    res.render("adminEmployeEdit");
});
app.get("/employeScan2", function (req, res) {
    res.render("employeScan2");
});

app.listen(port, function () {
    console.log(`Server is running on http://${host}:${port}`);
});
