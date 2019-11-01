// ex_pull.js

(function($){
  const exPull = $('#exam_pull');

  exPull.append('<div class="btn_area"></div>');
  const pullBtn = $('.btn_area');
  pullBtn.append('<button type="button" class="next"><i class="fas fa-chevron-right"></i></button>\
                  <button type="button" class="prev"><i class="fas fa-chevron-left"></i></button>');
  const btn = pullBtn.children('button');   

  exPull.append('<div class="slide_form_pull"></div>');
  const slideForm = exPull.children('.slide_form_pull');
  slideForm.append('<ul class="clearfix"></ul>');
  const pullUl = slideForm.children('ul');
  pullUl.append('<li></li><li></li><li></li>');
  const pullLi = pullUl.children('li'); 
  pullLi.eq(0).addClass('one_addver');
  pullLi.eq(1).addClass('two_addver');
  pullLi.eq(2).addClass('three_addver');

            
  const pullUrl = '../img/';
  const imgList = [ 'img08.jpg', 'img09.jpg', 'img10.jpg' ];
  let imgLen = imgList.length;

  let go;
  let btnN = 0;
  
  // -------------------------------------------------------------------
  // for문으로 이미지 넣기 

  for( let i = 0; i<imgLen; i++ ){
    let addverLi = pullUl.children('li').eq(i);
    addverLi.css({ 'backgroundImage':`url(${pullUrl+imgList[i]})`});
  }

  let cloneLi = pullLi.eq(-1).clone(true);
  cloneLi.prependTo(pullUl);

  imgLen++;

  // -------------------------------------------------------------------
  // 버튼 클릭 시 슬라이드 이동하기

  btn.on('click', function(e){
    e.preventDefault();
    if( $(this).index() === 0 ){ //next
      btnN++;
      if( btnN >= imgLen-1 ){
        btnN = 0;
        pullUl.css({ 'left': '100%'});
      }
    } else { //prev
      btnN--;
    }
    //console.log(btnN);
    pullUl.stop().animate({ 'left':-100 * btnN + '%'}, 500, function(){
        if( btnN <= -1){
          btnN = imgLen-2;
          pullUl.css({ 'left':-100 * btnN + '%'});
        }
      });
    
  });
  // --------------------------------------------------
  // 슬라이드 배너 자동으로 움직였다가 마우스 갖다댈 시 멈추게 하기
  let myN = 0;
  const goSlide = function(){
    go = setInterval(function(){
      myN++;
      if( myN >= imgLen-1){
        myN = 0;
      }
      pullUl.css({ 'left':-100 * myN + '%' });
    }, 3000);
  } //goSlide

  goSlide(0);

  const stopSlide =function(){
    clearInterval(go);
  }

  exPull.on({ 'mouseenter':stopSlide, 'mouseleave':goSlide });

})(jQuery);