// // jq_02.js
// // 선택자

// ( function($){

//   document.getElementById('#box');
//   document.querySelector('#box');
//   $('#box')
//   //아이디는 하나의 문서에 하나밖에 사용할 수 없기 때문에 복수형이 들어가지 않는 문법이다.

//   document.getElementsByTagName('p')[0];
//   //p와 같은 다수의 중첩된 태그를 선택 시 () 뒤 [] 안에 몇 번째인지 입력해줘여 한다.
//   document.querySelectorAll('p');
//   //모든 p를 선택한다는 것
//   $('p')

    $('.box p').css({ "padding":"0.5rem", "backgroundColor":"#fa0"});
    $('.box').find('p').css({"color":"#f03", "textShadow":"0.2rem 0.2rem 0.2rem rgba(0,0,0,0.7)"});
// //    //클래스 박스의 자손 중 하나인 p

    $('.box>p').css({ "borderBottom":"2px solid #111"});
    $('.box').children('p').css({ "transform":"rotate(45deg)"});
//    클래스 박스의 자식인 p


   $('dl>dt+dd').css({ "backgroundColor":"#acc"});
   $('dl').children('dt').next('dd').css({"fontSize":"2rem"});
// dl의 자식인 dt의 바로 뒤에 오는 형제인 dd

   $('dl>dt~dd').css({"marginLeft":"2rem"});
   $('dl').children('dt').nextAll('dd').css({"color":"#f03"});
// dl의 자식인 dt의 형제 중 하나인 dd

   $('ul>li:nth-child(1)').css({"backgroundColor":"#ffa"});
   $('ul').children('li:nth(0)').css({"color":"#077"});
   $('ul').children('li:nth(-1)').css({"color":"#f77"});
   $('ul').children('li').eq(0).css({"borderBottom":"2px solid #333"});
   $('ul').children('li').eq(-1).css({"borderBottom":"2px solid #f05"});
//  ul의 자식은 li의 첫번째 자손인 li를 선택
//  javascript에서 -1은 끝에서 가장 첫 번째에 있는 자손을 뜻한다.


  $('ul').find('li:eq(-2)').siblings().css({"borderLeft":"3px solid #f06"}); 
  //li의 끝에서 두 번째 자손의 형제들 선택
  //li의 끝에서 두 번째 자손을 제외한 모든 형제들에게 borderLeft가 적용 되는 것을 볼 수 있다. 
  
  $('.exr01').css({"width":"1000px", "height":"250px", "margin":"auto", "backgroundColor":"#fff", "border":"3px solid #333"});
  $('.exr02').css({ "width":"900px", "height":"200px", "margin":"auto", "backgroundColor":"#eee", "border":"3px solid #333"});
  $('h2').css({"width":"300px", "height":"auto", "fontSize":"20px", "border":"3px solid #5a6"});
  $('a').closest('.exr02').css({"border":"10px solid #006"});

// 자식:children
// 자손:find
// 인접형제(동생 선택 시):next
// 형제(동생들 선택):nextAll
// 부모:parent
// 조무보(증조, 증증조 모두 포함):parents, parentsUntil, closest
// 형제(바로 위 형):prev
// 형제(형들): prevAll
// 다른 형제(나를 제외한):siblings

// })(jQuery);