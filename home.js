let buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", function(){
    alert("You clicked");
    window.open(parent.location = './aboutMe.html');
})