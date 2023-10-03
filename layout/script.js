// Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
    const body = document.body;
    const square = document.getElementById("square");
    const button = document.getElementById("darkModeButton");
    
    // Verifica se o corpo possui a classe "dark-mode"
    const isDarkMode = body.classList.contains("dark-mode");
    
    // Altera o modo com base na verificação
    if (isDarkMode) {
        // Mudar para o modo claro
        body.classList.remove("dark-mode");
        square.style.backgroundColor = "white";
        button.textContent = "Dark Mode";
    } else {
        // Mudar para o modo escuro
        body.classList.add("dark-mode");
        square.style.backgroundColor = "#333";
        button.textContent = "Light Mode";
    }
}

// Chama a função quando o botão é clicado
document.getElementById("darkModeButton").addEventListener("click", toggleDarkMode);
