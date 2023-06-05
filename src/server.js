const app = require('./index');
const connect = require('./config/db');
const PORT = 3001;

app.listen(PORT ,async()=>{
    try {
        await connect()
        console.log(`listening on port : ${PORT}`)
    } catch (err) {
        console.log("error :",err)
    }
})