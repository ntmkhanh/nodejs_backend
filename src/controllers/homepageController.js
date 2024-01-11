const connection = require("../config/database")
const {getAllUser} = require("../services/CRUDservices")


const getHomepage = async (req, res) => {
    const results = await getAllUser();
    return res.render('home.ejs', {listUser : results})
}


const getABC = (req, res) => {
    res.send("get ABC")
}
const getAddUserPage = (req, res) => {
    res.render('create.ejs')
}
const postNewUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city
    // let {email, name, city} = req.body;
    // console.log("email= ", email, 'name= ', name, 'city=', city)
    const[results, fields] = await connection.query(
        `INSERT INTO USER(email, name, city) 
        VALUE(?, ?, ?)`,
        [email, name, city],)
    
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
    postNewUser,
    getAddUserPage
}