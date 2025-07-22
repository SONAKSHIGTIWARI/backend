import express from "express";
import { home, enterChat, getHome } from "../controller/controller.js";

const router = express.Router();

router.get("/", home);
router.post("/enter-chat", enterChat);
router.get("/chatroom/:name", getHome);

export { router };
