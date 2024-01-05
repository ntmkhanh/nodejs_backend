const getHomepage = (req, res) => {
    res.render('index.ejs')
}

const getABC = (req, res) => {
    res.send("get ABC")
}

module.exports = {
    getHomepage,
    getABC
}