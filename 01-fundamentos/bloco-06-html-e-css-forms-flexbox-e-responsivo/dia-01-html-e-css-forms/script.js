const btnSubmit = document.getElementById('botao-enviar');
const btnClear = document.getElementById('botao-reset');
const userName = document.getElementById('user');
const userEmail = document.getElementById('user-email');
const textArea = document.getElementById('text-area');
const data = document.getElementsById('data')

btnSubmit.addEventListener('click', function(event){
  event.preventDefault();
})

btnClear.addEventListener('click', function(){
  userEmail.value = '';
  userName.value = '';
  textArea.value = '';
  data.value = '';
})