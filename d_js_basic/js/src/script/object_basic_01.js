//object_basic_01.js

//javascript에서는 배열과 객체의 형타입을 모두 object로 본다. 

var mic = "microphone";
var arr = [1, 5, 'apple', mic];
//console.log(arr);

var fruit = ['apple', 'banan', 'strawberry', 'durian', 'mango'] ;
console.log(fruit);

console.log(fruit[0]);
console.log(fruit[2]);

var drink = [
  ['esspresso', 'americano', 'latte'], [ 'applejuice', 'kiwijuice', 'tomatojuice'], ['blackfirst', 'liptone'] 
];
console.log(drink[0][2]);
console.log(drink[1][1]);
console.log(drink[2][0]);

var mydrink = drink[0]; 
console.log(mydrink);
console.log(mydrink[0]);

var obj = {
  'asia' : 'korea', 'us' : 'america', 'eu' : 'italy'
}; // p:v, p:v, p:v...형태의 문법을 갖는다.
console.log(obj.us); //method
console.log(obj['asia']); // attribute

//객체 형식은 순서값을 가지고 있지 않다.
//속성을 값으로 가진 객체의 인수로는 프로퍼티만 가질 수 있다. 