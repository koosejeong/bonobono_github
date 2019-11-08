// test022.js
( function($){

  // 변수 선언-------------------------------
  const miniProGuide = $('.miniProduct');
  const miniProGuide02 = $('.miniProduct02');
  const miniProGuide03 = $('.miniProduct03');

  const btnArea = miniProGuide.children('.btn');
  const btnArea02 = miniProGuide02.children('.btn');
  const btnArea03 = miniProGuide03.children('.btn');

  const indiBtn = btnArea.children('button');
  const indiBtn02 = btnArea02.children('button');
  const indiBtn03 = btnArea03.children('button');

  const miniProduct = miniProGuide.children('.product');
  const miniProduct02 = miniProGuide02.children('.product');
  const miniProduct03 = miniProGuide03.children('.product');

  const miniUl = miniProduct.children('ul');
  const miniUl02 = miniProduct02.children('ul');
  const miniUl03 = miniProduct03.children('ul');

  let miniLi = miniUl.children('li');
  let miniLi02 = miniUl02.children('li');
  let miniLi03 = miniUl03.children('li');

  const url = "../img/";
  const productImg = "slide_0";

  let liLen = miniLi.length;
  let myN = 0;

  // 이미지 불러오기------------------------------------
  for( let i=0; i <= liLen; i++ ){
    miniLi.eq(i).css({'backgroundImage':`url("${url+productImg+(i+1)}.png")`});
    miniLi02.eq(i).css({'backgroundImage':`url("${url+productImg+(i+1)}.png")`});
    miniLi03.eq(i).css({'backgroundImage':`url("${url+productImg+(i+1)}.png")`});
  }

  // 마지막 요소 복제-----------------------------------
  miniLi.eq(-1).clone(true).prependTo(miniUl);
  miniLi02.eq(-1).clone(true).prependTo(miniUl02);
  miniLi03.eq(-1).clone(true).prependTo(miniUl03);

  miniLi = miniUl.children('li');
  liLen = miniLi.length; //4

  // miniProduct01 영역-------------------------------

  indiBtn.on('click', function(e){
    e.preventDefault();
    if( $(this).index() === 0 ){ 
      myN++;
       if( myN >= liLen-1 ){
        myN = 0;
      }
    } else if($(this).index() === 1 ) { 
      myN--;
       if( myN <= -1 ){
         miniUl.css({ 'left':0});
         myN = liLen-2;
       }
    }
    miniUl.css({ 'left':-100 * myN + '%'});
    
    $(this).addClass('action');
    $(this).siblings('button').removeClass('action');

  });

  // miniProduct02 영역-------------------------------
  miniLi02.eq(0).siblings().css({ 'display':'none'});

  indiBtn02.on('click', function(e){
    e.preventDefault();
    if( $(this).index() === 0 ){ 
      myN++;

       if( myN >= liLen-1 ){
        myN = 0;
      }
    } else if($(this).index() === 1 ) { 
      myN--;
       if( myN <= -1 ){
         miniUl02.css({ 'left':0});
         myN = liLen-2;
       }
    }
    miniLi02.eq(myN).css({ zIndex: 10 }).stop().fadeIn();
      miniLi02.eq(myN).siblings().hide(0, function(){
      $(this).css({zIndex:0});
      });
    
    $(this).addClass('action');
    $(this).siblings('button').removeClass('action');
  });

  // miniProduct03 영역-------------------------------

  indiBtn03.on('click', function(e){
    e.preventDefault();
    if( $(this).index() === 0 ){ 
      myN++;

       if( myN >= liLen-1 ){
        myN = 0;
      }
    } else if($(this).index() === 1 ) { 
      myN--;
       if( myN <= -1 ){
         miniUl03.css({ 'top':'100%'});
         myN = liLen-2;
       }
    }
    miniUl03.animate({ 'top':-100 * myN + '%'});
    $(this).addClass('action');
    $(this).siblings('button').removeClass('action');
  });

})(jQuery);