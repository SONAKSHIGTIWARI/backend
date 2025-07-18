import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import ejs from "ejs"

import { router } from "./routers/router.js"

dotenv.config({ path: "./config.env" })

const port = process.env.PORT || 4441

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"))

app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} ! | http://localhost:${port}.`)
})