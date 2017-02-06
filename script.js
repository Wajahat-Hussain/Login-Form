
function signup(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pswd").value;
  var p = document.getElementById("p1");    

      
    if(name == ""){
        p.innerHTML = "You must UserName";
        
    }
    else if(email == ""){
        p.innerHTML = "You must Email";
    }
    
    else if( email.indexOf("@") == "-1" || email.lastIndexOf(".com") == "-1"){
        p.innerHTML = "Please valid Email";
    }
    else if(pass == ""){
        p.innerHTML = "You must Password";
    }
    else if(pass.length < 8){
        p.innerHTML = "Password is too short";
    }
    else{

    localStorage.setItem("username", name);
    localStorage.setItem("email", email);
    localStorage.setItem("Password", pass);
    
    alert("Registration Complet!");
    return document.location.href = "login.html";
    }
}


function logIn(){
   
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pswd").value;
    var p = document.getElementById("p1");
    var usremail = localStorage.getItem("email");
    var usrPass = localStorage.getItem("Password");
     if(email == ""){
        p.innerHTML = "You must Enter your Email";
    }
    
    else if( email.indexOf("@") == "-1" || email.lastIndexOf(".com") == "-1"){
        p.innerHTML = "Enter valid Email";
    }
    else if(pass == ""){
        p.innerHTML = "You must Enter Password";
    }
    else if(email != usremail || pass != usrPass){
        p.innerHTML = "Login Failed!...First > SIGN UP";
    }
    else if(email === usremail && pass === usrPass){
        alert("Login Succesful..!");
        return document.location.href = "https://muhammadkareem.github.io/My-Portfolio/";
    }
}
