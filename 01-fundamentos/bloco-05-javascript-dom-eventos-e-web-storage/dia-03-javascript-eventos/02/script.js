function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  function createDaysOfTheMonth() {
    const ulDays = document.getElementById('days');
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
    for (let index = 0; index < decemberDaysList.length; index +=1) {
      const daysOfMonth = document.createElement('li');
      daysOfMonth.innerHTML = decemberDaysList[index];

      if (decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
        daysOfMonth.className = 'day holiday';
        ulDays.appendChild(daysOfMonth);
      } else if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18) {
        daysOfMonth.className = 'day friday';
        ulDays.appendChild(daysOfMonth);
      } else if (decemberDaysList[index] === 25) {
        daysOfMonth.className = 'day holiday friday';
        ulDays.appendChild(daysOfMonth);
      } else {
        daysOfMonth.className = 'day';}
      ulDays.appendChild(daysOfMonth);
    };
};

createDaysOfTheMonth();

function createButtonHoliday(btnName){
  const btnContainer = document.querySelector('.buttons-container');
  const btnHolidays = document.createElement('button');
  btnHolidays.id = 'btn-holidays';
  btnHolidays.innerHTML = btnName;
  btnContainer.appendChild(btnHolidays);
};

createButtonHoliday('Feriados');

function changeColorHolidays(){
  const holidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)'; 
  let setNewColor = 'white'; 
  const holidaysChangeColor = document.querySelector('#btn-holidays');
  
  holidaysChangeColor.addEventListener('click', function(){
    for (let index = 0; index < holidays.length; index += 1){
      if (holidays[index].style.backgroundColor === setNewColor){
        holidays[index].style.backgroundColor = backgroundColor;
      } else {
        holidays[index].style.backgroundColor = setNewColor
      };
    };
  });
};

changeColorHolidays()

function createButtonFriday(btnName){
  const btnContainer = document.querySelector('.buttons-container');
  const btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  btnFriday.innerHTML = btnName;
  btnContainer.appendChild(btnFriday);
};

createButtonFriday('Sexta-feira');

const fridayArray = [4, 11, 18, 25];
const setNewText = document.querySelectorAll('.friday');

function sextou(fridays){
  const friday = document.querySelectorAll('.friday');
  let text = 'SEXTOUUUUU'; 
  const fridayChangeColor = document.querySelector('#btn-friday');
  
  fridayChangeColor.addEventListener('click', function(){
    for (let index = 0; index < friday.length; index += 1){
      if (friday[index].innerHTML !== text){
        friday[index].innerHTML = text;
      } else {
        friday[index].innerHTML = fridays[index];
      };
    };
  });
};

sextou(fridayArray);










  // function changeText() {
  //   let getInputField = document.querySelector('#task-input');
  //   let addInputButton = document.querySelector('#btn-add');
  //   let getTaskList = document.querySelector('.task-list');

  //   addInputButton.addEventListener('click', function() {

  //     if (getInputField.value.length > 0) {
  
  //       let newLi = document.createElement('li');
  
  //       newLi.innerText = getInputField.value;
  
  
  //       getTaskList.appendChild(newLi);
  
  //       getInputField.value = '';
  
  //     } else {
  
  //       alert('Error: Digite ao menos 1 caractere.');
  
  //     }
  
  //   });
  
  //   getInputField.addEventListener('keyup', function(event) {
  
  //     if (event.key === 'Enter' && getInputField.value.length > 0) {
  
  //       let newLi = document.createElement('li');
  
  //       newLi.innerText = getInputField.value;
  
  
  //       getTaskList.appendChild(newLi);
  
  //       getInputField.value = '';
  
  //     }
  
  //   });
  // }  
  // changeText()  