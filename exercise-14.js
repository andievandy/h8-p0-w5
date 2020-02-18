function changeVocals(str) {
  var kamus = [['a', 'b'], ['i', 'j'], ['u', 'v'], ['e', 'f'], ['o', 'p'],
  ['A', 'B'], ['I', 'J'], ['U', 'V'], ['E', 'F'], ['O', 'P'],];

  var result = '';

  for (var i = 0; i < str.length; i++) {
    var found = false;
    for (var j = 0; j < kamus.length; j++) {
      if (str[i] == kamus[j][0]) {
        result += kamus[j][1];
        found = true;
        break;
      }
    }
    if (found == false) result += str[i];
  }
  return result;
}

function reverseWord(str) {
  var result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function setLowerUpperCase(str) {
  var kamusKecil = 'abcdefghijklmnopqrstuvwxyz';
  var kamusBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var result = '';

  for (var i = 0; i < str.length; i++) {
    var found = false;
    for (var j = 0; j < kamusKecil.length; j++) {
      if (str[i] == kamusKecil[j]) {
        result += kamusBesar[j];
        found = true;
        break;
      }
      else if (str[i] == kamusBesar[j]) {
        result += kamusKecil[j];
        found = true;
        break;
      }
    }
    if (found == false) result += str[i];
  }
  return result;
}

function removeSpaces(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') result += str[i];
  }
  return result;
}

function passwordGenerator(name) {
  if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';
  //var result = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));

  var step1 = changeVocals(name);
  var step2 = reverseWord(step1);
  var step3 = setLowerUpperCase(step2);
  var result = removeSpaces(step3);

  return result;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'