import connection from "../lib/db.js";

export const getCar = (_, res) => {
    const query = "SELECT * FROM veiculos";

    connection(query, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao listar veículos",
                data: err
            });
        }
        return res.status(200).json({
            success: true,
            message: "Veículos listados com sucesso",
            data: results
        });
    });
};

export const postCar = (req, res) => {
    const params = [req.body.placa, req.body.modelo, req.body.cor, req.body.morador_id, req.body.box];

    const query = "INSERT INTO veiculos (placa, modelo, cor, morador_id, box) VALUES (?, ?, ?, ?, ?);";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao criar veículo",
                data: err
            });
        }
        return res.status(201).json({
            success: true,
            message: "Veículo criado com sucesso",
            data: results
        });
    });
};

export const putCar = (req, res) => {
    const params = [req.body.placa, req.body.modelo, req.body.cor, req.body.morador_id, req.body.box, req.params.id];

    const query = "UPDATE veiculos SET placa = ?, modelo = ?, cor = ?, morador_id = ?, box = ? WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao editar veículo",
                data: err
            });
        }
        return res.status(200).json({
            success: true,
            message: "Veículo editado com sucesso",
            data: results
        });
    });
};

export const deleteCar = (req, res) => {
    const params = [req.params.id];

    const query = "DELETE FROM veiculos WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao deletar veículo",
                data: err
            });
        }
        return res.status(200).json({
            success: true,
            message: "Veículo deletado com sucesso",
            data: results
        });
    });
};