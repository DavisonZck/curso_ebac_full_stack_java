document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    var messageDiv = document.getElementById('message');

    if (campoB > campoA) {
        messageDiv.textContent = 'Perfeito, Campo B é maior que Campo A!';
        messageDiv.className = 'message positive';
    } else {
        messageDiv.textContent = 'Erro, Campo B deve ser maior que Campo A.';
        messageDiv.className = 'message negative';
    }
});