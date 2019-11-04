// paul_scroll.js

( function($){
  //offset().top : 브라우저 최 상단에서 얼만큼 떨어져 있는가를 판단하는 기능
  //offset().left : 브라우저의 왼쪽에서 얼만큼 떨어져 있는가를 판단하는 기능
  //right, bottom은 없다.
  //scrollTop() : 브라우저의 위치(스크롤)가 이동 되었을 때 위치값을 파악하는 메소드

  const viewBox = $('#viewBox');
  const con1 = $('#conBox');
  const con2 = $('#conBox2');

  let viewLocation = viewBox.offset().top;
  let con1Location = con1.offset().top;
  let con2Location = con2.offset().top;
  console.log(con2Location);

  let winScroll;
  //console.log(winScroll);

  let scrollResult = 0;
  let n = 0;
  $(window).on('mousewheel DOMMouseScroll', function(e){
    //originalEvent.wheelDelta 크롬에만 존재하는 기능(120)
    // e.detail fireFox에만 있는 기능 3의 값으로 움직인다.
    
    let delta = e.originalEvent.wheelDelta; //delta에 크롬 스크롤값을 대입
    (delta)? scrollResult = delta : scrollResult = e.detail * -40; 
    //delta가 크롬이면? 그대로 크롬의 스크롤값, 아닐 시(false) 파이어폭스 스크롤값 * -40
    //크롬의 값(120)과 맞추기 위한 -40
    ( scrollResult >= 0 ) ? n++ : n--; 
    //scrollResult에 든 값이 크롬이든 파이어폭스든 1씩 증가/감소하게 만드는 로직.(크로스 브라우징)
    //스크롤을 내릴 시 갑작스레 크게 늘어나는 값을 잡아주기 위한 증가/감소식

    console.log(n);

    winScroll = $(window).scrollTop();
    if( winScroll >= con1Location ){ 
      //scrollTop이 고정되어 있는 con1의 위치값보다 크거나 같다면...(즉, 스크롤이 con1의 위치보다 내려갔다면)
      con2.css({ 'backgroundColor':'#fa7', marginLeft: '-50vw', transform:'rotate(45deg)', transition: 'all 300ms ease'});
      //con2에 위와 같은 스타일 지정
    } else {
      con2.removeAttr('style'); //위에서 적용한 스타일 remove
    }
  });

})(jQuery);

//스크롤을 올릴 시 양수
//스크롤을 내릴 시 음수
//스크롤이 멈춰 있을 시 위치값 0