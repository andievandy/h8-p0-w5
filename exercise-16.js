function totalDigitRekursif(angka) {
    var angka1Digit = angka % 10;
    var sisa = (angka - angka1Digit) / 10;

    if (angka <= 0) return 0;
    else return angka1Digit + totalDigitRekursif(sisa);
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5