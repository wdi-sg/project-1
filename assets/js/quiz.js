var questionOne = {
  question: "Which is the fastest growing religion in the world?",
  choices: ['Islam', 'Christianity', 'Buddhism', 'Judaism'],
  correctAns: 0

}

var questionTwo = {
  question: "Which is the most popular type of pet in the world?",
  choices: ['Dogs', 'Hamsters', 'Cats', 'Fish'],
  correctAns: 2
}

var allQuestions = [questionOne, questionTwo]

for (var i = 0; i < allQuestions.length; i++) {
  console.log(allQuestions[i].question)
}
