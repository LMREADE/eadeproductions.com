var CurrentImageDiv = document.getElementById("CurrentRenderDiv");

var Render = document.getElementById("Render");
var CurrentRenderAboutPanel = document.getElementById("CurrentRenderAboutPanel");

var CurrentRenderImage = document.getElementById("CurrentRenderImage");
var CurrentRenderVideo = document.getElementById("CurrentRenderVideo");

var MuteToggleBackground = document.getElementById("MuteToggleBackground");
var MuteToggle = document.getElementById("MuteToggle");

var RenderTitle = document.getElementById("RenderTitle");
var RenderDate = document.getElementById("RenderDate");
var RenderResolution = document.getElementById("RenderResolution");

var DownloadLink = document.getElementById("DownloadLink");

addEventListener("resize", (event) => {});

function OpenRender(Image, RenderName, RenderDateText, RenderResolutionText, DownloadLinkURL, Is16x9, IsVideo, HasAudio) {
    CurrentImageDiv.style.display = "flex";

    RenderTitle.innerText = RenderName;
    RenderDate.innerText = RenderDateText;
    RenderResolution.innerText = RenderResolutionText;

    DownloadLink.href = Image;

    MuteToggleBackground.style.display = "none";

    if (window.matchMedia("(min-width:180vh)").matches) {
        CurrentRenderAboutPanel.style.display = "flex";
    }

    if(Is16x9 == "true")
    {
        Render.classList.add("LandscapeClass");

        Render.style.width = "130vmin";

        var newHeight = "73vmin";

        Render.style.height = newHeight;

        CurrentRenderAboutPanel.style.height = newHeight;
    }
    else
    {
        Render.classList.remove("LandscapeClass");

        var newHeight = "90vmin";
        
        Render.style.width = newHeight;
        Render.style.height = newHeight;

        CurrentRenderAboutPanel.style.height = newHeight;
    }

    if(IsVideo == "true")
    {
        CurrentRenderVideo.src = Image;

        CurrentRenderImage.style.display = "none";
        CurrentRenderVideo.style.display = "initial";

        if(HasAudio == "true")
        {
            MuteToggleBackground.style.display = "flex";
        }
    }
    else
    {
        CurrentRenderImage.src = Image;

        CurrentRenderImage.style.display = "initial";
        CurrentRenderVideo.style.display = "none";
    }
}

function CloseRender() {

    if (window.matchMedia("(max-width:180vh)").matches) {
        CurrentRenderAboutPanel.style.display = "none";
    }
    else
    {
        CloseRenderONLY();
    }

}

function CloseRenderONLY() {
    CurrentImageDiv.style.display = "none";

    if(!CurrentRenderVideo.paused)
    {
        CurrentRenderVideo.pause();
    }
    
    if (window.matchMedia("(max-width:180vh)").matches) {
        CurrentRenderAboutPanel.style.display = "none";
    }
}

function ToggleMute() {
    CurrentRenderVideo.muted = !CurrentRenderVideo.muted;
    MuteToggle.src = CurrentRenderVideo.muted == true ? "svgs/SoundIconMuted.svg" : "svgs/SoundIcon.svg";
}

function OpenInfo() {
    CurrentRenderAboutPanel.style.display = "flex";
}

onresize = (event) => {
    if (window.matchMedia("(min-width:180vh)").matches) {
        CurrentRenderAboutPanel.style.display = "flex";
    }
};
