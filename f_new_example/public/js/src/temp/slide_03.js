
( function(){
  const slideForm = $('.slide_03_form');
  const slideGuide = slideForm.children('ul');
  let slideLi = slideGuide.find('li');

  slideForm.css('overflow','hidden');

  //li에 클래스명 부여 
  for( let i = 0 ; i< slideLi.length ; i++ ){
    let className = 'slide_03_con_'+(i+1);
    slideLi.eq(i).addClass(className);
  }
  let cloneLi = slideLi.eq(-1).clone(true);
  //clone()에 true 인자를 담을 시 그 안에 기능까지 복제하겠다는 뜻. 

  cloneLi.prependTo(slideGuide); 

  // button============================

  const slide03Btn = $('.slide_03_btn');
  const nextBtn = slide03Btn.children('.next');
  const prevBtn = slide03Btn.children('.prev');
  slideLi = slideGuide.find('li'); 
  //위에서 선언된 slideLi와 다른 li(복제되어 인덱스가 6개가 된 li)
  //

  let myn = 0;
  const bannerLen = slideLi.length;
  
  nextBtn.on('click', function(e){
    e.preventDefault();
    myn++;
    if( myn >=bannerLen-1 ){ //-1:스와이프 될 실 이미지는 5개이므로 li.length(6개)에서 -1
      myn = 0;
    }
    slideGuide.stop().animate({'left':-100 * myn + '%'});
    
  });

  prevBtn.on('click', function(e){
    e.preventDefault();
    myn--;
    if( myn <= 0 ){
      myn = bannerLen-2;
    }
    slideGuide.stop().animate({'left':-100 * myn + '%'});
    
  });

})(jQuery);