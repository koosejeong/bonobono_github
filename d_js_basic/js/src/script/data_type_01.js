//data_type_01.js

// var int;
// console.log(int); 

// var 댕댕이;
// console.log(댕댕이); //undefinede:정의 되지 않은 변수

// 댕댕이="멍멍이";
// console.log(댕댕이); 

//console.log(멍댕이); not defined: 찾을 수 없는 값, 잘못된 값
/*
  undefined:변수명은 선언했으나 값을 지정하지 않은 상태
  not defined: 생성 되지 않은 변수(찾을 수 없는 값)
*/

// var rel;
// console.log(rel);
// var rel="10시 40분"; -해당 경우는 undefined 

//console.log(rel);
//var rel="10시 40분"; 
// -HOIST형상(이와 같은 순서로 선언한 경우, not defined가 나와야 하지만, 해당 경우엔 undefined가 나오는데, 이는 JS에만 있는 현상으로 이를 HOIST 현상이라고 한다.)
//위와 같은 HOIST 현상은 var로 선언한 변수에만 있는 현상이며, let으로 선언할 시 적용 되지 않아 위와 같은 순서로 선언할 경우 오류 발생.
//let이나 var로 선언한 변수와 달리, const로 선언 시 선언한 즉시 값을 대입해줘야 하며, 한 번 선언한 후에 다른 값을 대입할 수 없다.(상수:변하지 않는 수라는 뜻)

/*
  var: 오래 전부터 사용하던 변수 선언 방식.
      *HOIST 현상이 존재(hoist현상: 선언하기 이전에도 해당하는 변수가 존재하는 걸로 인지하는 현상)
  let: ECMA2015(es6) 버전부터 생성된 변수 선언 방식.
      *HOIST  현상이 사라짐.
      *현재 가장 많이 사용하는 변수 선언 방식.(의미론 적 접근이 가능하다)
  const: ECMA2015(es6) 버전부터 생성된 변수 선언 방식.
      *흔히들 변수 선언 방식이라 말하지만, 실제로는 한번 값을 대입한 이후로는 값을 변경할 수 없는 선언 방식. 
      *변수보단 상수의 개념에 가깝다.
      *마찬가지로 HOIST 현상이 없다.
*/

//스크립트 기반의, 또는 기계어(프로그래밍 언어)라 불리우는 랭귀지는 에러가 난 문단 이후에 입력된 언어는 동작 되지 않는다.

// var card= 1000;
// var gum= 500;
// card = card-gum; //500
// console.log(card); //변수 안에 담긴 값이 수일 경우 변수끼리의 연산이 가능하다.

// card += 50000; // card = card+50000
// console.log(card); // -50500

// card -= 13000; //card = card-13000 
// console.log(card); // -37500

//( card < 0 ) ? console.log('잔액 부족입니다') : console.log(card); 
//삼항 연산자 문법: (조건) ? 참 : 거짓 ;* 조건? 뒤에 참이 오고, 그 뒤에 거짓이 온다.
//조건이 참일 경우 ture값 출력, 아닐 시 false값 출력.

// if ( card < 0 ) {
// console.log('잔액 부족입니다.');
// }
// else if ( card > 0 ) {
//   console.log(card); 
// }

/*
  사칙연산
  ㄴ 더하기, 빼기, 나누기, 곱하기, 나머지
  대입 연산자
  ㄴ +=, -=, *=, /= 
  증감 연산자
  ㄴ ++, --
  논리 연산자
  ㄴ ==, ===, !=, !==
  ㄴ <, >
*/ 

//기본 연산자==============================

// var int; 
// int = 10;
// console.log(int);

// int += 10; // int= int+10; 이란 뜻.
// int = int-5; 
// int = int*4;
// int = int/10; 
// int = int%4;

// console.log(int); 

// var int2 = 50125481712; 
// int2 %= 2;
// console.log(int2); 

// (int2 == 0 ) ? console.log("짝수") : console.log("홀수") ; 
// //int2를 2로 나누고 남은 나머지가 없으므로 짝수


// var i = 100; 
// i += 2019; 
// console.log(i);

// var now_year_month_date= 20191014;
// now_year_month_date += 1;
// console.log(now_year_month_date);


// var now=1207;

// now++;
// console.log(now);
// now++;
// console.log(now);


// now--;
// console.log(now);
// now--;
// console.log(now);

// ++now; 
// console.log(now);

// --now;
// console.log(now);

// var myi = 100; 
// console.log(++myi);
// console.log(++myi);
// console.log(--myi);
// console.log(--myi);
// console.log("결과 : ", myi);
// console.log(myi++);
// console.log(myi++);
// console.log(myi++);
// console.log(myi++);
// console.log("r결과2 : ", myi);

var ls = 77;
var tx = "번가 피자";
var myMv = ls + tx;
console.log(myMv);
console.log(ls+tx);

ls = 2;
tx = "번가 5번지";
myMv = ls + tx;
// console.log(myMv);

(ls < 10) ? (myMv = "0" + ls + tx ): (myMv= ls + tx) ;
console.log(myMv);
//정수는 1부터 시작하는 수이기 때문에 위와 같이 01, 02식으로 0을 붙여주고 싶을 시 삼항 연산자나 기타 다른 연산을 이용하여 문자 "0"을 강제로 붙여 보기에만 "02"로 보이게 표현 할 수밖에 없다.

var myN = parseInt(myMv); //parseInt : 변수 안에 든 값(중에서도 수만)을 Integer(정수)만 반환 시키는 함수
console.log(myN); 