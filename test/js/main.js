// main.js

( function($){

  const body = $('body');
  const wrap = $('#wrap');

  wrap.append('<section id="slide_01"></section>');
  wrap.append('<section id="slide_02"></section>');
  wrap.append('<section id="slide_03"></section>');

  const jsLink = (temp) =>{
    return body.append(`<script src="../js/src/${temp}.js"></script>`);
  }
  
  const vB1 = $('#slide_01');
  vB1.load('./test022.html', () =>{
    // return jsLink('test022');
  });
  const vB2 = $('#slide_02');
  vB2.load('./test033.html', () =>{
  });
  const vB3 = $('#slide_03');
  vB3.load('./test044.html', () =>{
  });

  setTimeout(function(){
    return jsLink('test022');
  }, 100);

})(jQuery);