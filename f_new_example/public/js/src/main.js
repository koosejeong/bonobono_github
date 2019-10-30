// main.js
( function(){
  const body = $('body');
  const wrap = $('#wrap');

  //광고 영역 생성=======================================
  wrap.append('<section id="viewBox"></section>');

  const viewBox = $('#viewBox'); //경로 함수화하여 변수에 담기.
  const JsLink = (temp) =>{
    return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
  };
  viewBox.load('./temp/slide_01.html', () =>{
    return JsLink('slide_01');
  });

  // 광고 영역2 추가 생성=================================
  wrap.append('<section id="viewBox_02"></section>');

  const vB2 = $('#viewBox_02');
  vB2.load('./temp/slide_02.html', function(){
    return JsLink('slide_02')
  });

  // 광고 영역3 추가 생성=================================
  wrap.append('<section id="viewBox_03"></section>');

  const vB3 = $('#viewBox_03');
  vB3.load('./temp/slide_03.html', function(){
    return JsLink('slide_03')
  });

  // 광고 영역4 추가 생성=================================
  wrap.append('<section id="viewBox_04"></section>');

  const vB4 = $('#viewBox_04');
  vB4.load('./temp/slide_04.html', function(){
    return JsLink('slide_04')
  });

})(jQuery);