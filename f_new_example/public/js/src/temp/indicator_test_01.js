// indicator_test_01.js

( function($){
  const minoProdut = $('#minoProdut');
  const indicator = minoProdut.children('.indicator');
  const indiLi = indicator.children('li');
  const indiLink = indiLi.children('a');
  const adverBanner = minoProdut.find('.product').children('ul');
  const adverNth = adverBanner.children('li');

  indiLi.eq(0).addClass('active');
  // --------------------------------------------------------

  indiLink.on('focus', function(e){
    e.preventDefault();
    let i = $(this).parent('li').index();
    adverBanner.animate({ 'marginLeft':(-100 * i) + '%'});

    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');

    $(this).on('click', function(e){
      e.preventDefault();
      adverNth.eq(i).children('a').focus();
    });
  });

})(jQuery);