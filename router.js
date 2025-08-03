import express from "express"
import { getHome, getAbout, getContact, postContact, addEmoji } from "../../controllers/controller.js"
let router = express()

router.get("/", getHome)
router.get("/about", getAbout)
router.get("/contact", getContact)

router.post("/contact", postContact)

router.post("/add-emoji", addEmoji)

export default router