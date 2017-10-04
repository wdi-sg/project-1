$(function () {
  var allQuestions = [
    {
      qn: 'Lightning never strikes in the same place twice.',
      ans: false,
      exp: 'The Empire State Building gets struck over 100 times a year.'
    },
    {
      qn: 'If you cry in space the tears just stick to your face.',
      ans: true,
      exp: 'You can watch a video of Chris Hadfield demonstrating it on board the International Space Station if you want.'
    },
    {
      qn: 'Russia has a larger surface area than Pluto',
      ans: true,
      exp: 'Yeap, Russia has a large surface area'
    },
    {
      qn: 'Kim Jong Un is the son of Kim II-Sung',
      ans: false,
      exp: 'He is the son of Kim Jong-il'
    },

    {
      qn: 'Penicillin is used to fight viral infections',
      ans: false,
      exp: 'They fight bacterial infections'
    },

    {
      qn: 'If you cut an earthworm in half, both halves can regrow their body',
      ans: false,
      exp: 'Only one half of an earthworm can regenerate when it is cut in half, not both halves.'
    },

    {
      qn: 'Humans can distinguish between over a trillion different smells',
      ans: true,
      exp: 'It is not as good as a dog, but the human nose is still pretty incredible.'
    },

    {
      qn: 'Adults have fewer bones than babies do',
      ans: true,
      exp: 'Lots of bones (like the cranium) start out as several fragments at birth, then fuse together into a single bone later in life.'
    },

    {
      qn: 'Napoleon Bonaparte was extremely short',
      ans: false,
      exp: 'Even though he was widely believed to have been short, he was actually above average height for his time.'
    },

    {
      qn: 'Goldfish only have a memory of three seconds',
      ans: false,
      exp: 'This common belief has been debunked repeatedly. They can actually remember things for quite a long time.'
    },

    {
      qn: 'There are more cells of bacteria in your body than there are human cells',
      ans: true,
      exp: 'Your body has around ten times as many bacterial cells in it than your own cells.'
    },

    {
      qn: 'Your fingernails and hair keep growing after you die',
      ans: false,
      exp: 'They do not!'
    },

    {
      qn: 'It costs the U.S. Mint more to make pennies and nickels than the coins are actually worth',
      ans: false,
      exp: 'U.S. taxpayers lost over $100 million in 2013 just through the coins being made.'
    },

    {
      qn: 'Buzz Aldrin was the first man to urinate on the moon.',
      ans: true,
      exp: 'The second man to stand on fthe moon was the first to pee there (into a special bag in his spacesuit)'
    },

    {
      qn: 'Twinkies have an infinite shelf life.',
      ans: false,
      exp: 'The official shelf life of a Twinkie is 45 days. People have kept them around for longer, but they become inedible.'
    },

    {
      qn: 'Humans can’t breathe and swallow at the same time.',
      ans: true,
      exp: 'It is because our voice box is lower in the throat than other primates (who can do both at once.)'
    },

    {
      qn: 'Drinking alcohol kills brain cells.',
      ans: false,
      exp: 'Drinking pretty much any non-fatal amount of alcohol would not add enough alcohol to your blood stream to destroy your neurons.'
    },

    {
      qn: 'An octopus has three hearts',
      ans: true,
      exp: 'Yeap, three'
    },

    {
      qn: 'Cracking your knuckles too much will give you arthritis',
      ans: false,
      exp: 'Go ahead and crack away'
    },

  ]
  // var randomQnIndex = Math.floor(Math.random() * allQuestions.length)// random

  // targeting elements
  var $h1 = $('h1')
  var $ansBtn = $('.ansBtn')
  var currentPlayer = 1
  var scoreCounter1 = 0
  var scoreCounter2 = 0
  var $instructions = $('#instructions')
  var $scoreBoard1 = $('#scoreBoard1')
  var $scoreBoard2 = $('#scoreBoard2')
  var randomQnIndex = Math.floor(Math.random() * allQuestions.length)
  var currentAns = allQuestions[randomQnIndex].ans
  var turnCounter = 0
  var currentExp = allQuestions[randomQnIndex].exp
  var correctSound = new Audio("/sounds/correct.wav");
  var incorrectSound = new Audio("/sounds/wrong.wav")
  var winSound = new Audio("/sounds/win.wav")

  $h1.text(`${allQuestions[randomQnIndex].qn}`)

  // event on button click
  $ansBtn.on('click', clickAns)

  function clickAns () {
    if ($(this).data('choice') === currentAns) {
      correctSound.play()

      setTimeout(function() {
        alert('Correct!')
      }, 300)

      console.log(currentPlayer)
      if (currentPlayer === 1) {
        scoreCounter1++
        $scoreBoard1.text(`Player 1 : ${scoreCounter1}`)
      } else {
        scoreCounter2++
        $scoreBoard2.text(`Player 2 : ${scoreCounter2}`)
      }
        // $scoreBoard.text(`${score}`)
        // console.log(randomQnIndex)
        // console.log(currentAns)
    } else {
      incorrectSound.play()
      alert(`Incorrect! ${currentExp}`)
    }

    // turnCounter++

    topScore()
    // get the index of qns index to be removed
    // console.log('removed qn index', randomQnIndex)
    allQuestions.splice(randomQnIndex,1)
    // console.log(allQuestions)


    switchPlayers()
    // console.log($(this).attr('id'))
  }

  function switchPlayers () {
    randomQnIndex = Math.floor(Math.random() * allQuestions.length)
    $h1.text(`${allQuestions[randomQnIndex].qn}`)
    currentAns = allQuestions[randomQnIndex].ans
    currentExp = allQuestions[randomQnIndex].exp

    if (currentPlayer === 1) currentPlayer = 2
    else currentPlayer = 1
    $instructions.text(`Your turn: Player ${currentPlayer}`)
  }

  function topScore () {
    if (scoreCounter1 === 2 || scoreCounter2 === 2) {
      setTimeout(function() {
        winSound.play()}, 800)

      setTimeout(function() {
        alert(`Player ${currentPlayer} wins!`)}, 1000)
      //alert(`Player ${currentPlayer} wins!`)
      setTimeout(function() {window.location.reload(true)}, 1000)
    }
  }

  // console.log(randomQnIndex)
})
