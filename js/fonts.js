(function() {
    WebFontConfig = {
      active: function() {
        sessionStorage.fonts = true;
      },
      google: {
        families: ['Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,400', 'Libre+Baskerville:ital,wght@0,400;0,700;1,400']
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
