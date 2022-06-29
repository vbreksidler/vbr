// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue();

// Desafio 2
function calcArea(base, height) {
  let A = (base*height)/2;
  return A;
}
calcArea();

// Desafio 3
function splitSentence(string) {
  let text = string;
  const myArray = text.split(" ");
  return myArray;
}
splitSentence("")

// Desafio 4
function concatName(array) {
  var ultimo = array[array.length -1];
  var primeiro = array[0];
  return ultimo + ', ' + primeiro;
}
concatName(" ")

// Desafio 5
function footballPoints(wins, ties) {
  let win = 3;
  let tie = 1;
  result = win*wins + tie*ties;
  return result;
}
footballPoints()

// Desafio 6
function highestCount(array) {
  let m = [];
  for (let i = 0; i < array.length; i += 1) {
    if (Math.max.apply(Math, array) === array[i]) {
      m.push('MAX');
    }
  }
  let ml = m.length;
  return ml;
}
highestCount([9, 1, 2, 3, 9, 5, 7])

// Desafio 7
function catAndMouse(mouse, c1, c2) {
  let r1 = c1 - mouse;
  let r2 = c2 - mouse;
  let r11 = r1 ** 2;
  let r22 = r2 ** 2;

  if (r11 > r22) {
    return "cat2";
  } if (r22 > r11) {
    return "cat1";
  } if (r22 === r11) {
    return "os gatos trombam e o rato foge";
  }
}
catAndMouse()

// Desafio 8
function fizzBuzz(n) {
  let resposta = [];
  for (var i = 0; i < n.length; i += 1) {
    let x = n[i] % 3;
    let y = n[i] % 5;

    if (x === 0 && y === 0) {
      resposta.push("fizzBuzz");

    } else if (y === 0) {
      resposta.push("buzz");

    } else if (x === 0) {
      resposta.push("fizz");
    
    } else resposta.push("bug!");
  }
  return resposta;  
}
fizzBuzz([80, 30, 55])

// Desafio 9
function encode(){
  // seu código aqui
} 

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};