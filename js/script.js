var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".close-write-us");
var username = popup.querySelector("[name=name]");

link.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.add("popup-show");
 username.focus();
 }); 

 close.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.remove("popup-show");
 });