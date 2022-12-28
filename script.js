"use strict";
const submitButton = document.querySelector(".submit-button");
const continueButton = document.querySelector(".continue-button");
const formContainer = document.querySelector(".form-container");
const submittedContainer = document.querySelector(".submitted-container");

const cardNamePic = document.querySelector(".cardName");
const cardNumberPic = document.querySelector(".cardNum");
const monthExpPic = document.querySelector(".monthExp");
const yearExpPic = document.querySelector(".yearExp");
const cvcPic = document.querySelector(".cardCvc");

const cardHolderNameEl = document.getElementById("cname");
const cardNumberEl = document.getElementById("cnumber");
const cardMonthExp = document.getElementById("month");
const cardYearExp = document.getElementById("year");
const cardCvcEl = document.getElementById("cvc");

const cardNameError = document.querySelector(".card-name-error");
const cardNumberError = document.querySelector(".card-number-error");
const cardMonthError = document.querySelector(".card-month-error");
const cardYearError = document.querySelector(".card-year-error");
const cardCvcError = document.querySelector(".card-cvc-error");

cardHolderNameEl.addEventListener("keyup", (e) => {
  let cardNameValue = cardHolderNameEl.value;
  let key = e.key;
  let keyLetters = key.match(/^[A-za-z ]*$/);

  if (cardNameValue.length === 0) {
    cardNameError.innerHTML = "Please Enter Your Name!";
  } else if (keyLetters) {
    cardNamePic.innerHTML = cardNameValue;
  } else if (key === "Backspace") {
    cardHolderNameEl.setAttribute("disabled", "");
  } else {
    cardHolderNameEl.setAttribute("enabled", "");
    cardNameError.innerHTML = "Please only Use letters!";
  }
});

cardNumberEl.addEventListener("keyup", (e) => {
  let cardNumberValue = cardNumberEl.value;
  let key = e.key;
  let keyNumbers = key.match(/^[0-9 ]*$/);

  if (cardNumberValue.length === 0) {
    cardNumberError.innerHTML = "Please Enter Your CC Number";
  } else if (keyNumbers) {
    cardNumberPic.innerHTML = cardNumberValue;
  } else if (key === "Backspace") {
    cardNumberEl.setAttribute("enabled", "");
  } else {
    cardNumberEl.setAttribute("disabled", "");
    cardNumberError.innerHTML = "Please use only Numbers!";
  }
});
cardNumberEl.addEventListener("input", (e) => {
  e.target.value = e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});

cardMonthExp.addEventListener("keyup", (e) => {
  let value = e.target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);

  if (value === "") {
    cardMonthError.innerHTML = "Please enter exp month";
  } else if (valueNumbers) {
    monthExpPic.innerHTML = value;
  } else {
    cardMonthError.innerHTML = "Please enter Numbers only!";
  }
});

cardYearExp.addEventListener("keyup", (e) => {
  let value = e.target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);

  if (value === "") {
    cardYearError.innerHTML = "Please Enter exp Year";
  } else if (valueNumbers) {
    yearExpPic.innerHTML = value;
  } else {
    cardYearError.innerHTML = "Please Enter Numbers only";
  }
});

cardCvcEl.addEventListener("keyup", (e) => {
  let value = e.target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);

  if (value === "") {
    cardCvcError.innerHTML = "Please enter cvc Num";
  } else if (valueNumbers) {
    cvcPic.innerHTML = value;
  } else {
    cardCvcError.innerHTML = "Please enter Numbers only!";
  }
});

submitButton.addEventListener("click", () => {
  if (cardHolderNameEl.value.length <= 0) {
    cardNameError.innerHTML = "Please enter your name!";
  } else if (cardNumberEl.value.length <= 0) {
    cardNumberError.innerHTML = "Please enter your card number!";
  } else if (cardMonthExp.value.length <= 0) {
    cardMonthError.innerHTML = "Please enter month!";
  } else if (cardYearExp.value.length <= 0) {
    cardYearError.innerHTML = "Please enter year!";
  } else if (cardCvcEl.value.length <= 0) {
    cardCvcError.innerHTML = "Please enter your cvc!";
  } else {
    formContainer.classList.add("hidden");
    submittedContainer.classList.remove("hidden");
  }
});

continueButton.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
  submittedContainer.classList.add("hidden");
});
