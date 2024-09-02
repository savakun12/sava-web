let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.querySelectorAll('.my-skill-item').forEach(item => {
    item.addEventListener('click', function() {
        // Toggle kelas 'expanded'
        this.classList.toggle('expanded');
    });
});


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    },
  });

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  function sendMessage() {
    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let phoneNumber = document.getElementById('phoneNumber').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();
    
    if (!fullName || !email || !phoneNumber || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simple email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    let whatsappNumber = '6282314525726';
    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`
    )}`;
    
    window.open(url, '_blank');
    document.getElementById('contactForm').reset(); // Assuming form has an ID 'contactForm'
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-content, .home-img, .timeline-items, .heading1, .text, .social-icons, .btn-group,
    .timeline-item, .container1, .text, .container2, .heading,
     .input-group, .slider-wrapper, .card-list swiper-wrapper, .my-skill-item swiper-slide, .swiper-pagination, .swiper-slide-button swiper-button-prev, .swiper-slide-button swiper-button-next,
    .input-box, .input-group-2, .btn,
    .social, .list`, {
interval: 200
})