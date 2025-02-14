    document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const mensagemDiv = document.getElementById("mensagem");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        let errorMessage = "";
        
        if (!email.includes("@")) {
            errorMessage = "Por favor, insira um e-mail válido.";
        } else if (password.length < 6) {
            errorMessage = "A senha deve ter pelo menos 6 caracteres.";
        } else if (password !== confirmPassword) {
            errorMessage = "As senhas não coincidem.";
        }

        if (errorMessage) {
            mensagemDiv.textContent = errorMessage;
            mensagemDiv.className = "mensagem erro"; 
            mensagemDiv.style.display = "block";
        } else {
            mensagemDiv.textContent = "Cadastro efetuado com sucesso!";
            mensagemDiv.className = "mensagem sucesso"; 
            mensagemDiv.style.display = "block";
            form.reset(); 
        }
    });
});
