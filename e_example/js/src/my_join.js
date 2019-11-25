// join.js
(function($){
  const userName = $('#memberId');

  userName.on('blur', function(){
    let thisVal = $(this).val();
    if(thisVal == ""){
      //console.log('사용하실 이메일 주소를 입력해 주세요');
      $(this).closest('li').addClass('.error');
    }
  });
})(jQuery);