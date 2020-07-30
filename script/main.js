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


// form.addEventListener('submit', (e) =>{

//     e.preventDefault();
//     firstName.value == " " &&  showError(firstName, 'Firstname is required')
//     firstName.value !== " " &&  showSuccess(firstName); 

//     lastName.value == " " &&  showError(lastName, 'Firstname is required')
//     lastName.value !== " " &&  showSuccess(lastName);

//     select.value == "--Select--" &&  showError(select, 'Please Select One Category')
//     select.value !== "--Select--" && showSuccess(select);

//     firstName.value && lastName.value && select.value !== '--Select--' && passedValue();
// })

// function passedValue(){
//          const selectedVal =  document.getElementById('dropdown').value;
    
//        console.log(selectedVal);
//         localStorage.setItem('dropdownValue', selectedVal);
//         if(selectedVal === 'technology') window.location = 'index_tech.html';
//         if(selectedVal === 'Mathematics') window.location = 'index_maths.html'; 
    
//  }

//Event Listener
form.addEventListener('submit', function(e){
   e.preventDefault(); 
   console.log('submit');
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

if( select.value === '--Select--'){
    e.preventDefault();
 showError(select,'Please select one category');
}else{
    showSuccess(select);
}

firstName.value && lastName.value && select.value !== '--Select--' && passedValue();
// passedValue();

});

//Passing selected text from dropdown into next Page



function passedValue(){
      const selectedVal =  document.getElementById('dropdown').value;

    console.log(selectedVal);
    localStorage.setItem('dropdownValue', selectedVal);
    if(selectedVal === 'technology'){
        window.location.href ='html/tech.html'
    }else{
        window.location.href ='html/maths.html'
    }
   
    
}










