let names = document.getElementsByClassName("name")
let inputs = document.getElementsByClassName("input")

for (i = 0; i < names.length; i++) {
  names[i].addEventListener("keypress", function() {
    if (this.value.length > 5) {
      this.style.color = "green"
    } else {
      this.style.color = "red"
    }
  })
}

document.getElementById("send").addEventListener("click", function() {
  for (i = 0; i < inputs.length; i++) {
    document.getElementById(`${inputs[i].id}Result`).innerHTML = inputs[i].id + ": " + inputs[i].value
  }
})
