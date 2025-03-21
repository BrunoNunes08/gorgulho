import express from "express";
import cors from "cors";
import env from "./env/index.js";

import carRoutes from "./routes/car.js";
import residentRoutes from "./routes/resident.js";

const app = express();
const port = env.PORT ?? 3333;

app.use(express.json());
app.use(cors());

app.use("/moradores", residentRoutes);
app.use("/veiculos", carRoutes);

app.listen(port, () => console.log(`Server running ${port}`));