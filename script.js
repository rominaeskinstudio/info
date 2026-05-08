document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-open');
    const navMenu = document.getElementById('nav-menu');

    // 1. Abrir / Cerrar Menú
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita conflictos con el clic en el body
            navMenu.classList.toggle('active');
            
            // Animación del icono
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 2. Cerrar al elegir una opción (importante para navegación interna)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            if(icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    // 3. Cerrar si se hace clic fuera del menú
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    });

    // 4. Crear Botón Flotante de WhatsApp
    if (!document.querySelector('.whatsapp-float')) {
        const waBtn = document.createElement('a');
        waBtn.href = 'https://wa.me/5491124740812?text=Hola%20Romina,%20quiero%20reservar%20un%20turno';
        waBtn.className = 'whatsapp-float';
        waBtn.target = '_blank';
        waBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(waBtn);
    }
});
