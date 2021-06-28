function validForm(event) {
  //Pour la variable nom
  var nom = document.getElementById("name");
  var prenom = document.getElementById("firstname");
  var age = document.getElementById("age");
  var mail = document.getElementById("email");
  var tel = document.getElementById("telephone");
  var canal = document.getElementById("listcanal");
  var mes = document.getElementById("message");
  var error = document.getElementById("errors");
  if (nom.value.length < 4) {
    event.preventDefault(); // stopper la soumission du formulaire
    error.innerHTML = "<li>Le nom doit être au minimum composé de 4 caractères</li>";
  } else {
    innerHTML = " ";
  }

  //pour le prenom
  if (prenom.value.length < 4) {
    event.preventDefault(); // stopper la soumission du formulaire
    error.innerHTML = "<li>Le prénom doit être au minimum composé de 4 caractères </li>";
  } else {
    innerHTML = "";
  }
  //pour l' age
  if (age.value < 18) {
    event.preventDefault(); // stopper la soumission du formulaire
    error.innerHTML = "<li> L'âge doit être supérieur ou égal à 18 ans</li>";

  } else {
    innerHTML = "";
  }

  //pour le mail
  if (mail.value.length < 4 && checkEmail(email)) {
    event.preventDefault(); // stopper la soumission du formulaire
    error.innerHTML = "<li> L'email doit être au format email et doit avoir avoir au minimum 4 caractères</li>";

  } else {
    innerHTML = "";
  }

  //pour le numero de telephone
  if (tel.value.length != 10 && tel.value != isNaN) {
    event.preventDefault(); // stopper la soumission du formulaire
    error.innerHTML = "<li> Le numero de  téléphone doit être composé de 10 caractères entièrement numériques</li>";

  } else {
    innerHTML = "";
  }

  //pour le canal de contact
  if (canal == null) {
    event.preventDefault(); // stopper la soumission du formulaire
    error.innerHTML = "<li> Le canal de contact ne doit pas être null</li>";

  } else {
    innerHTML = "";
  }

  //pour le message
  if (mes > 50) {
    event.preventDefault(); // stopper la soumission du formulaire
    error.innerHTML = "<li> Le message ne doit pas dépasser 50 caractères</li>";

  } else {
    innerHTML = "";
  }

  //Pour les couleurs des erreurs

  if (error != null) {
    error.style.color = "red";
  } else {
    alert("Votre formulaire a été bien validé !");
  }

}