const menuToggle = document.querySelector ('.menu-toggle');
const menu = document.querySelector ('.menu');

menuToggle.addEventListener ('click', () => {
  menu.classList.toggle ('active');
  
});

// Formulário agendamento via WhatsApp
document.getElementById("form-agendamento").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const telefone = document.getElementById("telefone").value;

  const mensagem = `Olá, quero agendar um horário na Dom Disfarçe!
Nome: ${nome}
Data: ${data}
Hora: ${hora}
Telefone: ${telefone}`;

  const numero = "5531996843824"; 
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
});