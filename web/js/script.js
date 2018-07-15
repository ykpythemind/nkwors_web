
window.onload = function() {

  var vm = new Vue({
    el: '#app',
    data: {
      isActive: false,
      listsMobile: getListOfContents.mobile(),
      lists: getListOfContents.list()
    },
    methods: {
      touch: function(event){
        this.isActive=!this.isActive;
        $("#acordin").slideToggle();
      },
      listclick: function(slag){
        if (slag === "twitter"){
          window.open('https://twitter.com/nkwors');
        }else if (slag === "soundcloud"){
          window.open('https://soundcloud.com/nkwors');
        }else if (slag === "youtube"){
          window.open('https://www.youtube.com/watch?v=3SGmdrPiYH0');
        }else{
        $('[data-remodal-id='+slag+']').remodal().open();
        }
      }
    }
  });

  var vm2 = new Vue({
    el: '#person',
    data: {
      persons: getListOfContents.name()
    }
  });

  var vm3 = new Vue({
    el: '#livecontents',
    data: {
      lives: getListOfContents.live().slice(0, 5),
      isPastlive: false
    },
    methods: {
      showPastlive: function(e) {
        this.lives = getListOfContents.live();
        this.isPastlive = true;
      }
    }
  });

  $('#container').css('height', (window.innerHeight || document.documentElement.clientHeight) );
  $('header').css('height', (window.innerHeight || document.documentElement.clientHeight) );

  //iPhoneのとき、ちょっとずれる対策
  $(window).scrollTop(0);

  $(document).on('opened', '.remodal', function () {
    /**
     * modal opened
     */
     $('header').addClass('bglock');
     $('#container').addClass('bglock');
      $('#app').addClass('bglock');
  });

  $(document).on('closed', '.remodal', function (e) {
    /**
     * modal closed
     */
     $('header').removeClass('bglock');
     $('#container').removeClass('bglock');
     $('#app').removeClass('bglock');
  });

};

$(function(){
    var isAndroidBrowser = false;
    var ua = window.navigator.userAgent;
    if (/Android/.test(ua) && /Linux; U;/.test(ua) && !/Chrome/.test(ua)) {
      isAndroidBrowser = true;
      $("#container").css("display","none");
      $("#ie_show").css("display","block");
    }
});
