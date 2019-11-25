// join.js
(function($){
  const userName = $('#userId');

  userName.on('blur', function(){
    let thisVal = $(this).val();
    if(thisVal == ""){
      $(this).closest('li').addClass('error');
    }
    });

    // -------------------------------
    // pw 비교하여 일치하는지 확인
    const userPw = $('#userPassword');
    const userPwRe = $('#reuserPassword');

    let beforePwVal, afterPwVal;
    userPw.on('keyup', function(){
      beforePwVal = userPw.val();
      let thisVal = $(this).val();
      let thisLi = $(this).closest('li');
      if(thisVal == ""){
        thisLi.addClass('error');
        thisLi.find('.narr').text('비밀번호를 입력하세요');
      }else if(thisVal.length <= 5) {
          thisLi.find('.narr').text('비밀번호는 6~15자리입니다.');
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

    //정규 표현식 메소드
    //1. exec    : 대응되는 문자열을 찾는 메소드(배열값으로 반환)
    //2. test    : 해당하는 문자열의 유무 파악(논리형 반환(true/false))
    //3. match   : 해당하는 문자열의 유무 파악(배열값으로 반환) 
    //4. search  : 해당하는 문자열의 유무 파악(인덱스값(숫자)으로 반환)
    //5. replace : 찾아 바꾸기
    //6. split   : 문자열을 배열로 반환(string 메소드)
    
  
})(jQuery);

/*
let r = 'a'; //문자
let n = 0; //숫자
let v = r; //변수 재할당
let a = []; //배열
let o = {}; //객체
let re = / 값값값 /; // '/'와 '/' 로 감싼 구문을 정규 표현식이라고 한다.
*/