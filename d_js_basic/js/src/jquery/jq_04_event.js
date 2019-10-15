
//jq_04_event.js

( function($){
  // jQuery 이벤트 이해하기
  /* 선택.on('이벤트', function(){
    해당하는 이벤트(클릭 등) 처리 시 수행하는 기능.
  }); */
  /* const conBox = $('#contentBox');
  conBox.on('mouseenter', function(){
    $(this).css({ 'backgroundColor':'#fff', 'transition':'all 400me ease'});
  });
  
  conBox.on('mouseleave', function(){
    $(this).stop().animate({ 'backgroundColor':'transparent'}, 900);
  }); */
  // stop():메모리 저하를 막기 위한 기능
  // on 얖에 들어가는 값들
  // 마우스 : click, dblclick, mousedown(왼쪽, 오른쪽 버튼 누를 때), mouseup(마우스 버튼을 눌렀다 뗐을 때), mousewheel(DOMMouseScroll:fire Fox용 )
  // ㄴ mousedown, mouseup은 왼버튼 오른 버튼을 구분하지 않는다. 
  // 키보드 : keypress(문자로 인지할 수 있는 키(특수키 제외)를 눌렀을 때-영문만 적용 된다.), keydown(키보드를 눌러서 버튼이 안으로 들어갔을 때), keyup(키보드 눌렀다 떼서 나왔을 때)
  // ㄴkeydown, keyup은 문자, 숫자, 특수 기호를 구분하지 않는다. 
  // focus, hover, selected, changed
  // 브라우저 : scroll, resize
  // load

  const con = $('#contentBox');
  const conUl = con.children('ul');
  const conLi = conUl.children('li');

  //console.log(conLi);
  //conLi.eq(0).css({ 'backgroundColor':'#fff'});
  conLi.eq(0).on( 'click', function(){
    $(this).css({ 'backgroundColor':'#fff'});
  });
  conLi.eq(1).on( 'dblclick', function(){
    $(this).css({ 'backgroundColor':'#777'});
  });
  conLi.eq(2).on( 'mousedown', function(evt){
    //console.log(evt.button);
    //$(this).css( {'backgroundColor':'#07f'});
    /* switch(evt.button){
      case 0:
        $(this).css( {'backgroundColor':'#07f'});
        break;

      case 1:
        $(this).css( {'backgroundColor':'#f70'});
        break;

      case 2:
        $(this).css( {'backgroundColor':'#000', 'color':'#fff'});
        break;

      default:
        $(this).css( {'backgroundColor':'#aaa'});
        break;
    }  */
    if( evt.button === 0){
      $(this).css( {'backgroundColor':'#07f'});
    } else if( evt.button === 1) {
      $(this).css( {'backgroundColor':'#f70'});
    } else if( evt.button === 2) {
      $(this).css( {'backgroundColor':'#aaa'});
    } 

  });

  conLi.eq(2).on( 'mouseup', function(){
    $(this).css( {'backgroundColor':'#fa0'});
  });
  conLi.eq(3).on( 'mousewheel DOMMouseScroll', function(evt){
    console.log(evt);
    $(this).css({ 'backgroundColor':'#fa0'});
  }); 
  conLi.eq(4).on( 'mousemove', function(event){
    //console.log(event.pagetX, event.pageY);
    //ㄴ $(this)-conLi.eq(4)의 왼쪽 상단을 기준 좌표로 삼는다. 
    //console.log(event.pageX, event.pageY);
    //ㄴ 브라우저의 왼쪽 상단을 기준 좌표로 삼는다. 
    let x = event.offsetX;
    let y = event.offsetY;
    //$('ball').css({ 'transform':'translate('+ x +','+ y +')'});
    $('.ball').css({ "transform":`translate(${x}%,${y}%)`});
  });
  conLi.eq(5).children('input').on( 'keyup', function(evt){
    console.log(evt.key, evt.keyCode);
  }); 

})(jQuery);