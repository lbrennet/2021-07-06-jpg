class Product {
    #id;
    #name;
    price;

    constructor(id, name, price) {
        this.#id = id; // ; pas obligatoire
        this.name = name;
        this.price = price;
    }
    get id() {
        return this.#id;
    }


    /**
     * return name
     * @returns {string} value of name
     */
    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    // private function
    #_makeDiscount(pcent) {
        this.price = (this.price - (this.price * (pcent / 100))).toFixed(2);
    }

    tojsonstring() {
        return JSON.stringify(Object.assign({ name: this.#name, id: this.#id }, this));
    }

    makediscount = this.#_makeDiscount;
}