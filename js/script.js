var button = document.querySelector(".button-popup");
var popup = document.querySelector(".popup");
var inputdatein = popup.querySelector("#date-in");
var inputdateout = popup.querySelector("#date-out");
var inputcountmen = popup.querySelector("#count-men");
var inputcountkids = popup.querySelector("#count-kids");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("popup-show");
  });
    popup.addEventListener("submit", function (evt) {
        if (!inputdatein.value || !inputdateout.value || !inputcountmen.value || !inputcountkids.value) {
            evt.preventDefault();
            popup.classList.remove("popup-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("popup-error");   
  }});