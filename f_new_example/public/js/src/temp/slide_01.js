// slide_01.js

( function(){
  //.view_indicator 내부의 li(a) 선택 시, .slide_temp>.guide 이동
  //index() 활용
  //margin-left:-100%; || position:relative; left:-100%; ...

  const viewBox = $('#viewBox');
  const indicator = viewBox.find('.view_indicator');
  const indiLi =  indicator.find('li');
  const indiLink = indiLi.children('a');
  //onst slideForm = viewBox.find('.slide_form');
  const guideBox = viewBox.find('.guide');

  //indicator.css({ 'zIndex':500});
  //guideBox.css({ 'position':'relative', 'top':0, 'left':0});

  indiLink.on('click focus', function(evt){
    evt.preventDefault();
    let i = $(this).parent('li').index();
    //순서를 가지고 있는 것은 li이기 때문에, a의 부모인 li에게 index()
    //console.log(i);

    indiLink.removeClass('action');
    $(this).addClass('action');
    guideBox.stop().animate({'left':-100 * i+'%'});

  });
  
})(jQuery);