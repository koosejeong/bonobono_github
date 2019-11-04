// conBox.js

( function($){

  const conBox = $('#conBox');
  const conBtn = conBox.find('button');
  const bar = conBox.find('.bar');

  conBtn.on('click', function(e){
    e.preventDefault();
    bar.toggleClass('hideBar'); //toggleClass(): 인자로 넣은 class 이름을 넣고 빼는 기능 
    let view = bar.hasClass('hideBar'); //hasClass(): class이름의 존재 유(true)무(false)를 판단
    if( view ){
      bar.stop(true, false).animate({ width:0}, 2000);
    } else {
      bar.stop(true, false).animate({ width:100 + '%'}, 2000);
    }

  });

})(jQuery);