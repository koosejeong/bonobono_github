// indicator_test_01.js

( function($){
  const minoProdut = $('#minoProdut');
  const indicator = minoProdut.children('.indicator');
  const indiLi = indicator.children('li');
  const indiLink = indiLi.children('a');
  let indiLiLen = indiLi.length;
  const adverBanner = minoProdut.find('.product').children('ul');
  const adverNth = adverBanner.children('li');

  adverNth.find('a').attr({'tabIndex':-1}); //tabIndex의 default는 0
  indiLi.eq(0).addClass('active');
  // --------------------------------------------------------
  let i = 0;
  indiLink.on('focus click', function(e){
    e.preventDefault();
    i = $(this).parent('li').index();
    adverBanner.animate({ 'marginLeft':(-100 * i) + '%'});

    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');

    $(this).on('keyup', function(e){ //키보드 제어
      e.preventDefault();
      //console.log(e.keyCode);
      if( e.keyCode === 13 ) { //엔터치면 해당 되는 광고로 포커스 가게 처리
        adverNth.eq(i).children('a').focus();
      }
    });

  }); // indiLink

  // ---------------------------------------
    let go, timed = 1000; 
    const slideGo = function(){
      go = setInterval( function(){
        i++;
        if( i >= indiLiLen ){ 
          i = 0;
        } 
        adverBanner.animate({ 'marginLeft':(-100 * i) + '%'});
        indiLi.eq(i).addClass('active');
        indiLi.eq(i).siblings('li').removeClass('active');
      }, timed );
    };
    const slideStop = function(){
      clearInterval(go);
    };
    slideGo(); //최초 호출

    minoProdut.on('mouseenter', function(){
      slideStop();
    });
    minoProdut.on('mouseleave', function(){
      slideGo();
    });
 

})(jQuery);