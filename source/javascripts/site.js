// This is where it all goes :)

window.onload = function() {
  var $button = document.getElementById("hambutton")
  var isOpen = false

  var toggle = function(open) {
    if (open) {
    } else {
    }
  }

  $button.addEventListener('click', function() {
    isOpen = !isOpen;
    $button.classList.toggle("is-active")

    toggle(isOpen);
  })
}
