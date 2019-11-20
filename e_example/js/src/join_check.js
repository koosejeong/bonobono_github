// join_check.js

(function($){
  // 전체 동의를 클릭하면 전체가 체크 되게 만들기
  const allCheck = $('#allCheck');
  const cbSel = $('.cb_sel');
  let ck;

  
  allCheck.on('click', function(e){

    ck = allCheck.is(':checked');
    //console.log(thisCheck);
    
    if(ck){
      cbSel.prop('checked', true); //selector.prop() => form 데이터 전달을 위한 기능적인 부분
      cbSel.attr('checked', true); //selector.attr() => 사용자 편의를 위한 시각적인 부분
      allCheck.prop('checked', true);
      allCheck.attr('checked', true);
    } else {
      cbSel.prop('checked', false);
      cbSel.attr('checked', false);
      allCheck.prop('checked', false);
      allCheck.attr('checked', false);
    }

  }); //allCheck.on(click)
  
  cbSel.on('click', function(){
  //모든 동의에 체크 되면 allCheck도 true
    let idCheck = $(this).attr('id');
    let idN = $('#' + idCheck);
    let idnIs = idN.is(':checked');
    (idnIs) ? idN.attr('checked', true).prop('checked', true) : idN.attr('checked', false).prop('checked', false) ;
    // ---------------------------------------------------
    for( let i=0; i < cbSel.length; i++){
      ck = cbSel.eq(i).is(':checked');
      //console.log(ck);
      if(ck == false){ //하나라도 미동의 시 allCheck false
        allCheck.prop('checked', false); 
        allCheck.attr('checked', false);
        break; //ck값이 true가 될 시 반복문 종료 
      } else {
        allCheck.prop('checked', true);
        allCheck.attr('checked', true);
      }
    }
 
  }); //cbSel.on(click)

})(jQuery);

//form기능에서 사용하는 jQuery 메소드
//val(); -> value값을 가져오는 기능
//is(':checked'); -> 괄호 안 셀렉터가 가진 상황/기능(실행)을 파악(checked/hover/focus...)
//prop('checked', true); -> 속성의 상황을 판단하여 역할 부여 

//break : 작업을 중단하고 반복문 빠져나가기. 
//continue : 건너 뛰기

/*
    cbSel.each(function(data){
      ck = $(this).is(':checked');
      if(ck == false){
        allCheck.prop('checked', false);
        allCheck.attr('checked', false);
      }
    });
*/


