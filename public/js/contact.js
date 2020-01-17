
let envoi = document.getElementById("btnenvoi");

let surname = document.getElementById("nom");
let errorsurname = document.getElementById("erreurnom");
let wrongimgsurname = document.getElementById("wrongimgnom")
let regexname = /^[a-zA-Zàáâäçèéêëìíîïñòóôöùúûü]+[a-zA-Zàáâäçèéêëìíîïñòóôöùúûü\-'\s]+[a-zA-Zàáâäçèéêëìíîïñòóôöùúûü]+$/

let name = document.getElementById("prenom")
let errorname = document.getElementById("erreurprenom")
let wrongimgname = document.getElementById("wrongimgprenom")

 
envoi.addEventListener("click",confirmsurname);

function confirmsurname(event){
    
    if (surname.validity.valueMissing){
        event.preventDefault();
        errorsurname.innerHTML = "Champ obligatoire"; 
        errorsurname.style.color = "red";
        errorsurname.style.fontSize = "0.8em";
        wrongimgsurname.innerHTML = "<img src='public/images/incorrecte_c.png'>";  
       

        
    }else if(!regexname.test(surname.value)){
        
        event.preventDefault();
        errorsurname.textContent = 'Format incorrect';
        errorsurname.style.color = 'red';
        errorsurname.style.fontSize = "0.8em";
        wrongimgsurname.innerHTML = "<img src='public/images/incorrecte_c.png'>";  
    }
    else{
        event.preventDefault();
        errorsurname.textContent = "";
        wrongimgsurname.innerHTML = "";
    }

}

envoi.addEventListener("click",confirmname);

function confirmname(event){

    if (name.validity.valueMissing){
        event.preventDefault();
        errorname.textContent = "Champ obligatoire";
        errorname.style.color = "red";
        errorname.style.fontSize = "0.8em";
        wrongimgname.innerHTML = "<img src='public/images/incorrecte_c.png'>";  
        
    }else if(!regexname.test(name.value)){
        event.preventDefault();
        errorname.textContent = 'Format incorrect';
        errorname.style.color = 'red';
        errorname.style.fontSize = "0.8em";
        wrongimgname.innerHTML = "<img src='public/images/incorrecte_c.png'>";  
    }
    else{
        event.preventDefault();
        errorname.textContent = "";
        wrongimgname.innerHTML = "";
    }
}

let email = document.getElementById("email")
let erroremail = document.getElementById("erreuremail")
let wrongimgemail = document.getElementById("wrongimgemail")
let regexemail = /^[\w-.]+@[\w-.]+((\.com)|(\.fr))$/

envoi.addEventListener("click", confirmemail)

function confirmemail(event){
    
    if (email.validity.valueMissing){
    event.preventDefault();
    erroremail.textContent = "Champ obligatoire";
    erroremail.style.color = "red";
    erroremail.style.fontSize = "0.8em";
    wrongimgemail.innerHTML = "<img src='public/images/incorrecte_c.png'>";  
    
    }else if(!regexemail.test(email.value)){
        event.preventDefault();
        erroremail.textContent = "Format incorrect";
        erroremail.style.color = "red";
        erroremail.style.fontSize = "0.8em";
        wrongimgemail.innerHTML = "<img src='public/images/incorrecte_c.png'>";
    }
    else{
        event.preventDefault();
        erroremail.textContent = "";
        wrongimgemail.innerHTML = "";
    }
}






