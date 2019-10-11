//function_basic_01.js

/*

  함수엔 선언식, 표현식이 있다.
  익명함수, 즉시실행함수(IIFE), (ECMA6 이후 사용 가능한)화살표함수 등이 있다.

  함수 선언식 : 함수에 이름을 붙여서 사용하는 것.
  함수 표현식 : 변수에 함수를 대입하여 사용하는 것.

  익명 함수 : 함수 선언 전에  var 변수 = function() { }으로 변수에 함수를 대입하는 것. -함수 선언 후 반드시 세미콜론으로 종료. 
  즉시 실행 함수 : ()();
    ㄴ (function() {
        
      })();
    ㄴ 함수 선언식이나 표현식에서처럼 변수를 생성해 함수를 호출하지 않아도 바로 실행 된다.
    ㄴ 이때, 문장의 마지막에 있는 () 안에 인수가 들어간다. 
  
  화살표 함수 : var 변수 = () => {}
    ㄴfunction 을 생략한 문법 체계를 갖는다. 
    ㄴ가운데 ()에 매개변수가 들어간다.
    ㄴIE 하위 버전에선 적용 되지 않는다. 
  

  function 함수명 () {}
    ㄴ함수의 이름은 내가 만들 수 있다.
    ㄴ함수명 옆, 소괄호 안에 매개변수가 들어간다.
    ㄴ중괄호 안에 처리돼야 할 로직/수식 등을 입력한다.
    ㄴ이를 함수 선언식이라고 한다.
    ㄴ로직 입력 전, return을 선언해야만 그 값이 반환 된다.
    ㄴ함수 생성 후, 함수명을 호출해야만 반환된 값을 알 수 있다.
    ㄴ이때 함수 호출 시, 내가 만든 함수 밖에서 변수 선언 후 호출해야 한다. (광역 변수)
    ㄴ광역 변수를 선언하여 그 변수 안에 함수명을 넣어 반환 된 값을 확인할 수 있다.
    ㄴ이를 함수 표현식이라고 한다.
    ㄴ값을 반환한 후엔 함수가 종료 된다.
    ㄴreturn 선언 전에 로직을 짜고, 그 로직을 담은 변수(전역 변수)를 return 값으로 준다.
    ㄴ반복문, 조건문 등을 활용하는 경우가 많다.

  

  var pr = 100;
  (function(myp) {
    console.log(myp+1);
  })(pr); //즉시 실행 함수

  function Fn(myp) {
    console.log(myp+1);
  }
  Fn(pr);

  var Fn2 = function(myp) {
    console.log(myp+1);
  }
  Fn2(pr);

  함수명 옆에 있는 소괄호에는 파라미터가 들어가기 때문에, 위와 같이 pr(인수의 개념을 갖는다)에 100을 대입했을 시 pr의 값은 100이 된다. 함수 호출 시, 해당 함수에 들어갈 인수로 선언한 pr을 넣어주는 것이다.
    ㄴ그럼 pr의 값이 함수명 옆 매개변수로 전달 되고, 매개변수가 자신의 값을 return으로 전달한다. 

  함수는 말 그대로 내가 짠 로직을 실행하는 기능이고, 그 기능을 일일이 열거하여 사용하기엔 너무 번거롭기 때문에 그 기능에 임의의 이름을 지어주는데, 그 이름이 바로 내가 실행코자 하는 기능을 호출하는 키가 된다.

  그 함수가 제대로 돌아가기 위해선 인수가 필요하고, 함수명(인수); 와 같은 문법 체계를 갖는다. 
    ㄴ 이때, 인수의 값이 위 () 안의 매개변수로 전달 된다. 
    ㄴ 함수명(); 와 같은 문법 체계에서, () 안에 들어가는 것을 인수라고 하며, 인수의 실제 값은 대부분 변수 선언 후 그 변수에 대입 하기 때문에 변수명을 입력하는 경우가 대부분이다.

  함수는 여러 기능을 하나로 묶어서 처리하는 것이다.
  생성과 동시에 실행 되지 않는다.
  즉, 호출을 해야지만 동작한다.
  이때, 함수를 객체 내부에 생성시킨 후에 해당 객체를 실행하면 함수가 동작한다.
  이때 동작하는 객체명을 메소드라고 한다.

  이름(); =>함수
  무언무언가.이름(); =>메소드

  함수를 사용하는 이유는, 복잡한 수식을 하나의 이름으로 처리해서 간단하게 호출함으로서 결과를 바로 얻을 수 있게 처리하기 위함이다. 
    ㄴ함수 문법 공부 필!!

*/

function myCoffee(a) {
  var b = a* 100;
  return b;
}

var rel_1 = myCoffee(100);
console.log( rel_1 );
var rel_2 = myCoffee(2);
console.log( rel_2 );

function useName(a) {
  return a + "님 어서 오십시오";
}

var u_01 = useName('구세정');
console.log( u_01 );

function test(color) {
  var web = document.getElementsByTagName('body')[0];
  return web.style.backgroundColor= "#" + color;
}

t2();  

function t2() {
  console.log( 't2 싷행' );
}
//실행 됨(hoist현상 적용)


var varibleFn = function(n) {
  return (n+100)*10;
}; //var로 시작했기 때문에(변수 선언과 같은 의미) 함수 종료 후 ; 입력 필.
var v = varibleFn(7);
console.log(v);
//위와 같은 순서로 함수를 선언할 시, hoist 현상이 일어나지 않는다.
//위와 같은 순서의 함수를 익명 함수라고 한다.

var pr = 100;
(function(myp) {
  console.log(myp+1);
})(pr); //즉시 실행 함수

function Fn(myp) {
  console.log(myp+1);
}
Fn(pr);

var Fn2 = function(myp) {
  console.log(myp+1);
}
Fn2(pr);
//모두 동일한 결과값이 나온다.


var f1 = function () {
    return 10;
}
console.log( f1() ); //일반적인 함수 표현식

var f2 = (a) => { 
  return a+10;
}
console.log( f2(15) ); 
//25 출력(화살표 함수)
//15는 인수, a는 매개변수
//15를 a가 전달 받고, 그 a값을 return으로 전달한다. 


var myName = function(b) { //아래에서 전달 받은 b의 값을 return b에게 전달.
  return b;
};

var myCon = { 
  name: myName("sj") //()에 입력한 sj가 위 function 옆 매개변수로 전달 된다. 
};
console.log(myCon.name);

