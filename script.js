s
const items = document.querySelectorAll(".item")

items.forEach(el => {
  el.addEventListener("dragend", (e) => console.log(e.x, e.y))
})