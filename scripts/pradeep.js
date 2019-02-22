console.log('INFO: SCRIPT STARTED');

console.log('INFO: Getting access to elements');
const submit = document.getElementById('submit');
const history = document.getElementById('history');
const clearHistory = document.getElementById('clear');


console.log('INFO: Declaring testable functions.....................')
function convertingLengthToMeters(lengthInFeet) {
    const lengthInMeters = lengthInFeet / 3.2808;
    const max = 10000000000000000;
    if (lengthInFeet < 0) {
        return 0;
    }else if(lengthInFeet>max){
        return 0;
    }
    else if (lengthInFeet == "") {
        return 0;
    }
    else {
        return lengthInMeters;
    }
}

console.log('Defined convertingLengthToMeters=' + convertingLengthToMeters)

console.log('INFO: Configuring event handlers');

window.addEventListener('load', (event) => {
    console.log('  Starting initialization ')
    if (localStorage.getItem('number')) {
        document.getElementById('number').value = localStorage.getItem('number')
        console.log(`  Stored number = ${localStorage.number}`)
    }
    console.log('  Finished initialization')
})
document.getElementById('submit').addEventListener('click', () => {
    console.log('  Starting submit click handler')
    const origCount = parseFloat(localStorage.getItem('countOfClicks')) || 0
    const s = parseFloat(document.getElementById('number').value)
    console.log('s=' + s)
    const ct = origCount + 1
    const ans = 'Entered lenght in feet: ' + s + ', Conversion to Meters: '
        + convertingLengthToMeters(s) + '. This has been run ' + ct + ' times.'
    document.getElementById('result').innerHTML = ans
    localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
    localStorage.setItem('number', s)
    console.log('  Finished clicker click handler')
})


history.addEventListener('click', () => {
    document.getElementById('local').innerHTML = "Entered lenght in feet: " + localStorage.getItem("number");
    console.log('GETTING THE LAST INPUT ' + localStorage.getItem("number"));
})

clearHistory.addEventListener('click', () => {
    console.log('CLEARING HISTORY');
    localStorage.clear()
    document.getElementById('local').innerHTML = "cleared";
})


console.log('INFO: SCRIPT END');
