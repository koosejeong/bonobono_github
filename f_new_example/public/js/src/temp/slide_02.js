( function($){
  const viewBox2 = $('#viewBox_02');
  const indicator = viewBox2.find('.indicator');
  const indiLi = indicator.find('li');
  const indiLiLink = indiLi.children('a');

  const slideForm = viewBox2.find('.slide_02_form');
  const slideGuide = slideForm.children('.guide');
  const slideEach = slideGuide.children('.banner_area');

  let timed = 500;


  // ----------------------------------------------------

  slideEach.eq(0).addClass('action');
  indiLi.eq(0).children(indiLiLink).addClass('action');

  indiLiLink.on('click', function(e){
    e.preventDefault();
    let myThis = $(this);
    let myThisPar = myThis.parent('li');
    let i = myThisPar.index();

    indiLiLink.removeClass('action');
    myThis.addClass('action');
    slideGuide.animate({'marginLeft':(-100 * i) + '%'}, function(){
      slideEach.removeClass('action');
      slideEach.eq(i).addClass('action');
      
      setTimeout( function(){
        slideEach.eq(i).addClass('action');
      }, timed );
    });
  });

  //변수 i는 외부에서 공용으로 사용할 수 있도록, 전역 변수로 선언해야 한다.
  //인디케이터, 광고배너 이동 후 처리하는 방법은 별도의 함수 처리. (let i=myThis... ~ setTimeout() 까지 한데 묶어서 함수화하여 처리.)
  //setInterval(), clearInterval()

  let go;
  const Goslide = () =>{
    go =  setInterval(function(){ /* 수행할 기능*/ }, timed*5)
  }
  const stopSlide = clearInterval(go);
  viewBox2.on('mouseenter', stopSlide);
  viewBox2.on('mouseleave', goSlide);


})(jQuery);

//delay - animation 처리를 하는 메소드 앞에만 사용할 수 있다. 