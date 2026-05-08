// Manejo del Menú Móvil
const menuBtn = document.getElementById('menu-open');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Cambia el icono de barras a una X al abrir
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.querySelector('.mobile-menu-btn i').classList.add('fa-bars');
        document.querySelector('.mobile-menu-btn i').classList.remove('fa-times');
    });
});

// Scroll suave (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Crear botón flotante de WhatsApp dinámicamente
function createWhatsAppFloat() {
    const waLink = "https://wa.me/5491124740812?text=Hola%20Romina,%20quiero%20consultar%20por%20un%20turno";
    const btn = document.createElement('a');
    btn.href = waLink;
    btn.className = 'whatsapp-float';
    btn.target = '_blank';
    btn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(btn);
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    createWhatsAppFloat();
});
