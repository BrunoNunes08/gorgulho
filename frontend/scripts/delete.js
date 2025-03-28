export const deleteMorador = async (id) => {
    const willBeDeleted = confirm("Você quer deletar o item?");
    if (!willBeDeleted) {
        return;
    }
    const res = await fetch("http://localhost:3333/moradores/" + id, {
        method: "DELETE",
    });
    const results = await res.json();

    if (!results.success) {
        console.log(results.data);
        alert("Erro ao deletar");
        return;
    }

    alert("Elemento deletado");
    location.reload();
};

export const deleteVeiculo = async (id) => {
    const willBeDeleted = confirm("Você quer deletar o item?");
    if (!willBeDeleted) {
        return;
    }
    const res = await fetch("http://localhost:3333/veiculos/" + id, {
        method: "DELETE",
    });
    const results = await res.json();
    
    if (!results.success) {
        console.log(results.data);
        alert("Erro ao deletar");
        return;
    }
    
    alert("Elemento deletado");
    location.reload();
};