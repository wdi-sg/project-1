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
      qn: 'Pirates wore eye patches so they could see better in the dark',
      ans: true,
      exp: 'Pirates didn’t wear patches to cover a missing eye; they actually wore one to keep one eye adjusted to darkness when going below deck'
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

    {
      qn: 'Lighters were invented before matches',
      ans:true,
      exp: 'German chemist Johann Wolfgang Dobereiner created the first lighter in 1823. The match was invented in 1826.'
    },

    {
      qn: 'The Spanish national anthem has no words',
      ans:true,
      exp: 'Spain is one of four countries that have no lyrics'
    },

    {
      qn: 'Orangutans sleep standing up',
      ans:false,
      exp: 'They usually sleep in nests they build in trees'
    },

    {
      qn: 'In 1966 NASA sent a McDonalds hamburger to space',
      ans:false,
      exp: 'If NASA did, it would probably come back looking exactly the same.'
    },

    {
      qn: 'A traffic jam in China lasted more than 10 days',
      ans:true,
      exp: 'The China National Highway 110 Traffic Jam began on August 14, 2010 and lasted more than 10 whole days'
    },

    {
      qn: 'The human body has 163 bones',
      ans:false,
      exp: 'The human body has 206 bones by adulthood'
    },

    {
      qn: 'We eat an average of 4 house flies (not spiders) in our sleep every year',
      ans:false,
      exp: 'It is a myth!'
    },

    {
      qn: 'There are more moves in chess than there are atoms in the universe',
      ans:true,
      exp: 'Shannon Number measured the combinatorial game complexity of chess and found there are, in fact, more legal moves than there are atoms in the universe as we know it.'
    },

    {
      qn: 'It takes 242 trees to make a 200-page book',
      ans:false,
      exp: 'There is no way it would even take one full tree to make a book'
    },

    {
      qn: 'Bananas grow on trees',
      ans:false,
      exp: 'They grow from a root structure that produces an above ground stem'
    },

    {
      qn: 'Shaving makes hair grow back faster',
      ans:false,
      exp: 'This is a myth'
    },

    {
      qn: 'Mammoths still walked the Earth when the Great Pyramid was being built',
      ans:true,
      exp: 'A tiny population survived on the isolated Wrangel Island until 1650 BCE.'
    },
    {
      qn:'Black holes are not black',
      ans:true,
      exp:'They are dark but not black'
    },

    {
      qn:'There are more fake flamingos in the world than real ones',
      ans:true,
      exp: 'There are an estimated 950,000 flamingos in existence compared to millions of plastic ones'
    },

    {
      qn: 'The top of the Eiffel Tower leans away from the sun',
      ans:true,
      exp: 'The metal of the tower expands in the heat of the sun, so the sun-facing side is always slightly bigger than the one facing away – making it lean as much as seven inches away from the sun'
    }

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
  var correctSound = new Audio("./sounds/correct.wav");
  var incorrectSound = new Audio("./sounds/wrong.wav")
  var winSound = new Audio("./sounds/win.wav")

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

    turnCounter++

    topScore()
    // get the index of qns index to be removed
    // console.log('removed qn index', randomQnIndex)
    allQuestions.splice(randomQnIndex,1)
    // console.log(allQuestions)

    // if (topScore)
    // ""
    // else
    setTimeout(switchPlayers, 1000)
    // console.log($(this).attr('id'))
    // topScore?"":switchPlayers()
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
      if (scoreCounter1 === 3 || scoreCounter2 === 3) {
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
