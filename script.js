document.addEventListener('DOMContentLoaded',function(event){
  var getText = [ "Designed by Sadaf"];

 
  
  function typeWriter(text, x) {
    // check if text isn't finished yet
    if (x < (text.length)) {
      // add next character to h1
     document.querySelector('.headertext').innerHTML = text.substring(0, x+1) +'<span> </span>';

      setTimeout(function() {
        typeWriter(text, x + 1)
      }, 80);
  }
}
  
   function StartAnimation(x) {
     if (typeof getText[x] == 'undefined'){
        setTimeout(function() {
          StartAnimation(0);
        });
     }
     if (x <  getText[x].length) {
      // text exists.... start typewriter animation
     typeWriter(getText[x], 0, function(){
       StartAnimation(x + 1);
     });
    }
  }

  StartAnimation(0);
});

