// gnb_01.js

/*
  1. 마우스 또는 키보드 포커스 처리 시 하위 메뉴 전체가 나타나게 만들기(배경도 하얗게.)
  2. 마우스 또는 키보드 포커스 처리 시 하위 메뉴 전체가 나타나게 만들기(별도 배경 없이.)
  3. 마우스 또는 키보드 포커스 처리 시 해당 메뉴 하위 하나만 나타나게 만들기.
*/

(function(){
  const gnb = $('#gnb');
  const gnbArea = gnb.children('ul');
  const gnbArLi = gnbArea.children('li');
  gnbArLi.children('a').attr('class','titleLink');
  //html 코딩 시 생략된 <a>에 class 삽입
  //gnbArLi.children('a').addClass('titleLink');

  const titleLink = $('.titleLink');
  const partList = titleLink.next('ul');
  const subLink = partList.find('a');
  let timed = 500; //0.5초

  titleLink.on('mouseenter focus', function(){
    let ulSlide = $(this).next(partList);
    ulSlide.parent().siblings().find(partList).slideUp();
    //ㄴ위에서 언급한 partList와, 더 윗줄에서 언급한 partList는 다른 ul.
    ulSlide.slideDown();
    //li는 focus를 가질 수 없기 때문에 on의 주체가 될 변수를 a를 담고 있는 변수로 줘야 mouseenter, focus를 함께 줄 수 있다. 
    ulSlide.find('a').eq(-1).on('blur', function(){
      ulSlide.slideUp();
    });
  });

  gnb.on('mouseleave', function(){
    partList.slideUp();
  });
 

/*
//1번 기능 수행하기=======================================
  gnb.css({ 'backgroundColor':'transparent'});
  gnbArea.css({'height':'auto', 'backgroundColor':'#fff', 'boxShadow':'0.2rem 0.2rem 0.2rem rgba(0,0,0,0.3)'});

  gnbArea.on('focus', function(e){
    e.preventDefault();
    partList.stop().slideDown(timed);
   
  });

  subLink.eq(-1).on('blur', function(){
    //마지막 요소 블러 시 슬라이드 업
    //subLink.eq(-1) .eq(-1) : subLink의 가장 마지막 것.
    partList.stop().slideUp(timed);

  });

  gnbArea.on('mouseenter', function(){
    //마우스 올렸을 시 나타나게 하기
    partList.stop().slideDown(timed);
  });
  gnb.on('mouseleave', function(){
    partList.stop().slideUp(timed);
  });
  
//2번 기능 수행하기 ================
gnbArea.css({'height':'100%'});
//부모인 gnb의 높이값인 40px을 따라간다. 
*/

//3번 기능 수행하기 ================


})(jQuery);