const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();//preventDefault가 하는 일: 어떤 event의 기본 행동이든지 발생되지 않도록 막는것
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value
    localStorage.setItem("USERNAME_KEY", username)
        //greeting.innerText = `Hello ${username}`; // =  "Hello " + username;
        //greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreeetings(username);
}


function paintGreeetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeetings(savedUsername)
}
  