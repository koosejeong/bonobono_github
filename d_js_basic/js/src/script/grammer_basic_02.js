// grammer_basic_02.js
// 반복문

// var n = 0;
// console.log(n);

// while(n < 100) {
//   console.log( n );
//   n++;
// }

// var n = 0;
// do{
//   console.log( n );
//   n++;
// } while( n < 100)

// var n = 0;
// for(; n <= 10 ;) {
//   console.log( n );
//   n++;
// }

// for(let n=0; n <= 10; n++) {
//   console.log( n );
// }


// for문의 배열 형식 

// let arr = ['사과', '배', '바나나', '오렌지', '키위'];
// for( let i=0; i < 5; i++) {
//   console.log( arr[i] ) ;
// }

// // for in
// // for in 반복문 사용 시 배열 형식은 사용하지 않는다.
// // for in 반목문은 객체 형식으로 쓰는 게 좋다.

// let obj={
//   "red" : "사과", "yellow" : "바나나", "orange" : "오렌지", "green" : "키위", "brown" : "배"
// };
// for (let i in obj) {
//   console.log( obj[i] );
// }

// // [].forEach() - 메소드
// var myArr = ['빨강', '파랑', '노랑', '녹색', '보라' ];
// myArr.forEach( function( data ){
//   console.log( data);
// });

//for test =====================

//var product = document.getElementById('product');
let product = document.querySelector('#product');
product.style.width="100%";
product.style.height="auto";
product.style.minHeight="300px";
product.style.backgroundColor="#f96";

let ul = document.createElement('ul');
product.appendChild(ul);
ul = document.querySelector('#product>ul');
ul.style.width="90%";
ul.style.height="auto";
ul.style.minHeight="400px";
ul.style.backgroundColor="#77f";
//위에서 언급한 ul은 변수명이다. 

// let li = document.createElement( 'li' );
// property li 생성(createElement는 태그를 생성하는 일회성 메소드로, 한 번에 하나의 것만 생성 후 기능이 종료 된다.)
// ul.appendChild(li); //생성된 li를 변수 ul에 삽입

let ar = [ '우유', '주스', '차', '커피', '슬러시', '요거트', '디저트'];
//console.log( ar.length );

for(let i=0; i < ar.length; i++ ) {
  let li = document.createElement( 'li' );
  let  myText = document.createTextNode( ar[i] ); 
  li.appendChild(myText);
  ul.appendChild(li);
}