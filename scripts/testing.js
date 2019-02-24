console.log('Reading the script testing.js')
console.log('_________________________________________________________')
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
console.log('Defined Function for testing '+convertingLengthToMeters)

QUnit.test("Testing", function (assert) {
    assert.equal(convertingLengthToMeters(0), 0, "Length To Meters == 0");
    assert.equal(convertingLengthToMeters(null), 0, "checking for boundary return 0");
    assert.equal(convertingLengthToMeters(1), 0.30480370641307, "Length To Meters ==  0.30480370641307");
    assert.equal(convertingLengthToMeters(100000000007884700), 0, "checking for boundary ");
    assert.equal(convertingLengthToMeters(-1), 0, "checking for large inputs - returns 0");
    assert.equal(convertingLengthToMeters(200), 60.960741282613995, "Length To Meters == 60.960741282613995");
});
console.log('_________________________________________________________')
console.log('Done Testing the function for user inputs')