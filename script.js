// Efeito de mudar o fundo do header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#ffffff';
        header.style.padding = '0.5rem 5%';
    } else {
        header.style.padding = '1rem 5%';
    }
});

// Menu Mobile (Toggle simples)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Aqui você pode adicionar lógica para abrir/fechar o menu em telas pequenas
    alert('Funcionalidade de menu lateral para dispositivos móveis.');
});

// Log de carregamento
console.log("Agro Forte: Site carregado com sucesso!");
