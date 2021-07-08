import RestArray from "./metier.js"
import { RESOURCES } from './fetch.js'

export default class DOMProducts extends RestArray {
    filteredArray
    #DOMListSelector
    #DOMViewerSelector='#list-view';

    constructor(DOMListSelector) {
        super('products', RESOURCES.products);
        this.loadFromRest().then((values) => {
            this.filteredArray = [...values];
            this.showResults();
        })
        this.#DOMListSelector = DOMListSelector;
    }
    
    showResults= () => {
        console.log(this.filteredArray)
        const list = document.querySelector(this.#DOMListSelector);
        list.innerHTML = '<h2>Liste des produits</h2>'
        this.filteredArray.map((value, index) => {            
            const domproductnode = DOMProduct.makeDOMSearchView(value);
            domproductnode.addEventListener('click', this.onresultclick)
            list.append(domproductnode);
        })
    }

    makeSearch = (searchName) => {
        this.filteredArray = this.filter((value, index) => value.name.includes(searchName));
        this.showResults();
    }

    onresultclick = (evt) => {
        console.log(evt, this);        
        const id = evt.currentTarget.id.substring(7);
        const prodclicked = this.find((value, index) => value.id === Number(id))
        console.log(prodclicked);
        DOMProduct.fillItemViewer(prodclicked,this.#DOMViewerSelector);
    }
}

class DOMProduct {
    static fillItemViewer(product,viewerSelector){
        const viewer=document.querySelector(viewerSelector);
        viewer.querySelector('h1').innerHTML=product.name;
        viewer.querySelector('img').src=product.img;
        viewer.querySelector('h2').innerHTML=`stock : ${product.stock}`;
        viewer.querySelector('.list-view-price').innerHTML=`Prix : ${product.price}€`;
        viewer.querySelector('.list-view-description').innerHTML=product.description;
        viewer.querySelector('ul').innerHTML='';
        const ul = viewer.querySelector('ul');
        ul.innerHTML = '';
        product.dimensions.map((value, index) => {
            const keys = Object.keys(value);
           const li= document.createElement('li');
           li.innerHTML=keys[0] + ' : ' + value[keys[0]];
           ul.append(li);
        })

    }

    static makeDOMSearchView(product) {
        const div = document.createElement('div');
        div.className = 'list-produit';
        div.id = "result " + product.id

        // img
        const img = document.createElement('img');
        img.src = product.img;
        div.append(img);

        // content text
        const divcontent = document.createElement('div');
        divcontent.className = 'list-produit-content';
        div.append(divcontent);

        // h2 titre
        const h2 = document.createElement('h2');
        h2.innerHTML = product.name;
        divcontent.append(h2);

        // h3 stock
        const h3 = document.createElement('h3');
        h3.style.textAlign = 'center';
        h3.style.fontWeight = '900';
        h3.innerHTML = `stock : ${product.stock}`;
        divcontent.append(h3);

        return div;
    }

}