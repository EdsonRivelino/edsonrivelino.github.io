// Alerta de boas-vindas
window.addEventListener('load', () => {
    alert('Bem-vindo ao currículo de Edson Rivelino!');
});

// Destaque do menu ao clicar
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Botão Voltar ao Topo
const btnTopo = document.getElementById('btnTopo');

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
