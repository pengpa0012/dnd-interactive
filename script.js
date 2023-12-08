const items = document.querySelectorAll(".item")
const body = document.querySelector("body")
const elements = document.querySelectorAll(".element")

// To Add
// Add explode/spark animation
// Add different item

items.forEach(el => {
  el.addEventListener("dragend", (e) => {
    const {x, y} = e
    const elementTiming = el.attributes["data-timing"].value
    const elementType = el.attributes["data-type"].value
    const elementImage = el.attributes["data-img"].value
    const newEl = document.createElement("img")
    newEl.src = elementImage
    newEl.style.position = `fixed`
    newEl.style.top = `${y}px`
    newEl.style.left = `${x}px`
    newEl.className = "item element"
    newEl.style.transform = `translate(-50%, -50%)`
    newEl.style.transition = `1000ms ease-in`
    body.appendChild(newEl)
    playAudio("./assets/shh.mp3")

    setTimeout(() => {
      if(elementType == "launch") {
        // add boom effect after it reach certain px
        newEl.style.top = `-1000px`
        newEl.textContent = "launch"
      } else {
        // add boom effect here before remove
        newEl.textContent = "BOOM"
        setTimeout(() => {
          playAudio("./assets/bomb.mp3", 0.2)
          // newEl.src = "./assets/explode.png"
          setTimeout(() => {
            newEl.remove()
          }, 1000)
        }, 500)
      }
      
    }, elementTiming * 1000)
  })
})

function playAudio (src, volume = 1) {
  const audio = new Audio(src)
  audio.volume = volume
  audio.play()
}

function animate() {
  const elements = document.querySelectorAll(".element")
  elements.forEach(el => {
    if(el.offsetTop < 200) {
      playAudio("./assets/firework.mp3")
      // el.src = "./assets/explode.png"
      el.remove()
    }
  })
  requestAnimationFrame(animate)
}

animate()

