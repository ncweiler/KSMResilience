//This javascript reverts the exhibit to the splash page after a certain amount of idle time (no keyboard/mouse input). 

//To change idle time before returning to home page, change the number in line 21 (idleTime > n), where n is 1 less than the number of minutes you want to idle before reverting to the splash page.

idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 2) { // # should be 1 less than # of minutes you want to idle before going to home page
        window.location.replace("index.html"); //the link to go to after idle time, index.html is the homepage
    }
}
  