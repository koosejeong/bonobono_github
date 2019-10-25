// main.js
( function(){
  const body = $('body');
  const wrap = $('#wrap');

  wrap.append('<section id="viewBox"></section>');

  const viewBox = $('#viewBox');
  //경로 함수화하여 변수에 담기.
  const JsLink = (temp) =>{
    return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
  };
  viewBox.load('./temp/slide_01.html', () =>{
    return JsLink('slide_01');
  });

})(jQuery);