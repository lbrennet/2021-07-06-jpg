'use strict';
var json_products = '[{"name":"zodiac","img":"https://picsum.photos/id/377/150/150","price":50000,"description":"Tempor duis culpa deserunt reprehenderit id officia deserunt laborum fugiat in et aute.","stock":3,"dimensions":[{"size":"40 pieds"},{"tons":"40 tonneaux"},{"speed":"40 noeuds"}]},{"name":"voilier","img":"https://picsum.photos/id/341/150/150", "price":2500000,"description":"Aliqua proident ea non fugiat. Reprehenderit pariatur pariatur ad aliqua pariatur consequat tempor. Aliqua velit amet quis laborum labore ea. Ea nisi mollit exercitation adipisicing mollit ullamco. Laboris Lorem sint enim nostrud adipisicing ex consequat cillum magna non occaecat. Anim nostrud velit magna minim in ad labore ipsum irure enim laboris sint laboris.","stock":3,"dimensions":[{"size":"25 pieds"},{"tons":"35 tonneaux"},{"speed":"25 noeuds"}]}]';
var products = JSON.parse(json_products);
console.log(products);

function onproductclick(product) {
    console.log(product);
}

/**
 * Add product count at the end of product list
 */
function addCountProduct() {
    // interdit sur des conteneurs d'ensemble de balise avec des events dans les enfants
    // document.querySelector('#list').innerHTML+='Count:' + (products.length + 1);

    var divCount = document.createElement('div');
    divCount.id = 'count-product';
    divCount.innerHTML = 'Count :' + (products.length + 1);
    document.querySelector('#list').append(divCount);
}

var templateListItem = document.querySelector('.list-produit');
products.forEach(function (element, index, list) {
    console.log(index, element);
    //duplication d'element du dom pour manip
    var elemImpl = templateListItem.cloneNode(true);
    var img = elemImpl.querySelector('img');
    img.src = element.img;
    elemImpl.querySelector('h2').innerHTML = element.name;
    elemImpl.querySelector('h3').innerHTML = 'stock: ' + element.stock;
    //ajout de l'écouteur d'event sur la balise
    elemImpl.addEventListener('click', onproductclick);

    // ajout dans la liste de l'element cloné et dynamisé
    document.querySelector('#list').append(elemImpl);
    addCountProduct();
});


