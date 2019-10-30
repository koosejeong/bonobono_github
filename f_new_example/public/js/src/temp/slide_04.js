// slide_04.js

( function(){

  const url = "../img/";
  const imgList = [ {title:'addver_01', bgimg:'img01.jpg', content:'addver marketting', linkText:'첫번째 바로가기', link:'http://www.naver.com'} , { title:'addver_02', bgimg:'img02.jpg' , content:'addver marketting', linkText:'두 번째 바로가기', link:'http://www.daum.net'}, { title:'addver_03', bgimg:'img03.jpg' , content:'addver marketting', linkText:'세 번째 바로가기', link:'http://www.google.com'}, { title:'addver_04', bgimg:'img04.jpg', content:'addver marketting', linkText:'네 번째 바로가기', link:'http://www.github.com'}, { title:'addver_05', bgimg:'img05.jpg', content:'addver marketting', linkText:'다섯 번째 바로가기', link:'http://www.tistory.com'} ];

// ==========================================
//기본 선택자 및 내용 생성 
const slide_04 = $('#viewBox_04');
slide_04.append('<div class="slide_form"></div>');
const slideForm = slide_04.children('.slide_form');
slideForm.append('<ul></ul>');
const slideGuide = slideForm.children('ul');

let count = imgList.length;
let slideCon = '<dl><dt></dt><dd class="con"></dd>\
                  <dd class="link"><a htrf=""></a></dd></dl>';

for(let i=0; i < count; i++ ) {
  slideGuide.append(`<li class="slide_4th_0${i+1}"></li>`);
  let liNth = slideGuide.children('li').eq(i);
  //liNth.text(imgList[i].title);
  liNth.html(slideCon);
  liNth.css({ 'backgroundImage':`url(${url+imgList[i].bgimg})`});

  liNth.find('dt').text(imgList[i].title);
  liNth.find('.con').text(imgList[i].content);
  let link = liNth.find('.link').children('a');
  link.text(imgList[i].linkText);
  link.attr({ 'href':imgList[i].link, 'target':'_blank'});
}


let cloneLi = slideGuide.children('li').eq(-1).clone(true);
cloneLi.prependTo(slideGuide); // || slideGuide.prepend.(cloneLi); 

count++; //cloneLi로 li의 마지막 요소가 +1 됐으므로 재정의 
const slide4thLi = slideGuide.children('li'); //li는 for문에서 생성된 것이므로 for문이 종료 된 후 선언한다.
slideGuide.css({ 'width':(100*count) + '%' });
slide4thLi.css({'width':100/count + '%', boxSizing:'border-box', 'border':'1px solid #5ff'});

// btn 영역 만들기------------------------------------------
slide_04.prepend('<div id="slide_btn_area">\
  <button type="button" class="next"><span class="hidden">다음 내용 보기</span><i class="fas fa-chevron-right"></i></button>\
  <button type="button" class="prev"><span class="hidden">이전 내용 보기</span><i class="fas fa-chevron-left"></i></button>\
</div>');
//html 구문을 변수로 만들어 prepend에 해당 변수를 삽입하는 방법도 있다. 


// ----------------------------------------------
//생성된 버튼을 이용하여 좌우 슬라이드 기능 수행

const btn =slide_04.find('button');
let btnN = 0;

btn.on('click', function(e){ //button을 하나로 묶어서 처리하게 만드는 로직 
  e.preventDefault();
  if( $(this).index() === 0){
    btnN++;
      // ----------------------
    if( btnN>=count-1 ){
          btnN = 0;
          slideGuide.css({ 'left':'100%'});
      }
    } else {
        btnN--;   
    }
     // ----------------------
     slideGuide.stop().animate({ 'left':-100*btnN + '%'}, 500, function(){
      if( btnN<=-1){
          btnN=count-2;
          slideGuide.css({ 'left': -100*btnN + '%'});
        }
    });
});


/*

const nextBtn = slide_04.find('.next');
const prevBtn = slide_04.find('.prev');

nextBtn.on('click', function(e){ //btn.eq(0).on('click', function(){});
  e.preventDefault();
  btnN++;
  if( btnN>=count-1 ){
    btnN = 0;
    slideGuide.css({ 'left':'100%'});
  }
  slideGuide.stop().animate({ 'left':-100*btnN + '%'}, 500);
});
prevBtn.on('click', function(e){ //btn.eq(1).on('click', function(){});
  e.preventDefault();
  btnN--;
  slideGuide.stop().animate({ 'left':-100*btnN + '%'}, 500, function(){
    if( btnN<=-1){
      btnN=count-2;
    }
    slideGuide.css({ 'left': -100*btnN + '%'});
  }); //콜백 된 function 종료
  //ㄴ애니메이트로 이동한 후에, if문이 실행 돼야 하므로 function 콜백
});
*/
})(jQuery);


/* js로 css 주기
 * ----------------------------------------------
 * button 영역 및 button 변수화 하기.
 * 버튼영역.css({ 'position':'absolute', 'top':'50%', 'left':0});
 * 버튼.css({ 'width':'100px', 'height':'30px'});
 * 버튼.eq(0).css({ 'float':'right'}); //button은 inline요소기 때문에 따로 float을 줄 필요 없지만, 별도로 float값을 주지 않을 시 태그를 작성한 순서대로 버튼이 나열 되기 때문에 코딩한 순서를 확인하여 다음 버튼이 먼저일 시 첫번째 버튼(버튼.eq(0))을 선택하여 float 값을 준다. 
 * 버튼.eq(1).css({ 'float':'left'});
 * $('head').find('title').after('<style></style>'); // js에서 <style> 태그 생성하기
 * ㄴafter는 앞 요소 바로 뒤에 만들 때 사용
 *
 */