document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-open');
    const navMenu = document.getElementById('nav-menu');

    // 1. Control del Menú Hamburguesa
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 2. Cerrar menú al hacer clic en un enlace de navegación
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

    // 3. Cerrar menú si se hace clic fuera del mismo
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if(icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        }
    });

    // 4. Crear Botón de WhatsApp Flotante si no existe
    if (!document.querySelector('.whatsapp-float')) {
        const waBtn = document.createElement('a');
        waBtn.href = 'https://wa.me/5491124740812?text=Hola%20Romina,%20te%20escribo%20desde%20la%20web';
        waBtn.className = 'whatsapp-float';
        waBtn.target = '_blank';
        waBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(waBtn);
    }
});
