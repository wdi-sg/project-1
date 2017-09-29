$(function () {
  // console.log('linked')
  var $body = $('body')
  var $pacMan = $('#pac-man')

  $body.on('keyup', (event) => {
    // console.log(event.key)
    var pacManPos = $pacMan.position()

    if(event.key === 'ArrowUp') $pacMan.css('top', `${pacManPos.top - 30}px`)
    else if(event.key === 'ArrowDown') $pacMan.css('top', `${pacManPos.top + 30}px`)
    else if(event.key === 'ArrowLeft') $pacMan.css('left', `${pacManPos.left - 30}px`)
    else if(event.key === 'ArrowRight') $pacMan.css('left', `${pacManPos.left + 30}px`)
  })
})
