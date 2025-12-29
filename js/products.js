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
        number: '01',
        price: 89.90,
        shortDescription: 'Aroma elegante e convidativo, tornando o ambiente intimista.',
        fullDescription: 'Com perfume característico, o jasmim-bogari é originário da Ásia e Oriente Médio. É bem conhecido como "flor perfumada", por seu aroma exótico e intenso e por ser considerado um símbolo de amor e beleza.',
        occasion: 'Ideal para ocasiões formais, receber pessoas em casa e dar as boas-vindas.',
        notes: {
            top: ['maçã', 'notas verdes'],
            heart: ['rosa', 'frésia', 'lírio do vale'],
            base: ['musk', 'ambergris']
        },
        image: 'images/products/jasmim.jpg', // Adicione sua imagem aqui
        available: true
    },
    {
        id: 'cascas-folhas',
        name: 'Cascas & Folhas',
        number: '02',
        price: 89.90,
        shortDescription: 'Fragrância refrescante com sensação de limpeza.',
        fullDescription: 'Explosão de notas aromáticas herbais capaz de materializar o verde de uma floresta após uma forte chuva.',
        occasion: 'Aroma marcante, requintado e leve que proporciona relaxamento. Perfeito para acender em dias frios e curtir o momento.',
        notes: {
            top: ['limão', 'verbena', 'lavanda', 'lima da pérsia'],
            heart: ['notas verdes', 'ervas'],
            base: ['musk', 'cedro', 'patchouli']
        },
        image: 'images/products/cascas-folhas.jpg',
        available: true
    },
    {
        id: 'figo',
        name: 'Figo',
        number: '03',
        price: 89.90,
        shortDescription: 'Uma verdadeira jornada sensorial alegre e revitalizante.',
        fullDescription: 'Imagine a conexão entre a jovialidade e um toque moderno e efervescente. O resultado é uma verdadeira jornada sensorial alegre e revitalizante.',
        occasion: 'Essa fragrância evoca as mesmas sensações de sentar-se aos pés de uma figueira carregada de flores. Uma explosão de perfume.',
        notes: {
            top: ['cassis', 'toranja', 'acorde verde'],
            heart: ['maçã', 'figo'],
            base: ['sândalo', 'baunilha', 'caramelo']
        },
        image: 'images/products/figo.jpg',
        available: true
    },
    {
        id: 'cafe',
        name: 'Café',
        number: '04',
        price: 89.90,
        shortDescription: 'Um verdadeiro paradoxo olfativo, capaz de elevar as boas vibrações.',
        fullDescription: 'Fragrância exótica. Relaxante e energizante, um verdadeiro paradoxo olfativo, capaz de elevar as boas vibrações, provendo aconchego e sofisticação ao ambiente.',
        occasion: 'Diferente de tudo o que você já conheceu. O inigualável cheiro de café que tanto encanta gerações numa versão exclusiva com um toque de canela e baunilha. Indicada para presentear ou encantar convidados.',
        notes: {
            top: ['café'],
            heart: ['musgo verde', 'cedro'],
            base: ['canela', 'baunilha']
        },
        image: 'images/products/cafe.jpg',
        available: true
    },
    {
        id: 'cha-branco',
        name: 'Chá Branco',
        number: '05',
        price: 89.90,
        shortDescription: 'Sofisticação em um aroma. Notas suaves com tons florais.',
        fullDescription: 'Se a sofisticação fosse definida por apenas um aroma seria chá branco. Notas suaves e com tons florais e levemente frutadas e adocicadas. Perfume delicado acentuado por uma camada de luminosidade e vitalidade.',
        occasion: 'Harmonia e equilíbrio em uma única fragrância, que transmite calma, diferenciação e serenidade.',
        notes: {
            top: ['lima', 'laranja', 'chá branco'],
            heart: ['violeta', 'lírio do vale'],
            base: ['musk']
        },
        image: 'images/products/cha-branco.jpg',
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