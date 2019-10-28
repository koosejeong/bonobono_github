// main.js

( function(){
  const body = $('body');
  const wrap = $('#wrap');
  const header = $('#headBox');
  const addver = $('#viewBox');
  // ==============================

  let myUrl = '../html/';
  let jsUrl = '../js/src/';

  header.load(myUrl + 'header.html', function(){
    return body.append(`<script src="${jsUrl}headerJs.js"></script>`);
  });

  addver.load(myUrl + 'section.html', function(){
    return body.append(`<script src="${jsUrl}sectionJs.js"></script>`);
  });

  
})(jQuery);