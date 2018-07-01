
export interface Product {
    id: number,
    name: string,
    price: number,
    content: string,
}

const database : Product[] = [
    { id: 1, name: 'Product A', price: 100, content: 'details about product A' },
    { id: 2, name: 'Product B', price: 100, content: 'details about product B' },
    { id: 3, name: 'Product C', price: 100, content: 'details about product C' },
]

export default class Database {

    static fetch(): Product[] {
        return database
    }

    static find(id: number): Product | undefined {
        return database.find(el  => el.id === id)
    }

    static asyncFind(id: number): Promise<Product> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const prod = this.find(id)
                if(prod) {
                    resolve(prod)
                }
                else {
                    reject('not found')
                }
            }, 1000)
        })
    }
}
