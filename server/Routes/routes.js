import express from "express";
import {
  getUsers,
  addUser,
  getUserbyId,
  editUserbyId,
  deleteUser,
} from "../Controller/userController.js";

const route = express.Router();

route.get("/", getUsers);
route.post("/add", addUser);
route.get("/:id", getUserbyId);
route.put("/:id", editUserbyId);
route.delete("/:id", deleteUser);

export default route;
