const $gameBoard = $(".gameBoard")
const $body = $("body")
const gameWidth = parseInt($gameBoard.css("width"))
const gameHeight = parseInt($gameBoard.css("height"))
const $score = $(".score")
const $hitpoint = $(".hitpoints")
const $pauseBtn = $("#pauseBtn")
const $startBtn = $("#startBtn")
const enemyList = []
const bulletList = []
const upgradeList = []
let score = 0
let pause = false

class Character {
  constructor(
    type,
    id,
    sizeX,
    sizeY,
    spdX,
    spdY,
    hp,
    x,
    y,
    atkSpd,
    bulletOwner,
    aniFrame
  ) {
    this.type = type
    this.id = id
    this.jTarget = $gameBoard.find("." + this.id)
    this.sizeX = sizeX
    this.sizeY = sizeY
    this.spdX = spdX
    this.spdY = spdY
    this.hp = hp
    this.x = x //spawn position
    this.y = y
    this.timer = 0 //how long has this asset been in the game?
    this.atkSpd = atkSpd //per ms. Lower faster
    this.isShooting = false
    this.pressingDown = false
    this.pressingUp = false
    this.pressingLeft = false
    this.pressingRight = false
    this.aimAngle = 0
    this.bulletOwner = bulletOwner
    this.aniFrame = 0
  }

  addChar() {
    let $char = $("<div>")
    $char.addClass(`${this.id}`)
    $char.css({
      position: "absolute",
      width: `${this.sizeX}px`,
      height: `${this.sizeY}px`
    })
    //fix for bullet

    $gameBoard.append($char)
    this.jTarget = $gameBoard.find("." + `${this.id}`)

    if (this.type === "player") {
      this.jTarget.css({
        // border: "3px solid green" //update to actual sprite
        background: `url("/assets/images/char.png")`,
        backgroundPosition: "0 -200px",
        backgroundSize: `350%`
      })
    }

    if (this.type === "enemy") {
      this.jTarget.css({
        // border: "3px solid red", //update to actual sprite
        background: `url("/assets/images/bat.png")`
      })
    }

    if (this.type === "upgrade") {
      this.jTarget.css({
        border: "3px solid green" //update to actual sprite
        // background: `url("/assets/images/bat.png")`
      })
    }

    if (this.type === "bullet") {
      if (this.bulletOwner === "enemy") {
        this.jTarget.css({
          border: "3px solid red", //update to actual sprite
          borderRadius: "50%"
        })
      } else {
        this.jTarget.css({
          border: "3px solid black", //update to actual sprite
          borderRadius: "50%"
        })
      }
    }
  }

  removeChar() {
    this.jTarget.remove()
  }

  moveChar() {
    this.jTarget.css({
      left: `${this.x}px`,
      top: `${this.y}px`
    })

    if (this.type === "enemy" || this.type === "upgrade") {
      this.x += this.spdX
      this.y += this.spdY
      if (this.x <= 0 || this.x >= gameWidth - this.sizeX) this.spdX *= -1 //border collision x
      if (this.y <= 0 || this.y >= gameHeight - this.sizeY) this.spdY *= -1 //border collision y
    }
    if (this.type === "bullet") {
      this.x += this.spdX
      this.y += this.spdY
      if (this.x <= 0 || this.x >= gameWidth - this.sizeX) this.removeChar() //border collision x
      if (this.y <= 0 || this.y >= gameHeight - this.sizeY) this.removeChar()
    }

    if (this.type === "player") {
      $body.on("keydown", e => {
        if (e.key === "w") {
          player.pressingUp = true
        } else if (e.key === "a") {
          player.pressingLeft = true
        } else if (e.key === "s") {
          player.pressingDown = true
        } else if (e.key === "d") {
          player.pressingRight = true
        }
      })
      $body.on("keyup", e => {
        if (e.key === "w") {
          player.pressingUp = false
        } else if (e.key === "a") {
          player.pressingLeft = false
        } else if (e.key === "s") {
          player.pressingDown = false
        } else if (e.key === "d") {
          player.pressingRight = false
        }
      })

      if (player.pressingRight) {
        this.jTarget.css({
          backgroundPosition: `${Math.floor(this.aniFrame % 3) * 70}px -100px`
        })
        player.x += this.spdX
      }
      if (player.pressingLeft) {
        this.jTarget.css({
          backgroundPosition: `${Math.floor(this.aniFrame % 3) * 70}px -290px`
        })
        player.x -= 4
      }
      if (player.pressingDown) {
        this.jTarget.css({
          backgroundPosition: `${Math.floor(this.aniFrame % 3) * 70}px -200px`
        })
        player.y += 4
      }
      if (player.pressingUp) {
        this.jTarget.css({
          backgroundPosition: `${Math.floor(this.aniFrame % 3) * 70}px -20px`
        })
        player.y -= 4
      }

      //border collision
      if (player.x <= 0) player.x = 0
      if (player.y <= 0) player.y = 0
      if (player.x > gameWidth - player.sizeX - 4)
        player.x = gameWidth - player.sizeX - 4
      if (player.y > gameHeight - player.sizeY - 4)
        player.y = gameHeight - player.sizeY - 4

      //update aniFrame
      this.aniFrame += 0.06
    }
  }

  shoot() {
    if (this.type === "player") {
      //mouse targeting
      $gameBoard.on("mousemove", e => {
        let targetX = e.clientX - $gameBoard.offset().left //mouse X
        let targetY = e.clientY - $gameBoard.offset().top //mouse Y
        let distanceX = targetX - this.x - this.sizeX / 2
        let distanceY = targetY - this.y - this.sizeY / 2
        this.aimAngle = Math.atan2(distanceY, distanceX) / Math.PI * 180
      })
    }

    if (this.type === "enemy") {
      let targetX = player.x //mouse X
      let targetY = player.y //mouse Y
      let distanceX = targetX - this.x - this.sizeX / 2
      let distanceY = targetY - this.y - this.sizeY / 2
      this.aimAngle = Math.atan2(distanceY, distanceX) / Math.PI * 180
    }

    generateBullet(this)
    this.aimAngle += 5
    generateBullet(this)
  }
}

//type, id, sizeX, sizeY, spdX, spdY, hp, x, y, atkSpd, bulletOwner, aniFrame
let player = new Character(
  "player",
  "player",
  60,
  90,
  4.5,
  4.5,
  100,
  50,
  50,
  500
)

const generateEnemy = () => {
  let id = Math.floor(Math.random() * 100000) //To do: fix potential duplicate id
  let sizeX = 50
  let sizeY = 50
  let spdX = Math.random() * 5
  let spdY = Math.random() * 5
  let hp = 50
  let x = Math.random() * 500
  let y = Math.random() * 500
  let atkSpd = Math.floor(1000 + Math.random() * 1000)

  // console.log("spawning")
  enemyList[id] = new Character(
    "enemy",
    id,
    sizeX,
    sizeY,
    spdX,
    spdY,
    hp,
    x,
    y,
    atkSpd
  )

  enemyList[id].addChar()
}

const generateBullet = entity => {
  let id = Math.floor(Math.random() * 100000) //To do: fix potential duplicate id
  let angle = entity.aimAngle
  let sizeX = 5
  let sizeY = 5
  let spdX = Math.cos(angle / 180 * Math.PI) * 10
  let spdY = Math.sin(angle / 180 * Math.PI) * 10
  let hp = 0
  let x = entity.x + entity.sizeX / 2
  let y = entity.y + entity.sizeY / 2
  let owner = entity.type

  bulletList[id] = new Character(
    "bullet",
    id,
    sizeX,
    sizeY,
    spdX,
    spdY,
    hp,
    x,
    y,
    0,
    owner
  )
  bulletList[id].addChar()
}

const generateUpgrade = () => {
  let id = Math.floor(Math.random() * 100000) //To do: fix potential duplicate id
  let sizeX = 20
  let sizeY = 20
  let spdX = Math.random()
  let spdY = Math.random()
  let hp = 0
  let x = Math.random() * 500
  let y = Math.random() * 500
  let atkSpd = 0
  let owner = ""

  // console.log("spawning")
  upgradeList[id] = new Character(
    "upgrade",
    id,
    sizeX,
    sizeY,
    spdX,
    spdY,
    hp,
    x,
    y,
    atkSpd,
    owner
  )
  upgradeList[id].addChar()
}

const spawnEnemy = () => {
  let enemyFrequency = 5000
  setInterval(function spawn() {
    if (pause === false) generateEnemy()
  }, 4000)
}

const startGame = () => {
  if (pause === false) {
    drawMap(1)
    player.addChar()
    generateEnemy()
    generateUpgrade()
    generateUpgrade()
    // spawnEnemy()
  }
}

$(function() {
  $pauseBtn.on("click", function togglePause() {
    if (pause === false) pause = true
    else {
      pause = false
      requestAnimationFrame(update)
    }
  })

  $startBtn.on("click", startGame) //starts the game

  startGame()

  $body.on("mousedown", () => {
    player.isShooting = true
  })

  $body.on("mouseup", () => {
    player.isShooting = false
  })

  let intervalShootID = setInterval(() => {
    if (player.isShooting) {
      player.shoot()
    }
    // console.log("test") //to do: kill interval
  }, player.atkSpd)

  setInterval(() => {
    //fix enemy shooting
    if (pause === false) {
      for (key in enemyList) {
        enemyList[key].shoot()
      }
    }
    //to do: clear interval after enemy delete
  }, 2000)

  const update = () => {
    // score++
    $score.text(`Score: ${Math.floor(score / 1)}`)
    player.moveChar()

    //move enemies
    for (key in enemyList) {
      enemyList[key].moveChar()
      if (checkCollision(enemyList[key], player)) {
        player.hp -= 1 //player takes damage on collision
      }
    }

    for (key in upgradeList) {
      upgradeList[key].moveChar()
      if (checkCollision(upgradeList[key], player)) {
        player.hp += 10 //player takes health on collision
        upgradeList[key].removeChar()
        upgradeList.splice(key, 1)
      }
    }
    //move bullets
    for (key in bulletList) {
      bulletList[key].moveChar()
      bulletList[key].timer++
      if (bulletList[key].timer > 100) {
        bulletList[key].removeChar()
        bulletList.splice(key, 1)
        continue
      }
      //bullet collision with player
      if (
        checkCollision(player, bulletList[key]) &&
        bulletList[key].bulletOwner === "enemy"
      ) {
        // console.log("player hit!")
        player.hp--

        if (player.hp <= 0) console.log("You have died.")
        bulletList[key].removeChar()
        bulletList.splice(key, 1)
        continue
      }
      //bullet collision with enemy
      for (enemy in enemyList) {
        if (
          checkCollision(enemyList[enemy], bulletList[key]) &&
          bulletList[key].bulletOwner === "player"
        ) {
          enemyList[enemy].hp -= 25
          if (enemyList[enemy].hp <= 0) {
            score += 10
            enemyList[enemy].removeChar()
            enemyList.splice(enemy, 1)
          }
          bulletList[key].removeChar()
          bulletList.splice(key, 1) //might have to be added to removeChar method
          break
        }
      }
    }

    $hitpoint.text(`HP: ${player.hp}`)
    if (pause === false) requestAnimationFrame(update)
  }

  // setInterval(update, 30)
  //60 fps
  requestAnimationFrame(update)
})

const drawMap = level => {
  if (level === 1) {
    $gameBoard.css({
      background: `url("/assets/images/spring.png")`
    })
  }
}

const checkCollision = (obj1, obj2) =>
  obj1.x <= obj2.x + obj2.sizeX &&
  obj2.x <= obj1.x + obj1.sizeX &&
  obj1.y <= obj2.y + obj2.sizeY &&
  obj2.y <= obj1.y + obj1.sizeY
