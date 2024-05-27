const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');
const port = 3000;
const express = require("express");
const cookieParser = require("cookie-parser");
const authentication = require("./vistas/controlador/Aunthentication.controler");

//Server
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto",app.get("port"));

//Configuración
app.use(express.static(__dirname + "/vistas"));
app.use(express.json());
app.use(cookieParser())

//Rutas
app.get("/",(req,res)=> res.sendFile(__dirname + "/vistas/login.html"));
app.get("/registro",(req,res)=> res.sendFile(__dirname + "/vistas/registro.html"));
app.get("/admin", (req, res) => res.sendFile(__dirname + "/vistas/pages/admin.html"));
app.get("/api/registro",authentication.registro);
app.post("/api/login",authentication.login);