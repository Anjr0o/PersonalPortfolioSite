// **** AutoScroll + ScrollSpy ****
var CORRECTION = 50;  // height of the navbar 
// don't forget to setup the data-offset attribute of the <body> tag

var DELAY_READING = 4000; // 4 seconds = 4000; 10 seconds = 10000
var DELAY_SCROLLING = 1500;

// List of links
var links = ['#section-start', '#section-green', '#section-blue', '#section-red',  '#extra-section', '#section-stop'];
var timerId = 0;

// invokes delayLinks function
delayLinks(0);

// on spacebar stop the loop
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        event.preventDefault();
        clearTimeout(timerId); 
    }
}

$( '#navbar-1 li a' ).click(function(event) {
    event.preventDefault();
    scrollToLink( $(this).attr('href') );
});

// 
function delayLinks( i ) {
    // if you're at the end of links, go back to the beginning
    if( i >= links.length ) i = 0;
    // invokes scrollToLink
    scrollToLink( links[i] );
    // set next variable to 0 if it's at the end, or sets it to i + 1 if not);
    var next = ( i == links.length - 1 ? 0 : i + 1);
    timerId = setTimeout(function() { delayLinks( next ) }, DELAY_READING ); 
}

function scrollToLink( link ) {
  selectLink = $( link );
  if ( selectLink.length ) {
    var top = selectLink.offset().top - CORRECTION;
    $('body,html').stop().animate({scrollTop: top}, DELAY_SCROLLING);
  } else {
    console.log('The link is not found: ' + link);
  }
}