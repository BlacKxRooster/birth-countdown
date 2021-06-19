// countdown timer
var deadline = new Date("Oct 08, 2021 01:00:00").getTime();
  
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
if (t < 0) {
        clearInterval(x);
        document.getElementById("endMsg").innerHTML = "SHE'S HERE!";
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; }
}, 1000);


// slideshow stuff

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides
  var index = 0, time = 5000;
  slides[index].classList.add('active');  
  setInterval( () => {
    slides[index].classList.remove('active');
    //Go over each slide incrementing the index
    index++;
    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0; 
    slides[index].classList.add('active')
  }, time);
}


