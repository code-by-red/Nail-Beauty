// Dados dos serviços
const services = {
    alongamento: {
        name: 'Alongamento em Gel',
        price: 120,
        description: 'Unhas alongadas com técnica premium em gel'
    },
    manutencao: {
        name: 'Manutenção',
        price: 80,
        description: 'Manutenção semanal do alongamento'
    },
    esmaltacao: {
        name: 'Esmaltação em Gel',
        price: 60,
        description: 'Esmaltação duradoura nas unhas naturais'
    },
    nailart: {
        name: 'Nail Art',
        price: 40,
        description: 'Arte personalizada e detalhes exclusivos'
    },
    podologia: {
        name: 'Podologia',
        price: 70,
        description: 'Tratamento especializado para os pés'
    },
    spa: {
        name: 'Spa das Mãos',
        price: 50,
        description: 'Hidratação e tratamento premium'
    }
};

// WhatsApp number
const whatsappNumber = '5511922048764';

// Função para rolar suavemente até a seção de serviços
function scrollToServices() {
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
}

// Função para atualizar o resumo dos serviços selecionados
function updateSummary() {
    const selectedServicesDiv = document.getElementById('selectedServices');
    const totalPriceDiv = document.getElementById('totalPrice');
    const whatsappButton = document.getElementById('whatsappButton');
    
    // Obter todos os checkboxes marcados
    const selectedCheckboxes = document.querySelectorAll('.service-checkbox:checked');
    
    if (selectedCheckboxes.length === 0) {
        // Nenhum serviço selecionado
        selectedServicesDiv.innerHTML = '<p class="empty-message">Nenhum serviço selecionado</p>';
        totalPriceDiv.style.display = 'none';
        whatsappButton.disabled = true;
        return;
    }
    
    // Construir o HTML dos serviços selecionados
    let servicesHTML = '';
    let totalPrice = 0;
    
    selectedCheckboxes.forEach(checkbox => {
        const serviceId = checkbox.id;
        const service = services[serviceId];
        
        servicesHTML += `
            <div class="service-item">
                <span class="service-item-name">${service.name}</span>
                <span class="service-item-price">R$ ${service.price}</span>
            </div>
        `;
        
        totalPrice += service.price;
    });
    
    // Atualizar o conteúdo
    selectedServicesDiv.innerHTML = servicesHTML;
    
    // Atualizar o preço total
    const priceValue = totalPriceDiv.querySelector('.price-value');
    priceValue.textContent = `R$ ${totalPrice}`;
    totalPriceDiv.style.display = 'block';
    
    // Habilitar o botão do WhatsApp
    whatsappButton.disabled = false;
    
    // Adicionar animação suave aos novos itens
    const serviceItems = selectedServicesDiv.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Função para enviar mensagem via WhatsApp
function sendToWhatsApp() {
    const selectedCheckboxes = document.querySelectorAll('.service-checkbox:checked');
    
    if (selectedCheckboxes.length === 0) {
        alert('Por favor, selecione pelo menos um serviço.');
        return;
    }
    
    // Construir a lista de serviços
    let servicesList = [];
    let totalPrice = 0;
    
    selectedCheckboxes.forEach(checkbox => {
        const serviceId = checkbox.id;
        const service = services[serviceId];
        servicesList.push(`${service.name} (R$ ${service.price})`);
        totalPrice += service.price;
    });
    
    // Construir a mensagem
    const message = `Olá, gostaria de agendar os seguintes serviços:\n\n${servicesList.join('\n')}\n\nTotal: R$ ${totalPrice}\n\nPodemos combinar um horário?`;
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construir a URL do WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abrir em nova aba
    window.open(whatsappURL, '_blank');
}

// Função para adicionar efeitos visuais quando o usuário rola a página
function handleScroll() {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    
    // Efeito de parallax sutil no hero
    if (hero) {
        hero.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Adicionar efeitos de hover nos cards de serviço
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Adicionar animação de entrada para os elementos quando visíveis
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
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.service-card, .summary-card, .whatsapp-button');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Inicializar o resumo
    updateSummary();
    
    // Adicionar efeito de clique no botão CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Adicionar efeito de ripple
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.width = '10px';
            ripple.style.height = '10px';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }
    
    // Adicionar efeito de clique no botão WhatsApp
    const whatsappButton = document.getElementById('whatsappButton');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            if (!this.disabled) {
                // Adicionar efeito de pulse
                this.style.animation = 'pulse 0.4s ease-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 400);
            }
        });
    }
});

// Adicionar CSS para animação de ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            margin-left: -100px;
            margin-top: -100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Função para detectar se é dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustes para dispositivos móveis
if (isMobile()) {
    // Reduzir a intensidade de animações em dispositivos móveis para melhor performance
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
}

// Adicionar suporte a teclado para acessibilidade
document.addEventListener('keydown', function(e) {
    // Tecla Enter para ativar botões
    if (e.key === 'Enter') {
        if (document.activeElement.classList.contains('cta-button')) {
            scrollToServices();
        }
        if (document.activeElement.id === 'whatsappButton' && !document.activeElement.disabled) {
            sendToWhatsApp();
        }
    }
    
    // Tecla Escape para limpar seleção
    if (e.key === 'Escape') {
        const checkboxes = document.querySelectorAll('.service-checkbox:checked');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        updateSummary();
    }
});

// Função para compartilhar (se necessário no futuro)
function shareContent() {
    if (navigator.share) {
        navigator.share({
            title: 'Nail Designer - Luxo e Elegância',
            text: 'Conheça nossos serviços premium de nail designer',
            url: window.location.href
        }).catch(err => console.log('Erro ao compartilhar:', err));
    }
}

// Adicionar feedback visual para seleção de serviços
document.querySelectorAll('.service-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.nextElementSibling;
        const icon = label.querySelector('.service-icon');
        
        if (this.checked) {
            // Adicionar efeito de seleção
            label.style.transform = 'scale(0.98)';
            setTimeout(() => {
                label.style.transform = 'scale(1)';
            }, 200);
        }
    });
});

// Otimização de performance - debounce para scroll events
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

// Aplicar debounce no evento de scroll
window.addEventListener('scroll', debounce(handleScroll, 10));
