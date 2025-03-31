export const submitFormMorador = async () => {
    const form = document.querySelector(".form");
    const formData = new FormData(form);

    const nome = formData.get("nome");
    const bloco = formData.get("bloco");
    const apartamento = formData.get("apartamento");
    const telefone = formData.get("telefone");
    const email = formData.get("email");
    const status = formData.get("status");

    const data = { nome, bloco, apartamento, telefone, email, status };

    const res = await fetch("http://localhost:3333/moradores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const results = await res.json();

    if (!results.success) {
        console.log(results.data);
        alert(results.message);
        return;
    }

    location.pathname = "frontend/pages/listagem.html";
};

export const submitFormVeiculo = async () => {
    const form = document.querySelector(".form");
    const formData = new FormData(form);

    const placa = formData.get("placa");
    const modelo = formData.get("modelo");
    const cor = formData.get("cor");
    const morador_id = formData.get("morador_id");
    const box = formData.get("box");

    const data = { placa, modelo, cor, morador_id, box };

    const res = await fetch("http://localhost:3333/veiculos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const results = await res.json();

    if (!results.success) {
        console.log(results.data);
        alert(results.message);
        return;
    }

    location.pathname = "frontend/pages/listagem.html";
};