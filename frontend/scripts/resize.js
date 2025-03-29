export const resize = () => {
    if (window.innerWidth < 1000) {
        document.querySelector(".div-table").style.overflowX = "auto";
        return;
    }
    document.querySelector(".div-table").style.overflowX = "visible";
}