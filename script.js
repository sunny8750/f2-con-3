function myFun(){ 
var a = document.getElementById("EnterName").value;
 if(a==""){
    document.getElementById("mssg").innerHTML="please fill name";
    return false;
 }
  if(a.length<2){
     document.getElementById("mssg").innerHTML="**name must be 2 character";
     return false;
  }
 //email check
    var emailcheck = document.getElementById("EnterEmail").value;
    var pattern = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,20}$/;

    if(pattern.test(emailcheck)){
        document.getElementById("mailmsg").innerHTML="";
    }else{
        document.getElementById("mailmsg").innerHTML=" Sorry email is not correct";
    }
//password check
     
    var p = document.getElementById("EnterPassword").value;
    var cp = document.getElementById("confirmPassword").value;
    if(p==""){
        document.getElementById("pswmsg").innerHTML="plss make a strong password";
        return false; 
    }
    if(p!= cp){
        document.getElementById("conpsdmsg").innerHTML="passwords are not same";
        return false;
    }
    // if(localStorage.getItem('itemsJson')==null){
    //     itemJsonArray = [];
    //     itemJsonArray.push([a, emailcheck, p]);
    //     localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    // }else{
    //     itemJsonArrayStr = localStorage.getItem('itemsJson')
    //     itemJsonArray = JSON.parse(itemJsonArrayStr);
    //     itemJsonArray.push([a, emailcheck, p]);
    //     localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    // }
    let formData = JSON.parse(localStorage.getItem('formdata')) || [];
    formData.push({a,emailcheck,p});
    localStorage.setItem('formData', JSON.stringify(formData));


    return true;
}
var usrtoken ;
 function login(e){
    let emllogin = document.getElementById("email").value;
    let passlogin = document.getElementById("password").value;
    //alert(emllogin+passlogin)
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data => data.emailcheck == emllogin && data.p == passlogin);
    if(!exist){
        alert("password and email not matched");
    }else{
        usrtoken = generateString(10);
        location.href="ui.html";
    }
    e.preventDefault();
 }
    //generate random string
 const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

 function generateString(length) {
     let result = ' ';
     const charactersLength = characters.length;
     for ( let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
 
     return result;
 }

 let smpldta ={
    question: "What is a dog" , answer: "Dog is a animal with 4 legs", imageLink: "dog.jpg"
 }
 
 
 
   
    
   

