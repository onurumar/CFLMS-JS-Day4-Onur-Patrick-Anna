class question {
  constructor(question, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
    this.question = question
    this.correctAnswer = correctAnswer
    this.wrongAnswer1 = wrongAnswer1
    this.wrongAnswer2 = wrongAnswer2
    this.wrongAnswer3 = wrongAnswer3
  }
}

let questions = [
  new question("What does DOM mean?", "Document Object Model", "Document Object Manipulation", "Document Owner Model", "Data Optimization Model")
]

let form = document.forms["custom-question"]

form["submit"].addEventListener("click", function() {
  questions.push(new question(form["question"].value, form["correct-answer"].value, form["wrong-answer1"].value, form["wrong-answer2"].value, form["wrong-answer3"].value))
  alert(JSON.stringify(questions))
})
