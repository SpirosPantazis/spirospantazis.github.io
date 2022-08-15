function setUserNamePswd(succesName, succesPswd){
    var userName = document.getElementsByName("fullname")[0].value;
    var userPassword = document.getElementsByName('password')[0].value;
       //preventDefaukt();
       if(userName == succesName && userPassword == succesPswd) window.location.href = "https://www.google.com";
       else alert("Wrong UserName or Password. Please try again!");
       return false;   
}
function getUserNamePswd(succesName,succesPswd) {
       return alert("User name: " + succesName + " Password: " + succesPswd);
}   