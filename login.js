const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const slider = document.querySelector(".slider");
const formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
  slider.classList.add("moveslider");
  formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
  slider.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});

const loginSubmit = (event) => {
  event.preventDefault();
  const email = document.forms["loginForm"]["email"].value;
  const password = document.forms["loginForm"]["password"].value;
  const user = JSON.parse(localStorage.getItem("userData") || {});

  if (user.email !== email) {
    alert("Please enter valid email address");
  }
  if (user.password !== password) {
    alert("Please enter valid password");
  }
  if (user.email === email && user.password === password) {
    window.location.href = "http://127.0.0.1:5500/index.html";
    event.target.reset();
  }
};

const signUpSubmit = (event) => {
  event.preventDefault();
  const name = document.forms["signupForm"]["name"].value;
  const email = document.forms["signupForm"]["email"].value;
  const password = document.forms["signupForm"]["password"].value;
  const confirmPassword = document.forms["signupForm"]["confirmPassword"].value;

  const userDataObject = {
    name,
    email,
    password,
  };
  localStorage.setItem("userData", JSON.stringify(userDataObject));

  if (password != confirmPassword) {
    alert("password & confirm password do not match");
    return false;
  }

  const user = JSON.parse(localStorage.getItem("userData"));
  if (user.email === email && user.password === password) {
    window.location.href = "http://127.0.0.1:5500/index.html";
    event.target.reset();
  }
};
