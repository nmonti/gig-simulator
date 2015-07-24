$(window).load(function() {
  musterHeckles(insultCount)

  // Start simulator
  $('#btn').click(function() {
    $('#begin')[0].play();
    $(this).fadeOut(300);
    window.setTimeout(function(){
      simulate();
      $('#background').css('opacity', 1);
    }, 1700);
  });

  // Click to pause
  $('#background').click(function(){
    // make sure it's not null. will only happens before first insult
    if (currentInsult){
      if (paused){
        paused = false;
        $('#pause').hide();
        currentInsult.play();
        simulate();
      }
      else{
        paused = true;
        $('#pause').show();
        currentInsult.pause();
        clearInterval(interval);
      }
    }
  });

});

var paused = false;
var interval;
var currentInsult;
var insults = ['audio/begin.mp3',//..........0
               'audio/booglass.mp3',//.......1 
               'audio/getoff.mp3',//.........2
               'audio/getonwithit.mp3',//....3
               'audio/kickapoo.mp3',//.......4
               'audio/singsomething.mp3'];//.5

var insultCount = insults.length;

// plays an insult every 5 seconds
function simulate(){
  interval = setInterval(function(){ heckle() }, 5000);
}

// Creates an audio element for each insult
function musterHeckles(insultCount){
  // Beginning audio loaded first
  $('#audio').append("<audio preload='auto' src='"+insults[0]+"' id='begin'></audio");
  for (var i = 1; i < insultCount; i++){
    $('#audio').append("<audio preload='auto' src='"+insults[i]+"' id='insult"+i+"'></audio");
  }
}

function heckle(){
  var i = Math.floor(Math.random() * 5) + 1;
  currentInsult = $('#insult'+i)[0];
  currentInsult.play();
}
