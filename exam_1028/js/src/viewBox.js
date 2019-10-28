// viewBox.js

( function(){
  const viewIndi = $('.view_indicator');
  const indiList = viewIndi.find('li');
  const indiBtn = viewIndi.find('a');
  const slideForm = $('.slide_form');
  const aniBox = $('.half_box');
  const slideGuide = $('.guide');

  indiList.on('click', function(e){
    e.preventDefault();
    
    let i = $(this).index();
    if( i === 0){
      slideGuide.stop().animate({ 'left':-100 * i+'%'});
    } else if( i === 1 ) {
      slideGuide.stop().animate({ 'left':-100 * i+'%'});
    } else if( i === 2) {
      slideGuide.stop().animate({ 'left':-100 * i+'%'});
    }
  });

  aniBox.on( 'mouseenter', function(){
    aniBox.addClass('action');
  });
  aniBox.on( 'mouseleave', function(){
    aniBox.removeClass('action');
  });


})(jQuery);