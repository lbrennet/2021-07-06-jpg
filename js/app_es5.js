'use strict';
var json_products = '[{"name":"zodiac","img":"https://picsum.photos/id/377/150/150","price":50000,"decription":"loremQuis cupidatat minim ad laborum velit sint pariatur voluptate sint ullamco dolor veniam enim.Qui laboris deserunt id do non mollit ullamco consectetur ullamco eu elit culpa.","stock":2,"dimensions":[{"size":"40 pieds"},{"tons":"40 tonneaux"},{"speed":"40 noeuds"}]},{"name":"voilier","img":"https://picsum.photos/id/341/150/150","price":2500000,"decription":"loremQuis cupidatat minim ad laborum velit sint pariatur voluptate sint ullamco dolor veniam enim.Qui laboris deserunt id do non mollit ullamco consectetur ullamco eu elit culpa.","stock":8,"dimensions":[{"size":"25 pieds"},{"tons":"35 tonneaux"},{"speed":"25 noeuds"}]},{"name":"voilier","img":"https://picsum.photos/id/341/150/150","price":2500000,"decription":"loremQuis cupidatat minim ad laborum velit sint pariatur voluptate sint ullamco dolor veniam enim.Qui laboris deserunt id do non mollit ullamco consectetur ullamco eu elit culpa.","stock":8,"dimensions":[{"size":"25 pieds"},{"tons":"35 tonneaux"},{"speed":"25 noeuds"}]}]';
var products = JSON.parse(json_products);
console.log(products);
function onproductclick(product) {
    console.log(product);
    alert('produit cliqué : ');
}
/**
 * Add product count a end of product list
 */
function addCountProduct() {
    //interdit sur des contenur d'ensemble de balise avec des event dans les enfants
    //document.querySelector('#list').innerHTML+='Count : '+(products.length+1);

    var divCount = document.createElement('div');
    divCount.id = "count-product";
    divCount.innerHTML = 'Count : ' + (products.length + 1);
    document.querySelector('#list').append(divCount);
}

var templateListItem = document.querySelector('.list-produit');

products.forEach(function (element, index, list) {
    //console.log(index, element);
    //duplication d'element du dom pour manip
    var elemTmpl = templateListItem.cloneNode(true);
    var img = elemTmpl.querySelector('img');
    img.src = element.img;
    elemTmpl.querySelector('h2').innerHTML = element.name;
    elemTmpl.querySelector('h3').innerHTML = 'stock : ' + element.stock;
    //ajout de l'ecouteur d'event sur la balise
    elemTmpl.addEventListener('click', onproductclick)
    //ajout dans la liste de l'element cloné et dynamiser
    document.querySelector('#list').append(elemTmpl);
});
addCountProduct();

console.error('coucou une erreur')
console.warn('coucou un warning')