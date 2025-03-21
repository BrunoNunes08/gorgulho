import connection from "../lib/db.js";

export const getResidents = (_, res) => {
    const query = "SELECT * FROM moradores";

    connection.query(query, (err, results) => {
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
};

export const postResidents = (req, res) => {
    const params = [req.body.nome, req.body.bloco, req.body.apartamento, req.body.telefone, req.body.email, req.body.status];

    const query = "INSERT INTO moradores (nome, bloco, apartamento, telefone, email, status) VALUES (?, ?, ?, ?, ?, ?);";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao criar morador",
                data: err
            });
        }
        return res.status(201).json({
            success: true,
            message: "Morador criado com sucesso",
            data: results
        });
    });
};

export const putResidents = (req, res) => {
    const params = [req.body.nome, req.body.bloco, req.body.apartamento, req.body.telefone, req.body.email, req.body.status, req.params.id];

    const query = "UPDATE moradores SET nome = ?, bloco = ?, apartamento = ?, telefone = ?, email = ?, status = ? WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao alterar morador",
                data: err
            });
        }
        return res.status(200).json({
            success: true,
            message: "Morador alterado com sucesso",
            data: results
        });
    })
};

export const deleteResidents = (req, res) => {
    const params = [req.params.id];

    const query = "DELETE FROM moradores WHERE id = ?";

    connection.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Erro ao deletar morador",
                data: err
            });
        }
        return res.status(200).json({
            success: true,
            message: "Morador deletado com sucesso",
            data: res
        });
    });
}