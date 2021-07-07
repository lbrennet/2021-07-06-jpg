class Crud {
    #baseURL

    constructor(baseURL) {
        this.#baseURL = baseURL;
    }

    #_request(method, resourceName, bodyStr, callback) {
        const resourceUrl = `http://${this.#baseURL}${resourceName}`
        return fetch(resourceUrl,
            {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },

                body: bodyStr
            }

        ).then(
            (response) => { return response.json() }
        ).then((obj) => {
            if (undefined !== callback) {
                callback(obj)
            }   
            return obj;
        });
    }

    post(resourceName, body, callback){
        return this.#_request('POST', resourceName, JSON.stringify(body), callback);
    }

    get(resourceName, callback) {
        return this.#_request('GET', resourceName, undefined, callback);
    }

    put(resourceName, body, callback,) {
        return this.#_request('PUT', resourceName, JSON.stringify(body), callback);
    }

    del(resourceName, body, callback){
        return this.#_request('DELETE', resourceName, undefined, callback);
    }

    patch(resourceName, body, callback){
        return this.#_request('PATCH', resourceName, JSON.stringify(body), callback);
    }
}