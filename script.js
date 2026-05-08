// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// WhatsApp flotante (opcional)
const whatsappFloat = document.createElement('a');
whatsappFloat.href = 'https://wa.me/5491124740812';
whatsappFloat.className = 'whatsapp-float';
whatsappFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
whatsappFloat.target = '_blank';
document.body.appendChild(whatsappFloat);