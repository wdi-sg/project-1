const $gameBoard = $(".gameBoard")
const $body = $("body")
const gameWidth = parseInt($gameBoard.css("width"))
const gameHeight = parseInt($gameBoard.css("height"))
let enemyList = []
let bulletList = []

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
    bulletOwner
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
  }

  addChar() {
    let $char = $("<div>")
    $char.addClass(`${this.id}`)
    $char.css({
      position: "absolute",
      width: `${this.sizeX}px`,
      height: `${this.sizeY}px`
    })

    $gameBoard.append($char)
    this.jTarget = $gameBoard.find("." + `${this.id}`)

    if (this.type === "player") {
      this.jTarget.css({
        border: "3px solid green" //update to actual sprite
      })
    }

    if (this.type === "enemy") {
      this.jTarget.css({
        // border: "3px solid red", //update to actual sprite
        background: `url("/assets/images/bat.png")`
      })
    }

    if (this.type === "bullet") {
      this.jTarget.css({
        border: "3px solid black", //update to actual sprite
        borderRadius: "50%"
      })
    }
  }

  removeChar() {
    this.jTarget.remove()
  }

  moveChar() {
    this.x += this.spdX
    this.y += this.spdY

    this.jTarget.css({
      left: `${this.x}px`,
      top: `${this.y}px`
    })

    if (this.type === "enemy") {
      if (this.x <= 0 || this.x >= gameWidth - this.sizeX) this.spdX *= -1 //border collision x
      if (this.y <= 0 || this.y >= gameHeight - this.sizeY) this.spdY *= -1 //border collision y
    }
    if (this.type === "bullet") {
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

      if (player.pressingRight) player.x += 10
      if (player.pressingLeft) player.x -= 10
      if (player.pressingDown) player.y += 10
      if (player.pressingUp) player.y -= 10

      //border collision
      if (player.x <= 0) player.x = 0
      if (player.y <= 0) player.y = 0
      if (player.x > gameWidth - player.sizeX - 4)
        player.x = gameWidth - player.sizeX - 4
      if (player.y > gameHeight - player.sizeY - 4)
        player.y = gameHeight - player.sizeY - 4
    }
  }

  shoot() {
    if (this.type === "player") {
      //mouse targeting
      $gameBoard.on("mousemove", e => {
        let mouseX = e.clientX - $gameBoard.offset().left
        let mouseY = e.clientY - $gameBoard.offset().top
        let distanceX = mouseX - this.x - this.sizeX / 2
        let distanceY = mouseY - this.y - this.sizeY / 2
        this.aimAngle = Math.atan2(distanceY, distanceX) / Math.PI * 180
      })
    }

    generateBullet(this)
  }
}

//type, id, sizeX, sizeY, spdX, spdY, hp, x, y, atkSpd
let player = new Character("player", "player", 60, 60, 0, 0, 100, 50, 50, 500)

const generateEnemy = () => {
  let id = Math.floor(Math.random() * 100000) //To do: fix potential duplicate id
  let sizeX = 50
  let sizeY = 50
  let spdX = Math.random() * 5
  let spdY = Math.random() * 5
  let hp = 50
  let x = Math.random() * 500
  let y = Math.random() * 500
  let atkSpd = 2000

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
}

const generateBullet = entity => {
  let id = Math.floor(Math.random() * 100000) //To do: fix potential duplicate id
  let angle = entity.aimAngle
  let sizeX = 5
  let sizeY = 5
  let spdX = Math.cos(angle / 180 * Math.PI) * 20
  let spdY = Math.sin(angle / 180 * Math.PI) * 20
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

const updateAim = e => {
  //
}

$(function() {
  drawMap(1)
  player.addChar()

  generateEnemy()
  generateEnemy()
  generateEnemy()

  //add enemies to dom
  for (key in enemyList) {
    enemyList[key].addChar()
  }

  $body.on("mousedown", () => {
    player.isShooting = true
  })

  $body.on("mouseup", () => {
    player.isShooting = false
  })

  setInterval(() => {
    if (player.isShooting) {
      player.shoot()
    }
  }, player.atkSpd)

  setInterval(() => {
    for (key in enemyList) {
      enemyList[key].shoot()
    }
  }, enemyList[key].atkSpd)

  const update = () => {
    player.moveChar()
    //move enemies
    for (key in enemyList) {
      enemyList[key].moveChar()
      if (checkCollision(enemyList[key], player)) {
        console.log("collision")
        player.hp -= 1 //player takes damage on collision
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
        console.log("player hit!")
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
          console.log("enemy hit")
          bulletList[key].removeChar()
          bulletList.splice(key, 1) //might have to be added to removeChar method
          break
        }
      }
    }
  }

  setInterval(update, 30)
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
