var nojsIntro = document.getElementById("nojsIntro");
nojsIntro.style.display = 'none';

var eadeprodscrolldownbuttonContainer = document.getElementById('eadeprodscrolldownbuttonContainer');
eadeprodscrolldownbuttonContainer.style.display = 'flex';
var eadeprodintroContainerParent = document.getElementById('eadeprodintroContainerParent');
eadeprodintroContainerParent.style.display = 'block';

var navbar = document.getElementById("navbar");

function toggleNavMenu() {
  navbar.classList.toggle("nav-menu");
  
  var line = document.getElementById("line");
  line.classList.toggle("show");
}

var vidContainerParent = document.getElementById('eadeprodintroContainerParent');
var vid = document.getElementById('eadeprodintro');

window.onload = function (){
  if(window.scrollY < 60)
  {
    vidContainerParent.classList.add('eadeIntroFadeIn');
    scrollIcon.style.opacity = 1;
  }
}

window.onscroll = function() {
  videoScrollingCheck();
  checkAnimation();
};

function isElementInViewport (el) {

  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}

var eadeprodabouttext = document.getElementById('eadeprodabouttext');
var eadeprodabout = document.getElementById('eadeprodabout');

eadeprodabouttext.style.opacity = 0;

var vidContainer = document.getElementById('eadeprodintroContainer');

function checkAnimation()
{
  if(isElementInViewport(eadeprodabouttext))
  {
    eadeprodabouttext.classList.add('fadeInAndComeUp');
  }
}

var text = document.getElementById('eadeprodintrotext');
var scrollIcon = document.getElementById('eadeprodscrollicon');

var newTime = 0;

vid.pause();

function videoScrollingCheck()
{
    vid.pause();

    var windowHeight = (document.body.scrollHeight - window.innerHeight);

    var containerScrollHeight = (vidContainerParent.scrollHeight - window.innerHeight);
    var scrollBarExtent = navbar.clientHeight - 60;
    var containerScrollHeightMAX = ((windowHeight - scrollBarExtent) / containerScrollHeight);

    var scrollY = Math.max(0, window.scrollY - scrollBarExtent);
    newTime = Math.max(0, scrollY / containerScrollHeight);

    eadeprodabout.style.backgroundPositionY = 'calc(25% - ' + newTime * 200 + 'px)';

    var textOpacity = RemapNOBOUNDS(newTime, 0.5, 1, 0, 1);
    text.style.opacity = textOpacity;

    var vidOpacity = Remap(newTime, 1, containerScrollHeightMAX, 1, 0);
    vidContainer.style.opacity = vidOpacity;

    if(scrollY > vidContainerParent.clientHeight)
    {
      text.style.opacity = 0;
    }

    scrollIcon.style.opacity = 0;
    scrollIcon.style.pointerEvents = 'none'
}

// refresh video frames on interval for smoother playback
setInterval(function(){
  vid.currentTime = Math.min(1, newTime) * (vid.duration * 0.8);
}, 40);

function RemapCLAMP (value, fromMin, fromMax, toMin, toMax)
{
    var fromAbs  =  value - fromMin;
    var fromMaxAbs = fromMax - fromMin;      
   
    var normal = fromAbs / fromMaxAbs;

    var toMaxAbs = toMax - toMin;
    var toAbs = toMaxAbs * normal;

    var to = toAbs + toMin;
   
    return Math.min(Math.max(toMin, to), toMax);
}

function Remap (value, fromMin, fromMax, toMin, toMax)
{
    var fromAbs  =  value - fromMin;
    var fromMaxAbs = fromMax - fromMin;      
   
    var normal = fromAbs / fromMaxAbs;

    var toMaxAbs = toMax - toMin;
    var toAbs = toMaxAbs * normal;

    var to = toAbs + toMin;
   
    return Math.min(Math.max(0, to), 1);
}

function RemapNOBOUNDS(value, fromMin, fromMax, toMin, toMax)
{
    var fromAbs  =  value - fromMin;
    var fromMaxAbs = fromMax - fromMin;      
   
    var normal = fromAbs / fromMaxAbs;

    var toMaxAbs = toMax - toMin;
    var toAbs = toMaxAbs * normal;

    var to = toAbs + toMin;
   
    return to;
}

function scrollDown() {
  var windowHeight = (document.body.scrollHeight - window.innerHeight);
  window.scrollTo({
    top: windowHeight,
    left: 0,
    behavior: "smooth"
  });
}