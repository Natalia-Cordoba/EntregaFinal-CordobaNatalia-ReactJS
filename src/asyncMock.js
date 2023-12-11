const products = [
    //categoría Marvel
    {
        id: 'spiderman',
        name: 'SPIDERMAN',
        price: 9.99,
        category: 'marvel',
        image: 'https://images.unsplash.com/photo-1570385253185-75d46e6cc2c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 10,
        description: 'Figura de Spiderman - MARVEL'
    },
    {
        id: 'wanda',
        name: 'WANDA',
        price: 7.99,
        category: 'marvel',
        image: 'https://images.unsplash.com/photo-1614797226258-63bd66f9f5fb?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 3,
        description: 'Figura Wanda años 50 - MARVEL'
    },
    {
        id: 'vision',
        name: 'VISION',
        price: 7.99,
        category: 'marvel',
        image: 'https://images.unsplash.com/photo-1614797118060-6dca897b196a?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 0,
        description: 'Figura Vision años 50 - MARVEL'
    },
    {
        id: 'blackWidow',
        name: 'BLACK WIDOW',
        price: 8.99,
        category: 'marvel',
        image: 'https://images.unsplash.com/photo-1621453207135-e55da77bc342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 7,
        description: 'Figura de Black Widow - MARVEL'
    },

    //categoría Star Wars
    {
        id: 'stormtrooper',
        name: 'STORMTOOPER',
        price: 11.99,
        category: 'starWars',
        image: 'https://images.unsplash.com/photo-1561409106-fece1abb71cb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 15,
        description: 'Figura de Stormtooper - STAR WARS'
    },
    {
        id: 'rey',
        name: 'REY',
        price: 10.99,
        category: 'starWars',
        image: 'https://images.unsplash.com/photo-1663387124951-ff3eade18de5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 11,
        description: 'Figura de Rey - STAR WARS'
    },
    {
        id: 'kyloRen',
        name: 'KYLO REN',
        price: 12.99,
        category: 'starWars',
        image: 'https://images.unsplash.com/photo-1628280656090-e89312646704?q=80&w=976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 0,
        description: 'Figura de Kylo Ren - STAR WARS'
    },
    {
        id: 'c-3po',
        name: 'C-3PO',
        price: 8.99,
        category: 'starWars',
        image: 'https://images.unsplash.com/photo-1580582844723-e92f00ffacc8?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 8,
        description: 'Figuara de C-3PO - STAR WARS'
    },

    //categoría Disney
    {
        id: 'alien',
        name: 'ALIEN',
        price: 7.99,
        category: 'disney',
        image: 'https://images.unsplash.com/photo-1607203694607-2fde6bb0724c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 14,
        description: "Figura de alien verde de Toy Story - DISNEY"
    },
    {
        id: 'mickey',
        name: 'MICKEY',
        price: 9.99,
        category: 'disney',
        image: 'https://images.unsplash.com/photo-1589419621083-1ead66c96fa7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 8,
        description: 'Figura de Mickey - DISNEY'
    },
    {
        id: 'aladdin',
        name: 'ALADDIN',
        price: 8.99,
        category: 'disney',
        image: 'https://images.unsplash.com/photo-1623295783032-6af0e569659e?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 6,
        description: 'Figura de Aladdin - DISNEY'
    },

    //categoría Otros
    {
        id: 'Yamcha',
        name: 'DEAD YAMCHA',
        price: 10.99,
        category: 'otros',
        image: 'https://images.unsplash.com/photo-1627672360124-4ed09583e14c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 9,
        description: 'Figura de dead Yamcha - DRAGON BALL'
    },
    {
        id: 'voldemort',
        name: 'VOLDEMORT',
        price: 11.99,
        category: 'otros',
        image: 'https://images.unsplash.com/photo-1621094575984-96105800a09d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 20,
        description: 'Figura de Voldemort - HARRY POTTER'
    },
    {
        id: 'ItRichieTozier',
        name: 'RICHIE TOZIER',
        price: 7.99,
        category: 'otros',
        image: 'https://images.unsplash.com/photo-1585920715986-5149c0d2fea3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 5,
        description: 'Figura de Richie Tozier - IT'
    },
    {
        id: 'neo',
        name: 'NEO',
        price: 9.99,
        category: 'otros',
        image: 'https://images.unsplash.com/photo-1659651110991-29957566a52e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 0,
        description: 'Figura de Neo - MATRIX'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
