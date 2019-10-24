// make_spigen_main_px

(function(){

  const gnb = $('#gnb'); 
  const gnbUl = gnb.children('ul');
  const sideGnbArea = $('.side_gnb_area');

  let navList = [ { title:'about',titleLink:'title_link_01', 
  sub:[{ subName: 'who we are', subLink:'sub_link_01'}, 
  {subName: 'what we do', subLink:'sub_link_02'}, 
  {subName: 'our locations', subLink:'sub_link_03'}]}, 
  { title:'career',titleLink:'title_link_02', 
  sub:[{subName: 'careers', subLink:'sub_link_04'}, 
  {subName: 'HR blog', subLink:'sub_link_05'}, 
  {subName: 'Apply', subLink:'sub_link_06'}]}, 
  { title:'media', titleLink:'title_link_03', 
  sub:[{subName:'media', subLink:'sub_link_07'}]}, 
  { title:'IR', titleLink:'title_link_04', 
  sub:[{subName:'Inverestor',subLink:'sub_link_08' },
  {subName:'IR Archive',subLink:'sub_link_09' },
  {subName:'IR Meeting',subLink:'sub_link_10' }]} ];

  //navList[0].title
  //navList[0].sub[0]

  const forList = (myList ) => {
  let menuLayOut ='<li>\
        <dl>\
          <dt><a href="#"></a></dt>\
          <dd>\
            <a href="#"></a>\
            <a href="#"></a>\
            <a href="#"></a>\
          </dd>\
        </dl>\
      </li>';


  for( let i = 0; i < myList.length; i++ ){
    gnbUl.append(menuLayOut);
    let gnbDt = gnb.find('li').eq(i).find('dt'); 
    let gnbTitleLink = gnbDt.children('a');
    gnbTitleLink.attr('href',myList[i].titleLink);
    gnbTitleLink.append(myList[i].title);

     for( let j = 0; j< myList[i].sub.length; j++ ){
        let gnbDd = gnb.find('dd');
        let gnbListLink = gnbDd.eq(i).children('a');
        gnbListLink.eq(j).append(myList[i].sub[j].subName);
        gnbListLink.attr('href',myList[i].sub[j].subLink );
        //선택자.attr('대체값을 넣을 요소', 대체값);
     }
  }
}
  forList(navList);
  /* 다른 방법 for문
    for( let i=0; i<myList.length; i++ ){
      gnbUl.append('<li><dl><dt><a href="#"></a></dt><dd></dt></dl></li>');
      let gnbLi = gnbUl.children('li').eq(i);
      gnbLi.find('dt').children('a').text(myList[i].title);

      for( let j = 0; j < myList[i].sub.length ; j++ ){
        let gnbDd = gnbLi.find('dd');
        gnbDd.append('<a href="#"></a>');
        let gnbMyLink = gnbDd.children('a').eq(j);
        gnbMyLink.text(myList[i].sub[j]);
      }
    }
  */

  
  //=================================================
  //1. #gnb 영역 내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여 넣기
  //clone() 메소드 사용

    let gnbContents = gnb.contents().clone();
    sideGnbArea.append(gnbContents);

  //=================================================
 
  
  const openGnbBtn = $('.gnb_btn>button');
  const closeGnbBtn = $('.close_gnb_btn>button');
  const sideGnb = $('.side_gnb');
  const gnbDl = gnb.find('dl');
  const gnbDd = gnb.find('dd');
  const gnbDt = gnb.find('dt');
  const gnbTitleLink = gnbDt.children('a');
  const gnbListLink = gnbDd.children('a');
  let timed = 500;

  // .side_gnb_area에서 esc키를 누르면 빠져 나가고 이전의 위치로 돌아가기.
  // ->.side_gnb_area가 보이는 곳에서 수행
  openGnbBtn.on('click', function(e){
    e.preventDefault();

    sideGnb.fadeIn(timed/2, function(){
      $(this).on('keyup', function(e){
        //esc : 27 
        //(console.log(e.keyCode.toLowerCase())로 원하는 키보드값 확인)
        //ㄴe.keyCode.toLowerCase() => 원활한 조건문 입력을 위한 코드값 소문자 변환
        //영문자를 강제로 대문자<=>소문자로 치환하는 메소드
        //대문자 변환 toUpperCase()
        //소문자 변환 toLowerCase()
        if( e.keyCode === 27 ) {
           sideGnb.fadeOut(timed);
           openGnbBtn.focus();
        }
      });
    }); 
    closeGnbBtn.focus();
  });

  closeGnbBtn.on('click', function(e){
    e.preventDefault();
    sideGnb.fadeOut(timed);
    openGnbBtn.focus();
  });

  //------------------------------
  //gnb에 마우스 올리면 dd 나오게 만들기.
  //객체화 만드는 코드

 const addAction = function(){
   let li = $(this).parents('li');
   li.find(gnbTitleLink).addClass('action');
   li.siblings().find(gnbTitleLink).removeClass('action');
   gnbDd.stop().slideDown();
}; //마우스가 올라간 해당 영역을 제외한 나머지 가상 클래스는 지워주는 코드

const removeAction = function(){
  $(this).parent('li').find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideUp();
};


  gnbDl.on({ 'mouseenter': addAction, 'mouseleave':removeAction });
  //ㄴ함수도 객체형으로 사용할 수 있다. 
  
  //gnb-dt에 focus 처리 되면 dd가 나타나게 만들기.
  gnbTitleLink.on('focus', addAction);
  gnbListLink.on('blur', addAction);
  gnbListLink.eq(-1).on('blur', removeAction);


  
  // .side_gnb_area 내부의 마지막 a요소에서 blur처리 시, .close_gnb_btn 위치로 다시 focus 처리 되기.

  const sideLink = sideGnbArea.find('a');
  const sideLastLink = sideLink.eq(-1);
    
 sideLastLink.on('blur', function(){
   closeGnbBtn.focus();
 });
 //ㄴ하위 영역에 focus를 잡을 수 있는 요소가 있어야 실행 가능한 코드.
 //ㄴ블러가 될 마지막 요소였기 때문에 브라우저 밖으로 포커스가 빠져나갔던 것.




})(jQuery);

//focus가 가능한 요소
//a, button, form(input, textarea, select)

//파라미터.preventDefault(); 
//ㄴ내가 모르는 어떤 click 이벤트가 내장 되어 있을지 모르기 때문에 기본 이벤트 지워주고 시작. 

//$('h1').find('a').on('focus'); //focus가 잡히면 실행
//$('h1').find('a').focus(); //  focus를 잡아라!

//.text()는 가존의 콘텐츠를 지우고 자신의 텍스트를 삽입 한다. 