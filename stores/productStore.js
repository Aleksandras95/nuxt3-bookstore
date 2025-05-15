import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [
            {
                id: 1,
                title: 'Abejotina reputacija. Saldūs skandalai. Pirma knyga',
                price: 21.99,
                image: 'https://thumb.knygos-static.lt/zEHciHBnKOr5Sv_sIpnwmKGDMko=/fit-in/0x801/images/books/15138750/1745498673_9786090310564_Abejotina_reputacija.jpg',
                category: 'istoriniai-meiles-romanai'
            },
            {
                id: 2,
                title: 'Psichokibernetika',
                price: 21.99,
                image: 'https://thumb.knygos-static.lt/jDMHq6cKaKh0n9cFn5kbyWcRO9o=/fit-in/0x230/images/books/15066156/1742970635_9786094374944_virselis_Psichokibernetika.jpg',
                category: 'asmenybes-tobulinimas'
            },
            {
                id: 3,
                title: 'Kardų audra. Ledo ir ugnies giesmė #3',
                price: 39.19,
                image: 'https://thumb.knygos-static.lt/XUJc4TwIs6u6wVWqG-eJe7RrlBA=/fit-in/0x801/images/books/15001915/1738659409_Kardu-audra_LUG3.jpg',
                category: 'fantasy'
            },
            {
                id: 3,
                title: 'Nepaprastos Karalystės pasakos',
                price: 17.39,
                image: 'https://thumb.knygos-static.lt/L7BWzXKjUfzTq_ttAYFXBABI9bM=/fit-in/0x801/images/books/14807550/1727426665_866ac6c73d52c3a699282b3b5e7942f6_1800x1800.jpg',
                category: 'fantasy'
            },
            {
                id: 4,
                title: 'Žiūrėti ir būti žiūrimai: feministinės kino teorijos sąvokos ir komiksai',
                price: 12.68,
                image: 'https://thumb.knygos-static.lt/ssIxwHKYfiUtgjsm0o5xiWSoxJ0=/fit-in/0x801/images/books/2711685/1673591235_virselis_femkinas.jpg',
                category: 'komiksai'
            },
            {
                id: 5,
                title: 'Mylėk jas ir pravirkdyk',
                price: 15.39,
                image: 'https://thumb.knygos-static.lt/Mez_vOJNyrdkdYuBFuJp69iexBY=/fit-in/0x801/images/books/2583239/1617017737_Mylek-jas-ir-pravirkdyk.jpg',
                category: 'romantiniai-detektyvai'
            },
            {
                id: 6,
                title: 'Kalba iš žemės. Jezik iz zemlje',
                price: 17.19,
                image: 'https://thumb.knygos-static.lt/sqNMIWk6ACkeJBhnS2LsJQtTbT8=/fit-in/0x801/images/books/14837494/1727168554_1.JPG',
                category: 'klasikine-poezija'
            }
        ]
    }),
    getters: {
        getProductById: (state) => {
            return (id) => state.products.find(item => item.id === id)
        },
        getProductsByCategory: (state) => {
            return (category) => state.products.find(item => item.category === category)
        }
    }
})