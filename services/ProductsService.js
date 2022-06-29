const PRODUCTS = [ 
    {
        id: 100,
        nome: 'Coxinha de Jaca',
        preco: 5.99,
        imagem: require('../assets/coxinha jaca.jpg'),
        descricao: 'A campeã de vendas: a coxinha de jaca! Feita com carne de jaca, alho, orégano, cominho, açafrão, limão, tomate, azeitonas, salsinha, cebolinha, azeite e sal.'
    },

    {
        id: 101,
        nome: 'Moqueca de Banana',
        preco: 45.99,
        imagem: require('../assets/moqueca.jpg'),
        descricao: 'Mais um clássico brasileiro: a moqueca de banana da terra! Feito com banana, limões, alho, cebola, pimentão, tomate, azeite, coentro, salsinha, majericão, azeite de dendê e sal.'
    },
    {
        id: 102,
        nome: 'Bolinho Assado',
        preco: 499,
        imagem: require('../assets/bolinhoAssado.jpg'),
        descricao: 'Delicioso bolinho de grão de bico. Assado, saboroso e sequinho, feito com grão de bico, azeite balsâmico, alho, cebola, salsinha, hortelã, cominho, farinha de aveia e uma pitada de sal!'
    },
    {
        id: 103,
        nome: 'Churrasco Vegano',
        preco: 185,
        imagem: require('../assets/ChurrascoVegano.jpeg'),
        descricao: 'Um dos carros chefe da casa! O churrasco vegano, porção feita com abobrinha, beringela, tomate cereja, tofu defumado, linguiça vegteal, pimentão amarelo, cebola, shoyu, azeite, sal e páprica picante.'
    },
    {
        id: 104,
        nome: 'Feijoada Vegana',
        preco: 58.55,
        imagem: require('../assets/Feijoada Vegana.jpg'),
        descricao: 'Clássico prato brasileiro, agora vegano e até mais saboroso! Feito com abobóra japonesa, feijão preto, inhame, abobrinha, cenoura, pimenta, alho, cebola, óleo de coco, sal a gosto e especiarias.'
    },

    {
        id: 105,
        nome: 'Sopa de feijão',
        preco: 370,
        imagem: require('../assets/Soja de feijão preto com mostarda.jpg'),
        descricao: 'Cremosíssima sopa de feijão preto com mostarda. feita com feijão-preto, louro, maço de mostarda, azeite, alho, cebola roxa, cebolinha, sal e especiarias!'
    },

    {
        id: 106,
        nome: 'Salada de gravatinha',
        preco: 189,
        imagem: require('../assets/Salada de gravatinha com maionese de cenoura.jpg'),
        descricao: 'Salada composta com macarrão estilo gravatinha, azeitonas, ervilhas, tomate cereja, castanha- do-pará, vagem, cenoura, linhaça, sal rosa e a inovação da maionese de cenoura, feita com cenoura, chuchu, azeite, alho, cebola e cúrcuma.'
    },

    {
        id: 107,
        nome: 'Pão integral de coco',
        preco: 200,
        imagem: require('../assets/Pão integral com açúcar de coco.png'),
        descricao: 'Nosso fofinho pão integral com açúcar de coco! Feito com açúcar de coco, farinha de trigo integral, amaranto e sal.'
    },

    {
        id: 108,
        nome: 'Mousse de chocolate',
        preco: 150,
        imagem: require('../assets/Mousse de chocolate vegano.jpg'),
        descricao: 'Sobremesa incrível e deliosa 😋 feita com abacate, cacau em pó, melado de cana e essência de baunilha.'
    },

    {
        id: 109,
        nome: 'Bolo de chocolate',
        preco: 370,
        imagem: require('../assets/Bolo vegano.png'),
        descricao: 'Bolo vegano de chocolate, feito com farinha, cacau em pó, açúcar, óleo, leite vegetal e sal.'
    },
];

export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}
