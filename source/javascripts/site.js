// This is where it all goes :)

window.onload = function() {
  var $button = document.getElementById("hambutton")
  var $menu = document.getElementById("mobilemenu")
  var isOpen = false;
  var blocking = false;

  var toggle = function() {
    if (blocking) {
      return
    }
    blocking = true
    $menu.classList.remove("animated");

    // TODO fix
    if (isOpen) {
      $button.classList.add("is-active")
      $menu.classList.remove("fadeOut");
      $menu.classList.add("menuon");
      $menu.classList.add("animated");
      $menu.classList.add("fadeIn");
      blocking = false;
    } else {
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
}
