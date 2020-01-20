 postForm.addEventListener('click', validateAll); 
  
 function validateAll(event) { 
    validate(name, regexName, errorName, wrongImgName, event);
    validate(surname, regexSurname, errorSurname, wrongImgSurname, event);
   // etc...
 }; 

function validate(val, regexpVal, errorVal, wrongImg, wrapper, event) {
    if (val.validity.valueMissing || validVal.test(val.value) == false) {
        event.preventDefault();
        let text = val.validity.valueMissing ? "Champ obligatoire" : "Format incorrect";
        errorVal.innerHTML = text;
        errorVal.style.color = "red";
        errorVal.style.fontSize = "0.8em";
        wrongImg.innerHTML = "<img src='public/images/incorrecte_c.png'>"; 
     } else { 
        event.preventDefault();
        errorVal.textContent = "";
        wrongImg.innerHTML = "";
     } 
}