//----- Select Solo -----
$(document).ready(function() {
  //List of questions
  var questions = ["lah", "leh", "lor", "hah?", "hor", "meh?", "bo?", "can", "gua", "liao", "wor", "liao la"]

//List of answers
  var answers = ["Yes.", "Yes, of course", "Yes, I think so", "Are you sure?", "Are you sure then", "Are you certain?", "Can or not?", "Confirm.", "Maybe.", "Already can / done.", "Yeah", "OK, enough."]

//List of responses
  var users = []
  var current_question = 0;
  var startGame = false;

// Score
  var score = 0;

  $("#solo").on("click", function() {
      startGame = true;
    for(var i = 0; i < questions.length; i++){
      // console.log(questions[i])
      $(".questions").append("<li id='"+ i +"'>"+  questions[i]+ "</li>")
    }

    for(var i = 0; i < answers.length; i++){
      $(".answers").append("<li id='"+ i +"'>"+ answers[ i]+"</li>")
    }

    $(".main-page").remove();
    $(".container-solo").fadeIn(400).css("display", "block");

    // startTimer();
    gameTimer();

  });

// check which questions user clicks on
  $(".questions").on("click", "li", function() {
    current_question = $(this).attr("id")
      $(this).css("border", "1px solid red")
  });

  $(".answers").on("click", "li", function(){
    // alert(questions[current_question])

if(startGame){
  var userAnswers = $(this).attr("id")
    console.log(questions[current_question])
      console.log(answers[userAnswers])

if(answers[current_question] == answers[userAnswers]){
  // alert("you got it right");
    $("#"+current_question).remove();
      $(this).remove();
      score++;
        console.log(score)
          $(".score").empty();
            $(".score").append(score);
    }else{
        // alert("aw, try again")
    }
  }else{
    // alert("game over mehn")
  endgame()
  }
});

// Endgame
function endgame (){
    startGame = false
    score = 0
    $(".endgame").css("display", "block")
    $(".win").css("display", "block")
    $(".lost").css("display", "block")
    $(".footer").css("display", "block")
}

// // Endword
// function endword (){
//     startGame = false
//     score = 0
//
// }

// Timer
  var timeLeft = 10;

  function gameTimer () {
    // target timer node
    var timer = $('.timer')
    var timerId = setInterval(countdown, 1000)

    function countdown () {
      if (timeLeft < 0) {
        clearTimeout(timerId)
        // timer.text("Jialat Lost");
        // alert("Jialat Lost")
        endgame()
        endword()

        startGame = false
      } else {
        timer.text(timeLeft)
        timeLeft--
      }
    }
  }

});
