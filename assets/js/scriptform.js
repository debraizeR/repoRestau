

document.getElementById('firstname').addEventListener('blur',function(){
    var reg = new RegExp('^[a-z]');
    var firstname=document.getElementById('firstname').value;
    if(firstname== "")
    {
    document.getElementById('pfirstname').innerHTML ="vous devez avoir comme meme un nom NON !!!!";
    document.getElementById("firstname").focus();
    document.getElementById("pfirstname").style.color = "red";
    }
    else
    {
      document.getElementById("lastname").focus();
      document.getElementById('pfirstname').innerHTML =" "
       }
    })
    document.getElementById('lastname').addEventListener('blur',function(){
        var lastname=document.getElementById('lastname').value;
        if(lastname== "")
        {
        document.getElementById('plastname').innerHTML ="vous devez avoir comme meme un prenom NON !!!!";
        document.getElementById("lastname").focus();
        document.getElementById("plastname").style.color = "red"
        }
        else
        {
          document.getElementById("email").focus();
          document.getElementById('plastname').innerHTML ="";
           }
          }
      );
      document.getElementById('email').addEventListener('blur',function(){
        var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
          var email=document.getElementById('email').value;
         if(email== "")
        {
          document.getElementById('pemail').innerHTML ="ne peut pas etre vide";
          document.getElementById("pemail").style.color = "red";
          document.getElementById("email").focus();
        }
        else
          if (reg.test(email)==false) {
            document.getElementById('pemail').innerHTML ="adresse mail incorrecte";
            document.getElementById("email").focus();
            document.getElementById("pemail").style.color = "red"
          }
          else
          {
          document.getElementById('pemail').innerHTML ="";
          document.getElementById("object").focus();
           }
          }
      );
      document.getElementById('object').addEventListener('blur',function(){
        var objetc=document.getElementById('object').value;
        if(objetc== "")
        {document.getElementById('pobject').innerHTML ="ne peut pas etre vide";
        document.getElementById("pobject").style.color = "red";
        document.getElementById("email").focus();}
        else{
            document.getElementById('pobject').innerHTML ="";
            document.getElementById("message").focus();
        }
    })