document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-open');
    const navMenu = document.getElementById('nav-menu');

    /**
     * 1. Control del Menú Hamburguesa
     * Maneja la apertura y cierre del menú en dispositivos móviles.
     */
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    /**
     * 2. Navegación Inteligente
     * Cierra el menú automáticamente al hacer clic en una sección (ancla).
     */
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            
            const icon = menuBtn ? menuBtn.querySelector('i') : null;
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    /**
     * 3. Cierre por clic exterior
     * Si el usuario toca cualquier parte de la pantalla fuera del menú, este se cierra.
     */
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        }
    });

    /**
     * 4. Inyección del Botón de WhatsApp Flotante
     * Crea el botón dinámicamente para asegurar que aparezca en todas las páginas.
     */
    if (!document.querySelector('.whatsapp-float')) {
        const waBtn = document.createElement('a');
        waBtn.href = 'https://wa.me/5491124740812?text=Hola%20Romina,%20te%20consulto%20desde%20la%20web';
        waBtn.className = 'whatsapp-float';
        waBtn.target = '_blank';
        waBtn.rel = 'noopener noreferrer'; // Mejora de seguridad para enlaces externos
        waBtn.setAttribute('aria-label', 'Contactar por WhatsApp');
        waBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(waBtn);
    }
});
