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

// WhatsApp integration
function openWhatsApp() {
    const phoneNumber = '5511922048764';
    const message = encodeURIComponent('Olá! Gostaria de fazer um agendamento na Beauty Nails.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    }
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
    const animatedElements = document.querySelectorAll('.service-item, .gallery-grid img');
    
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
        const overlay = this.querySelector('.service-overlay');
        if (overlay) {
            overlay.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const overlay = this.querySelector('.service-overlay');
        if (overlay) {
            overlay.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%)';
        }
    });
});

// Booking button hover effect
document.querySelector('.booking-btn')?.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
});

document.querySelector('.booking-btn')?.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
});

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
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
    
    images.forEach(img => {
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
            this.style.transform = 'scale(0.98)';
        });
        
        item.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
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

// Performance optimization - debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(function() {
    // Scroll-based animations can be added here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Add loading state for booking button
document.querySelector('.booking-btn')?.addEventListener('click', function() {
    this.style.opacity = '0.7';
    this.style.cursor = 'not-allowed';
    this.textContent = 'Abrangendo...';
    
    setTimeout(() => {
        openWhatsApp();
        this.style.opacity = '1';
        this.style.cursor = 'pointer';
        this.textContent = 'AGENDAR HORÁRIO';
    }, 1000);
});

// Clean URLs for social media
document.querySelectorAll('.footer-social a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href.includes('instagram.com')) {
            e.preventDefault();
            window.open('https://instagram.com/beautynailssp', '_blank');
        } else if (this.href.includes('wa.me')) {
            e.preventDefault();
            openWhatsApp();
        }
    });
});

// Booking Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const dateOptions = document.querySelectorAll('[data-date]');
    const periodOptions = document.querySelectorAll('[data-period]');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    let selectedServices = [];
    let selectedDate = '';
    let selectedPeriod = '';
    
    // Service selection
    serviceCards.forEach(card => {
        const checkbox = card.querySelector('input[type="checkbox"]');
        
        card.addEventListener('click', function(e) {
            if (e.target.type !== 'checkbox') {
                checkbox.checked = !checkbox.checked;
            }
            updateServiceSelection(card, checkbox);
        });
        
        checkbox.addEventListener('change', function() {
            updateServiceSelection(card, checkbox);
        });
    });
    
    function updateServiceSelection(card, checkbox) {
        const serviceName = card.dataset.service;
        const price = parseFloat(card.dataset.price);
        
        if (checkbox.checked) {
            card.classList.add('selected');
            selectedServices.push({ name: serviceName, price: price });
        } else {
            card.classList.remove('selected');
            selectedServices = selectedServices.filter(s => s.name !== serviceName);
        }
        
        updateBookingSummary();
        updateWhatsAppButton();
    }
    
    // Date selection
    dateOptions.forEach(option => {
        option.addEventListener('click', function() {
            dateOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedDate = this.dataset.date;
            updateBookingSummary();
            updateWhatsAppButton();
        });
    });
    
    // Period selection
    periodOptions.forEach(option => {
        option.addEventListener('click', function() {
            periodOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedPeriod = this.dataset.period;
            updateBookingSummary();
            updateWhatsAppButton();
        });
    });
    
    // Update booking summary
    function updateBookingSummary() {
        const servicesList = document.getElementById('selectedServicesList');
        const dateDisplay = document.getElementById('selectedDateDisplay');
        const periodDisplay = document.getElementById('selectedPeriodDisplay');
        const totalValue = document.getElementById('totalValue');
        
        // Update services list
        if (selectedServices.length > 0) {
            servicesList.innerHTML = selectedServices.map(service => 
                `<div class="service-item">${service.name}</div>`
            ).join('');
        } else {
            servicesList.innerHTML = '<p class="empty-message">Nenhum serviço selecionado</p>';
        }
        
        // Update date and period
        dateDisplay.textContent = selectedDate || '-';
        periodDisplay.textContent = selectedPeriod || '-';
        
        // Calculate and update total
        const total = selectedServices.reduce((sum, service) => sum + service.price, 0);
        totalValue.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        
        // Add pulse animation
        totalValue.classList.remove('updated');
        void totalValue.offsetWidth; // Trigger reflow
        totalValue.classList.add('updated');
    }
    
    // Update WhatsApp button state
    function updateWhatsAppButton() {
        const hasServices = selectedServices.length > 0;
        const hasDate = selectedDate !== '';
        const hasPeriod = selectedPeriod !== '';
        
        if (hasServices && hasDate && hasPeriod) {
            whatsappBtn.disabled = false;
        } else {
            whatsappBtn.disabled = true;
        }
    }
    
    // WhatsApp button click
    whatsappBtn.addEventListener('click', function() {
        if (!this.disabled) {
            sendBookingToWhatsApp();
        }
    });
    
    function sendBookingToWhatsApp() {
        const phoneNumber = '5511922048764';
        
        // Build services string
        const servicesText = selectedServices.map(s => s.name).join(' + ');
        
        // Calculate total
        const total = selectedServices.reduce((sum, service) => sum + service.price, 0);
        const totalText = `R$ ${total.toFixed(2).replace('.', ',')}`;
        
        // Build message
        const message = `Olá, gostaria de agendar:

Serviços: ${servicesText}
Data: ${selectedDate.toLowerCase()}
Período: ${selectedPeriod.toLowerCase()}
Total: ${totalText}`;
        
        // Open WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
});
