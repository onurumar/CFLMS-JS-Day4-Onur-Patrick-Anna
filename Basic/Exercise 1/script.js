let names = document.getElementsByClassName("name")
let inputs = document.getElementsByClassName("input")
let professions = document.getElementById("profession").children

for (i = 0; i < names.length; i++) {
  names[i].addEventListener("input", function() {
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
  for (i = 0; i < professions.length; i++) {
    if (professions[i].selected && professions[i].id == "IT") {
      document.getElementById("resultWrapper").style.backgroundColor = "purple"
    } else if (professions[i].selected && professions[i].id == "hospitality") {
      document.getElementById("resultWrapper").style.backgroundColor = "yellow"
    }
  }
})
