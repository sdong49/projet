let envoi = document.getElementById("btn-connecter")

let emailins = document.getElementById("emailins")
let erroremailins = document.getElementById("erreuremailins")
let regexemailins = /^[\w-.]+@[\w-.]+((\.com)|(\.fr))$/

envoi.addEventListener("click", confirmemailins)

function confirmemailins(event){

    if (emailins.validity.valueMissing){
    event.preventDefault();
    erroremailins.textContent = "Champ obligatoire";
    erroremailins.style.color = "red";
    erroremailins.style.fontSize = "1em";
    
    }else if(!regexemailins.test(email.value)){
        event.preventDefault();
        erroremailins.textContent = 'Format incorrect';
        erroremailins.style.color = 'red';
        erroremailins.style.fontSize = "1em";
    }
    else{
        event.preventDefault();
        erroremailins.textContent = '';
    }
}

let password = document.getElementById("pwd")
let errorpassword = document.getElementById("erreurpasswordins")


envoi.addEventListener("click",confirmpwd);

function confirmpwd(event){
    

    if (password.validity.valueMissing){
        event.preventDefault();
        errorpassword.textContent = "Champ obligatoire";
        errorpassword.style.color = "red";
        errorpassword.style.fontSize = "1em";
        
    }
    else{
        event.preventDefault();
        errorpassword.textContent = '';
    }
}

