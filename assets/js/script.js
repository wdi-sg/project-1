$(function() {
  let $player = $(".player")
  let $body = $("body")

  $body.on("keydown", e => {
    let playTop = $player.css("top")

    //how to resolve multiple keydowns to move diagonally
    if (e.key === "w") {
      $player.css("top", `${$player.position().top - 10}px`)
    } else if (e.key === "a") {
      $player.css("left", `${$player.position().left - 10}px`)
    } else if (e.key === "s") {
      $player.css("top", `${$player.position().top + 10}px`)
    } else if (e.key === "d") {
      $player.css("left", `${$player.position().left + 10}px`)
    }
  })
})
