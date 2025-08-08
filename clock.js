//const time = new Date().getTime()

var clockBrain = document.getElementById("clock");

function time() {
  var meridiem = "am"
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    if (h == 0) {
      h = 12;
    } else if (h > 12) {
      h = h - 12;
      meridiem = "pm";
    }
    clockBrain.textContent = 
      ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " " + meridiem;
  }
  setInterval(time, 1000);
//":" + ("0" + s).substr(-2) +

//var specialEventPride = (new Date().getDay()) + " " + (new Date().getMonth());

var notiMessage = document.getElementById("eventNoti");
function notification() {
  var specialEventPride = (new Date().getMonth());
  if ( specialEventPride == 5 ) {
    prideMessage = "Happy Pride";
  } else {
    prideMessage = "no pride :(";
  }
  notiMessage.textContent = (prideMessage);
}