import { getMoradores, getVeiculos } from "./scripts/initListagem.js";
import { resize } from "./scripts/resize.js";
import { submitFormMorador, submitFormVeiculo } from "./scripts/submitForm.js";

const form = document.querySelector(".form");

switch (document.title) {
    case "Listagem":
        getMoradores();
        getVeiculos();
        window.addEventListener("resize", resize);
        resize();
        break;
    case "Cadastro de Morador":
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitFormMorador();
        });
        break;
    case "Cadastro de Veículo":
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitFormVeiculo();
        });
        break;
}