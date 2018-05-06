window.onload = function(){
  var links = document.querySelectorAll(".links a");
  for(i = 0; i<links.length; i++){
    //links[i].onmouseover = highlightOn;
    //links[i].onmouseout = highlightOff;
  }
  $(document).ready(function() {
    window.setInterval(function(){ Nat.updateAge(); }, 50);
}

function highlightOn(){
  console.log("entered");
  this.style.color = "#ffddb3";
}

function highlightOff(){
  this.style.color = "#ffb961"
}

var travis = {
  updateAge : function () {
    // Make age accurate
    bday = new Date(1996,11,30,18);

    var now = new Date;
    var duration = now - bday;
    var years = duration / 31556900000;

    var majorMinor = years.toFixed(7).toString();

    $('#age').text(majorMinor);
  },
};
