/**
 * ELLO - JAVASCRIPT PRINCIPAL
 * Funcionalidades gerais do site
 */

/**
 * MENU MOBILE
 * Controla abertura/fechamento do menu em dispositivos móveis
 */
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    const menuLinks = document.querySelectorAll('.nav-menu a');
    
    if (!toggle || !menu) return;
    
    // Toggle do menu
    toggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
        
        // Anima as barras do hambúrguer
        const spans = toggle.querySelectorAll('span');
        if (menu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
    
    // Fecha o menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            
            const spans = toggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        });
    });
}

/**
 * SCROLL SUAVE
 * Implementa scroll suave para âncoras
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignora âncoras vazias ou apenas "#"
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerOffset = 70; // Altura do header fixo
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * NAVBAR SCROLL EFFECT
 * Adiciona efeito ao navbar quando scrollar
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * INTERSECTION OBSERVER
 * Anima elementos quando aparecem na tela
 */
function initScrollAnimations() {
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
    
    // Elementos a serem animados
    const animatedElements = document.querySelectorAll(`
        .value-card,
        .product-card,
        .detail-card,
        .packaging-card,
        .contact-card
    `);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * LAZY LOADING DE IMAGENS
 * Carrega imagens quando necessário - DESABILITADO
 */
function initLazyLoading() {
    // Lazy loading desabilitado para evitar problemas de carregamento
    // As imagens são carregadas normalmente com fallback para branco
    return;
}

/**
 * ACTIVE MENU HIGHLIGHT
 * Destaca item do menu baseado na seção visível
 */
function initActiveMenuHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    if (sections.length === 0 || menuLinks.length === 0) return;
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -66%'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active de todos
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Adiciona active no link correspondente
                const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

/**
 * FORMULÁRIO DE CONTATO (para implementação futura)
 * Validação e envio do formulário
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar lógica de envio
        // Por enquanto, apenas mostra uma mensagem
        alert('Obrigado pelo contato! Responderemos em breve.');
        form.reset();
    });
}

/**
 * LOADING STATE
 * Mostra estado de carregamento inicial
 */
function initLoadingState() {
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
}

/**
 * SCROLL TO TOP BUTTON (opcional)
 * Botão para voltar ao topo da página
 */
function initScrollToTop() {
    // Criar botão se não existir
    let scrollBtn = document.getElementById('scroll-to-top');
    
    if (!scrollBtn) {
        scrollBtn = document.createElement('button');
        scrollBtn.id = 'scroll-to-top';
        scrollBtn.innerHTML = '↑';
        scrollBtn.setAttribute('aria-label', 'Voltar ao topo');
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: var(--color-secondary);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            font-size: 1.5rem;
        `;
        document.body.appendChild(scrollBtn);
    }
    
    // Mostrar/esconder baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll ao clicar
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * PREVENÇÃO DE ZOOM EM INPUTS (Mobile)
 * Previne zoom automático em inputs no iOS
 */
function preventInputZoom() {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            if (input.style.fontSize < '16px') {
                input.style.fontSize = '16px';
            }
        });
    }
}

/**
 * ANALYTICS (para implementação futura)
 * Tracking de eventos
 */
function trackEvent(category, action, label) {
    // Implementar Google Analytics ou similar
    console.log('Event tracked:', category, action, label);
}

/**
 * INICIALIZAÇÃO PRINCIPAL
 * Executa todas as funções de inicialização
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🕯️ ELLO Website Initialized');
    
    // Inicializa funcionalidades
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initScrollAnimations();
    initLazyLoading();
    initActiveMenuHighlight();
    initContactForm();
    initScrollToTop();
    initEmailForm();
    preventInputZoom();
    
    // Renderiza produtos
    renderProducts();
    
    // Log de produtos carregados
    console.log(`${products.length} produtos carregados`);
});

/**
 * RESIZE HANDLER
 * Otimizado com debounce
 */
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        console.log('Window resized');
        // Adicione ações necessárias no resize aqui
    }, 250);
});

/**
 * EMAIL FORM HANDLER
 * Gerencia envio do formulário de email
 */
function initEmailForm() {
    const form = document.getElementById('email-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        
        // Construir mailto link com template de email
        const subject = encodeURIComponent('Contato ELLO - Novo Pedido');
        const body = encodeURIComponent(`De: ${email}\n\nMensagem:\n${message}`);
        const mailtoLink = `mailto:r.aragaorebello@gmail.com?subject=${subject}&body=${body}`;
        
        // Abrir cliente de email padrão
        window.location.href = mailtoLink;
        
        // Mostrar feedback
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Email aberto!';
        button.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            form.reset();
        }, 2000);
    });
}

/**
 * ERROR HANDLING
 * Captura erros globais
 */
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

/**
 * PERFORMANCE MONITORING
 * Monitora performance da página
 */
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page load time: ${pageLoadTime}ms`);
        }, 0);
    });
}