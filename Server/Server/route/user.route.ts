import { Router } from "express";
import {
  Register,
  getAlluser,
  singleUser,
  Login,
} from "../controller/user.controller";

const router = Router();

router.route("/users").get(getAlluser);
router.route("/user/:id").get(singleUser);
router.route("/login").post(Login);
router.route("/register").post(Register);

export default router;
