export const editMorador = async (id) => {
    const nome = prompt("Digite o novo nome: ");
    const bloco = prompt("Digite o novo bloco: ");
    const apartamento = prompt("Digite o novo apartamento: ");
    const telefone = prompt("Digite o novo telefone: ");
    const email = prompt("Digite o novo email: ");

    const res = await fetch("http://localhost:3333/moradores/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, bloco, apartamento, telefone, email })
    });
    const results = await res.json();

    if (!results.success) {
        console.log(results.data);
        alert("Erro ao editar usuário");
        return;
    }

    location.reload();
};

export const editVeiculo = async (id) => {
    const placa = prompt("Digite a nova placa: ");
    const modelo = prompt("Digite o novo modelo: ");
    const cor = prompt("Digite a nova cor: ");
    const morador_id = prompt("Digite o ID do novo dono: ");
    const box = prompt("Digite a nova vaga: ");

    const res = await fetch("http://localhost:3333/veiculos/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ placa, modelo, cor, morador_id, box })
    });
    const results = await res.json();
    
    if (!results.success) {
        console.log(results.data);
        alert("Erro ao editar veículo");
        return;
    }

    location.reload();
};