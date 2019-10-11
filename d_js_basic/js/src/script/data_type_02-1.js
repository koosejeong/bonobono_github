//data_type_02-1.js

/*javascript 기본형 내용 정리하기 

  * 변수: var(오래도록 사용한 변수, hoist현상 문제)
  * let(hoist현상을 막기 위해 생성된 변수)
  * const(최초 생성 후 변경이 불가능하도록 처리된 변수-상수의 개념)
  * 
  * 숫자, 문자 : typeof(); 함수로 확인할 수 있다.
  * 논리형: ture, false
  * 특수형: null, undefined 
  * 
  * array: 배열형( array[] );
  * object: 객체형( obj{} );
  * ===============================
  * 
  * 연산자
  * operator:   
  * operation:, 
  * reteral:

*/

var arr = [1,2,3];
console.log( typeof(arr));

var obj = { "a":"pen", "b":"mouse", "c":"microphone" };
console.log( typeof(obj));

var reset=null;
console.log( typeof(reset));

console.log( arr[2] );
console.log( obj["c"] ); //프로퍼티 명이 문자일 때 이와 같이 ""에 감싸서 호출한다.
console.log( obj.a ); //주로 이 방식으로 사용한다.

console.log( arr );
console.log( obj );

console.log( arr.constructor.name ); //.constructor.name : 해당 변수의 constructor 이름, 종류, 기능, 형 등을 알 수 있다. 

var i = 10 + 2;
i -= 6; // i = i - 6;
i *= 2; // i = i * 2;
i /= 4; // i = i / 4;
i %= 2; // i = i % 2;
i += 2; // i = i + 2;
console.log( i );

var n = 10;
++n; 
++n; 
n++;
console.log(n++);
console.log(n);

for ( i=0; i<10; i++) {
  console.log(i);
}

