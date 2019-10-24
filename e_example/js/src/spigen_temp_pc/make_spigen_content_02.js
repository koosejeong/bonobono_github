// make_spigen_content_02.js

( function(){

    const conBox2 = $('.fullBox');
    const conBoxLink = conBox2.find('.box>a');

    conBoxLink.on( 'mouseenter focus', function(){
      $(this).addClass('action');
    }).on( 'mouseleave blur', function(){
      $(this).removeClass('action');
    });

    // =============================================
    // scroll 이벤트 사용하여 스크롤바가 일정량 움직였을 시 top_move_btn 생성 되게 만들기.
    // scrollTop() : 스크롤바가 움직인 위치값을 파악하는 메소드.
    // offset().top : 브라우저 위를 기준으로 (떨어져 있는) 위치값을 파악하는 메소드.
    //offset().left (뒤에 붙는 방향은 프로퍼티)
    // mousewheel, DOMMouseScroll (크로스 브라우징 가능하게 하는 방법??)
    // BOM, DOM

    let conBoxOffset = conBox2.offset().top; 
    const topBtn = $('.top_move_btn');
    const win = $(window);
    //win.on( 'scroll', function(e){});
    win.on( 'scroll', (e) => {
      //console.log(e);
      let scrollResult = $(this).scrollTop();
      //console.log(scrollResult);
      if(scrollResult > conBoxOffset){
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    
    });

    topBtn.on( 'click', (e) => {
      e.preventDefault();
      $('html, body').stop().animate({'scrollTop':0}, 1000, 'easeOutCubic', () => {
        $('h1>a').focus();
      });
    });

})(jQuery);


/*
  *자주 사용하는 이벤트 1
  mouseenter, mouseleave, click, focus, blur, keyup
  ==================================================
  *자주 사용하는 메소드
  1. 선택자(자식, 부모, 형제)
  2. show/hide, addClass/removeClass
  3. attr/removeAttr
  ==================================================
  *불러오 거나 삽입하는 기능
  1. text, append, prepend
  2. load
  ==================================================
  *자주 사용하는 문법
  1. 연산자
  2. if, switch, for
  3. function
  4. let, const
  ==================================================
  *가끔 사용하지만 꼭 알아야 하는 메소드
  1. parseInt()
  ==================================================
  *익혀둬야 하는 메소드
  1. eq(), index()
*/