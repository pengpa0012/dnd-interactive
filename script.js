const items = document.querySelectorAll(".item")
const body = document.querySelector("body")
const elements = document.querySelectorAll(".element")

// To Add
// Add explode/spark animation
// Add sounds

items.forEach(el => {
  el.addEventListener("dragend", (e) => {
    const {x, y} = e
    const elementTiming = el.attributes["data-timing"].value
    const elementType = el.attributes["data-type"].value
    const newEl = document.createElement("div")
    newEl.textContent = "sparking"
    newEl.style.position = `fixed`
    newEl.style.top = `${y}px`
    newEl.style.left = `${x}px`
    newEl.className = "item element"
    newEl.style.transform = `translate(-50%, -50%)`
    newEl.style.transition = `5000ms ease-in`
    body.appendChild(newEl)
    console.log(elementType)
    setTimeout(() => {
      if(elementType == "launch") {
        // add boom effect after it reach certain px
        newEl.style.top = `-1000px`
        newEl.textContent = "launch"
      } else {
        // add boom effect here before remove
        newEl.textContent = "BOOM"
        setTimeout(() => {
          newEl.remove()
        }, 500)
      }
      
    }, elementTiming * 1000)
  })
})

function animate() {
  const elements = document.querySelectorAll(".element")
  elements.forEach(el => {
    if(el.offsetTop < 200) {
      el.textContent = "BOOM"
      setTimeout(() => {
        el.remove()
      }, 500)
    }
  })
  requestAnimationFrame(animate)
}

animate()
