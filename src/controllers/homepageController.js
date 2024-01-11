const getHomepage = (req, res) => {
    res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send("get ABC")
}

const postNewUser =(req, res) => {
    console.log(">>>check ", req.body)
    res.send("create new user")
}
module.exports = {
    getHomepage,
    getABC,
    postNewUser
}