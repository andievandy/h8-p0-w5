// function kaliTerusRekursif(angka) {
//     var angka1Digit = angka % 10;
//     var sisa = (angka - angka1Digit) / 10;
//     if (sisa == 0) return angka;
//     else return kaliTerusRekursif(angka1Digit * kaliTerusRekursif(sisa));
// }

function kaliTerusRekursif(angka) {
    var sisa = angka;
    var hasil = 1;
    while(sisa != 0) {
        var angka1Digit = sisa % 10;
        hasil *= angka1Digit;
        sisa = (sisa - angka1Digit) / 10;
    }
    if(hasil > 10) return kaliTerusRekursif(hasil);
    else return hasil;
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6