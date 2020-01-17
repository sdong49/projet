
let envoi = document.getElementById("btn-inscription");

let identifiant = document.getElementById("identifiant");
let errorid = document.getElementById("erreuridentifiant");
let regexid = /^[\wàáâäçèéêëìíîïñòóôöùúûü-]{5,10}$/

envoi.addEventListener("click",confirmid);

function confirmid(event){
    
    if (identifiant.validity.valueMissing){
        event.preventDefault();
        errorid.textContent = "Champ obligatoire";
        errorid.style.color = "red";
        errorid.style.fontSize = "0.8em";

        
    }else if(!regexid.test(identifiant.value)){
        
        event.preventDefault();
        errorid.textContent = 'Format incorrect';
        errorid.style.color = 'red';
        errorid.style.fontSize = "0.8em";
    }
    else{
        event.preventDefault();
        errorid.textContent = '';
    }

}



let email = document.getElementById("email")
let erroremail = document.getElementById("erreuremail")
let regexemail = /^[\w-.]+@[\w-.]+((\.com)|(\.fr))$/

envoi.addEventListener("click", confirmemail)

function confirmemail(event){
    
    if (email.validity.valueMissing){
    event.preventDefault();
    erroremail.textContent = "Champ obligatoire";
    erroremail.style.color = "red";
    erroremail.style.fontSize = "0.8em";
    
    }else if(!regexemail.test(email.value)){
        event.preventDefault();
        erroremail.textContent = 'Format incorrect';
        erroremail.style.color = 'red';
        erroremail.style.fontSize = "0.8em";
    }
    else{
        event.preventDefault();
        erroremail.textContent = '';
    }
}


let password = document.getElementById("pwd")
let errorpassword = document.getElementById("erreurpassword")
let regexpwd = /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).*$/

envoi.addEventListener("click",confirmpwd);

function confirmpwd(event){
    

    if (password.validity.valueMissing){
        event.preventDefault();
        errorpassword.textContent = "Champ obligatoire";
        errorpassword.style.color = "red";
        errorpassword.style.fontSize = "0.8em";
        
    }else if(!regexpwd.test(password.value)){
        event.preventDefault();
        errorpassword.textContent = "Votre mot de passe doit comporter une lettre Maj, Un entier, Un caractère spécial";
        errorpassword.style.color = 'red';
        errorpassword.style.fontSize = "0.8em";
    }
    else{
        event.preventDefault();
        errorpassword.textContent = '';
    }
}









