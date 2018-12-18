// Three variables are created to target IDs for the modal. //

var modal = document.getElementById("cModal");
var cbtn = document.getElementById("cButton");
var spanner = document.getElementsByClassName("close")[0];

// This particular line of code is so that when the user clicks the button, the modal pops up. //
cbtn.onclick = function(){
  modal.style.display = "inline-block";
}
// This particular line of code is so that when the user clicks the X button, the modal no longer displays. //
spanner.onclick = function(){
  modal.style.display = "none";
}
// This line of code is so that if the user clicks on anything but the modal, the modal will no longer display. //
window.onclick = function(event) {
  if (event.target == modal){
    modal.style.display = "none";
  }
}
