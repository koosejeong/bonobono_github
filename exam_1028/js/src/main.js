// main.js

(function(){
  const body = $('body');
  const viewBox = $('#viewBox');
  let url = "../html/";
  let jsUrl = "../js/src/";
  
  let cont = url + 'viewBox.html';
  // viewBox.load(url+'content.html');
  viewBox.load(cont, function(){
    return  body.append('<script src='+jsUrl+'viewBox.js></script>');
  });

  

})(jQuery);