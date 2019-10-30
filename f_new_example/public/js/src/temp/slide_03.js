
( function(){
  const slideForm = $('.slide_03_form');
  const slideGuide = slideForm.children('ul');
  let slideLi = slideGuide.find('li');
  //위에서 선언한 변수(상수)는 html의 요소를 js에서 사용하기 위해 가지고 온 것
  

  //li에 클래스명 부여 
  for( let i = 0 ; i< slideLi.length ; i++ ){
    let className = 'slide_03_con_'+(i+1);
    slideLi.eq(i).addClass(className);
  }
  let cloneLi = slideLi.eq(-1).clone(true);
  //변수 cloneLi에 마지막 li를 그 안에 든 기능까지 복제하여 대입하라는 뜻.  
  //(clone()에 true 인자를 담을 시 그 안에 기능까지 복제하겠다는 것)

  cloneLi.prependTo(slideGuide); 

  // button============================

  const slide03Btn = $('.slide_03_btn');
  const nextBtn = slide03Btn.children('.next');
  const prevBtn = slide03Btn.children('.prev');
  slideLi = slideGuide.find('li'); 
  //위에서 선언된 slideLi와 다른 li(복제되어 인덱스가 6개가 된 li)
  //위에서 선언한 변수(상수)는 html의 요소를 js에서 사용하기 위해 가지고 온 것

  let myn = 0; //myn의 초기값
  const bannerLen = slideLi.length; //bannerLen에 li의 수를 대입해라. 
  
  nextBtn.on('click', function(e){ //다음 버튼 누르면 발동하는 기능
    e.preventDefault(); // 클릭 이벤트에 내장 된 기능 초기화 
    myn++; //현재 가지고 있는 myn의 수에서 +1
    
    if( myn >=bannerLen-1 ){ 
      //증감 되어 가지고 있는 myn의 수가 bannerLen(6개-1개(복제)=5개)의 수보다 크거나 같다면,  
      slideGuide.stop().css({'left':'100%'}); 
      //광고 위치를 왼쪽 100%로 이동 시켜라 (자연스럽게 맨 처음 광고로 이동시키기 위한 css)
      myn = 0; //이동 시킨 후 myn의 수는 0으로 초기화 
    }
    let per = -100 * myn + '%'; //변수 per에 myn이 가지고 있는 수 * -100%
    slideGuide.stop().animate({'left':per}, 1000); //per가 가진 수만큼 왼쪽으로 움직이게 하라. 
    
  }); //nextBtn 

  prevBtn.on('click', function(e){ //이전 버튼 누르면 발동하는 기능 
    e.preventDefault(); //클릭 이벤트에 내장 된 기능 초기화 
    myn--; //현재 myn의 수에서 -1
    let per = -100 * myn + '%'; //변수 per는 현재 myn이 가지고 있는 수 * -100
    slideGuide.stop().animate({'left':per}, 1000, function(){ //ul을 per가 가진 수만큼 left 이동
      if( myn <= -1 ){ //현재 위치가 복제된 광고 이미지(-1)라면, 
        myn = bannerLen-2; // 총갯수(6개)에서 2개를 뺀 수(4개)로 만들어라.
      } //if
      per = -100 * myn + '%'; //변수 per는 myn이 가지고 있는 수 * -100
      slideGuide.css({'left':per}); //per가 가진  수의 위치로 이동해라.
    }); //animate에서 콜백 된 function 종료
    
  }); //prevBtn

})(jQuery);