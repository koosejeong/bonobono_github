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
  const closeGnbBtn = $('.close_gnb_btn>button');
  const sideGnb = $('.side_gnb');
  const gnbDl = gnb.find('dl');
  const gnbDd = gnb.find('dd');
  const gnbDt = gnb.find('dt');
  const gnbTitleLink = gnbDt.children('a');
  const gnbListLink = gnbDd.children('a');

  let timed = 500;

  openGnbBtn.on('click', function(e){
    e.preventDefault();
    sideGnb.fadeIn(timed/2); //500/2
    //sideGnb.show();
    
  });
  closeGnbBtn.on('click', function(e){
    e.preventDefault();
    sideGnb.fadeOut(timed);
    //sideGnb.hide();
  });
  //파라미터.preventDefault(); 
  //ㄴ내가 모르는 어떤 click 이벤트가 내장 되어 있을지 모르기 때문에 기본 이벤트 지워주고 시작. 

  //------------------------------
  //gnb에 마우스 올리면 dd 나오게 만들기.
  //객체화 만드는 코드

 const addAction = function(){
  $(this).find(gnbTitleLink).addClass('action');
  gnbDd.stop().slideDown();
};

const removeAction = function(){
  $(this).find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideUp();
};

  gnbDl.on('mouseenter', addAction);
  gnbDl.on('mouseleave', removeAction);


  //------------------------------
  //gnb>dt에 focus 시 dd가 나타나게 만들기.

  gnbTitleLink.on('focus', function(){
    gnbDd.stop().slideDown();
  });
  gnbListLink.eq(-1).on('blur', function(){
    gnbDd.stop().slideUp();
  });
  

})(jQuery);

//focus가 가능한 요소
//a, button, form(input, textarea, select)