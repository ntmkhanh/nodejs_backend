const connection = require("../config/database")
const mysql = require('mysql2')
const getHomepage = (req, res) => {
    res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send("get ABC")
}

const postNewUser =(req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city
    // let {email, name, city} = req.body;
    // console.log("email= ", email, 'name= ', name, 'city=', city)
    connection.query(
        `INSERT INTO USER(email, name, city) 
        VALUE(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
          console.log(">>>check results:", results);
          res.send("create user sucess!")
        })
    
    // connection.query(
    //     'SELECT * FROM USER',
    //     function(err, results, fields) {
    //       console.log(">>>check result:", results); // results contains rows returned by server
    //       res.send("all")
    //     })
    
    // console.log(">>>check ", req.body)
    
}

module.exports = {
    getHomepage,
    getABC,
    postNewUser
}