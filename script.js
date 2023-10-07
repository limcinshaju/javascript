// console.log('java script')
// // alert('hello and welcome');
// var a=9;

// var a=9;
// console.log(a);

// {
//     var a=20;
//     console.log(a);
// }
// // let b=23;
// console.log(b);

// {
//     let b=34;
//     console.log(b);
// }
// const t=30;
// console.log(t);
// {
//     const t=30;
//     console.log(t);
// }
// console.log(t);
// // Data Types
// var nam='limcin';
// console.log(typeof(nam));
// var nam='how are you';
// console.log(typeof(nam));

// // Numbers
// var count=10;
// console.log(typeof(count));

// // Boolean
// var bb=true;
// console.log(typeof(bb));
// var gtype;
// console.log(typeof(gtype));
// // Arrays
// let arr=['red','blue','white',10]
// console.log(arr[1]);

// console.log(arr.length);
// arr.push('violet');
// console.log(arr);
// // javascript objects
// let car={
//     mileage:100,
//     model:'i10',
//     color:'red'
// }
// console.log(car);
// console.log(car.model);
// console.log(car.mileage);
// let person=new Object();
// person.gender='male';
// person.height='180';
// console.log(person);

// var a=10;b=5;
// sum=a+b;
// console.log(sum);
// var a=10;b=5
// differ=a-b;
// console.log(differ);
// var a=10;b=5;
// mult=a*b;
// console.log(mult);
// var a=10;b=5;
// divide=a/b;
// console.log(divide);
// var a=10;
// var b=++a;
// console.log(b);
// //If else
// if (a==b && a==10) {
//     console.log('a is equal to b ')
// } else {
//     console.log('a is not equal to b and a is equal to 10')
    
// }
// if (a!=b) {
//     console.log('a not equal to b')
    
// } else {
//     console.log('b is equal to 5')
    
// }
// if (a==b && a==10) {
//     console.log('a is equal to b')
    
// } else {'a is  not equal to b and a is 10'

    
// }
// c=10;
// d='10';
// if (c==d) {
//     console.log('c is equal to d')

// } else {
//     console.log('c is not equal to d')
    
// }
// // a=15
// // //b=5
// // if (a<b && a==20) {
// //     console.log('a is not greater than b')
    
// // } else {
// //     console.log('a is greater than b and a is not equal to 20')
    
// // }
// let a=10;
// let b=34;
// let c=70;
// let d=12;
// //console.log(add);
// var exp=a+b*(c-d)-7;
// console.log(exp);
// functions
// function display(name){
//     console.log('hi '+name+' welcome to Js');
// }
// display('limcin');

function addition(t,s){
    var result=t+s;
    console.log(result);
    
}
addition(10,30);
function addition(t,s){
    var result=t+s
    return result;
}
    var result=addition(10,30);
    console.log('the sum is '+result);

    function sub(x,y){
        var result=x-y;
        console.log('the difference is '+result);
    }
    sub(10,5);

    function mult(f,h){
        var result=f*h;
        console.log('the product is '+result);
    }
    mult(12,2);