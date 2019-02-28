$(document).ready(function () {

  var intervalId;
  var timerRunning = false;
  var numCorrect = 0;
  var numIncorrect = 0;
  var numUnanswered = 0;
  //var answerKey = ["Answer q1", "Answer q3", ]

  var myTimer = {

    time: 120,

    start: function () {
      $("#time-remaining").text("02:00");
      if (!timerRunning) {
        intervalId = setInterval(myTimer.count, 1000);
        timerRunning = true;
        console.log("start-function");
      }
    },

    count: function () {
      myTimer.time--;
      var converted = myTimer.timeConverter(myTimer.time);
      console.log(converted);
      $("#time-remaining").text(converted);
    },

    stop: function () {
        clearInterval(intervalId);
        timerRunning = false;
    },

    timeConverter: function (t) {

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


  myTimer.start()

 /** To Do:
  * Create score function:
  * create global variables to track score
  * create on click function for submit button
  * for each question, psuedo-select input take with :checked and extract value of submitted answer using .val
  * store extracted value as variable 
  * cross-reference whether submitted answer is the correct answer
  * if user input and answer in key match, then increment correct answer variable by 1,
  * otherwise increment incorrect variable by 1 or unanswered variable by 1
  * Create results function:
  * present results to user what they scored
  * Create reset function:
  * set score variables back to 0
  * clear results screen using .empty
  * 
  * 
  * 
  * 
  */

});