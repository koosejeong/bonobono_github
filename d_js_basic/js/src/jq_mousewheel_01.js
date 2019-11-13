// jq_mousewheel_01.js

(function($){

  const htmlEl = $('html, body');
  const wrap = $('#wrap');
  const scrollEl = wrap.find('.scroll');
  htmlEl.animate({scrollTop:0}); //(html, body)에 scrollTop으로 수치를 줌으로서 브라우저가 뜨자마자 가는 위치를 최상단(0)으로 지정함.
  let myScrollElTop = [];
  let scrollLen = scrollEl.length;
  let timed = 500;

  for(let i=0; i < scrollLen; i++) {
    let scTop = scrollEl.eq(i).offset().top;
    myScrollElTop.push(scTop); //각 영역의 스크롤값(해당 영역(i번째에 해당 되는)의 offset값(브라우저 최상단-해당 영역))을 myScrollElTop에 push
  }

  // ---------------------------------------------------

  let myStatus = true; //아래 if문을 위한 절대값 
  let n, useN = 0;

    // ---------------------------------------------------
    const ScrollMagic = function(){
      htmlEl.animate({scrollTop:myScrollElTop[useN]}, timed, 'easeOutSine', function(){
        myStatus = true;
      });
      //html, body를 myScrollElTop[useN] 위치로 움직이고, if문 재실행을 위한 myStatus값 조정
    } 
  // ---------------------------------------------------

  $(window).on('mousewheel DOMMouseScroll', function(e){

    if(e.originalEvent.wheelDelta){
      n = e.originalEvent.wheelDelta * -1; //양수로 만들기 위한 -1 곱셈(양수값: 아래로 내려가게 설정)
    } else {
      n = e.originalEvent.detail * 40; //음수값: 위로 올라가게 설정
    }

    // ---------------------------------------------------
    // 최초의 스크롤 위치값 설정
   
    if(myStatus){ //myStatus = true이므로 무조건 if문 수행
      myStatus = false; //myStatus값 조정 
      if( n > 0 ){ //n:임의의 값, 0:스크롤 고정 위치 
        useN++; //스크롤 위치가 0보다 크면 +1
        if( useN >= scrollLen ) {
          useN = scrollLen-1; //배열은 0부터 시작하므로 가지고 있는 수보다 숫자가 하나 크므로 -1
        }
        ScrollMagic();
      } else {
        useN--; //아닐 시 -1
        if( useN < 0 ) {
          usnN = 0;
        }
        ScrollMagic();
      }
    }

  }); //마우스 휠

  // ---------------------------------------------------
  const gnb = $('#gnb');
  const gnbUl = gnb.find('ul');
  const gnbLi = gnbUl.children('li');
  const gnbLink = gnbLi.find('a');

  gnbLink.on('click', function(e){
    e.preventDefault();
    //let thisLink = $(this).attr('href'); - 경로가 있어야 가능
    //let thisOffset = $(thisLink).offset().top;
    //htmlEl.animate({scrollTop:thisOffset});
    useN = $(this).parent('li').index();
    ScrollMagic();
    
  });
  // ---------------------------------------------------
  // 트랙패드 사용시
  let startP, endP;
  $(window).on('touchstart', function(e){
    startP = e.originalEvent.touches[0].pageY; //터치를 시작한 위치  
  }); // touch start-----------------------------------
  $(window).on('touchmove', function(e){ //터치하는 동안의 위치
    htmlEl.animate({scrollTop:myScrollElTop[useN]}, 0);
  }); // touch move-----------------------------------
  $(window).on('touchend', function(e){
    endP = e.originalEvent.changedTouches[0].pageY; //터치가 끝난 위치
    console.log(startP, endP);
    if(myStatus){ 
      myStatus = false; 
      if( startP > endP ){ //사용자가 화면을 아래로 내리는 상황이라면
        useN++; 
        if( useN >= scrollLen ) {
          useN = scrollLen-1; 
        }
        ScrollMagic();
      } else {
        useN--; 
        if( useN < 0 ) {
          usnN = 0;
        }
        ScrollMagic();
      }
    }
  }); // touch end-----------------------------------


  
  
})(jQuery);

// .offset().top; - 브라우저에서 내가 작업하고자 하는 영역이 얼마만큼 떨어져 있는지, 그 값을 확인할 수 있는 메소드
// useN = scrollLen-1; : 배열이 가진 요소값은 5개(0,1,2,3,4)이나 length가 반환하는 값은 5이므로 프로그래밍 상에서 값은 같으나 숫자는 다르기 때문에 -1하여 수를 맞춰주는 것.
// useN = $(this).parent('li').index(); -on click과 on mousewheel이 서로 다른 값으로 움직이기 때문에 동일한 값을 가진 변수(useN)에 같은 값을 넣어 이동하게 만들어야 한다. 동일하게 사용하고 있는 변수 useN에 a의 부모인 li의 인덱스 값을 넣어 상단 네비게이션을 클릭해도, 스크롤을 내려도 동일한 움직임을 주는 로직. 