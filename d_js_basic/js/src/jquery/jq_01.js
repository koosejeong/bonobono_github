// jq_01.js


(function($) {
  $('#wrap').css({'width':'700px', 'height':'auto', 'backgroundColor':'#faa'});
  $('h1').css({'width':'100%', 'height':'auto', 'backgroundColor':'#acf'});

  //h2.addEventListener('click;, function(){});
  $('h2').on('click', function(){
    $('#wrap').animate({'height':'1000px','backgroundColor':'#0af'});
  });

})