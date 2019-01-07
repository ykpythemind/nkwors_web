// This is where it all goes :)

window.onload = function() {
  var $button = document.getElementById("hambutton")
  var $menu = document.getElementById("mobilemenu")
  var isOpen = false

  var toggle = function(open) {
    $menu.classList.remove("animated");

    // TODO fix
    if (open) {
      $menu.classList.remove("fadeOut");
      $menu.classList.add("menuon");
      $menu.classList.add("animated");
      $menu.classList.add("fadeIn");
    } else {
      $menu.classList.remove("fadeIn");
      $menu.classList.add("animated");
      $menu.classList.add("fadeOut");
      setTimeout(function() {
        $menu.classList.remove("menuon");
      }, 1000)
    }
  }

  $button.addEventListener('click', function() {
    isOpen = !isOpen;
    $button.classList.toggle("is-active")

    toggle(isOpen);
  })
}
