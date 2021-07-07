function XHR(baseUrl) {
    var _xhr;
    this.lastResult = undefined;
    function _request(method, resourceUrl, callback, bodyStr) {
        // instanciation
        _xhr = new XMLHttpRequest();
        // open
        _xhr.open(method, baseUrl+resourceUrl);        
        //header
        _xhr.setRequestHeader('Content-Type', 'application/json');
        //gestion event
        _xhr.onreadystatechange=(function(evt){
            if (xhr.readyState<XMLHttpRequest.DONE){
                return;
            }
            if (_xhr.status!==200 && _xhr.status!=201){
                console.log('ERROR');
            }

            console.log(this);
            this.lastResult = _xhr.response;
            if (undefined!==callback){
                callback(_xhr.response);
            }

        });
        _xhr.send(bodyStr);

    }
    this.get = function (resourceUrl, callback) {
        _request('GET', resourceUrl, callback)
    }
    this.put = function (resourceUrl, objectBody, callback) {
        _request('PUT', resourceUrl, callback, JSON.stringify(objectBody));
    }
}