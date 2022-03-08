const repeatString = function(string, noRepetitions) {
    if (noRepetitions < 0) {
        return "ERROR";
    }
    let outputString = "";
    for (let i = 1; i <= noRepetitions; i++) {
        outputString += string;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
