/* Ejercicio en clase: Crea una clase llamada CarritoDeCompras que represente un carrito de compras simple. */

class CarritoCompras {
    constructor() {
        this.items = [];
    }
    //método agregarProducto con parámetro item y con un push se agregan los elementos al arreglo items
    addProduct(items) {
        this.items.push(items);
    }
    
    getTotal() {
        //se declara la variable total para guardar el costo total de la compra
        let total = 0;
        //con un ciclo for recorremos el arreglo item en el que se guardaron los productos de la compra
        for(let i = 0; i < this.items.length; i++) {
            //se suma el costo de los productos del carrito y se asigna a la variable total
            total += this.items[i].cost;
        }//se retorna el valor de la variable total
        return total;
    }
    
    showCarrito() {
        console.log(`Mi carrito contiene: `);

        for(let i = 0; i < this.items.length; i++) {

            console.log(`Producto: ${this.items[i].name}, Precio: $ ${this.items[i].cost}.`);
        }
        console.log(`El total de la compra es: ${this.getTotal()}`);
    }

}

let product1 = {
    name: "Camiseta",
    cost: 20 
}

let product2 = {
    name:"Zapatos",
    cost: 50
}

let product3 = {
    name: "Corbata",
    cost: 30
}

let product4 = {
    name:"Cinturón",
    cost: 35
}

let miCarrito = new CarritoCompras();

miCarrito.addProduct(product1);
miCarrito.addProduct(product2);
miCarrito.addProduct(product3);
miCarrito.addProduct(product4);
miCarrito.showCarrito();