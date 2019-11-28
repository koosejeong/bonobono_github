// scroll_image.js
(function($){
  const win = $(window);
  const wrap = $('#wrap');
  const viewBox = $('#viewBox');
  viewBox.css({position:'fixed', top:0, backgroundColor:'#fff'}); //viewBox 영역 고정
  viewBox.find('.title').css({position:'relative', top:0}); 
  //viewBox의 자손 요소인 class title의 포지션으로 relative를 주어 움직일 수 있게 제반 작업
 
  // 이미지 담기
  const viewFix = viewBox.find('.fix_img');
  let url = `../img/macbook/images/`;
  let j;
  for(let i=0; i<122; i++){
    if( i<10 ){
      j = 'large_000' + i;
    } else if( i<100 ){
      j = 'large_00' + i; 
    } else if( i<1000 ){
      j = 'large_0' + i;
    }
    j += '.jpg'; // 이미지파일명 넘버링

    viewFix.append(`<img src="${url+j}" alt="맥북 16인치 이미지" />`);
    viewFix.children('img').eq(i).css({zIndex:122-i});
  }
  viewFix.css({zIndex:50});  
  viewFix.children('img').eq(0).show();


  // ------------------------------------
  win.on('scroll', function(){ //브라우저 스크롤 시,
    let thisS = $(this).scrollTop(); //thisS에 윈도우의 scrollTop값 대입
    //글씨 투명하게 만드는 효과
    let op = 1 - (thisS * 0.001); // opacity:1 (보이다가 흐려지는 효과)이므로 1-(thisS * 0.001)
    if( op < 0 ){ //0을 넘어가지 못하게 하기 위한 조건문(opacity는 1과 0 뿐이므로)
      op = 0;
    }
    viewBox.find('.title').css({top:(-thisS / 3) + 'px', opacity:op}); 
    //스크롤을 움직일 시 title이 위로 올라가는 효과를 주기 위한 음수값

    //이미지 교체하기
    let imgI = parseInt(thisS / 2000 * 121); 
    //스크롤탑 수치 / 느리게 효과를 주기 위한 임의의 수 * 총이미지 갯수 121개

    if(imgI >= 121) { //총 이미지 갯수를 넘기지 않기 위한 조건문
      imgI = 121;
    }
    //console.log(imgI);
    viewFix.children('img').eq(imgI).siblings().hide(); //imgI번째 외 나머지 img 가리기
    viewFix.children('img').eq(imgI).show(); //imgI번째의 img만 나타내기

    // --------------------------------------
  
  });


})(jQuery);