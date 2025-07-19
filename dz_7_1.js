
var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"

};
services['Розбити скло'] = "200 грн";
services['Оформлення бороди'] = "150 грн";
services['Дитяча стрижка'] = "50 грн";

function price(){
    let sumPrice = 0;
for(let key in services){
    services[key]= parseInt(services[key]);
    sumPrice +=  services[key];
}

    return sumPrice;
}

console.log("Загальна вартість наданих послуг: " + price());

function minPrice(){
var min = 10000;
for (let key in services){
    services[key]= parseInt(services[key]);
    if (min>services[key]){
min=services[key]
    }
}
    return min;
}
console.log("Мінімальна ціна: " + minPrice());

function maxPrice(){
var max = 0;
for (let key in services){
    services[key]= parseInt(services[key]);
    if (max<services[key]){
max=services[key]
    }
}
    return max;
}
console.log("Максимальну ціна: " + maxPrice());