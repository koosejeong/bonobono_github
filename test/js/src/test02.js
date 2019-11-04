// test02.js

( function($){
  const wrap = $('#wrap');
  const myDl = wrap.children('dl');
  const myDt = myDl.children('dt');
  const myDd = myDl.children('dd');

  const myBtn = myDt.children('button');
  const myLink = myDt.children('a');

  myBtn.on('click', function(){
    $(this).parent('dt').siblings('dd').stop().slideUp();
    $(this).parent('dt').next('dd').stop().slideDown();
    $(this).parent('dt').css({'backgroundColor':'#047'});
    $(this).parent('dt').find('i').css({'transition':'all 300ms ease', 'transform':'rotate(180deg)'});
    $(this).parent('dt').siblings('dt').css({'backgroundColor':'#067'});
    $(this).parent('dt').siblings('dt').find('i').css({ 'transition':'all 300ms ease', 'transform':'rotate(0deg)'});
  });

})(jQuery);