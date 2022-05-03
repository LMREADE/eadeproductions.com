var currentRender = document.getElementById("currentFullRender");
var render = document.getElementById('render');

var renderVideo = document.getElementById('renderVideo');
var renderVideoControls = document.getElementById('renderVideoControls');

var renderAboutPanel = document.getElementById('aboutPanel');

var renderName = document.getElementById('renderName');
var renderDate = document.getElementById('renderDate');

var videoPlayButton = document.getElementById('videoPlayButton');
var videoSoundButton = document.getElementById('videoSoundButton');

var playingVideo = false;

function openRenderImage(name, date) {
    var newName = name.replaceAll(' ', '');
    render.style.backgroundImage = "url(render-images/" + newName + ".png)";

    renderName.innerText = name;
    renderDate.innerText = date;

    currentRender.style.opacity = '1';
    currentRender.style.pointerEvents = 'all';
}

function openRenderVideo(name, date) {
    var newName = name.replaceAll(' ', '');
    render.style.backgroundImage = '';
    renderVideo.src = "render-images/" + newName + ".mp4";

    renderName.innerText = name;
    renderDate.innerText = date;

    renderVideo.style.display = 'initial';
    renderVideoControls.style.display = 'initial';

    currentRender.style.opacity = '1';
    currentRender.style.pointerEvents = 'all';
}

function closeRender() {
    currentRender.style.pointerEvents = 'none';
    currentRender.style.opacity = 0;
    render.src = 'none';

    renderVideo.style.display = 'none';
    renderVideoControls.style.display = 'none';

    pauseVideo();
}

function toggleRenderAbout()
{
    renderAboutPanel.style.opacity = renderAboutPanel.style.opacity == 1 ? 0 : 1;
}

function toggleRenderVideo()
{
    if(!playingVideo)
    {
        videoPlayButton.src = "../images/PauseIcon.png";
        renderVideo.play();
        playingVideo = true;

        videoPlayButton.style.transform = 'scale(.8)'
    }
    else
    {
        pauseVideo();
    }
}

function toggleRenderVideoSound()
{
    if(renderVideo.muted)
    {
        renderVideo.muted = false;
        videoSoundButton.src = "../images/SoundIcon.png"; 
    }
    else
    {
        renderVideo.muted = true;
        videoSoundButton.src = "../images/MuteIcon.png"; 
    }
}

function pauseVideo()
{
    playingVideo = false;
    videoPlayButton.src = '../images/PlayIcon.png';
    renderVideo.pause();

    videoPlayButton.style.transform = 'scale(.7)'
}