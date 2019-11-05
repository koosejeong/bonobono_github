// test022.js
( function($){

  const miniProGuide = $('.miniProduct');
  const indi = miniProGuide.children('.indicator');
  const indiLi = indi.children('li');
  const indiBtn = indiLi.children('button');
  const miniProduct = miniProGuide.children('.product');
  const miniLi = miniProduct.children('li');
  const url = "../img/";
  const productImg = "slide_0";

  
  let liLen = miniLi.length;
  for( let i=0; i <= liLen; i++ ){
    miniLi.eq(i).css({'backgroundImage':`url("${url+productImg+(i+1)}.png")`});
  }
  
  //miniLi.eq(-1).clone(true).prependTo(miniProduct);
 const cssMv = function(myN){
  miniProduct.animate({ 'left':-100 * myN + '%'});
 }


  indiBtn.on('click', function(e){
    e.preventDefault();
    //console.log(indiBtn);
    //console.log(myN);
    let myN = $(this).parent('li').index();
    myN++;
    if( myN >= liLen ){
      myN = 0;
    } else if( myN <= 0 ){
      myN--;
    }
    cssMv(myN); 
    /*
      let myN = $(this).parent('li').index();
      switch(myN) {
        case  0:
          cssMv(myN);
        break;
        case 1:
          cssMv(myN);
        break;
        case 2:
          cssMv(myN);
        break;
      }*/
    $(this).addClass('action');
    $(this).parent('li').siblings('li').children('button').removeClass('action');
  });

})(jQuery);