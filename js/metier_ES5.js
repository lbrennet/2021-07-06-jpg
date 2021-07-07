function Product(id, name, price) {
    // private
    var _id = id;
    var _price = price;
    var _dimension = [];

    // public
    this.name = name;
    this.getPrice = function () { return _price };
    this.setPrice = function (value) {
        if (!isNaN(value)) {
            _price = value
        };
    }

    // function privée
    function _makeDiscount(pcent) {
        _price = (_price - (_price * (pcent / 100))).toFixed(2)
    }

    _makeDiscount(10);

    // exposition d'une function privée
    this.makeDiscount = _makeDiscount;
}
var produit = new Product(0, 'zodiac', 100000);
var produit2 = new Product(0, 'voilier', 100000);
console.log(produit);

Product.prototype.setName=function(name){
    this.name=name;
}

produit.makeDiscount(10);
console.log(produit);

