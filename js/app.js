console.log('js sourced.')

document.addEventListener('click', function (e) {
  el = e.target
  targetId = e.target.id
  if (targetId == 'smile') {
    e.preventDefault();
    smiley = el.textContent
    if (smiley == ':(') {
      el.textContent = ':)'
    }
    else {
      el.textContent = ':('
    }
  }


}, false);