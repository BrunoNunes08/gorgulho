import { deleteMorador, deleteVeiculo } from "./delete.js";
import { editMorador, editVeiculo } from "./edit.js";

export const getMoradores = async () => {
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
            <td>
                <button class="edit-button" data-id="${morador.id}">Editar</button>
                <button class="delete-button" data-id="${morador.id}">Excluir</button>
            </td>
        </tr>
        `
    }
    const editButtons = document.querySelectorAll(".edit-button");
    const deleteButtons = document.querySelectorAll(".delete-button");
    editButtons.forEach(button => button.addEventListener("click", () => editMorador(button.dataset.id)))
    deleteButtons.forEach(button => button.addEventListener("click", () => deleteMorador(button.dataset.id)))
};

export const getVeiculos = async () => {
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
            <td>
                <button class="edit-button" data-id="${veiculo.id}">Editar</button>
                <button class="delete-button" data-id=${veiculo.id}>Excluir</button>
            </td>
        </tr>
        `
    }

    const editButtons = document.querySelectorAll(".edit-button");
    const deleteButtons = document.querySelectorAll(".delete-button");
    editButtons.forEach(button => button.addEventListener("click", () => editVeiculo(button.dataset.id)));
    deleteButtons.forEach(button => button.addEventListener("click", () => deleteVeiculo(button.dataset.id)));
};