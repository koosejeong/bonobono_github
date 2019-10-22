// spigen_main.js
//jQuery 파일을 영역 별로 쪼개서 로드해오는 파일.

(function($){
  const body = $('body');
  const header = $('#headBox');
  const adver = $('#viewBox');
  const content = $('#conBox');
  const footer = $('footBox');
  // ================================

  let tempUrl = "./spigen_temp/";
  let jsUrl = "../js/src/spigen_temp_pc/";

  header.load(tempUrl+'spigen_header.html', function(){
    body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
    //$(this).after('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
    //ㄴ동일한 기능을 하는 코드
    //ㄴ개발자 모드에서 코드 확인 시 미관상 문제로 인한 다른 코드 작성법
  });

  adver.load(tempUrl+'spigen_main_adver.html');

  // content ====================================================
  content.load(tempUrl+'spigen_main_content_01.html', function(){

    let conJS = jsUrl+'make_spigen_content_01.js';
    body.append(`<script src="${conJS}"><script>`);

  });

  // ============================================================

  footer.load(tempUrl+'spigen_footer.html');

  
 
  // setTimeout(function(){ body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>'); }, 100);

})(jQuery);






//afte()가 load() 보다 속도가 느리다.

//setTimeout(function(){}, 'time'); 
//일정 시간이 지난 후에 함수를 수행하게 만드는 javascript에 내장된 메소드.
//'time'에 들어갈 인수는 숫자.(얼마 후에 수행시킬 건지에 대한 시간)
//header.load()는 헤더를 불러온 후에 관련 코드를 불러오는 것이고, setTimeout은 정해진 시간이 지난 후에 관련 코드를 불러오는 것이므로 상황에 알맞게 사용하면 된다.
