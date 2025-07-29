
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


var str = JSON.stringify(arr);

var regexp = /[a-zA-Z._0-9]+@(gmail\.com|yahoo\.com)/g;
var result = str.match(regexp);
console.log("resultEmails: " + result);
