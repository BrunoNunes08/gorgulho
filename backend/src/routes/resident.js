import { Router } from "express";
import { deleteResidents, getResidents, postResidents, putResidents } from "../services/resident.js";

const residentRoutes = Router();

residentRoutes.get("/", getResidents);

residentRoutes.post("/", postResidents);

residentRoutes.put("/:id", putResidents);

residentRoutes.delete("/:id", deleteResidents);

export default residentRoutes;