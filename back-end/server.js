const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use("/api",require("./routes/contactRoutes"))

const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})