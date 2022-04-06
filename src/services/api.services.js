const BASE_URL = 'http://myjson.dit.upm.es';

export const getProducts = () => {

    const promise = new Promise( async (response, reject) => {
        try {
            const res = await fetch(`${BASE_URL}/api/bins/7viz`);
            const body = await res.json();
            if (res.status === 200) {
                return response(body)
            } else {
                return reject(body)
            }
            
        } catch (error) {
            reject({errors: [error]})
        }
    })
    return promise;
}