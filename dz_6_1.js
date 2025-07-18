
function checkProbabilityTheory(count){
var par = 0;
var nepar = 0;
for(let i=0; i<count; i++){
var rnd = Math.random();
rnd = rnd * 1000;
rnd = Math.ceil(rnd);
if (rnd % 2=== 0) {
 par++
}else {
    nepar++;
}
if(rnd>=100 && rnd <=1000){
}
}
var percent_of_par = par/count*100;
var percent_of_nepar = nepar/count*100;
console.log('Кількість згенерованих чисел: ' + count );
console.log('Парних чисел: ' + par);
console.log('Не парних чисел: ' + nepar);
console.log('--------')
console.log('% парних до усiх чисел: ' + percent_of_par.toFixed(1) + '%');   
console.log('% непарних до усiх чисел: ' + percent_of_nepar.toFixed(1) + '%');
}
checkProbabilityTheory(13);
