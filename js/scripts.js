const input = document.querySelector("#input");

const counter = document.querySelector(".counter");

const toggleButton = document.querySelector("#toggle");

let mode = "caracteres";

toggleButton.addEventListener("click", () => {
    if(mode === "caracteres"){
        mode = "palavras";

        toggleButton.textContent = "Contar caracteres";
    }
    else{
        mode = "caracteres";

        toggleButton.textContent = "Contar palavras";
    }
    
    input.dispatchEvent(new Event("input" ) )

});

input.addEventListener("input", () => {
    let count = 0;

    if(mode==="caracteres"){
        count = input.value.length;
        
        counter.textContent = `${count} caractere(s)`;
    }
    else{
        const words = input.value.trim().split(/\s+/);

        count = input.value.trim() === "" ? 0 : words.length;
        
        counter.textContent = `${count} palavras`;

    }
});