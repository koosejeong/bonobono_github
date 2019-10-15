// jq_o3.js

( function($) {
  //제이쿼리를 통해 요소 생성 및 크기, 속성 확인하고 변경하는 내용
  $('#myBox').css({ "width":"80%", "height":"900px", "margin":"auto", "backgroundColor":"#ddd"});

  //생성(요소, 값) ES6기반의 코드
  // const myBox = document.querySelector("#myBox");
  // const myh2 = document.createElement('h2');
  // let h2Text = document.createTextNode('jQuery text 생성');
  // myh2.appendChild(h2Text);
  // myBox.appendChild(myh2);
  // ㄴ자바스크립트 구문.

  const myBox = $("#myBox");
  myBox.append("<h2></h2>");
  const myh2 = myBox.children("h2");
  //myh2.append("jQuery를 통해 글자를 생성");
  myh2.text("jQuery를 통하여 글자를 생성");
  // ㄴ jQuery 구문
  // ㄴ html(), append(), prepend(), appendTo(), prependTo(), before(), after(), text() 등의 메소드가 있다. 
  
  myBox.html("<p>요소를 생성하였습니다.</p>"); //()안에 값이 있을 시 기존의 것을 삭제하고 추가하는 기능.
  let con = myBox.html(); 
  console.log(con); //내용을 파악할 때 사용하기도 한다.

  myBox.append("<p>요소를 추가 생성하였습니다.</p>"); //기존 요소를 두고 내부의 뒤에 추가
  let myT = $("h2");
  myT.appendTo(myBox);
  //append() : 내부에 생성하여 사용
  //appendTo() : 기존의 요소를 내부에 삽입하여 사용(기존 요소가 없을 시 생성하여 입력하지만, 있을 시 내부의 뒤에 추가한다. )

  myBox.prepend("<p>요소를 앞에 추가로 생성하였습니다.</p>"); // 기존 요소를 그대로 두고, 내부의 앞에 추가
  myT.prependTo(myBox); // 기존의 요소를 내부에 삽입하여 사용(기존 요소가 없을 시 생성하여 입력하지만, 있을 시 내부의 앞에 추가한다. )

  // append, prepend, appendTo, prependTo 
  // ㄴ 이는 모두 값을 내부에 삽입하는 기능이지만, 해당 요소를 만들어서 삽입 하거나, 기존의 요소를 끌어와서 삽입한다.
  // ㄴ 메소드 이름 뒤에 To가 붙을 시 주어의 위치가 바뀌는 것을 의미한다. 

  //brfore, after
  myBox.before('<div class="beforeBox"<div>'); //myBox 전에 brforeBox 생성
  myBox.after('<div class="afterBox"<div>'); //myBoxm 후에 afterBox 생성

  let myBefore = myBox.prev(); // ??
  let myAfter = myBox.next(); // ??
  console.log(myBefore, myAfter); 

  // myBox.empty(); //선택한 것(myBox)를 제외하고 그 안의 것들을 삭제
  // myBox.remove(); //선택한 것(myBox)을 그대로 삭제

  //크기, 속성 확인===============================================
  //width(), height(), innerWidth(), outerWidth(), outerWidth(true), innerHeight(), outerHEight(), outerHeight(true)
  // ㄴ위와 유사한 메소드: css('width'), css('height')
  //attr(), removeAttr()
  //parseInt(), parseFloat()
  
  const resultBox = $('#resultBox');
  // let resultWidth = resultBox.width(); //padding, border를 제외한 width값 반환
  // console.log(resultWidth);
  // let resultinnerWidth = resultBox.innerWidth(); //padding 값을 포함한 width값 반환
  // console.log(resultinnerWidth);
  // let resultouterWidth = resultBox.outerWidth();
  // console.log(resultouterWidth); //padding, border값을 포함한 width값 반환

  // let resultoutertureWidth = resultBox.outerWidth(true); // 인수에 true 입력 시 margin값을 포함한 width값 반환
  // console.log(resultoutertureWidth);
/*
  let resultBoxWidth = resultBox.css('width');
  let resultPaddingWidth = parseInt(resultBox.css('paddingLeft'))+parseInt(resultBox.css('paddingRight')); //위와 같은 구문은 padding의 한쪽 값만 구할 때 사용하긴 한다고 한다. 젠장...
  let parseWidth = parseInt(resultBoxWidth)+ resultPaddingWidth;
  console.log(parseWidth);
  */

let url = 'http://www.naver.com';
let myat = resultBox.attr({'clsaa':'adc', 'data-class':url}); 
//주체에 속성을 부여하거나, 어떤 속성인지 알 수 있다. 
//다수의 속성을 부여하고 싶거든 객체 형식{}으로 입력한다. 
//console.log(myat);
resultBox.on('click', function(){
  resultBox.after('<a href="'+'url'+'">클릭 시 이동합니다.</a>');
  resultBox.after(`<a href="${url}">클릭 시 이동합니다2</a>`); //ECMA6 기반 코드(속성을``으로 감싸줘야 한다.)
  resultBox.removeAttr('id');
});

//jQuery를 능숙하게 사용하려면 메소드 체인, 콜백 개념을 잘 알아야 한다.(js에도 있는 개념)
//메소드 체인 : 메소드를 체인처럼 연결하여 사용하는 문법. $변수().메소드().메소드().; ...식으로 .으로 연결하여 사용하는 문법.
//콜백 : 아래와 같이 하나의 함수 안에 다시 함수를 호출하여 사용하는 것을 콜백이라고 한다. 
/* 
$().find({}, function(){
  $().animatte({} function(){
    $().animate({} function(){
      $().animate();
    })
  })
}); 
*/

//이벤트, show(), hide(), fadeIn(), fadeOut(), slideUp(), slideDown(), toggle(), hasClass()...


})(jQuery);