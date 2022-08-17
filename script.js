var txt = document.getElementById('txt');
var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn2');

txt.innerHTML = localStorage.getItem('input');
btn.innerHTML = "Hesabdan cixmaq";
btn1.innerHTML = "Komputerlerim";
btn1.onclick = function() {
    window.location.href = '/final/shop/index.html';
}
btn1.classList.add("button") 

btn.onclick = function() {
    txt.innerHTML = "";
    btn.style.display = "none";
    btn1.innerHTML = "Hesaba daxil ol"
    btn1.onclick = function() {
        window.location.href = '/final/sign up/index.html'
    }
    btn1.classList.remove('button')
    btn1.classList.add('btn2')
}