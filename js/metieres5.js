function Product(id,name,price) {
    //champs privé
    var _id=id;
    var _price=price;
    var _dimensions=[];
    //champs public
    this.name=name;

    //getter / setter ES5
    this.getPrice=function(){return _price;}
    this.setPrice=function(value) {
        if(isNaN(value)){_price=value;}
    };
    //fonction privée
    function _makeDiscount(pcent)
    {
        _price=( _price - (price * (pcent/100)) ).toFixed(2);
    }
    _makeDiscount(10);

    //exposition d'une fonction privée
    this.makeDiscount=_makeDiscount;

}




var produit=new Product(0,'zodiac',100000);
var produit2=new Product(0,'voilier',100000);
console.log(produit);


Product.prototype.setName=function(name){
    this.name=name;
}


console.log(produit["name"]);
produit.makeDiscount(10);
console.log(produit.getPrice()+'€');
console.log(produit);
