// slide_indi_and_btn.js

(function($){
$.fn.myIndiSlide = function(jsonList, imgList){

  // data 불러오기--------------------
  let url = jsonList; //'../data/slide_indi_btn.json';
  let imgurl = imgList; //'../img/coffee/';
  let rel = null;
  $.ajax({
    async:false,
    dataType:'json',
    url:url,
    success: function(data){
      return rel= data;}  
  });
  // -------------------------------

  const slide = this;
  slide.append('<div class="slide_wrap"><ul></ul></div>');

  // btn(.slide_wrap 이전에 생성)------
  const slideWrap = slide.find('.slide_wrap');
  slideWrap.before('<div class="btn">\
  <button type="button" class="next"><span>다음 내용 보기</span></button>\
  <button type="button" class="prev"><span>이전 내용 보기</span></button>\
  </div>');

  // indicator----------------------
  slideWrap.before('<ul class="indicator"></ul>');
  const indiCator = slide.find('.indicator');

  // 각 영역에 필요한 내용 담기-----------
  let slideLen = rel.length;
  for( let i = 0; i <slideLen; i++ ){
    let slideForm = `<li><span class="hidden">${rel[i].data}</span></li>`;
    let indiForm = `<li><a href="#"><span class="hidden">${rel[i].data}</span></a></li>`; 

    slideWrap.children('ul').append(slideForm);
    indiCator.append(indiForm);
    slideWrap.find('li').eq(i).css({ backgroundImage:'url(' + imgurl + rel[i].img +')','background-position': '50% 50%', 'background-size': 'cover',  'background-repeat': 'no-repeat' })
  } //for

  //indicator 디자인------------------
  indiCator.parent().css({ 'position':'relative'});
  indiCator.css({ 'position':'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', width:'100%'})
  indiCator.find('li').css({ display:'inline-block', marginRight:'0.5rem'});
  indiCator.find('a').css({ 'display':'block', width:'26px', height:'26px', backgroundColor:'#777', borderRadius:'100%'});

  //button 디자인---------------------

  const btnArea = slide.find('.btn');
  const btn = btnArea.children('button');

  btnArea.css({ position:'absolute', top:'50%', left:'5%', zIndex:500, width:'90%', height:0 });
  btn.css({ width:'50px', height:'50px', transform:'translateY(-50%)' });
  btn.eq(0).css({float:'right'});
  btn.eq(-1).css({float:'left'});

   //slide 디자인---------------------
   let thisH = slide.outerHeight();
   slideWrap.css({ width:'100%', height:(thisH - 50)+'px' });
   const slideUl = slideWrap.children('ul');

  //  -------------------------------
  // li마지막 요소 복제, 첨삭한 후 디자인
  slideUl.children('li').eq(-1).clone().prependTo(slideUl);
  slideLen++; //기존 slideLen(rel.length)에 + 복제한 li.eq(-1)
  slideUl.css({ width: 100 * slideLen + '%', height:'100%', marginLeft:'-100%', position:'relative', left:0 });
  slideUl.children('li').css({ width:100 / slideLen + '%', height:'100%', float:'left'});

  //  indicator에 action 클래스 주기-----
  let n = 0;
  let indiLi = indiCator.children('li');

  let indiDefault = indiLi.eq(0).children('a').css('backgroundColor');
  console.log(indiDefault);
  const indicatorAction = function(n){
    let indiIndex = indiLi.eq(n);
    indiLi.removeClass('action');
    indiIndex.addClass('action');
    if( indiIndex.hasClass('action')){
      indiIndex.children('a').css({ backgroundColor:'#f07'});
    } 
      indiIndex.siblings().find('a').css({ backgroundColor:indiDefault});
    
  };
  indicatorAction(n);

  /*
  $('head').append('<style class="myStyle"></style>');
  $('head').find('.myStyle').append('.indicator li.action> a{ background-color:#f06 !important;}');
  */

  // indicator 클릭/focus----------------------

  indiLi.children('a').on('focus', function(e){

    e.preventDefault();
    n = $(this).parent().index();
    slideUl.animate({ left:-100 * n + '%'});
    indicatorAction(n);

  });
  // btn 클릭----------------------
  btn.on('click', function(e){
    e.preventDefault();
    let next = $(this).hasClass('next');
    if(next){
      n++;
      if( n >=slideLen-1 ){
        slideUl.css({left:'100%'});
        n = 0;
      }
    } else {
      n--; }
        slideUl.animate({left:-100 * n + '%'}, function(){
          if( n < 0 ){
            n = slideLen-2;
          }
        });   
    slideUl.css({left:-100 * n + '%'});
    
   // indiLi.eq(n).addClass('action');
   // indiLi.eq(n).siblings().removeClass('action');
    indicatorAction(n);
  });
} //$.fn.myIndiSlide
})(jQuery);