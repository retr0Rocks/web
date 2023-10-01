const submit = (event) => {
    event.preventDefault();

    var date = document.getElementById("date").value;
    var min_date = "2023-09-01";
    var max_date = "2023-12-31";
    var date_span = document.getElementById("date_span");

    if (date >= min_date && date <= max_date) {
        date_span.innerHTML = "CORRECT";
        date_span.setAttribute("style", "color: green");
    } else {
        date_span.innerHTML = "La date du match doit être comprise entre le 1er janvier 2023 et le 31 décembre 2023";
        date_span.setAttribute("style", "color: red");
    }

    var prenom = document.getElementById("prenom").value;
    var prenom_span = document.getElementById("prenom_span");
    var prenomRegex = /^[a-zA-Z]*$/;

    if (prenomRegex.test(prenom) && prenom.length >= 1) {
        prenom_span.innerHTML = "CORRECT";
        prenom_span.setAttribute("style", "color: green");
    } else {
        prenom_span.innerHTML = "Veuillez entrer un prénom valide (lettres uniquement)";
        prenom_span.setAttribute("style", "color: red");  
    }

    var nom = document.getElementById("name").value;
    var name_span = document.getElementById("name_span");
    var nameRegex = /^[a-zA-Z]*$/;

    if (nameRegex.test(nom) && nom.length >= 1) {
        name_span.innerHTML = "CORRECT";
        name_span.setAttribute("style", "color: green");
    } else {
        name_span.innerHTML = "Veuillez entrer un nom valide (lettres uniquement)";
        name_span.setAttribute("style", "color: red");
    }

    var tel = document.getElementById("telephone").value.toString();
    var tel_span = document.getElementById("tel_span");

    if (tel.length === 8) {
        tel_span.innerHTML = "CORRECT";
        tel_span.setAttribute("style", "color: green");
    } else {
        tel_span.innerHTML = "Veuillez entrer un numéro de téléphone valide (8 chiffres)";
        tel_span.setAttribute("style", "color: red");        
    }
}

const checkEmail = () => {
    var email = document.getElementById("email").value;
    var email_span = document.getElementById("email_span");
    var emailRegex = /^[a-z0-9._%+\-]+@esprit\.tn$/;

    if (emailRegex.test(email) && email.length >= 10) {
        email_span.innerHTML = "CORRECT";
        email_span.setAttribute("style", "color: green");
    } else {
        email_span.innerHTML = "Email doit etre valide et se termine par esprit.tn";
        email_span.setAttribute("style", "color: red");
    }
}

document.getElementById("inscrire").addEventListener("click", submit);
document.getElementById("email").addEventListener("keyup", checkEmail);