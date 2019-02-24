console.log('Starting Reading the Script joke.js');

console.log('Getting access to elements');

const jokeElement = document.getElementById("quote");


console.log('Configuring event handlers');

jokeElement.addEventListener('dblclick', function () { handler() });

console.log('Declaring functions...............');

function getQuote() {
    return new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest();
        req.timeout = 2000;
        req.onreadystatechange = function (e) {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    const fact = req.response;
                    resolve(fact)
                } else {
                    reject(req.status)
                }
            }
        }
        req.ontimeout = function () {
            reject('Error - timed out: ' + req.time)
        }
        req.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes", true);
        req.send();
    })
}

async function handler() {
    const fact = await getQuote();
    console.log(fact);
    jokeElement.innerHTML = fact;

}

console.log('Done......Waiting for Events.........'); 