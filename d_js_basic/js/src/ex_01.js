// ex_01.js

(function(){

  const nav = $('#mainNav');
  const firstUl = nav.children('ul');
  const firstLi = firstUl.children('li');
  const Link_01 = firstLi.children('a');

  const secoundUl = firstLi.children('ul');
  const secoundLi = secoundUl.children('li');
  const Link_02 = secoundLi.children('a');

  firstUl.css({'height':'auto'});

  Link_01.on('mouseenter focus', function(){
    $(this).next(firstUl).stop().slideDown();
    //.선택자(변수)의 문법 형식으로 작성해야 한다. 
  });
  Link_01.on('blur', function(){
    $(this).next(secoundUl).stop().slideUp();
  });
  nav.on('mouseleave', function(){
    $(this).find(secoundUl).stop().slideUp();
  });

  // samseon-bar ==============================

  const samseon = $('#samseon');
  const fBox = $('.fullbox');
  const bBox = $('.btnBox');
  const mBox = $('.menuBox');
  const ulArea = mBox.children('ul');
  const liArea = ulArea.children('li');

  samseon.on('click', function(){
    $(this).children(fBox).css({'display':'block', 'position':'fixed', 'top':'0','left':'0', 'width':'100%', 'height':'100%', 'backgroundColor':'#eee'});

  });
  fBox.on('mouseenter', function(){
    bBox.css({'display':'block', 'position':'absolute', 'top':0,'left':0, 'zIndex':500,'width':'100%', 'height':'30%', 'backgroundColor':'#fff'});
    mBox.css({'display':'block', 'position':'absolute', 'top':'30%', 'left':0, 'zIndex':500, 'padding':'20px', 'boxSizing':'borderBox', 'width':'100%', 'height':'70%', 'backgroundColor':'#fff'});
  });
  mBox.on('mouseenter', function(){
    $(this).children(ulArea).css({'display':'block','width':'100%','height':'100%', 'outline':'1px solid #333', 'backgroundColor':'#fff'});
  });
  bBox.on('mouseenter', function(){
    $(this).parent(fBox).css({'display':'none'});
  });
  

})(jQuery);