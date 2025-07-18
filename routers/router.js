import express from "express"
import { home, enterChat } from "../controller/controller.js"

let router = express()

router.get("/", home)

router.post("/enter-chat", enterChat)

export { router }