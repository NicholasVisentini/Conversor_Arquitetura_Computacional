function converter() {
    const decimal = Number(document.getElementById("demo1").value);

    if (isNaN(decimal)) {
        alert("Digite um número válido!");
        return;
    }

    document.getElementById("demo2").innerText = decimal.toString(8);
    document.getElementById("demo3").innerText = decimal.toString(16).toUpperCase();
    document.getElementById("demo4").innerText = decimal.toString(2);
}

const selectTema = document.querySelector(".select_temas");
selectTema.addEventListener("change", function() {
    document.body.className = ""; // limpa classes
    switch(this.value) {
        case "matrix": document.body.classList.add("tema-matrix"); break;
        case "claro": document.body.classList.add("tema-claro"); break;
        case "escuro": document.body.classList.add("tema-escuro"); break;
    }
});