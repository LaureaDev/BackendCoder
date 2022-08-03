const { promise: fs } = require('fs');

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }
    async save (obj) {
        await fs.writeFile(this.ruta, JSON.stringify(obj));

    }
    async getById (id) {
        const products = await this.getAll();
        const productById = products.find(product => product.id == id);
        return productById;
    }

    async getAll () {
        try {
            const products = await fs.readFile(this.ruta, 'utf-8');
            return JSON.parse(products);
        } catch (error) {
            return [];
        }
    }

    async deleteById (id) {
        const products = await this.getAll();
        const product = products.filter(product => product.id != id);
        await fs.writeFile(this.ruta, JSON.stringify(product));
    }

    async deteleteAll () {
        await fs.writeFile(this.ruta, JSON.stringify([]));
        
    }
}

module.exports = Contenedor;