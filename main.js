$(document).ready(function() {
  
  $('#btn').click(function() {
    heckle(0);
    $(this).fadeOut(1500, function(){
      $('#background').css('opacity', 1);
    });
  });

  simulate();

});

function simulate(){
  setInterval(function(){
    var insult = Math.floor(Math.random() * 5) + 1;
    heckle(insult);
  }, 4000);
}

function heckle(insult){
  switch(insult) {
    case 0:
      $('#audience').attr('src', 'audio/begin.mp3');
      $('#audience')[0].play();
      break;
    case 1:
      $('#audience').attr('src', 'audio/booglass.mp3');
      $('#audience')[0].play();
      break;
    case 2:
      $('#audience').attr('src', 'audio/getoff.mp3');
      $('#audience')[0].play();
      break;
    case 3:
      $('#audience').attr('src', 'audio/getonwithit.mp3');
      $('#audience')[0].play();
      break;
    case 4:
      $('#audience').attr('src', 'audio/kickapoo.mp3');
      $('#audience')[0].play();
      break;
    case 5:
      $('#audience').attr('src', 'audio/singsomething.mp3');
      $('#audience')[0].play();
      break;

  }
  
}

