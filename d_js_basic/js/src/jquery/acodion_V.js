// acodion_V.js

(function(){
  const menuV = $('.accordion_menu_v');
  const menuDt = menuV.find('dt');
  const menuDd = menuV.find('dd');

  menuDd.eq(0).show();
  menuDt.contents().wrap('<a href="#">');
  //menuDt의 컨텐츠를 파악하여 <a>로 감싸게 하는 기능.
  //순수 javascript 사용 시 반복문으로 모든 dt에 a가 삽입 되도록 처리해야 한다.
  const menudTLink = menuDt.find('a');
  menudTLink.css({'display':'block', 'width':'100%', 'height':'100%', 'color':'inherit'});
  //const menudTLink = menuDt.find('a'); 해당 구문은 contents()와 wrap()로 <a>를 생성 후에 입력해야 한다. 
  

  /* menudTLink.on('click', function(){
    //$(this).siblings('dd').hide();
    
    //클릭한 메뉴만 접었다 피는 가장 쉬운 방법.
    //순서 바꾸기.(siblings)로 모든 dd를 숨기고, 그 다음에 오는 dd를 펼쳐라
    //$(this)는 내가 만든 함수에서 기능할 주체를 축약해서 부르는 단어이다.
    //위 구문에서 $(this)=== menuDt, 해당 함수는 dt를 클릭 시 원하는 dd를 show() 상태로 만들 거기 때문에 $(this).next('element')-(클릭한 thist의 다음에 오는 요소를 선택하란 뜻)라고 작성한다.

    $(this).parent().next(menuDd).siblings('dd').stop().slideUp();
    $(this).parent().next(menuDd).stop().slideToggle();  
  }); 
    //ㄴ 위 로직과 아래 로직은 같은 기능을 한다 ㄱ 
  */

  menuDt.on('click', function(){
    let i = $(this).index()/2;
    menuDd.eq(i).siblings('dd').slideUp();
    menuDd.eq( i ).slideToggle();
    //let i = $(this).index(); 입력 시, 안에 다른 속성을 포함하여 순서를 나타내므로 index값을 2로 나눌 시 순수하게 dt의 순서값만 가져올 수 있다.
    //index()에 나누기 2를 하는 이유는, menuDd.eq()는 dd의 순서값만 가져오기 때문에(0,1,2,3) dt.index()와 짝이 맞지 않는다.(0.2.4.6을 가져오므로) 이때, dt 클릭 시 그 형제인 dd를 기능하게끔 제어해야 하는데 순서값이 맞지 않아 불가능하므로 둘의 순서값을 맞춰줘야 한다. 하여 dt는 자기값에 나누기 2를 하여 (0/0=0, 2/2=1, 4/2=2, 6/2=3) dd와 똑같은 순서값 0,1,2,3을 가져올 수 있다. 이는, dt와 dd가 합이 맞는 짝수값이기에 활용 가능한 로직이며, dd의 수가 더 많은 경우 다르게 로직을 짜야 한다. 


  });

//menuLink.on( 'focus', function(){ $(this).addClass('action')}); 를 축약한 것 ㄱ
const addC = function(){
  $(this).addClass('action');
};
//menuLink.on( 'blur', function(){ $(this).removeClass('action')}); 를 축약한 것 ㄱ
const removeC = function(){
  $(this).removeClass('action');
};
//menuLink.on('focus', addC ); 를 축약한 것 ㄱ
//menuLink.on('focus', removeC ); 를 축약한 것 ㄱ 
menudTLink.on( { "focus":addC, "blur":removeC });



})(jQuery);


  //let t = menuDt.eq(0).content();
  //.content() : 선택된 요소를 파악하는 메소드.
  //menuDt.wrap('<tag>');
  //.wrap() : 선택한 요소에 부모 요소를 생성하거나 파악하는 메소드.