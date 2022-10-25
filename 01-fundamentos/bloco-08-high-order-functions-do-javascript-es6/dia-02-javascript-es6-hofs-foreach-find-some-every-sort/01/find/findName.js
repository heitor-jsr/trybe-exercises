const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

const nameWithFiveLetters = names.find(findNameWithFiveLetters);

// const nameWithFiveLetters = names.find((name) => name.length === 5);


console.log(nameWithFiveLetters);