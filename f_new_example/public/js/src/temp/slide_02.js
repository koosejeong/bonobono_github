( function($){
  const viewBox2 = $('#viewBox_02');
  const indicator = viewBox2.find('.indicator');
  const indiLi = indicator.find('li');
  const indiLiLink = indiLi.children('a');

  const viewBtn = viewBox2.find('.view_btn');
  const play = viewBtn.find('.play');
  const pause = viewBtn.find('.pause');

  const slideForm = viewBox2.find('.slide_02_form');
  const slideGuide = slideForm.children('.guide');
  const slideEach = slideGuide.children('.banner_area');

  let timed = 500;
  let myn = 0; //시작점이 될 임의의 변수 선언(on click과 setInterval에서 동시에 사용할 카운트값)
  let maxn = slideEach.length;
  let mybool = true;
  let linkFocus = true;
  let go;

  // ----------------------------------------------------

  //slideEach.eq(0).addClass('action');
  //indiLi.eq(0).children(indiLiLink).addClass('action');


  
  // action class이름 첨부기능수행
  const MoveSlide = function(n){
    indiLiLink.removeClass('action'); //모든 a의 action 클래스 지우기
    indiLi.eq(n).children('a').addClass('action'); //선택된 a에 action 클래스 주기
    slideGuide.animate({'marginLeft':(-100 * n) + '%'}, function(){
      slideEach.removeClass('action'); // 액션 효과 지우기
      //slideEach.eq(n).addClass('action'); //n번째 광고(div)에만 action 효과 주기
      
      setTimeout( function(){
        slideEach.eq(n).addClass('action');
      }, timed); //0.5초뒤에 action 효과 실행
    });
  }
  MoveSlide(0);

  //일정시간 마다 배너 움직이기-------------------------------------------

  const goSlide = function(){
    go = setInterval(function(){
    myn++;
    if( myn >= maxn ){
      myn = 0; //가지고 있는 배너의 수를 넘기지 않도록 초기화 
    }
    MoveSlide(myn); 
    }, timed * 4);
  } //goSlide
  
  const StopSlide = function(){
    clearInterval(go)
  };
  
  // ----------------------------------------------------------------------

  const playBanner = function(bool){
    if(bool){
      goSlide();
    } else {
      StopSlide();
    }
    mybool = bool;
  }; //playBanner


  //공통 수행 영역 -----------------------------------------------
  //버튼부 수행

  const showBtn = function(bool){
  // play, stop 버튼 동작유무 판단 
  if(bool){
      play.hide();
      pause.show();
    } else {
      play.show();
      pause.hide();
    }
  }; //showBtn

  showBtn(mybool);
  playBanner(mybool);

  // -----------------------------------------------------------------------

  viewBox2.on('mouseenter', function(){
    playBanner(false);
  });
  viewBox2.on('mouseleave', function(){
    (linkFocus) ? playBanner(true) : playBanner(false);
    console.log(linkFocus);
  });
  viewBox2.on('click', function(){
    showBtn(false);
    play.show().focus();
  });
  viewBox2.on('click', function(){
    showBtn(true);
    pause.show().focus();
  });

  //----------------------------------------------------------------
  //클릭 시 배너 움직이게 만들기.

  indiLiLink.on('click focus', function(e){
    e.preventDefault();
    e.stopPropagation();
    let myn = $(this).parent('li').index();
    playBanner(false);
    MoveSlide(myn);
  });
  
  indiLiLink.off('focus', function(){
    linkFocus = false;
  });
})(jQuery);


  //delay() - animation 처리를 하는 메소드 앞에만 사용할 수 있다. 
  //setTimeout() : 일정 시간 뒤에 수행
  //setInterval() : 일정 시간마다 수행
  //clearInterval() : setInterval()의 기능을 취소/정지

   /* 
  //trigger()를 이용한 광고 슬라이드 효과 주기
  let i = 0;
  setInterval(function(){
    i++;
    indiLiLink.eq(i).trigger('click');

  }, timed * 3);
  
  */

  




