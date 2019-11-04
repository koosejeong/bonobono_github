// paul_viewBox.js

(function($){
  const viewBox = $('#viewBox');
  //인디케이터 영역-----------------------------
  const indi = viewBox.find('.indicator');
  const indiCon = indi.find('p').children('em');
  const indiBtn = indi.find('.view_btn').children('button');

  //슬라이드 영역-------------------------------
  const slide = viewBox.find('.slide_form');
  const slideUl = slide.find('ul');
  const slideLi = slideUl.find('li');

  // ----------------------------------------
  // 1. slide 영역 순서에 맞게 li 배치
    let imgList = [ 'img08.jpg', 'img09.jpg', 'img10.jpg' ]
    let liLen = imgList.length;
    let url = '../img/';

    const slideZindexSet = function(){
     for( let i=liLen; i >=0 ; i-- ){ // let i=0; i <=liLen ; i++
       slideLi.eq(i).css({ zIndex:liLen-i });
      // slideLi.eq(0).css({ zIndex:3});
      // slideLi.eq(1).css({ zIndex:2});
      // slideLi.eq(2).css({ zIndex:1});
      //slideLi.eq(i).css({ 'backgroundImage':`url(${url +imgList[i] })`});
      
     }
    } //z-index값 조정하는 for문 함수화 

    slideZindexSet(); //최초 호출 

     let textN = 0;
     const textEm = function(n){
      indiCon.text( '0' + (n + 1) );
     };
     textEm(textN); //텍스트 삽입

    //  ------------------------------------------
    // 첫번째 li만 보이고 나머지는 사라지게 만들기 

    slideLi.eq(0).siblings().hide();
    slideLi.eq(0).find('dl').addClass('action'); 

    //버튼 클릭 시 숫자 증가----------------------------
    //버블링 현상을 막기 위한 버튼 숨기기 

    const fakeBtn = $('.fake_btn'); //버블링 현상을 막기 위한 가짜 버튼 생성
    fakeBtn.hide(); //클릭 전까지 가짜 버튼 숨겨 놓기
    indiBtn.on('click', function(e){
      e.preventDefault();
      //indiBtn.hide(); 
      fakeBtn.show(); //클릭 시 가짜 버튼 나타내기
      if ($(this).index() === 0 ){ //nextBtn
        textN++;
        if( textN >= liLen ){
          textN = 0;
        }
        textEm(textN);
      } else { //prevBtn
        textN--;
        if( textN < 0 ){
          textN = liLen-1;
        }
        textEm(textN);
      }
      //가로로 늘어나는 현상 
      let slideThis = slideLi.eq(textN); //slideThis에 textN번째가 가지고 있는 수번째의 li를 대입
        slideThis.css({zIndex: liLen+2, width:0, padding:0 }); 
        slideThis.css({ 'display':'block'});
        slideThis.stop().animate({ width:100 + '%', paddingLeft:'5vw'}, 1000, 'easeOutCubic', function(){ 
          slideThis.siblings().hide(); //slideThis에 외 나머지 li를 숨기고, 
          slideZindexSet(); //for문 호출하여 z-index값 조정
          fakeBtn.hide(); // 광고 슬라이드 기능 끝나면 가짜 버튼 숨기기 
          //indiBtn.show(); //사라졌던 버튼 다시 나타내기 
          slideThis.siblings().find('dl').removeClass('action'); //가로로 늘어난 후 실행
          slideThis.find('dl').addClass('action'); 
      }); //slideThis.animate function

    }); //indiBtn.on('click')

})(jQuery);

// $(function(){})
// $(document).ready(function(){});
// window.jQuery(document).ready(function(){});

/*
//가로로 움직이는 슬라이드 배너 
let slideThis = slideLi.eq(textN);
slideThis.css({zIndex: liLen+2, left: -100 + '%' });
slideThis.stop().show(function(){
  slideThis.animate({ left: 0 }, function(){
    slideThis.siblings().hide(); //클릭한 슬라이드 외 나머지 슬라이드 숨기고, 
    slideZindexSet(); //for문 호출하여 z-index값 조정
  });
  
});
*/

    //btn.on('cilck',function() { ....
    // 클릭하지 않은 li 숨기고, 클릭한 li 나타나게 만들기
    // slideLi.eq(textN).siblings().slideUp();
    // slideLi.eq(textN).slideDown();
    // })

    // ----------------------------------------------
    // li를 숨겨 놓고, 일단 첫번째 li만 보이게 하기.(버튼 클릭 시 클릭한 li만 나타나게 만들기)
    // slideLi.eq(0).siblings().hide();