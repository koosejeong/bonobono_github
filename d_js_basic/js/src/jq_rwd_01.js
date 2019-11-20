// jq_rwd_01.js

(function($){

  
  //디바이스 정의
  let mob = 480, tab = 768, pc = 1280, laptop =1366 ;
  let myD = ['mobile' ,'tablet', 'pc', 'labtop', 'pcfull'];
  const wrap = $('#wrap');
  let tempFile = './rwd_temp/';

  //디바이스에 따라 반응형 문서 불러오는 영역
    const loadFile = function(w){
      switch(w){
        case myD[0] :
            wrap.load(tempFile + 'mob.html');
          break;
        case myD[1] :
            wrap.load(tempFile + 'tab.html');
          break;
        case myD[2] :
            wrap.load(tempFile + 'pcbase.html');
          break;
        case myD[3] :
            wrap.load(tempFile + 'labtop.html');
          break;
        case myD[4] :
            wrap.load(tempFile + 'pcfull.html');
          break;
      }
    } //loadFile

   // -------------------------------

   // 현재 디바이스의 크기를 파악하여 정의
   let nowDivice = null; 
   const DiviceCheck = function(w){
   if(w <= mob){
     nowDivice = myD[0];
   } else if( w > mob && w <= tab) {
     nowDivice = myD[1];
   } else if(w > tab && w <= pc) {
     nowDivice = myD[2];
   } else if(w > pc && w <= laptop ) {
     nowDivice = myD[3];
   } else {
     nowDivice = myD[4];
   }
   
   return nowDivice;
 } // DiviceCheck();

 // -------------------------------

  const win = $(window);
  let winW = win.outerWidth();

  let beforeDivice = DiviceCheck(winW);//디바이스의 파악 후 각
  loadFile(beforeDivice); //해당 디바이스 문서 불러오기
  console.log('beforeDivice', beforeDivice);


  // -------------------------------
  win.on('resize', function(){
    let nowWinW = win.outerWidth();
    let afterDivice = DiviceCheck(nowWinW);
    console.log(afterDivice);
    //console.log(nowWinW);

    if( winW !== nowWinW && beforeDivice !== afterDivice  ){ 
      location.reload(); //이전 디바이스 크기와 현재 디아비스 크기가 다를 시 새로고침
    }
  });
  

})(jQuery);