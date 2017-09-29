$(function () {
  // console.log('linked')
  var $body = $('body')
  var $pacMan = $('#pac-man')

  $body.on('keyup', (event) => {
    // console.log(event.key)
    var pacManPos = $pacMan.position()

    if(event.key === 'ArrowUp' && pacManPos.top !== 0) $pacMan.css('top', `${pacManPos.top - 30}px`)
    else if(event.key === 'ArrowDown' && pacManPos.top !== 420) $pacMan.css('top', `${pacManPos.top + 30}px`)
    else if(event.key === 'ArrowLeft' && pacManPos.left !== 0) $pacMan.css('left', `${pacManPos.left - 30}px`)
    else if(event.key === 'ArrowRight' && pacManPos.left !== 540) $pacMan.css('left', `${pacManPos.left + 30}px`)
  })
})
