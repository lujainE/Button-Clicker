function Myalert() {
    alert("Ninja was liked");
} 

function logout(element) {
    element.innerText = "log-out";
}

function hide(element) {
    element.remove();
}

function light_dark() {
    var element = document.body;
    element.classList.toggle("light-mode");
}
