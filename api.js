/**
 * Created by jayakornkarikan on 10/12/2017 AD.
 */


export default function() {
    //let url = 'http://172.20.10.2:3000/getTruewallet';
    let url = 'http://127.0.0.1/test.json';
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
}

