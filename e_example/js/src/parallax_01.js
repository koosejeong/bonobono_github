(function($){
  let win = $(window);
  const vb = $('#viewBox');
  let p00 = $('.par_00');
  let p01 = $('.par_01');
  let p02 = $('.par_02');
  let p03 = $('.par_03');
  let p04 = $('.par_04');
  let p05 = $('.par_05');
  let p06 = $('.par_06');
  let p07 = $('.par_07');
  let p08 = $('.par_08');
  let par = [];


  for(let i=0; i<vb.children().length; i++){
    let p = '.par_0' + i;
    par.push(p);
  }

  let winH = win.outerHeight();
  win.on('scroll', function(e){
    let scroll = win.scrollTop(); //사용자의 스크롤 값을 받아오는 변수
    //console.log(scroll);
    for(let j=0; j<par.length; j++){ 
      $(par[j]).css({'top':-scroll / (par.length - j)}); 
    }
  });
  // -------------------------------------------

  const conBox = $('#conBox');
  const conUl = conBox.children('ul');
  const conLi = conUl.children('li');
  const liOffset = [];

  win.on('scroll', function(e){
    e.preventDefault();
    let scroll = win.scrollTop(); 
    //conBox의 시작 위치가 다르기 때문에 scrollTop으로 위치값(브라우저에서 얼마나 떨어져 있는지) 파악
    let scRel = []; 
    for(let i=0; i<conLi.length; i++){
      liOffset[i] = conLi.eq(i).offset().top; 
      scRel[i] = liOffset[i] - scroll-(winH/2);
      conLi.eq(i).find('span').css({transform:'translateY('+ scRel[i]/7 + 'px)'});
      //위에서 아래로 내려오는 효과를 주고 싶을 시 -scRel로 주면 된다.
    }
    //스크롤이 움직임에 따라 움직임이 변하는 li가 다수이기 때문에 배열과 for문으로 처리
  });
 

})(jQuery);

//-scroll / 8 : par_01~08 클래스의 갯수를 기준으로 나눈 값 
//(사용자 눈에)뒤에 배치된 이미지는 적게 움직이고, 앞에 배치된 이미지는 크게 움직이기 때문에 뒤에 배치된 이미지의 움직임 값은 큰 수로 나누고, 앞에 배치된 이미지는 작은 수로 나눔.

// ------------------------
//(1) 각 li가 얼마만큼 떨어져 있는지 파악하여 변수에 담고, 
//(2) 위에서 선언한 배열에 내가 효과를 줄 이미지의 위치값을 계산하여 담는다.
// ㄴ scRel[i] = liOffset[i] - scroll-(winH/2); 각 li의 위치값 - 브라우저 위치값-(브라우저 높이의 절반만큼) 
// ㄴ 브라우저 높이의 절반만큼(winH/2) : 움직이는 효과를 줄 이미지가 어디서부터 움직일지 정하기 위한 수치
//(3) 이미지를 갖고 있는 선택자(순서값을 가질 수 있는)를 찾아 css에서 위치를 조정해준다. (위치를 조정할 수 있는 프로퍼티를 정하기 전 포지션이 있는지, 없는지를 파악하여 어떤 프로퍼티를 사용할지 정한다.)