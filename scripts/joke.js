console.log('INFO: Starting to read calc.js');

console.log('INFO: Getting access to elements');

const quoteElement = document.getElementById("quote");


console.log('INFO: Configuring event handlers');

quoteElement.addEventListener('dblclick', function () { quoteHandler() });

console.log('INFO: Declaring functions');

//based off Professor Case's example in the slides
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
        req.open("GET", "http://api.icndb.com/jokes/random", true);
        req.send();
    })
}

async function quoteHandler() {
    const fact = await getQuote();
    console.log(fact);
    quoteElement.innerHTML = fact;

}

console.log('INFO: Done loading, waiting for an event'); 