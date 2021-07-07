'use strict';
function XHR(baseUrl) {
    var _baseUrl = baseUrl;
    var _xhr;
    var _xhrthis=this;

    this.lastResult = undefined;

    function _request(method, ressourceUrl, callback, bodyStr) {
        //1.instanciation
        _xhr = new XMLHttpRequest();
        //2.open
        _xhr.open(method, baseUrl + ressourceUrl);
        //2.B. gestion des headers
        _xhr.setRequestHeader('Content-Type','application/json');
        //3.gestion d'event

        _xhr.onreadystatechange = (evt) => {
            if (_xhr.readyState < XMLHttpRequest.DONE) return;
            if (_xhr.status !== 200 && _xhr.status != 201) {
                console.log('ERROR');
            }
            console.log(this,_xhrthis);
            _xhrthis.lastResult = _xhr.response;
            if (undefined !== callback) callback(_xhr.response)
        }
        //4.envoie
        _xhr.send(bodyStr);
    }
    this.get = function (ressourceUrl, callback) {
        _request('GET', ressourceUrl, callback);
    }
    this.put = function (ressourceUrl, objectBody, callback) {
        _request('PUT', ressourceUrl, callback, JSON.stringify(objectBody));
    }

}