require('dotenv').config();
const app = require('./src/app');

app.set('views', './src/views')
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3001;
const HOST_NAME = process.env.HOST_NAME;

console.log(">>> check env: ", process.env)
app.listen(PORT, HOST_NAME, () =>{
    console.log(`Server is running on PORT ${PORT}`)
})