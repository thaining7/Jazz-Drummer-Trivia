# Jazz Drummer Trivia

https://thaining7.github.io/JazzDrummerTrivia/

### Test your knowledge of jazz drummer history!

# Motivation

#### This project was designed to demonstrate JavaScript fundumentals in addition to some slightly more advanced JavaScript concepts

# Tech Used:

* HTML
* CSS
* JavaScript
* jQuery

# Features

* JavaScript timing events
* jQuery on click events

# Code Example

#### JavaScript timer function expression: 

```
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

      if (myTimer.time === 0) {
        scoreGame();
      }

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
```

# Screenshots

![App Screenshot](/assets/images/Screenshot.png)

# How to use:

#### Complete the quiz within the allotted amount of time. After you finish, click the submit button to see your results.
