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
            header.style.boxShadow = '0 4px 20px rgba(255, 105, 180, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Booking button functionality
document.querySelector('.booking-btn')?.addEventListener('click', function() {
    // Simulate booking system integration
    const phoneNumber = '5511922048764';
    const message = encodeURIComponent('Olá! Gostaria de fazer um agendamento na Beauty Nails.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});

// WhatsApp link functionality
document.querySelector('.contact-info a[href*="wa.me"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    const phoneNumber = '5511922048764';
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da Beauty Nails.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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
                window.open('https://instagram.com/beautynailssp', '_blank');
            } else if (platform.includes('facebook')) {
                window.open('https://facebook.com/beautynailssp', '_blank');
            } else if (platform.includes('youtube')) {
                window.open('https://youtube.com/@beautynailssp', '_blank');
            } else if (platform.includes('whatsapp')) {
                window.open('https://wa.me/5511987654321', '_blank');
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
    const animatedElements = document.querySelectorAll('.service-item, .about-text, .gallery-grid img');
    
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
        this.style.transform = 'translateY(-20px) scale(1.03)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Gallery items hover effect
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1.05)';
    });
});

// Booking button loading state
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
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
                // Open WhatsApp
                const phoneNumber = '5511922048764';
                const message = encodeURIComponent('Olá! Gostaria de fazer um agendamento na Beauty Nails.');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }, 1500);
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.6;
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

// Gallery lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    
    const galleryObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.onload = function() {
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = '1';
                };
                galleryObserver.unobserve(img);
            }
        });
    });
    
    galleryImages.forEach(img => {
        galleryObserver.observe(img);
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
            this.style.transform = 'translateY(-15px)';
        });
        
        item.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 300);
        });
    });
    
    document.querySelectorAll('.gallery-grid img').forEach(img => {
        img.addEventListener('touchstart', function() {
            this.style.transform = 'scale(1.08)';
        });
        
        img.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 300);
        });
    });
}

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

// Add smooth reveal animation for about section
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.3 });
        
        aboutObserver.observe(aboutSection);
    }
});

// Add glow effect to booking button on hover
document.addEventListener('DOMContentLoaded', function() {
    const bookingBtn = document.querySelector('.booking-btn');
    if (bookingBtn) {
        bookingBtn.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.5)';
        });
        
        bookingBtn.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.3)';
        });
    }
});

// Add particle effect to hero section (optional enhancement)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.backgroundColor = '#FFD700';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.opacity = Math.random() * 0.5 + 0.5;
    
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.appendChild(particle);
        
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        
        const duration = Math.random() * 3000 + 2000;
        const endY = startY - 200;
        
        particle.animate([
            { transform: `translate(0, 0)`, opacity: 0 },
            { transform: `translate(0, -20px)`, opacity: 1 },
            { transform: `translate(0, -100px)`, opacity: 0.5 },
            { transform: `translate(0, -200px)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
}

// Create particles periodically
if (window.innerWidth > 768) {
    setInterval(createParticle, 500);
}
