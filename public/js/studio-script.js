// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Booking button functionality
document.querySelector('.booking-btn')?.addEventListener('click', function() {
    // Replace with actual booking system URL
    window.open('https://booksy.com/pt-br/studioanabarrosbeautyacademy', '_blank');
});

// WhatsApp link functionality
document.querySelector('.contact-info a[href*="wa.me"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    const phoneNumber = this.textContent.replace(/[^\d]/g, '');
    const message = encodeURIComponent('Olá! Gostaria de fazer um agendamento no Studio Ana Barros Beauty Academy.');
    window.open(`https://wa.me/55${phoneNumber}?text=${message}`, '_blank');
});

// Instagram link functionality
document.querySelector('.contact-info a[href*="instagram"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(this.href, '_blank');
});

// Social media links in footer and top bar
document.querySelectorAll('.social-links a, .footer-social a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href.includes('#')) {
            e.preventDefault();
            // Replace with actual social media URLs
            const platform = this.querySelector('i').className;
            
            if (platform.includes('instagram')) {
                window.open('https://instagram.com/studioanabarrosbeautyacademy', '_blank');
            } else if (platform.includes('facebook')) {
                window.open('https://facebook.com/studioanabarrosbeautyacademy', '_blank');
            } else if (platform.includes('youtube')) {
                window.open('https://youtube.com/@studioanabarrosbeautyacademy', '_blank');
            } else if (platform.includes('google')) {
                window.open('https://g.page/studioanabarrosbeautyacademy', '_blank');
            }
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-item, .about-text, .booking-section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Service items hover effect
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Form validation (if contact form is added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Phone number formatting
function formatPhoneNumber(input) {
    const value = input.value.replace(/\D/g, '');
    const formattedValue = value.length === 11 
        ? `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
        : value.length === 10 
        ? `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`
        : value;
    
    input.value = formattedValue;
}

// Loading state for buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
    } else {
        button.disabled = false;
        button.innerHTML = button.getAttribute('data-original-text') || 'AGENDAR HORÁRIO';
    }
}

// Initialize booking button loading state
document.addEventListener('DOMContentLoaded', function() {
    const bookingBtn = document.querySelector('.booking-btn');
    if (bookingBtn) {
        bookingBtn.setAttribute('data-original-text', bookingBtn.innerHTML);
        
        bookingBtn.addEventListener('click', function() {
            setButtonLoading(this, true);
            
            // Simulate loading
            setTimeout(() => {
                setButtonLoading(this, false);
                // Open booking system
                window.open('https://booksy.com/pt-br/studioanabarrosbeautyacademy', '_blank');
            }, 1000);
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// Service items lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const serviceImages = document.querySelectorAll('.service-item img');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.onload = function() {
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = '1';
                };
                imageObserver.unobserve(img);
            }
        });
    });
    
    serviceImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const mobileNav = document.querySelector('.main-nav.active');
        if (mobileNav) {
            mobileNav.classList.remove('active');
            const icon = document.querySelector('.mobile-menu-toggle i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});

// Touch device detection
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Adjust hover effects for touch devices
if (isTouchDevice()) {
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 300);
        });
    });
}
