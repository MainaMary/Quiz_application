const form = document.getElementById('form');
// const formBtn = document.getElementById('submit-btn');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const select = document.getElementById('dropdown');


//Show input error message
function showError(input, message){
const formControl = input.parentElement;
formControl.className ='form-control error';

//use formControl to target all the children element with small tag
const small = formControl.querySelector('small');
small.innerText = message;
}


//show Success
function showSuccess(input){
const formControl = input.parentElement;
formControl.className ='form-control success';
}

//Event Listener
form.addEventListener('submit', function(e){
//    e.preventDefault(); 
//    console.log('submit');
   if(firstName.value === ''){
    e.preventDefault();
       showError(firstName, 'Firstname is required')
   }else{
       showSuccess(firstName);
   }

   if(lastName.value === ''){
    e.preventDefault();
    showError(lastName, 'Lastname is required')
}else{
    showSuccess(lastName);
}

if( select === '--Select--'){
    e.preventDefault();
 showError(select,'Please select one category');
}else{
    showSuccess(select);
}

passedValue();
// useRedirect();
});

// Passing selected text from dropdown into next Page
const formBtn = document.getElementById('submit-btn');
form.addEventListener('submit', passedValue);

let selectedVal;
function passedValue(){
     selectedVal =  document.getElementById('dropdown').value;

    console.log(selectedVal);
    localStorage.setItem('dropdownValue', selectedVal);

   
    
}

formBtn.addEventListener('click', userRedirect)

function userRedirect(e){
    e.preventDefault();
     const selectedValue =  document.getElementById('dropdown').value;
     //selectedVal = document.getElementById('dropdown').value;
    // console.log(selectedVal);

    if(selectedValue === 'Technology'){
        window.location.href ='index_tech.html'
    }else{
        window.location.href ='index_maths.html'
    }
      
}
userRedirect();
 
// function useRedirect(){








