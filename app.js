let email = document.querySelector('.email');
let phone = document.querySelector('.phoneNo');
let password = document.querySelector('.pass');
let confirmPassword = document.querySelector('.confirmPass');
const form = document.querySelector('form');
const emailError = document.querySelector('.emailError')
const phoneErr = document.querySelector('.phoneError');
const passErr = document.querySelector('.passError');
const confirmPassError = document.querySelector('.confirmPassError')

form.onsubmit = function validation(){

  
    if(email.value === ""){
        emailError.classList.add('error')
        emailError.innerHTML = '* Email Address field is empty';
        
       
        return false;    
    }
    else if( !email.value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ){
     
        emailError.classList.add('error')
        emailError.innerHTML = '* Invalid Email Address';
        return false;
    }

    if(phone.value == ""){
        phoneErr.classList.add('error')
        phoneErr.innerHTML = '* Phone field is empty'
        return false;
    }
    else if(phone.value.length !== 11){
        phoneErr.classList.add('error')
        phoneErr.innerHTML = '* Invalid phone number length'
        
        return false;
    }


    if(password.value == ""){
        passErr.classList.add('error')
        passErr.innerHTML = '* Password field is empty'
        return false;
    }
    else if(password.value.length < 8){
        passErr.classList.add('error')
        passErr.innerHTML = '* Password length should be more than 8'
        return false;
    }
    else if(!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
        passErr.classList.add('error')
        passErr.innerHTML = '* password must contain Uppercase and digits'
        
        return false;
    } 
 
    if(confirmPassword.value !== password.value){
        confirmPassError.classList.add('error');
        confirmPassError.innerHTML = "* passwords doesn't match"
        
        return false;
    }
    
    
}
email.onfocus = function(){
    if(emailError.classList.contains('error')){
        emailError.classList.remove('error');
    }
    
}
phone.onfocus = function(){
    if(phoneErr.classList.contains('error')){
        phoneErr.classList.remove('error');
    }
}
password.onfocus = function(){
    if(passErr.classList.contains('error')){
        passErr.classList.remove('error');
    }
}

confirmPassword.onfocus = function(){
    if(confirmPassError.classList.contains('error')){
        confirmPassError.classList.remove('error');
    }
}






