// test.js

(function(){
  const nav = $('#gnb');
  const myUl = nav.children('ul');
  const myLi = myUl.children('li');
  const myDl = myLi.children('dl');
  const myDt = myDl.children('dt');
  const myDd = myDt.siblings('dd');
  const myAdd = $('#mainAddv');

  const mainLink = myDt.children('a');
  const subLink = myDd.children('a');

  nav.on('mouseenter', function(e){
    e.preventDefault();
    myDd.css({ "display":"block"}).stop().slideDown();
    myAdd.css({ "backgroundColor":"#eee"});
  });
  nav.on('mouseleave', function(){
    myDd.stop().slideUp();
    myAdd.css({ "backgroundColor":"#0af"});
  });
  mainLink.on('focus', function(){
    myDd.stop().slideDown();
  });
  subLink.eq(-1).on('blur', function(){
    myDd.stop().slideUp();
  });



})(jQuery);