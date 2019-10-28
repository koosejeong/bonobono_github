// headerJs.js

( function(){$
  const gnb = $('#gnb');
  const gnbUl = gnb.children('ul');
  const gnbLi = gnbUl.children('li');
  const gnbDl = gnbLi.children('dl');
  const gnbDt = gnbDl.children('dt');
  const gnbDd = gnbDl.children('dd');

  const mainLink = gnbDt.children('a');
  const subLink = gnbDd.children('a');

  const samseonBar = $('.samseon-bar');
  const sideGnb = $('.side_gnb');
  const sideGnbOpenBtn = sideGnb.children('button');
  const subMenuArea = $('.sub_menu_area');
  const sideGnbCloseBtn = subMenuArea.find('button');

  const sideMenuArea = $('.menu_area');

  gnb.on( 'mouseenter', function(){
    $(this).css({'display':'block'});
    gnbDd.stop().slideDown();
  });
  gnb.on( 'mouseleave', function(){
    gnbDt.css({'display':'block'});
    gnbDd.stop().slideUp();
  });
  mainLink.on('focus', function(){
    $(this).css({'display':'block'});
    gnbDd.stop().slideDown();
  });
  subLink.eq(-1).on('blur', function(){
    gnbDt.css({'display':'none'});
    gnbDd.stop().slideUp();
  });
  sideGnbOpenBtn.on( 'mouseenter', function(){
    subMenuArea.css({ 'display':'block'});
  });
  sideGnbCloseBtn.on( 'click', function(){
    subMenuArea.css({ 'display':'none'});
  });

  let gnbContents = gnbDl.clone();
  sideMenuArea.append(gnbContents);
 
})(jQuery);

/*
  let navList = [ { title:'회사소개', sub: ['회사소개','CEO인사말','경영이념', '연혁', '조직', 'CI/BI 소개', '오시는 길'] }, { title:'사업영역', sub:[ '분양캘린더', '주택/분양사업', '수주사업', '개발사업', '기타사업']}, { title:'홍보센터', sub:[ '뉴스', '언론 속 대방', '분양광고']} , { title:'인재채용', sub:[ '인재상', '인사제도', '채용절차', '공고 및 지원']}, { title:'고객지원', sub:[ '고객지원안내', '마감재', 'FAQ', '관심고객등록', '고객문의', '하자문의']}];

  const forList = () => {
    let layOut = '<li>\
    <dl>\
      <dt><a href="#"></a></dt>\
      <dd></dd>\
    </dl>\
  </li>'

  let iLength = navList.title.length;
  let jLength = navList.sub.length;
  for (let i=0 ; i<iLength ; i++ ){
    let lay = gnbUl.append(layOut);
    let gnbDd = gnbUl.find('dd');
    if ( ){ 
    

    }
    
  }

}

forList();
*/