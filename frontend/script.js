const getMoradores = async () => {
    const res = await fetch("http://localhost:3333/moradores");
    const results = await res.json();

    const table = document.querySelector(".moradores-tbody");
    for (let morador of results.data) {
        table.innerHTML += `
        <tr>
            <td>${morador.nome}</td>
            <td>${morador.bloco}</td>
            <td>${morador.apartamento}</td>
            <td>${morador.telefone}</td>
            <td>${morador.email}</td>
            <td>${morador.status}</td>
        </tr>
        `
    }
};

const getVeiculos = async () => {
    const res = await fetch("http://localhost:3333/veiculos");
    const results = await res.json();

    const table = document.querySelector(".veiculos-tbody");
    for (let veiculo of results.data) {
        table.innerHTML += `
        <tr>
            <td>${veiculo.placa}</td>
            <td>${veiculo.modelo}</td>
            <td>${veiculo.cor}</td>
            <td>${veiculo.dono}</td>
            <td>${veiculo.box}</td>
        </tr>
        `
    }
};

getMoradores();
getVeiculos();