import { Router } from "express";
import { deleteCar, getCar, postCar, putCar } from "../services/car.js";

const carRoutes = Router();

carRoutes.get("/", getCar);

carRoutes.post("/", postCar);

carRoutes.put("/:id", putCar);

carRoutes.delete("/:id", deleteCar);

export default carRoutes;