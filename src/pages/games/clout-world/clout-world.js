var currentSreenshotID = 1;

var currentScreenshot = document.getElementById("currentFullScreenshot");
var screenshot = document.getElementById('screenshot');
var count = document.getElementById('imageCount'); 

var leftArrow = document.getElementById('arrowLeftIcon');
var rightArrow = document.getElementById('arrowRightIcon');

function openScreenshot(screenshotID) {
    screenshot.style.backgroundImage = "url(games/clout-world/screenshots/CW_Screenshot_" + screenshotID + ".png)";
    currentSreenshotID = screenshotID;

    currentScreenshot.style.opacity = '1';
    currentScreenshot.style.pointerEvents = 'all';

    count.innerText = screenshotID + '/12';

    if(currentSreenshotID <= 1)
    {
        leftArrow.style.display = 'none';
        leftArrow.style.pointerEvents = 'none';
    }
    else
    {
        leftArrow.style.display = 'initial';
        leftArrow.style.pointerEvents = 'all';
    }

    if(currentSreenshotID >= 12)
    {
        rightArrow.style.display = 'none';
        rightArrow.style.pointerEvents = 'none';
    }
    else
    {
        rightArrow.style.display = 'initial';
        rightArrow.style.pointerEvents = 'all';
    }
}

function closeScreenshot() {
    currentScreenshot.style.pointerEvents = 'none';
    currentScreenshot.style.opacity = 0;
    screenshot.src = 'none';
}

function openNextScrenshot() {
    openScreenshot(currentSreenshotID + 1);
}

function openPreviousScreenshot() {
    openScreenshot(currentSreenshotID - 1);
}