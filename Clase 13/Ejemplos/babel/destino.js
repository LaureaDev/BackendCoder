"use strict";

var lista = [2, 3, 4, 5];
lista.map(function (x) {
  return x * x;
}).array.forEach(function (x) {
  return console.log(x);
});
