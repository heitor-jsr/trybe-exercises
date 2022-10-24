const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const grade = (rightAnswer, studentAnswer, func) => {
  const result = func(rightAnswer, studentAnswer);
  return `Nota do aluno: ${result}`
};

const checkAnswers = (answers, student) => {
  let studentGrade = 0;
  for (let index in answers) {
    if (answers[index] === student[index]) {
      studentGrade += 1
    } else if (student[index] === 'N.A') {
      studentGrade += 0
    } else {
      studentGrade -= 0.5
    }
  }
  return studentGrade
}

console.log(grade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers))