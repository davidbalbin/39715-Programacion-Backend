class ProductManager {
    #products
    constructor() {
        this.#products = [];

    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const index = this.#products.findIndex((p) => p.code === code);
        if (index >= 0) {
            console.error("This product code already exist");
            return;
        }

        if (!title) {
            console.error("Title is required");
            return
        }
        if (!description) {
            console.error("Description is required");
            return;
        }
        if (!price) {
            console.error("Price is required");
            return;
        }
        if (!thumbnail) {
            console.error("Thumbnail is required");
            return;
        }
        if (!code) {
            console.error("Code is required");
            return;
        }
        if (!stock) {
            console.error("Stock is required");
            return;
        }

        const product = {
            id: this.#products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.#products.push(product);
        return;
    }

    getProducts = () => {
        return this.#products;
    }

    getProductById = (ProductId) => {
        const product = this.#products.find((p) => p.id === ProductId);

        if (!product) {
            console.error("Not Found");
            return null;
        }

        return product;
    }
}

//Test 01
console.log("***Test 01***")
const productManager = new ProductManager();
console.table(productManager.getProducts());

//Test 02
console.log("***Test 02***")
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
console.table(productManager.getProducts());

//Test 03
console.log("***Test 03***")
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

//Test 04
console.log("***Test 04***")
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));