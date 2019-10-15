// // jq_02.js
// // 선택자

 ( function($){

//  document.getElementById('#box');
//  document.querySelector('#box');
//  $('#box')
//  아이디는 하나의 문서에 하나밖에 사용할 수 없기 때문에 복수형이 들어가지 않는 문법이다.

//   document.getElementsByTagName('p')[0];
//   p와 같은 다수의 중첩된 태그를 선택 시 () 뒤 [] 안에 몇 번째인지 입력해줘여 한다.
//   document.querySelectorAll('p');
//   //모든 p를 선택한다는 것
//   $('p')

    // $('.box p').css({ "padding":"0.5rem", "backgroundColor":"#fa0"});
    // $('.box').find('p').css({"color":"#f03", "textShadow":"0.2rem 0.2rem 0.2rem rgba(0,0,0,0.7)"});
// 클래스 박스의 자손 중 하나인 p

    // $('.box>p').css({ "borderBottom":"2px solid #111"});
    // $('.box').children('p').css({ "transform":"rotate(45deg)"});
//  클래스 박스의 자식인 p


  //  $('dl>dt+dd').css({ "backgroundColor":"#acc"});
  //  $('dl').children('dt').next('dd').css({"fontSize":"2rem"});
// dl의 자식인 dt의 바로 뒤에 오는 형제인 dd

  //  $('dl>dt~dd').css({"marginLeft":"2rem"});
  //  $('dl').children('dt').nextAll('dd').css({"color":"#f03"});
// dl의 자식인 dt의 형제 중 하나인 dd

  //  $('ul>li:nth-child(1)').css({"backgroundColor":"#ffa"});
  //  $('ul').children('li:nth(0)').css({"color":"#077"});
  //  $('ul').children('li:nth(-1)').css({"color":"#f77"});
  //  $('ul').children('li').eq(0).css({"borderBottom":"2px solid #333"});
  //  $('ul').children('li').eq(-1).css({"borderBottom":"2px solid #f05"});
//  ul의 자식은 li의 첫번째 자손인 li를 선택
//  javascript에서 -1은 끝에서 가장 첫 번째에 있는 자손을 뜻한다.


  // $('ul').find('li:eq(-2)').siblings().css({"borderLeft":"3px solid #f06"}); 
  //li의 끝에서 두 번째 자손의 형제들 선택
  //li의 끝에서 두 번째 자손을 제외한 모든 형제들에게 borderLeft가 적용 되는 것을 볼 수 있다. 
  
  // $('.exr01').css({"width":"1000px", "height":"250px", "margin":"auto", "backgroundColor":"#fff", "border":"3px solid #333"});
  // $('.exr02').css({ "width":"900px", "height":"200px", "margin":"auto", "backgroundColor":"#eee", "border":"3px solid #333"});
  // $('h2').css({"width":"300px", "height":"auto", "fontSize":"20px", "border":"3px solid #5a6"});
  // $('a').closest('.exr02').css({"border":"10px solid #006"});

// 자식:children
// 자손:find
// 인접형제(동생 선택 시):next
// 형제(동생들 선택):nextAll
// 부모:parent
// 조무보(증조, 증증조 모두 포함):parents, parentsUntil, closest
// 형제(바로 위 형):prev
// 형제(형들): prevAll
// 다른 형제(나를 제외한):siblings


let first=$('#first');
let str=first.find('strong');
$('#first').css({ "padding":"0.5rem", "backgroundColor":"#fcc"});
str.find('strong').css({ "color":"#f07"});

//============

str.parent().css({ "padding":"0.3rem", "backgroundColor":"#ccf"});
// str('strong')의 부모는 a 태그이므로 parent() 안에 정확하게 부모인 a를 적어 주거나 비워두는 게 좋다.(비워둬도 정확하게 부모를 찾아 스타일이 적용 된다.)
// str.parents("#first").css({ "padding":"0.2rem","border":"1px solid #333"});
// ㄴparents() 안에 아무 것도 입력하지 않을 시 주체(str)의 모든 부모격(최상위 부모인 html까지)에게 스타일을 적용 시키고, 정확하게 적용 시키고자 원하는 클래스나 아이디를 입력하면 해당 요소(자신)까지 동작 한다.

//str.parentsUntil("#first").css({"padding":"0.2rem","border":"1px solid #99f"});
// ㄴ parentsUntil()에 주체가 될 요소를 입력 시 해당 되는 본인(first)을 제외한 모든 부모격 요소에 스타일이 적용 된다.
// ㄴ 입력하지 않을 시 최상위 부모에게까지 스타일이 적용 된다.

str.closest("#first").css({"padding":"0.2rem","border":"1px solid #99f"});
// ㄴ closest()는 안에 주체가 될 요소를 입력하지 않을 시 어떤 일도 일어나지 않는다.
// ㄴ closest()에 주체가 될 요소 입력 시 해당 요소까지 동작 한다. 

/*
  parent() : 주체의 부모까지만 동작(요소를 입력하지 않아도 동작)
  parents([selector]) : 부모이자 조상에 해당 되는 요소, 선택값을 입력 시 선택 요소까지 적용 된다. 
  parentsUntil([selector]) : parents와 기본 적으로 같은 개념이지만, 선택값을 입력 시 선택 요소의 자식까지만 동작한다. 
  closest(selector) : 선택값이 없을 시 동작 하지 않는다. 선택값 입력 시 선택 요소만 처리 된다.(1.8버전까지만 정상 적으로 동작한다??) 

  ㄴ 위 설명의 ()안에 []는 입력해도 입력하지 않아도 동작 된다는 것.(필수값이 아니라는 말)
*/ 


 })(jQuery);