const firstName = document.querySelector(".header__first-second-name");
const userImg = document.querySelector(".header__user-img");
const description = document.querySelector(".footer__description");
const answer = document.querySelector(".footer__answer");

const emailBtn = document.querySelector(".button-email");
const loginBtn = document.querySelector(".button-login");
const passwordBtn = document.querySelector(".button-password");
const phoneBtn = document.querySelector(".button-phone");
const bdayBtn = document.querySelector(".button-birthday-date");
const ageBtn = document.querySelector(".button-age");
const streetBtn = document.querySelector(".button-street");
const cityBtn = document.querySelector(".button-city");

const randomButton = document.querySelector(".footer__random-button");

let currentUser;

emailBtn.addEventListener("click", () => {
  description.textContent = "My email is :";
  answer.textContent = currentUser.email;
});
loginBtn.addEventListener("click", () => {
  description.textContent = "My username is :";
  answer.textContent = currentUser.username;
});
passwordBtn.addEventListener("click", () => {
  description.textContent = "My password is :";
  answer.textContent = currentUser.password;
});
phoneBtn.addEventListener("click", () => {
  description.textContent = "My phone number is :";
  answer.textContent = currentUser.phoneNumber;
});
bdayBtn.addEventListener("click", () => {
  description.textContent = "My birthday is :";
  answer.textContent = dateConverter(currentUser.date);
});
ageBtn.addEventListener("click", () => {
  description.textContent = "My age is :";
  answer.textContent = currentUser.age;
});
streetBtn.addEventListener("click", () => {
  description.textContent = "My street is :";
  answer.textContent = currentUser.street;
});
cityBtn.addEventListener("click", () => {
  description.textContent = "My city is :";
  answer.textContent = currentUser.city;
});
randomButton.addEventListener("click", showUser);
function test() {
  console.log("test");
}

async function getUser() {
  const response = await fetch(`https://randomuser.me/api/`);
  const json = await response.json();
  const newObj = {
    firstName: json.results[0].name.first,
    lastName: json.results[0].name.last,
    street: json.results[0].location.street.name,
    city: json.results[0].location.city,
    email: json.results[0].email,
    username: json.results[0].login.username,
    password: json.results[0].login.password,
    date: json.results[0].dob.date,
    age: json.results[0].dob.age,
    phoneNumber: json.results[0].phone,
    logoUrl: json.results[0].picture.large,
  };
  return newObj;
}

async function showUser() {
  currentUser = await getUser();
  firstName.textContent = currentUser.firstName + " " + currentUser.lastName;
  userImg.src = currentUser.logoUrl;
  answer.textContent = currentUser.email;
}

function dateConverter(str) {
  date = new Date(str);
  year = date.getFullYear();
  month = date.getMonth() + 1;
  dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return year + "-" + month + "-" + dt;
}

window.addEventListener("DOMContentLoaded", showUser);
