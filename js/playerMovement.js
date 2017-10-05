  function charMoveLeft(){
    var position = $('#player').position()
    $('#player').css('left', position.left - 51 +'px')
    charX--
  }

  function charMoveUp(){
    var position = $('#player').position()
    $('#player').css('top', position.top -51 +'px')
    charY--
  }

  function charMoveRight(){
    var position = $('#player').position()
    $('#player').css({'left': position.left + 51 +'px'});
    charX++
  }

  function charMoveDown(){
    var position = $('#player').position()
    $('#player').css('top', position.top +51 +'px')
    charY++
  }
