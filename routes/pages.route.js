import express from 'express'
import path from 'path'
import UserController from "../controllers/user.controller.js";

const router = express.Router()

router.route("/").get(UserController.getAllUsers);

router.route("/login").get((req, res) => {
    res.sendFile(path.resolve() + "/login.html");
});

export default router