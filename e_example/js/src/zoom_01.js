(function($){
  let url = '../img/money/';
  //const thumnailImg = [ 'money02.jpg', 'money04.jpg', 'money06.jpg', 'money08.jpg' ];
  const img = [ 'money01.jpg', 'money03.jpeg', 'money05.jpg', 'money07.jpg' ];
  const big = $('.big');
  const smallLi = $('.small').find('li');
  const view = $('.view');
  const loc = $('.location');
  const per = $('.per');
  const mLoc = $('.mouse_location');

  let bigW = big.outerWidth();
  let bigH = big.outerHeight();

  mLoc.hide();

  const imgSet = function(i){
    big.css({'backgroundImage':`url(${url + img[i]})`,'backgroundRepeat':'no-repeat', 'backgroundSize':'cover', 'backgroundPosition':'50% 50%'});
    view.css({'backgroundImage':`url(${url + img[i]})`,'backgroundRepeat':'no-repeat', 'backgroundSize':'500% auto'});
    mLoc.css({'backgroundImage':`url(${url + img[i]})`,'backgroundRepeat':'no-repeat', 'backgroundSize':'500% auto'})
  }
  imgSet(0);

  smallLi.on('mouseenter focus', function(){
    let i = $(this).index();
    imgSet(i);
  });

 

  //마우스 위치값을 나타내는 기능
  //offsetX, offsetY - 프로퍼티
  //pageX(), pageY()
  //clientX(), clientY()
  //screenX, screenY()

  //위치값을 %로 변환하기
  //좌표 / 기준크기 * 100
  //vw => 값 / 스크린크기 * 100


  big.on('mousemove', function(e){
    let ofx = e.offsetX;
    let ofy = e.offsetY;
    console.log(ofx);
    loc.find('span').text(ofx + ',' + ofy);
    
    let perX = parseInt(ofx / bigW * 100); //소수점 절사
    let perY = Math.round(ofy / bigH * 100); 
    /*
    소수점 올림(Math.round(반올림), Math.ceil(올림), Math.floor(내림), Math.random(0~1까지 랜덤 숫자))
    소수점 3자리에서 올림 Math.ceil()*100 / 100
    */
    per.find('span').text( perX + ',' + perY );
    view.css({'backgroundPosition':perX + '%' + ' ' + perY + '%' });
    mLoc.show();
    mLoc.css({top: ofy+ 5  + 'px', left: ofx + 5 + 'px', 'backgroundPosition':perX + '%' + ' ' + perY + '%' });
     //마우스 좌표 영역에 따라 이미지 확대
  });
  big.on('mouseleave', function(){
    mLoc.hide();
  });
    
})(jQuery);