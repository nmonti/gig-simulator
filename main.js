$(document).ready(function() {
  
  $('#btn').click(function() {
    jam(0);
    $(this).fadeOut(1500, function(){
      $('#background').css('opacity', 1);
    });
  });

  simulate();

});

function simulate(){
  setInterval(function(){
    var groove = Math.floor(Math.random() * 5) + 1;
    jam(groove);
  }, 4000);
}

function jam(groove){
  switch(groove) {
    case 0:
      $('#audience').attr('src', 'gig-simulator/audio/begin.mp3');
      $('#audience')[0].play();
      break;
    case 1:
      $('#audience').attr('src', 'gig-simulator/audio/booglass.mp3');
      $('#audience')[0].play();
      break;
    case 2:
      $('#audience').attr('src', 'gig-simulator/audio/getoff.mp3');
      $('#audience')[0].play();
      break;
    case 3:
      $('#audience').attr('src', 'gig-simulator/audio/getonwithit.mp3');
      $('#audience')[0].play();
      break;
    case 4:
      $('#audience').attr('src', 'gig-simulator/audio/kickapoo.mp3');
      $('#audience')[0].play();
      break;
    case 5:
      $('#audience').attr('src', 'gig-simulator/audio/singsomething.mp3');
      $('#audience')[0].play();
      break;

  }
  
}

