import express from "express";
import cors from "cors";
import env from "./env/index.js";

const app = express();
const port = env.PORT ?? 3333;

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`Server running ${port}`));