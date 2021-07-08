//import classique
import {BASE_SRV_URL as REST_URL, RESOURCES} from './fetch.js';
// import par defaut
import MonFetch from './fetch.js'; // on peut le nommer comme on veut parce que c'est l'export Default

// tout sur la même ligne
// import fetch, {BASE_SRV_URL, RESOURCES} from './fetch.js';

import restArray, {Product, Boat} from './metier.js';
import DOMProducts from './metierDom.js'

const products = new DOMProducts('#list');

function onsearchchange(evt){
    evt.target.style.backgroundColor = "white";

    const regex = /^[a-z]{3,}$/;
    const searchval = evt.target.value;
    console.log(searchval);
    if (regex.exec(searchval)===null) {
        if (searchval.length >=3) {
            evt.target.style.backgroundColor = "tomato";            
        }
        return;
    }

    console.log(searchval);
    products.makeSearch(searchval);
}

function initDomEvent(){
    document.querySelector("#finder input").addEventListener('input', onsearchchange);
}
initDomEvent();