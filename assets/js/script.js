// $(document).ready(function() {
// })

// Thing to consider is that the program uses 3 states -
// 2 - not running
// 1 - play mode
// 0 - die mode - no input is accepted.

$(function () {

    //saving dom objects to variables
    var $container = $('.container');
    var $bird = $('.bird');
    var pole = $('.pole');
    var poleTop = $('#pole1');
    var poleBottom = $('#pole2');
    var score = $('#score');
    var restartBtn = $('#restart-btn');
    var $birdHeight = parseInt($bird.height());
    var conHeight = parseInt($container.height());
    var go_up = false;
    gameState = 2;
    fallTime = 1000;

    function start() {
    score = 0;
    var cPos = { x: 80, y:100, h:40, w:50 };
    $bird.css({left:cPos.x, top:cPos.y, width:cPos.w, height:cPos.h, rotate:0});
    }

    var birdPosInterval = setInterval(function(){
      if(gameState === 1){
      birdPos();
      }
    }, 10);

	   $(this).mousedown(function(){
		     birdFlap();
         if (gameState > 1) return;
         if(gameState === 2){
           gameState = 1;
         }
	   })

	   $(this).keydown(function(e){
		     if(e.keyCode === 32){
			   birdFlap();
         if (gameState > 1) return;
         if(gameState === 2){
         gameState = 1;
      }
		}
	});


  function birdFlap(){
    if(gameState === 1 || gameState === 2){
     $bird.css('transform', 'rotate(-20deg)');
     $bird.stop().animate({
       bottom: '+=60px'
     }, 200, function(){
       birdPos();
       $bird.css('transform', 'rotate(0deg)');
       $bird.stop().animate({
         bottom: '-=60px'
       }, 300, 'linear', function(){
         birdPos();
         gravity();
       });
     });
	  }
  }

  function gravity(){
    var birdPercent = parseInt($bird.css('bottom')) / $container.height();
    var totalFallTime = fallTime * birdPercent;
		$bird.stop().animate({
			bottom: '0'
		}, totalFallTime, 'linear');

    $bird.css('transform', 'rotate(90deg)');
	}


  function birdPos(){
    if ( parseInt($bird.css('top')) <= 0 || parseInt($bird.css('top')) > conHeight - $birdHeight) {
      gameEnd();
    }
  }

  function gameEnd(){
    gameState = 0;
  	clearInterval(birdPosInterval);
    start()
    gravity();
    restartBtn();
  }

  restartBtn.click(function () {
        location.reload();
  });

});
