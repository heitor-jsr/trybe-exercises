const btnSubmit = document.getElementById('botao-enviar');
const btnClear = document.getElementById('botao-reset');
const userName = document.getElementById('user');
const userEmail = document.getElementById('user-email');
const textArea = document.getElementById('text-area');
const data = document.getElementsById('data');
const photoCheck = document.getElementById('photoCheck');



function clearCamps() {
  btnClear.addEventListener('click', function(){
    userEmail.value = '';
    userName.value = '';
    textArea.value = '';
    data.value = '';
  })
};


function enableSubmit() {
  btnSubmit.disabled = !photoCheck.checked
};


window.onload = function() {
  clearCamps();
  btnSubmit.addEventListener('click', function(event){
    event.preventDefault()
  });
  photoCheck.addEventListener('change', enableSubmit)
}