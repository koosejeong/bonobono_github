// join.js
(function($){
  let checkPw = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9].{6,15}$)/; 
    //영문(대소문자) 및 숫자(특수문자) 포함하여 6~15자 이상

  let emailCk = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    //email형식 체크( 도메인@주소.지역 )

  let numCk = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    //전화번호 형식 체크

    //email---------------
    const userName = $('#userId');
    
    userName.on('blur', function(){
      let thisVal = $(this).val();
      let thisLi = $(this).closest('li');
      if(thisVal == ""){
        $(this).closest('li').addClass('error');
      } else if(!emailCk.test(thisVal)){
        $(this).closest('li').addClass('error');
        $(this).closest('li').find('.narr').text('이메일 주소를 입력하여 주십시오');
      } else {
        thisLi.removeClass('error');
      }
    });

    // -------------------------------
    // pw 비교하여 일치하는지 확인
    const userPw = $('#userPassword');
    const userPwRe = $('#reuserPassword');
    const pwlabel = $('label[for="userPassword"]');
    // -------------------------------

    pwlabel.on('mousedown', function(e){
      if(e.which){ //왼버튼 클릭 시
        userPw.attr({type:'text'});
      }
    });
    pwlabel.on('mouseup keyup mousemove', function(e){
      userPw.attr({type:'password'});
    });

    let beforePwVal, afterPwVal;
    userPw.on('keyup', function(){
      beforePwVal = userPw.val();
      let thisLi = $(this).closest('li');
      let thisVal = $(this).val();
      if(thisVal == ""){
        thisLi.addClass('error');
        thisLi.find('.narr').text('비밀번호를 입력하세요');
      }else if(thisVal.length <= 5) {
        thisLi.find('.narr').text('비밀번호는 6~15자리입니다.');
        thisLi.addClass('error');
      } else if( !checkPw.test(thisVal)) {
        thisLi.find('.narr').text('영문/숫자/특수문자 혼용하여 입력');
        thisLi.addClass('error');
      } else {
        thisLi.removeClass('error');
      }
    });
    userPwRe.on('keyup', function(){
      afterPwVal = userPwRe.val();
      if( beforePwVal !== afterPwVal){
        $(this).closest('li').addClass('error');
      }else{
        $(this).closest('li').removeClass('error');
      }
    });

    // 정규 표현식 : RegExp(regular expression)
    let a = 10;
    let b = 4;
    let c = 8;
    let re = /a + c/;
    let re2 = new RegExp('a + c');
    console.log(re);
    console.log(re2);

  
})(jQuery);

/*
let r = 'a'; //문자
let n = 0; //숫자
let v = r; //변수 재할당
let a = []; //배열
let o = {}; //객체
let re = / 값값값 /; // '/'와 '/' 로 감싼 구문을 정규 표현식이라고 한다.

let t = /^a&$r/.test('after'); //^:시작 $:끝 (a로 시작하고 r로 끝나냐고 묻는 것)

//정규 표현식 메소드
  //1. exec    : 대응되는 문자열을 찾는 메소드(배열값으로 반환)
  //2. test    : 해당하는 문자열의 유무 파악(논리형 반환(true/false))
  //3. match   : 해당하는 문자열의 유무 파악(배열값으로 반환) 
  //4. search  : 해당하는 문자열의 유무 파악(인덱스값(숫자)으로 반환)
  //5. replace : 찾아 바꾸기
  //6. split   : 문자열을 배열로 반환(string 메소드)
*/