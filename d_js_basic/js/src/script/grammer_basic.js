
/*
  문법 기초 1
  *조건문: 특정한 조건을 확립하여 해당 조건에 충족할 시(참) 수행하고, 충족하지 못할 시(거짓) 수행하지 않도록 처리하게 만드는 문법.
    ㄴ단순분기: 하나의 조건에 참/거짓 (if~else)
    ㄴ다수분기: 다수의 조건에 참/거짓 (switch)

  *반복문: 2번 이상의 일을 반복 수행할 경우, 단순히 반복하여 수행하게 하는 것이 아니라 자동으로 수행하도록 처리하게 만드는 문법. 

*/

var i = 10; 
var text;

if ( i<10) {
  text="주어진 숫자는 10보다 작은 수입니다.";
} else if( 1===10 ) {
  text="주어진 숫자는 10입니다.";
} else {
  text="주어진 숫자는 10보다 큰 수입니다.";
}
console.log( text );


// ==============================

var myMenu = function() {

  var coffee, text, menu;
  menu = ['americano', 'latte', 'moca', 'vanyla', 'esspresso'];
  coffee = prompt('원하시는 메뉴를 입력해 주세요 \n 메뉴:' + menu);
 

  switch(coffee) {
    case menu[0]:
      text = '얼어 죽어도 아이스 아메리카노';
    break;

    case menu[1]:
      text = "커피는 우유와 함께";
    break;

    case menu[2]:
      text = "초콜렛은 어디든 함께 한다.";
    break;

    case menu[3]:
      text ="우리 엄마 주 메뉴";
    break;

    case menu[4]:
      text ="왜 먹어 누가 먹어 취좆할 거야";
    break;

    default:
      text = "난 그냥 물이나...";
    break;

  }
  // console.log( text );
  let myP = document.getElementsByTagName('p')[0];
  myP.innerHTML = text;

};
var myBtn= document.getElementById('coffeeMenu');
myBtn.addEventListener('click', function() {
  myMenu();
});

