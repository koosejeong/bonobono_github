// jq_05_event_02.js
( function($){

  let menu = $('.menu');
  let menuUl = menu.children('ul');
  let menuLi = menuUl.children('li');
  let menuLink = menuLi.children('a');

  let mLiBg = menuLi.css('backgroundColor'); 
  let mLBdr = menuLi.css('borderRadius');
  let mLinkColor = menuLink.css('color');
  let mLinkWeight = menuLink.css('fontWeight');
  menuLink.css({ 'outline':0});

  const set ={ liclolr:mLiBg, liborder:mLBdr, linkcolor:mLinkColor, linkbold:mLinkWeight };

  

  //console.log(mLiBg, mLBdr, mLinkColor, mLinkWeight);

  menuLink.on('focus', function(){
    let mythis = $(this);
    mythis.parent('li').css({ 'backgroundColor':'#0af', 'borderRadius':'0.5rem'});
    mythis.css({ 'color':'#fff', 'fontWeight':'bold'});
  });

  //blur:초점이 잡힌 요소가 풀리는 상황
  menuLink.on('blur', function(){
    let mythis = $(this);
    mythis.parent('li').css({ 'backgroundColor':set.liclolr, 'borderRadius':set.liborder});
    mythis.css({ 'color':set.linkcolor,'fontWeight':set.linkbold})
  });

  let mytop = $('.top_link').children('button');
   /* 
    mytop.on( 'mouseenter', function(){

    }).on( 'mouseleave', function(){
      
    }); //메소드 체인을 이용한 문법
    */

    //hover는 .on(함수)가 아닌 .hover()라는 다른 이벤트 함수이다.

  let topColor = mytop.css( 'backgroundColor');
      mytop.hover(function(){ //마우스를 올렸을 시
        $(this).animate({ 'backgroundColor':'#305'}, function(){
          $(this).animate({ 'width':'300px'}, function(){
            $(this).animate({ 'backgroyndColor':'#f06'})
          })
        });

      }, function(){ //마우스가 벗어났을 시
        $(this).animate({ 'backgroundColor':topColor });
      
      });
      mytop.on('click', function(event){
        event.preventDefault(); //앞서 선행된 이벤트를 제거하는 메소드
        $('html, body').animate({ 'scrollTop':0});
      });

      const win =$(window);
      const conBox = $('#contentBox');


      win.on( 'scroll', function(){
        let myscroll = $(this).scrollTop();
        //console.log(myscroll);
        if ( myscroll > 150) {
          //conBox.stop().animate({ 'backgroundColor':'#aca'}, 300);
          conBox.css({ 'backgroundColor':'#aca', 'transition':'all 300ms ease'});
        } else {
          conBox.stop().animate({ 'backgroundColor':'#fca'}, 300);
        }
      });

    //크기값이 변경 되었을 때 사용하는 기능(가로, 세로 일부 기능에 제한을 두고 사용)
    let beforeWidth = win.width(); //너비가 변경되기 전
      win.on( 'resize', function(){
        let afterWidth = win.width(); //너비가 변경된 후

        if( beforeWidth !== afterWidth ){
          console.log('크기가 변경 되었습니다.'); 
          history.go(0);
          /*
            새로고침 방법
            location.reload(true): 새로고침(f5)키를 누를 시
            location.href = location.href; : 상단 주소창에 있는 주소로 이동
            history.go(0); : 사용 기록 중 가장 최근 기록의 위치로 이동.
          */
        } 
      });
      

})(jQuery);

//selector.기능('기능이름', function(){});
/* 
  css() => css의 기능을 거의 다 가져다 쓸 수 있다.
  animate() => css의 기능을 쓸 순 있지만, 전부 쓰지는 못 한다.
  (ex. transform, transition, animation, borderRadius 등, css 2ver까지의 기능은 대부분 적용 되나, 그 이후에 나온 기능은 적용 되지 못 한다고 보면 된다.)
  backgroundColor, color 등 색상에 관련된 기능은 사용할 수 있으나, jquery-ui에서 불러오는 기술이므로 해당 파일을 불러오지 않을 시 적용 되지 않는다. 
  animate에는, css와는 다른 기능 일부가 첨부 되어 있다.
  (ex. scrollTop)

*/

// jQuery에서 window와 document는 ''를 쓰지 않는다.