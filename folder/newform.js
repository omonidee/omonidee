const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const confirmpassword=document.getElementById('confirmpassword')

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});

 const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

 }

 const setSuccess=element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const isValidEmail=email=>{
    const re= (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

   return re.test( (email).toLowerCase());
}
const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmpasswordValue=confirmpassword.value.trim();

   console.log(emailValue);
if(usernameValue.length<1||usernameValue.length>10){
    setError(username,'Username should be between 1-10 charcater');
}else{
    setSuccess(username);
}

if(emailValue ===''){
    setError(email, 'Email is required');
}else if (!isValidEmail(emailValue)){
    setError(email, 'provide a valid email address');
}else{
  setSuccess(email);
}
if(passwordValue===''){
    setError(password,'Password is required');
  } else if(passwordValue.length<8){
      setError(password, 'password must be at least 8 character.')
} else{
    setSuccess(password);

}
if(confirmpasswordValue===''){
    setError(confirmpassword,'please confirm your password');
}else if (confirmpasswordValue !==passwordValue){
    setError(confirmpassword,"password doesn't match");
}else{
    setSuccess(confirmpassword);
}
}

