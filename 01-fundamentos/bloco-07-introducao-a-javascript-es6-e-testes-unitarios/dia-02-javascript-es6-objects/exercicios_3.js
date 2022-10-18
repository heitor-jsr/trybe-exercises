const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const nightShift = (lesson, key, value) => {
  lesson[key] = value;
};

nightShift(lesson2.turno = 'noite');

const listKeys = (obj) => Object.keys(obj);

const sizeObj = (obj) =>  Object.entries(obj).length;

const listValues = (obj) => Object.values(obj);

// quando queremos passar mais de um objeto como cópia para outro, devemos encapsular ele dentro de algo, vez que o assign somente aceita dois args.
const allLessons = Object.assign({ }, { lesson1, lesson2, lesson3 });

const watchedMAthClass = (obj) => {
  console.log(`A quantidade de alunos que assitiu as aulas de matemática é ${obj.lesson1.numeroEstudantes}`)
}

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));