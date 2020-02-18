function sorting(arrNumber) {
    var result = arrNumber;
    for(var i = 0; i < result.length; i++) {
        for(var j = 0; j < result.length; j++) {
            if(result[i] < result[j]) {
                var temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}

function getTotal(arrNumber) {
    var highestNumber = 0;
    var highestNumberOccurence = 0;
    for(var i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] > highestNumber) {
            highestNumber = arrNumber[i];
            highestNumberOccurence = 1;
        } else if (arrNumber[i] == highestNumber) {
            highestNumberOccurence++;
        }
    }
    if(highestNumber > 0) return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${highestNumberOccurence} kali`;
    else return '';
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''