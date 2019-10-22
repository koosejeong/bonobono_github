// content_pc_01.js

( function(){

  const conArea = $('.content_area');
  const conDt = conArea.find('dt');
  const conDd = conArea.find('dd');

  conDt.children('button').on('click focus', function(e){
    e.preventDefault();
    let btn = $(this);
    let btnParent = btn.parent(); //dt
    let parNext = btnParent.next('dd'); //button을 가진 dt의 다음에 오는 dd

    btn.addClass('action'); //css에서 준 스타일 적용
    btnParent.siblings('dt').children('button').removeClass('action');

   // step01
    parNext.addClass('action');
    parNext.siblings('dd').removeClass('action');

    parNext.stop().fadeIn();
    parNext.siblings('dd').stop().fadeOut();
    // action 클래스 이름으로 구분만 할 수 있도록 처리하고,
    // css에서 동작하지 않도록 처리. (<dd class="action">의 display:block 주석 처리)
  
   // step02(버튼이 여러개일 때 사용하는 코드)
   /*
   parNext.siblings('dd').css({ 'zIndex':10 }); //먼저 있던 요소를 앞으로 배치
   parNext.addClass('action'); // 사용할 기능에 class 부여
   parNext.css({ 'zIndex':5 }); //동시에 z-index 값을 적게 주어 뒤에 배치 

   parNext.siblings('dd').stop().fadeOut();
   parNext.siblings('dd').removeClass('action');
   parNext.siblings('dd').removeAttr('style');
   */

  });

  // =============================================================
    const bmText = '\
    <div class="album">\
      <a href="#">\
        <h4></h4>\
        <p class="con"></p>\
        <p class="date"></p>\
      </a>\
    </div>';


    const mediaList = [ { text:'[youtube] 아마존으로 2600억 매출', date:'2019.10.22'}, { text:'슈피겐코리아 미국 아마존 독점 유통', date:'2019.10.22'}, { text:'[youtube] \'취업비자\' 기업탐방', date:'2019.10.22'} ]; //배열 안에 객체 담기.
    
    //const blogList = [ 1, 2, 3 ]; 

    const media = conArea.find('.media');
    for(let i = 0 ; i < mediaList.length ; i++ ){
      media.append(bmText);
      let myNth = media.children('.album').eq(i);
      myNth.find('h4').text('media');
      myNth.find('.con').text( mediaList[i].text );
      myNth.find('.date').text( mediaList[i].date );
      //media에 append(bmText)로 각각의 클래스가 생성 되므로, 생성된 클래스의 i번째의 h4, .con, .date 클래스를 찾아 배열에 담아둔 객체형 텍스트 삽입. 
    }


  // =============================================================
  

})(jQuery);