document.getElementById('firstname').addEventListener('blur', function () {
  var reg = new RegExp('^[a-z]');
  var firstname = document.getElementById('firstname').value;
  if (firstname == "") {
    document.getElementById('pfirstname').innerHTML = "Veuillez saisir votre nom svp!";
    document.getElementById("firstname").focus();
    document.getElementById("pfirstname").style.color = "red";
  } else {
    document.getElementById("lastname").focus();
    document.getElementById('pfirstname').innerHTML = " ";
    
  }
})
document.getElementById('lastname').addEventListener('blur', function () {
  var lastname = document.getElementById('lastname').value;
  if (lastname == "") {
    document.getElementById('plastname').innerHTML = "Veuillez saisir votre prenom svp !";
    document.getElementById("lastname").focus();
    document.getElementById("plastname").style.color = "red"
  } else {
    document.getElementById("email").focus();
    document.getElementById('plastname').innerHTML = "";
  }
});
document.getElementById('email').addEventListener('blur', function () {
  var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
  var email = document.getElementById('email').value;
  if (email == "") {
    document.getElementById('pemail').innerHTML = "Votre adresse mail ne peut pas etre vide !";
    document.getElementById("pemail").style.color = "red";
    document.getElementById("email").focus();
  } else
  if (reg.test(email) == false) {
    document.getElementById('pemail').innerHTML = "Le format de votre adresse mail est invalide";
    document.getElementById("email").focus();
    document.getElementById("pemail").style.color = "red"
  } else {
    document.getElementById('pemail').innerHTML = "";
    document.getElementById("object").focus();
  }
});
document.getElementById('object').addEventListener('blur', function () {
  var objetc = document.getElementById('object').value;
  if (objetc == "") {
    document.getElementById('pobject').innerHTML = "Veuillez saisir le l'objet de votre demande svp !";
    document.getElementById("pobject").style.color = "red";
    document.getElementById("email").focus();
  } else {
    document.getElementById('pobject').innerHTML = "";
    document.getElementById("message").focus();

  }
});
document.getElementById('idbtnsend').addEventListener('click', function () {

  if (firstname == "") {
    document.getElementById('pfirstname').innerHTML = "Veuillez saisir votre nom svp!";
    document.getElementById("firstname").focus();
    document.getElementById("pfirstname").style.color = "red";
  } else {
window.alert("votre message a été bien envoyé !");
  }
})

