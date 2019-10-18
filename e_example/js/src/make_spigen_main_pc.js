// make_spigen_main_px

(function(){
  //1. #gnb 영역 내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여 넣기
  //clone() 메소드 사용

  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area');
  

  let gnbContents = gnb.contents().clone(); 
  //  ㄴgnb 컨텐츠 통으로 복제
  //console.log(gnbContents);
  sideGnbArea.append(gnbContents);
  //  ㄴ복제한 요소를 append()
  //  ㄴ선언된 변수가 html의 무엇을 가지고 온 건지 확인하면 이해하기 쉽다.

  //----------------------------
  //버튼 클릭 시 side_gnb 나타나게 만들기
  const openGnbBtn = $('.gnb_btn>button');
  const closeGnbBtn = $('.close_gnb_btn');
  const sideGnb = $('.side_gnb');
  let timed = 500;

  openGnbBtn.on('click', function(){
    //sideGnb.show();
    sideGnb.fadeIn(timed/2); //500/2
    
  });
  closeGnbBtn.on('click', function(){
    //sideGnb.hide();
    sideGnb.fadeOut(timed);
  });


})(jQuery);