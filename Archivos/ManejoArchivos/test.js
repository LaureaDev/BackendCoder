const Contenedor = require('./Contenedor');

async function main() {
    const product = new Contenedor('./productos.txt');

    console.log('Creando productos...');
    let allProducts = await product.getAll();
    console.log('Productos creados:', allProducts);

    const idToSearch = 1;
    console.log(`Muestro el producto con id ${idToSearch}`);
    let productById = await product.getById(idToSearch);
    console.log('Producto encontrado:', productById);

/*     console.log('Eliminando productos...');
    await product.deleteById(idToSearch);
    allProducts = await product.getAll();
    console.log('Productos eliminados:', allProducts);

    console.log('Eliminando todos los productos...');
    await product.deteleteAll();
    allProducts = await product.getAll();
    console.log('Productos eliminados:', allProducts);

    console.log('Creando productos...');
    allProducts = await product.getAll();
    console.log('Productos creados:', allProducts);
     */
}

main ();
