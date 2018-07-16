import './font-awesome-4.6.3/css/font-awesome.min';
import "./css/normalize";
import "./css/style";
import "./css/remodal";
import "./css/remodal-default-theme";

import jQuery from "jquery";
import Vue from "vue/dist/vue.esm";

// Hack
window.$ = jQuery;
window.jQuery = jQuery;

const contents = require('./data.js').default;

require('./js/remodal.min.js');
require('./js/jquery.easing.1.3.js');

window.onload = function() {

  var vm = new Vue({
    el: '#app',
    data: {
      isActive: false,
      listsMobile: contents.mobile(),
      lists: contents.list()
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
      persons: contents.name()
    }
  });

  var vm3 = new Vue({
    el: '#livecontents',
    data: {
      lives: contents.live().slice(0, 5),
      pastPosition: 1
    },
    methods: {
      showPastlive: function(e) {
        this.pastPosition++;
        this.lives = contents.live().slice(0, 5 * this.pastPosition);
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
