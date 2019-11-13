alert("Be sure to click the sad lil' fella a few times.")

clickCount = 0
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
      if (clickCount < 2) {
        newSmiley = document.createElement('h1')
        newSmiley.textContent = ':)'
        newSmiley.setAttribute('class', 'smile')
        e.target.parentElement.appendChild(newSmiley)
        clickCount += 1
      } else if (clickCount < 3) {
        love = document.createElement('h1')
        love.textContent = "Aww. Three happy lil' fellas, now."
        e.target.parentElement.appendChild(love)
        clickCount += 1
      } else if (clickCount < 4) {
        lol = document.createElement('h1')
        lol.textContent = "What a snazzy website!"
        e.target.parentElement.appendChild(lol)
        clickCount += 1
      }
    }
  }


}, false);