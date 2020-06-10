let buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", function(){
    window.open(parent.location = './mycv.html');
})

buttons[1].addEventListener("click", function(){
    window.open(parent.location = './carousel.html');
})