$(document).ready(function() {

var intervalId;
var timerRunning = false;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var myTimer = {

  time: 120,

  start: function() {
    $("#time-remaining").text("02:00");
    if (!timerRunning) {
      intervalId = setInterval(myTimer.count, 1000);
      timerRunning = true;
      console.log("start-function");
    }
  },
  stop: function() {
    clearInterval(intervalId);
    timerRunning = false;
  },
  count: function() {
    myTimer.time--;
    var converted = myTimer.timeConverter(myTimer.time);
    console.log(converted);
    $("#time-remaining").text(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};


myTimer.start();
});