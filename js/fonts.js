(function() {
    WebFontConfig = {
      active: function() {
        sessionStorage.fonts = true;
      },
      google: {
        families: ['Inter:wght@200;300;400;600', 'Amiri:ital,wght@0,400;0,700;1,400;1,700']
      },
      timeout: 2000
    };

    (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
})();
