// jq_06_load.js

( function($){
  /*
   * (html 문서에서 물러왔을 경우)
   * js문서는 기준 경로가 작성하고 있는 js문서(자신)가 아니다
   * 해당 js 문서를 html 문서에서 src로 연결해 온 경우, 불러온 html 문서를 기준으로 경로를 설정 (./temp/header.html)
   */

   const wrap = $('#wrap');

   wrap.prepend('<div class="head_wrap">');
   wrap.append('<div class="foot_wrap"></div>'); 
   //wrap 안에 header, footer도 들어가므로 wrap부터 생성 후 랩 내부에 head_wrap, foot_wrap 삽입
   
   const footWrap = $('.foot_wrap');
   const headWrap = $('.head_wrap');
   //jQuery에서 사용할 변수 생성
    
   headWrap.load('./temp/header.html', function(){
      let headBox = $('#headBox');
      headBox.css({'backgroundColor':'#3ff'});
   });
  //===================================================  
   footWrap.load('./temp/footer.html', function(){
    /*
     * footer 파일을 불러옴으로서 footer.html에 내장된 footer.js(jQuery)도 불러온 것.
     * 영역의 스타일, 기능이 동일할 때 주로 사용하는 방법
     */
   });
   //.load()로 불러온 데이터는 서로 침범할 수 없는 고유 영역이다.

   $.getJSON('../../data/test.json', function(data){
    console.log(data);
   });
   

})(jQuery);