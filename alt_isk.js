window.addEventListener('load', init)
function $(elem) {
  return document.querySelectorAll(elem)
}
function ID(elem) {
  return document.getElementById(elem);
}
function CLASS(elem) {
  return document.getElementsByClassName(elem);
}

function init() {
  fetch("alt_isk.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.kerdesek)
      feldolgoz(data.kerdesek)
    })
}
function feldolgoz(kerdesek) {
  var txt = '';
  txt += "<h1>Általános iskolás kérdések</h1>"
  kerdesek.forEach(function (kerdes) {

    txt += '<ul>';

    for (const key in kerdes) {
      if (key.includes("kerdes")) { txt += `<section><span> ${kerdes[key]}</span></section>`
      document.querySelectorAll('article')[0].innerHTML = txt}

      if (key.includes("v1")) { txt += `<input type="checkbox" id="correct1">${kerdes[key]}</label>`
      document.querySelectorAll('article')[0].innerHTML = txt}

      if (key.includes("v2")) { txt += `<input type="checkbox"> ${kerdes[key]}`
      document.querySelectorAll('article')[0].innerHTML = txt}

      if (key.includes("v3")) { txt += `<input type="checkbox"> ${kerdes[key]}`
      document.querySelectorAll('article')[0].innerHTML = txt}
    }
    txt += '</ul>'
  
  })
  
}

function result() {
  var score = 0;
  if (document.getElementById("correct1").checked) {
    score++;
  }
  alert("Önnek "+score+" pontja lett")
}