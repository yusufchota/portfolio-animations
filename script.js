
// Fill year
document.getElementById('year').textContent = new Date().getFullYear();
// name change components
document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed(".typed", {
    strings: document.querySelector(".typed").getAttribute("data-typed-items").split(","),
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
    });
});
// Create animated background particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = Math.random() * 100 + 50 + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
    particlesContainer.appendChild(particle);
}

// Parallax effect for hero text
document.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax-text');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    parallaxElements.forEach((el, index) => {
    const speed = (index + 1) * 0.5;
    el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// Smooth reveal on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
    navbar.classList.add('scrolled');
    } else {
    navbar.classList.remove('scrolled');
    }

    // Highlight active nav link on scroll
    let fromTop = window.scrollY + 190;
    document.querySelectorAll('.nav-link').forEach(link => {
    let section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop) {
        document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
        link.classList.add('active');
    }
    });

    lastScroll = currentScroll;
});

// Cursor trail effect (optional - subtle effect)
let cursorTrail = [];
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 5px;
        height: 5px;
        background: var(--accent);
        border-radius: 50%;
        pointer-events: none;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        opacity: 0.5;
        z-index: 9999;
        transition: opacity 0.5s;
    `;
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => trail.remove(), 500);
    }, 100);
    }
});

// Contact To Mail

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:yusufchota7@gmail.com?body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

    window.location.href = mailtoLink;

    const btn = this.querySelector('.btn-send');
    const originalText = btn.textContent;
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#10b981';
    setTimeout(()=>{
    alert('Message send Successfully')
    },500)
    
    setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    this.reset();
    }, 2000);
});

// name animations

const text = "Mohammed Yusuf";
let i = 0;
function type() {
    document.getElementById("text").textContent += text.charAt(i);
    i++;
    if (i < text.length) {
        setTimeout(type, 100); // typing speed
    }
}
window.onload = type;
