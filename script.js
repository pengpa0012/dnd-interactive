const items = document.querySelectorAll(".item")
const body = document.querySelector("body")
const elements = document.querySelectorAll(".element")


items.forEach(el => {
  el.addEventListener("dragend", (e) => {
    const {x, y} = e
    const elementType = el.attributes["data-type"].value
    const newEl = document.createElement("div")
    newEl.textContent = "test"
    newEl.style.position = `fixed`
    newEl.style.top = `${y}px`
    newEl.style.left = `${x}px`
    newEl.className = "element"
    newEl.style.transform = `translate(-50%, -50%)`
    newEl.style.transition = `5000ms ease-in`
    body.appendChild(newEl)

    setTimeout(() => {
      newEl.style.top = `-1000px`
    }, elementType * 1000)
  })
})


function animate(){
  const elements = document.querySelectorAll(".element")

  elements.forEach(el => {
    if(el.offsetTop < 0) {
      el.remove()
    }
  })

  requestAnimationFrame(animate)
}

animate()