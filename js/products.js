/**
 * ARQUIVO DE PRODUTOS - EDITE AQUI PARA ADICIONAR/REMOVER/MODIFICAR PRODUTOS
 * 
 * Para adicionar um novo produto, copie um objeto completo e cole no array
 * Para remover, delete o objeto inteiro (incluindo as chaves {})
 * Para editar, modifique os valores dentro das aspas
 */

const products = [
    {
        id: 'jasmim',
        name: 'Jasmim',
        price: 89.90,
        shortDescription: 'Aroma elegante e convidativo, tornando o ambiente intimista.',
        fullDescription: 'Com perfume característico, o jasmim-bogari é originário da Ásia e Oriente Médio. É bem conhecido como "flor perfumada", por seu aroma exótico e intenso e por ser considerado um símbolo de amor e beleza.',
        occasion: 'Ideal para ocasiões formais, receber pessoas em casa e dar as boas-vindas.',
        notes: {
            top: ['maçã', 'notas verdes'],
            heart: ['rosa', 'frésia', 'lírio do vale'],
            base: ['musk', 'ambergris']
        },
        image: 'images/products/jasmim1.png',
        modalImage: 'images/products/velajasmim1.png',
        available: true
    },
    {
        id: 'cascas-folhas',
        name: 'Cascas & Folhas',
        price: 89.90,
        shortDescription: 'Fragrância refrescante com sensação de limpeza.',
        fullDescription: 'Explosão de notas aromáticas herbais capaz de materializar o verde de uma floresta após uma forte chuva.',
        occasion: 'Aroma marcante, requintado e leve que proporciona relaxamento. Perfeito para acender em dias frios e curtir o momento.',
        notes: {
            top: ['limão', 'verbena', 'lavanda', 'lima da pérsia'],
            heart: ['notas verdes', 'ervas'],
            base: ['musk', 'cedro', 'patchouli']
        },
        image: 'images/products/cascasefolhas1.png',
        modalImage: 'images/products/velacascasefolhas1.png',
        available: true
    },
    {
        id: 'figo',
        name: 'Figo',
        price: 89.90,
        shortDescription: 'Uma verdadeira jornada sensorial alegre e revitalizante.',
        fullDescription: 'Imagine a conexão entre a jovialidade e um toque moderno e efervescente. O resultado é uma verdadeira jornada sensorial alegre e revitalizante.',
        occasion: 'Essa fragrância evoca as mesmas sensações de sentar-se aos pés de uma figueira carregada de flores. Uma explosão de perfume.',
        notes: {
            top: ['cassis', 'toranja', 'acorde verde'],
            heart: ['maçã', 'figo'],
            base: ['sândalo', 'baunilha', 'caramelo']
        },
        image: 'images/products/figo1.png',
        modalImage: 'images/products/velafigo1.png',
        available: true
    },
    {
        id: 'cafe',
        name: 'Café',
        price: 89.90,
        shortDescription: 'Um verdadeiro paradoxo olfativo, capaz de elevar as boas vibrações.',
        fullDescription: 'Fragrância exótica. Relaxante e energizante, um verdadeiro paradoxo olfativo, capaz de elevar as boas vibrações, provendo aconchego e sofisticação ao ambiente.',
        occasion: 'Diferente de tudo o que você já conheceu. O inigualável cheiro de café que tanto encanta gerações numa versão exclusiva com um toque de canela e baunilha. Indicada para presentear ou encantar convidados.',
        notes: {
            top: ['café'],
            heart: ['musgo verde', 'cedro'],
            base: ['canela', 'baunilha']
        },
        image: 'images/products/cafe1.png',
        modalImage: 'images/products/velacafe1.png',
        available: true
    },
    {
        id: 'cha-branco',
        name: 'Chá Branco',
        price: 89.90,
        shortDescription: 'Sofisticação em um aroma. Notas suaves com tons florais.',
        fullDescription: 'Se a sofisticação fosse definida por apenas um aroma seria chá branco. Notas suaves e com tons florais e levemente frutadas e adocicadas. Perfume delicado acentuado por uma camada de luminosidade e vitalidade.',
        occasion: 'Harmonia e equilíbrio em uma única fragrância, que transmite calma, diferenciação e serenidade.',
        notes: {
            top: ['lima', 'laranja', 'chá branco'],
            heart: ['violeta', 'lírio do vale'],
            base: ['musk']
        },
        image: 'images/products/chabranco1.png',
        modalImage: 'images/products/velachabranco1.png',
        available: true
    },
    {
        id: 'incenso-rosas',
        name: 'Incenso de Rosas',
        price: 89.90,
        shortDescription: 'Fragrância clássica e envolvente que celebra a delicadeza das rosas.',
        fullDescription: 'Uma homenagem à flor mais icônica. O incenso de rosas traz o aroma clássico e envolvente que celembra a delicadeza e a beleza atemporal das rosas em sua essência mais pura.',
        occasion: 'Perfeita para criar uma atmosfera romântica e sofisticada, ideal para momentos de reflexão e descanso.',
        notes: {
            top: ['damasco', 'bergamota'],
            heart: ['rosa búlgara', 'gerânio'],
            base: ['patchouli', 'almíscar']
        },
        image: 'images/products/incensoderosas1.png',
        modalImage: 'images/products/velaincensoderosas1.png',
        available: true
    },
    {
        id: 'lemon-sugar',
        name: 'Lemon Sugar',
        price: 89.90,
        shortDescription: 'Uma explosão de frescor cítrico com notas adocicadas que alegram o ambiente.',
        fullDescription: 'Combinação perfeita entre o frescor vibrante do limão e a suavidade do açúcar. Lemon Sugar é uma fragrância alegre e energizante que traz leveza e bem-estar a qualquer espaço.',
        occasion: 'Ideal para cozinhas, áreas de trabalho e ambientes que precisam de um toque de leveza e positividade.',
        notes: {
            top: ['limão siciliano', 'laranja', 'toranja'],
            heart: ['açúcar cristalizado', 'baunilha'],
            base: ['amadeirado leve', 'musk']
        },
        image: 'images/products/lemonsugar1.png',
        modalImage: 'images/products/velalemonsugar1.png',
        available: true
    },
    {
        id: 'nova-fragrancia',
        name: 'Nova Fragrância',
        price: 89.90,
        shortDescription: 'Uma explosão de frescor cítrico com notas adocicadas que alegram o ambiente.',
        fullDescription: 'Combinação perfeita entre o frescor vibrante do limão e a suavidade do açúcar. Lemon Sugar é uma fragrância alegre e energizante que traz leveza e bem-estar a qualquer espaço.',
        occasion: 'Ideal para cozinhas, áreas de trabalho e ambientes que precisam de um toque de leveza e positividade.',
        notes: {
            top: ['limão siciliano', 'laranja', 'toranja'],
            heart: ['açúcar cristalizado', 'baunilha'],
            base: ['amadeirado leve', 'musk']
        },
        image: 'images/products/velanovafragrancia1.png',
        modalImage: 'images/products/velanovafragrancia1.png',
        available: true
    }
];

/**
 * CONFIGURAÇÕES GERAIS
 * Edite aqui configurações que afetam todos os produtos
 */

const productConfig = {
    currency: 'R$',
    locale: 'pt-BR',
    showPrices: true, // Mude para false para esconder todos os preços
    enableModal: true, // Mude para false para desabilitar o modal de detalhes
    defaultImage: 'images/products/placeholder.jpg' // Imagem padrão se não houver imagem
};

/**
 * CATEGORIAS (para futuras expansões)
 * Pode adicionar categorias se quiser filtros no futuro
 */

const categories = [
    { id: 'celestia', name: 'Coleção Celestia', active: true }
    // Adicione mais coleções aqui no futuro
];

// Não mexa abaixo desta linha - isso exporta os dados para uso no site
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, productConfig, categories };
}