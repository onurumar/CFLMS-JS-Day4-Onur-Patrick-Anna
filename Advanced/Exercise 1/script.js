let circle = document.getElementById("circle")
let message = document.getElementById("message")

circle.addEventListener("mouseover", function() {
  message.innerHTML = "you are in the circle"
})

circle.addEventListener("mouseout", function() {
  message.innerHTML = "you are outside of the circle"
})

circle.addEventListener("click", function() {
  circle.style.backgroundColor = "grey"
})

circle.addEventListener("dblclick", function() {
  circle.style.backgroundColor = "blue"
})
