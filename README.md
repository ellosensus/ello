# ELLO - Estrutura do Projeto GitHub Pages

## 📁 Estrutura de Diretórios

```
ello-website/
├── index.html                 # Página principal
├── css/
│   ├── main.css              # Estilos principais
│   └── components.css        # Estilos dos componentes
├── js/
│   ├── main.js               # JavaScript principal
│   ├── products.js           # Dados dos produtos (EDITAR AQUI)
│   └── components.js         # Componentes reutilizáveis
├── images/
│   ├── logo.png              # Logo da ELLO
│   ├── products/             # Imagens dos produtos
│   └── icons/                # Ícones diversos
└── README.md                 # Documentação
```

## 🎨 Paleta de Cores

- **Primary**: #2C2C2C (Preto suave)
- **Secondary**: #D4AF37 (Dourado)
- **Accent**: #8B7355 (Marrom claro)
- **Background**: #FAFAF8 (Off-white)
- **Text**: #333333

## 🔧 Como Editar Produtos

Abra o arquivo `js/products.js` e edite o array de produtos:

```javascript
{
  id: 'jasmim',
  name: 'Jasmim',
  price: 89.90,
  description: '...',
  notes: {...}
}
```

## 🚀 Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em Settings > Pages
4. Selecione a branch main e pasta root
5. Salve e aguarde o deploy

## 📱 Responsivo

O site é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)