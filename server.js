require('dotenv').config();
const app = require('./src/app');
const configViewEngine = require('./src/config/viewEngine')
const webRouter = require('./src/routes/web')
//config
configViewEngine(app)

//khai bao route
app.use('/', webRouter)

const PORT = process.env.PORT || 3001;
const HOST_NAME = process.env.HOST_NAME;

// console.log(">>> check env: ", process.env)
app.listen(PORT, HOST_NAME, () =>{
    console.log(`Server is running on PORT ${PORT}`)
})