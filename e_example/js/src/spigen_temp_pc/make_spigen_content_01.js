// content_pc_01.js

( function(){

  const conArea = $('.content_area');
  const conDt = conArea.find('dt');
  const conDtBtn = conDt.children('button');
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
    

    let imgUrl = '../../img/spigen/';

    const mediaList = [ { text:'[youtube] 아마존으로 2600억 매출', date:'2019.10.22', img: 'img01.jpg' }, { text:'슈피겐코리아 미국 아마존 독점 유통', date:'2019.10.22', img: 'img02.jpg' }, { text:'[youtube] \'취업비자\' 기업탐방', date:'2019.10.22', img: 'img03.jpg' } ]; //배열 안에 객체 담기.

    const blogList = [ { text:'아무리 급해도 놓칠 수 없는 한 가지', date:'2019.10.22', img: 'img04.jpg'}, { text:'업무 중 즐기는 문화 예술 공연', date:'2019.10.22', img: 'img06.jpg'}, { text:'지속적인 성장 가치 추구.', date:'2019.10.22', img: 'img05.jpg'} ]; 

    // ForList([selectior], [array]);
    const ForList = function(mySel, myList, myText){
      let tabBox = conArea.find( mySel );
      const bmText = '\
        <div class="album">\
          <a href="#">\
            <h4></h4>\
            <p class="con"></p>\
            <p class="date"></p>\
          </a>\
        </div>';

      for(let i = 0 ; i < myList.length ; i++ ){
        tabBox.append(bmText);
        let myNth = tabBox.children('.album').eq(i);
        myNth.find('h4').text(myText);
        myNth.find('.con').text( myList[i].text );
        myNth.find('.date').text( myList[i].date );

        let myImg = imgUrl + myList[i].img;
        myNth.css({ 'backgroundImage':`url(${myImg})`, 'backgroundRepeat':'noRepeat', 'backgroundPosition':'0 0', 'backgroundSize':'cover'})
        //media에 append(bmText)로 각각의 클래스가 생성 되므로, 생성된 클래스의 i번째의 h4, .con, .date 클래스를 찾아 배열에 담아둔 객체형 텍스트 삽입. 
      }

    }; //ForList
   
    ForList('.media', mediaList, 'media');
    ForList('.blog', blogList, 'blog');

      conDtBtn.on( 'keyup', function(e){
        //R - 39, L - 37 위 - 38, 아래 - 40
        let num = e.keyCode; //전달 받은 키보드 신호 num에 대입
        let beforeKey = num === 37 || num === 38;
        let afterKey = num === 39 || num === 40;
        let pdt = $(this).parent(conDt);

        /*
        if( beforeKey ){
          pdt.prevAll('dt').find('button').focus();
        }else if( afterKey ){
          pdt.nextAll('dt').find('button').focus();
        }
        */
        switch( num ){
          case 37:
          case 38:
            pdt.prevAll('dt').find('button').focus();
          break;  
          case 39:
          case 40:
            pdt.nextAll('dt').find('button').focus();
          break;  
        }
        
      });


})(jQuery);


// ||(or) : 둘 중 하나라도 참일 시 바로 참 도출,(뒤에 조건 비교 안 함)


    /*
      conDt.children('button').on('keyup', function(e){
      //console.log(e.keyCode);
      //R - 39, L - 37
      //const mBtn = conDt.children('button');
      //const bBtn = conDd.children('button');
      
      //39 === .blog, 37 === .media
      
      if( e.keyCode === 39 ){
        $(this).siblings(mBtn).addClass('action');
        $(this).removeClass('action');
        blog.show();
        media.hide();

      } else if( e.keyCode === 37 ) {
        $(this).siblings(mBtn).removeClass('action');
        $(this).addClass('action');
        media.show();
        blog.hide();
      }
      */

    // const blog = conArea.find('.blog');
    // for(let i = 0; i < blogList.length ; i++ ){
    //   blog.append(bmText);
    //   let myNth = blog.children('.album').eq(i);
    //   myNth.find('h4').text('blog');
    //   myNth.find('.con').text( blogList[i].text );
    //   myNth.find('.date').text( blogList[i].date );

    //   let myImg = imgUrl + blogList[i].img
    //   myNth.css({ 'backgroundImage':`url(${myImg})`, 'backgroundRepeat':'noRepeat', 'backgroundPosition':'0 0', 'backgroundSize':'cover'});

    // }