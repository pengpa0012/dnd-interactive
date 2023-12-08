const items = document.querySelectorAll(".item")
const body = document.querySelector("body")

items.forEach(el => {
  el.addEventListener("dragend", (e) => {
    const {x, y} = e
    const newEl = document.createElement("div")
    newEl.textContent = "test"
    newEl.style.position = `fixed`
    newEl.style.top = `${y}px`
    newEl.style.left = `${x}px`
    newEl.style.transform = `translate(-50%, -50%)`
    body.appendChild(newEl)
  })
})