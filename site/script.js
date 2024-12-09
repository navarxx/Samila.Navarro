document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').innerText = "Obrigado pelo seu contato, " + name + "! Sua mensagem foi enviada com sucesso.";
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').innerText = "Por favor, preencha todos os campos.";
    }
});
