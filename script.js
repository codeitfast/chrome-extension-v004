document.addEventListener('DOMContentLoaded', documentEvents, false);

try {
  document.getElementById('background').value = "#1BFFFF"
} catch (err) {
  console.log(err)
}


function documentEvents() {
  var r = document.querySelector(':root');

  function reload() {
    var color = document.getElementById('background').value
    r.style.setProperty('--bg', color);



    document.body.style.backgroundImage = "linear-gradient(to right, #2E3192,  " + color + ")"

    //console.log(getComputedStyle(r).getPropertyValue('--bg'))

    if (Math.random(0, 1) < .1) {
      console.log(color)
    }
    window.requestAnimationFrame(reload)
  }

  window.requestAnimationFrame(reload)
}