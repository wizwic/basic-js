const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // 로긴폼의 밸류값이 인자
    paintGreeting(username);
}


//유저네임 매개변수는 호출된 위치에 따라서 인자값을 다른곳에서 가져올거임
function paintGreeting(username) {
    greeting.innerText = `Welcome ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    // 처음에는 다 안보이게 시작, 저장된 값이 없다면 form 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    // 로컬스토리지에 저장된 값이 인자 
    paintGreeting(savedUsername);
}