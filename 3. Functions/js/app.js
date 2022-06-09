// // function Hello(ad) {
// //     alert('Hello ' + ad)
// // }

// // Hello('P128');


// // FUNCTION DECLARATIONS
// // ShowMessage(20);
// // function ShowMessage(age) {
// //     console.log('Student age is ' + age);
// // }



// // // SHORTHAND DEFINITION
// // var Person = {
// //     ad: "Murad",
// //     yas: 25,
// //     tevellud() {
// //        return new Date().getFullYear() - this.yas
// //     }
// //     // tevellud: function() {
// //     //     return new Date().getFullYear() - this.yas
// //     // }
// // }


// // function Hesabla(x,y) { 
// //     return x*y;
// // }
// // console.log(Hesabla(10,5))


// // // FUNCTION EXPRESSIONS
// // var Hello = function(age) {
// //     console.log('Student age is ' + age);
// // }
// // Hello(20);


// // var Calculate = (x,y) => x+y;
 

// // console.log(Calculate(11,22));


// // var SayName = (ad) => console.log(ad);


// // SayName('Vasif');

// // function Person(name,age,job) {
// //     this.name = name;
// //     this.age = age;
// //     this.job = job;
// // }

// // var Developer = new Person('Nicat',25,'JS Developer');
// // var Designer = new Person('Seid',23,'UX/UI Designer');
// // console.log(Developer);
// // console.log(Designer.name);


// // map / filter / reduce / forEach



// // var discount_price = price.map(x => x/2);
// // var exp_products = price.filter(x => x>=10);
// // var sum = price.reduce((x,y) => x+y)

// // console.log(discount_price);
// // console.log(exp_products);
// // console.log(sum + " AZN");

// // price.forEach(x => console.log(x))

// // var discount_price = price.map(function(x) {
// //     return x / 2;
// // });


// // HIGH ORDER FUNCTIONS (HOF)
// var price = [10,20.5,6,2,50];
// var z = price.map(x => x+1).filter(x => x>10).reduce((x,y) => x+y);

// console.log(price.fill(10));


// // var students = [
// //     {ad:'Metin',yas:35},
// //     {ad:'Seid',yas:25},
// //     {ad:'Ehed',yas:18},
// // ]

// // var elder = students.filter(x => x.yas > 18)
// // console.log(elder);

// // (function(){

// // })()

// // setTimeOut
// // setInterval


// // setTimeout(() => {
// //     console.log('salam');
// // }, 2000);

// // setInterval(() => {
// //     console.log('Salam dostlar!');
// // }, 5000);


// // function GetDate() {
// //     var date = new Date();
// //     var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
// //     var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
// //     var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()

// //     document.getElementById('time').innerHTML = `${h}:${m}:${s}`
// // }

// // setInterval(() => {
// //     GetDate()
// // }, 200);

// // SOLID
// // DRY
// // YAGNI


// setTimeout(() => {
//     document.getElementById('all-website').style.opacity = '1'
//     document.getElementById('loading').style.opacity = '0'
// }, 5000);




function Download() {
    var text = document.getElementById('text')
    var loader = document.getElementById('loading');
    loader.style.display = 'block'
    text.style.display = 'none'

    setTimeout(() => {
        loader.style.display = 'none'
        text.style.display = 'block'
        text.innerHTML = 'FILE DOWNLOADED'
    }, 3000);
}



function ShowName(firstname,callback) {
    console.log('Hello ' + firstname);
    callback();
}
ShowName('Ruslan',Register);


function Register() {
    console.log('User registered!');
}




function Show() {
    var select = document.getElementById('select')
    console.log(select.value);
}