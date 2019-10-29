// slide_01.js

( function(){
  //.view_indicator 내부의 li(a) 선택 시, .slide_temp>.guide 이동
  //index() 활용
  //margin-left:-100%; || position:relative; left:-100%; ...

  const viewBox = $('#viewBox');
  const indicator = viewBox.find('.view_indicator');
  const indiLi =  indicator.find('li');
  const indiLink = indiLi.children('a');
  const slideForm = viewBox.find('.slide_form');
  const guideBox = slideForm.find('.guide');
  const slideEach = guideBox.children('div');

  let go;
  let myn = 0;
  let maxn = slideEach.length;
  let timed = 500;

  const MoveSlide = function(n){
      indiLink.removeClass('action'); //모든 a의 action 클래스 지우기
      indiLi.eq(n).children('a').addClass('action'); //선택된 a에 action 클래스 주기
      guideBox.animate({'marginLeft':(-100 * n) + '%'});
    }
    MoveSlide(0);//최초 호출
// ==================================

  indiLink.on('click focus', function(evt){
    evt.preventDefault();
    let a = $(this).parent('li').index();
    myn = a;
    // //순서를 가지고 있는 것은 li이기 때문에, a의 부모인 li에게 index()
    // //console.log(i);

    // indiLink.removeClass('action');9
    // $(this).addClass('action');
    // guideBox.stop().animate({'left':-100 * i+'%'});
  
    MoveSlide(myn);
    
  });

  

  // 베너 움직이기=================================

  const goSlide = function(){
    go = setInterval(function(){
    myn++;
    if( myn >= maxn ){
      myn = 0; //가지고 있는 배너의 수를 넘기지 않도록 초기화 
    }
    MoveSlide(myn); 
    }, timed * 4);
  } //goSlide
  
  const StopSlide = function(){
    clearInterval(go);
  };
  
  goSlide();

  viewBox.on({'mouseleave': goSlide, 'mouseenter': StopSlide }); 
  
})(jQuery);