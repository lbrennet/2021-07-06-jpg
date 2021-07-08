import Fetch from './fetch'

export default class ProductTs {
    public dimensions?: [{} | string]|undefined;

    constructor(private id: number,
        public name: string,
        public price: number,
        public description: string | number,
        dimensions?: [{} | string]) {

        this.dimensions = dimensions;
        console.log(this);
    }
}

export class Products extends Array<ProductTs>{
    constructor() {
        super();
    }
}

let product: ProductTs = new ProductTs(0, 'zodiac', 10000, 'beau bateau', [{ speed: '20 noeuds' }],);

const products: Products = new Products();
products.push(product);
products.push(product);
console.log(products,product);