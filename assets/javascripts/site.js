import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import backgroundImageUrl from "../images/na.jpg";

window.onload = function() {
  var $button = document.getElementById("hambutton")
  var $menu = document.getElementById("mobilemenu")

  var isOpen = false;
  var blocking = false;

  var noScroll = function(e) { e.preventDefault(); };

  var toggle = function() {
    if (blocking) {
      return
    }
    blocking = true

    // TODO fix
    if (isOpen) {
      disableBodyScroll($menu);

      $button.classList.add("is-active")
      $menu.classList.remove("fadeOut");
      $menu.classList.add("menuon");
      $menu.classList.add("animated");
      $menu.classList.add("fadeIn");
      blocking = false;
    } else {
      enableBodyScroll($menu);

      $button.classList.remove("is-active")
      $menu.classList.remove("fadeIn");
      $menu.classList.add("animated");
      $menu.classList.add("fadeOut");
      setTimeout(function() {
        $menu.classList.remove("menuon");
        blocking = false;
      }, 500)
    }
  }

  $button.addEventListener('click', function() {
    isOpen = !isOpen;

    toggle();
  })

  if (document.body.classList.contains("index")) {
    document.body.style.backgroundImage = 'url(' + backgroundImageUrl + ')';
  }
}
