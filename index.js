var readLine = require("readline-sync")

var score = 0

var userName = readLine.question("Please Enter Your Name: ")

console.log("\nHey! " + userName + ". Let's see how well do you know me.")

var userResponse = readLine.question("\nPress enter to continue: ")

console.log()

function play(question, answer, rightAnswer){
  var userAnswer = readLine.question(question)

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Yay! You're Right.")
    score += 1
  }
  else{
    console.log("Oops! You're Wrong.")
    console.log(rightAnswer)
  }

  console.log("Current score: " + score)
  console.log("----------------")
}

var questionOne = {
  question: "Am I older than 22? ",
  answer: "yes",
  rightAnswer: "I'm 23!"
}

var questionTwo = {
  question: "Am I from the city Mumbai? ",
  answer: "no",
  rightAnswer: "I'm from Jodhpur!"
}

var questionThree = {
  question: "Where do I work? ",
  answer: "tcs",
  rightAnswer: "Currently I work at TCS!"
}

var questionFour = {
  question: "Do I like photography? ",
  answer: "yes",
  rightAnswer: "It seems you don't know me well!"
}

var questionFive = {
  question: "Do I like Pizza? ",
  answer: "no",
  rightAnswer: "I don't like Pizza's... I love them! :D"
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive]

for(var i = 0; i < questionList.length; i++){
  play(questionList[i].question, questionList[i].answer, questionList[i].rightAnswer)
}

console.log("\nYay! You Scored: " + score)
console.log()