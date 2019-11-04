// slideAll_viewBox.js

( function($){

  const viewBox = $('#viewBox');
  const slideForm = viewBox.find('.slide_form');
  const slideWrap = viewBox.find('.slide_wrap');
  let slideEach =  slideWrap.children('div');

  // 마지막 요소 복제 및 광고 영역 셋팅=========================================

  slideEach.eq(-1).clone(true).prependTo(slideWrap);

  slideEach = slideWrap.children('div');
  let slideLen = slideEach.length;

  slideWrap.css({ 'width':100 * slideLen + '%', 'marginLeft':'-100%' });
  slideEach.css({ 'width':100 / slideLen + '%' });
  slideForm.css({ 'overflow':'hidden'});

  // 버튼부 생성==========================================================
  // 좌/우 버튼
  const slideBtn =  function(rel) {
    if(rel) { slideForm.before('\
                    <div class="view_btn">\
                     <button type="button" class="next">\
                      <i class="fas fa-arrow-alt-circle-right"></i>\
                      <span>다음 내용 보기</span>\
                      </button>\
                      <button type="button" class="prev">\
                        <i class="fas fa-arrow-alt-circle-left"></i>\
                        <span>이전 내용 보기</span>\
                      </button>\
                    </div>'); 
          } //if

  };
  slideBtn(true); //최초 호출

  // 인디케이터==========================================================
  slideForm.before('<ul class="indicator"></ul>');
  const indi = viewBox.find('.indicator');
  for( let i = 0; i < slideLen-1; i++ ){
    indi.append('<li><a href="#"><span></span></a></li>');
    let indiLi = indi.children('li').eq(i);
    indiLi.find('span').text( slideEach.eq(i+1).text() );
    indiLi.find('span').css({ display:'block', width:0, height:0, overflow:'hidden'});
  }

  const indiLi = indi.children('li');
  indiLi.eq(0).addClass('action');
  // -----------------------------------------------------
  // 좌우버튼 클릭 시 이동

  let n = 0;
  const viewBtn = viewBox.find('.view_btn').find('button');

  viewBtn.on('click', function(e){
    e.preventDefault();

    let has = $(this).hasClass('next'); // hasClass() : 인자값의 클래스가 있느냐 없느냐 묻는 기능
    if( has ){ //next
      n++;
      if( n >= slideLen-1 ){
        n = 0;
        slideWrap.css({ 'left':'100%'});
      }
    } else { //prev
      n--;   
    }
    slideWrap.animate({ 'left':-100 * n + '%'}, function(){
      if( n <= -1){
        n = slideLen-2;
        slideWrap.css({ 'left':-100 * n + '%'});
      }
   });

   indiLi.eq(n).siblings().removeClass('action');
   indiLi.eq(n).addClass('action');

  }); //viewBtn

  // ------------------------------------
  // 인디케이터 선택 시
  indiLi.children('a').on('focus', function(e){
    e.preventDefault();
    n = $(this).parent('li').index(); //변수 n으로 next, prev와 카운트 공유
    slideWrap.animate({ 'left':-100 * n + '%' });
    indiLi.eq(n).siblings().removeClass('action');
    indiLi.eq(n).addClass('action');
   
    // a클릭 시 해당하는 광고 배너로 포커스 처리하게 만들기
    $(this).on('click', function(e){
      e.preventDefault();
      slideEach.eq(n+1).find('a').focus(); //slideEach 순서가 0번째부터 시작하므로 n+1

    });

  }); //indiLi.children('a')on('focus')

})(jQuery);