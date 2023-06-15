
window.onload=function(){
  const ageForm  = document.getElementById('age-form');
  ageForm.onsumbit=function(event){
    event.preventDefault();
    const age = document.getElementById('age').value;
    const message = document.getElementById('message');
    if(age >= 18){
      document.getElementById('div#18&up').removeAttribute('class');
    }
    else if (age < 18){
      document.getElementById('div#under-18').removeAttribute('class');
    }
  };
};

// when the window loads, the code below will run


