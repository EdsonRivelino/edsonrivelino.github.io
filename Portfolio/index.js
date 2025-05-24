// Botão Voltar ao Topo
const btnTopo = document.createElement('button');
btnTopo.innerText = '↑';
btnTopo.id = 'btnTopo';
btnTopo.title = 'Voltar ao topo';
document.body.appendChild(btnTopo);

btnTopo.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
