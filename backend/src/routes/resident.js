import { Router } from "express";
import connection from "../lib/db.js";

const residentRoutes = Router();

residentRoutes.get("/", (_, res) => {
    const query = "SELECT * FROM moradores";

    connection(query, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao listar moradores",
                data: err
            });
        }
        return res.status(200).json({
            success: true,
            message: "Moradores listados com sucesso",
            data: results
        });
    });
});

residentRoutes.post("/", (req, res) => {

});

export default residentRoutes;