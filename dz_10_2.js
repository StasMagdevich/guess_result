var strTrue = "Wonderful, Joyful"
var strFalse = "Happiness, Time, Task, Apple"

var regexp = /\b[b-zB-Z]{6,}\b/g;
var resultTrue = strTrue.match(regexp);
var resultFalse = strFalse.match(regexp);