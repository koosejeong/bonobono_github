// jq

( function($){
  const showHide = $('.showHide').children('li'); 
  const fade = $('.fade').children('li');
  const slide = $('.slide').children('li');
  const class_control = $('.class_control').children('li'); 
  const viewBox = $('.view_area');

  //show, hide, toggle
  showHide.eq(0).on('click', function(){
    viewBox.show(500);
  });
  showHide.eq(1).on('click', function(){
    viewBox.hide(500);
  });
  showHide.eq(2).on('click', function(){
    viewBox.toggle(500);
  }); //가로 세로값을 대각선으로 보이 거나 사라지게 만드는 기능

  //===================================
  //fadeIn, fadeOut, fadeToggle
  fade.eq(0).on('click', function(){
    viewBox.fadeIn(500);
  });
  fade.eq(1).on('click', function(){
    viewBox.fadeOut(500);
  });
  fade.eq(2).on('click', function(){
    viewBox.fadeToggle(500);
  }); //뿌옇게 나타났다가 사라지는 기능.

  //===================================
  //slideDown, slideUp, slideToggle
  slide.eq(0).on('click', function(){
    viewBox.slideDown(500);
  });
  slide.eq(1).on('click', function(){
    viewBox.slideUp(500);
  });
  slide.eq(2).on('click', function(){
    viewBox.slideToggle(500);
  }); //위에서 아래로 내려왔다가 사라지는 기능

  //===================================
  //addClass, removeClass, toggleClass
  class_control.eq(0).on('click', function(){
    viewBox.removeAttr('style');
    viewBox.addClass('act');
  });
  class_control.eq(1).on('click', function(){
    viewBox.removeAttr('style');
    viewBox.removeClass('act');
  });
  class_control.eq(2).on('click', function(){
    viewBox.removeAttr('style');
    viewBox.toggleClass('act');
  }); //클래스 이름을 삽입하고 뺄 수 있는 기능
      //css에서 display:none이 걸려있을 경우를 생각하여 style을 지워버리고 사용.
      //removeAttr(); : 선택한 속성을 지우는 기능.
      //모든 기능이 나타났다가 사라지는 기능이지만 효과가 조금씩 다르다.

  showHide.on('click', function(){
    let i = $(this).index();
    switch(i) {
      case 0: viewBox.stop().show(500);
      break;
      case 1: viewBox.hide().show(500);
      break;
      case 2: viewBox.stop().toggle(500);
      break;
    }
  }); //switch~case 구문으로 사라졌다 나타나기 처리하기.

})(jQuery);