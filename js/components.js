/**
 * ELLO - COMPONENTES REUTILIZÁVEIS
 * Funções para renderizar componentes do site
 */

/**
 * COMPONENTE: Product Card
 * Renderiza um card de produto na grade
 * @param {Object} product - Objeto do produto
 * @returns {string} HTML do card
 */
function createProductCard(product) {
    const priceDisplay = productConfig.showPrices 
        ? `<span class="product-price">${productConfig.currency} ${product.price.toFixed(2)}</span>`
        : '';
    
    const availabilityClass = product.available ? '' : 'product-unavailable';
    const availabilityText = product.available ? 'Ver Detalhes' : 'Indisponível';
    
    return `
        <div class="product-card ${availabilityClass}" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image || ''}" 
                     alt="${product.name}" 
                     onload="this.style.display='block'"
                     onerror="this.style.display='none'"
                     style="display:none;">
                <div class="product-number">${product.number}</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.shortDescription}</p>
                <div class="product-footer">
                    ${priceDisplay}
                    <span class="product-link">${availabilityText}</span>
                </div>
            </div>
        </div>
    `;
}

/**
 * COMPONENTE: Product Modal
 * Renderiza o modal detalhado do produto
 * @param {Object} product - Objeto do produto
 * @returns {string} HTML do modal
 */
function createProductModal(product) {
    const priceDisplay = productConfig.showPrices 
        ? `<div class="modal-product-price">${productConfig.currency} ${product.price.toFixed(2)}</div>`
        : '';
    
    const notesHTML = `
        <div class="modal-product-notes">
            <h4>Notas Olfativas</h4>
            <div class="notes-section">
                <h5>Notas de Cabeça</h5>
                <p class="notes-list">${product.notes.top.join(', ')}</p>
            </div>
            <div class="notes-section">
                <h5>Notas de Corpo</h5>
                <p class="notes-list">${product.notes.heart.join(', ')}</p>
            </div>
            <div class="notes-section">
                <h5>Notas de Fundo</h5>
                <p class="notes-list">${product.notes.base.join(', ')}</p>
            </div>
        </div>
    `;
    
    return `
        <div class="modal-body">
            <div class="modal-product-header">
                <div class="modal-product-image">
                    <img src="${product.modalImage || product.image || ''}" 
                         alt="${product.name}"
                         onload="this.style.display='block'"
                         onerror="this.style.display='none'"
                         style="display:none;">
                </div>
                <div class="modal-product-info">
                    <div class="modal-product-number">${product.number}</div>
                    <h2 class="modal-product-name">${product.name}</h2>
                    ${priceDisplay}
                    <div class="modal-product-description">
                        <p>${product.fullDescription}</p>
                    </div>
                </div>
            </div>
            <div class="modal-product-occasion">
                <p><strong>Ocasião ideal:</strong> ${product.occasion}</p>
            </div>
            ${notesHTML}
        </div>
    `;
}

/**
 * FUNÇÃO: Render Products Grid
 * Renderiza todos os produtos na grade
 */
function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;
    
    const productsHTML = products
        .map(product => createProductCard(product))
        .join('');
    
    container.innerHTML = productsHTML;
    
    // Adiciona event listeners aos cards
    attachProductCardListeners();
}

/**
 * FUNÇÃO: Attach Product Card Listeners
 * Adiciona eventos de clique aos cards de produtos
 */
function attachProductCardListeners() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        if (!card.classList.contains('product-unavailable')) {
            card.addEventListener('click', function() {
                const productId = this.getAttribute('data-product-id');
                const product = products.find(p => p.id === productId);
                
                if (product && productConfig.enableModal) {
                    openProductModal(product);
                }
            });
        }
    });
}

/**
 * FUNÇÃO: Open Product Modal
 * Abre o modal com os detalhes do produto
 * @param {Object} product - Objeto do produto
 */
function openProductModal(product) {
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = createProductModal(product);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * FUNÇÃO: Close Product Modal
 * Fecha o modal de produto
 */
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * FUNÇÃO: Setup Modal Listeners
 * Configura os eventos do modal
 */
function setupModalListeners() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (!modal) return;
    
    // Fechar com o botão X
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductModal);
    }
    
    // Fechar clicando fora do conteúdo
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProductModal();
        }
    });
    
    // Fechar com a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProductModal();
        }
    });
}

/**
 * FUNÇÃO: Format Currency
 * Formata valores monetários
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado
 */
function formatCurrency(value) {
    return new Intl.NumberFormat(productConfig.locale, {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

/**
 * FUNÇÃO: Filter Products
 * Filtra produtos por categoria (para uso futuro)
 * @param {string} categoryId - ID da categoria
 * @returns {Array} Produtos filtrados
 */
function filterProducts(categoryId) {
    if (!categoryId || categoryId === 'all') {
        return products;
    }
    return products.filter(product => product.categoryId === categoryId);
}

/**
 * FUNÇÃO: Search Products
 * Busca produtos por termo (para uso futuro)
 * @param {string} searchTerm - Termo de busca
 * @returns {Array} Produtos encontrados
 */
function searchProducts(searchTerm) {
    if (!searchTerm) return products;
    
    const term = searchTerm.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(term) ||
        product.shortDescription.toLowerCase().includes(term) ||
        product.fullDescription.toLowerCase().includes(term)
    );
}

/**
 * INICIALIZAÇÃO DOS COMPONENTES
 */
document.addEventListener('DOMContentLoaded', function() {
    setupModalListeners();
});