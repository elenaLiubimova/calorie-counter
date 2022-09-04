let submitButton = document.querySelector('.form__submit-button');
let counterForm = document.querySelector('.counter__form');
let age = document.getElementById('age');
console.log(age);
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let ageValue = age.value;
let heightValue = height.value;
let weightValue = weight.value;

age.addEventListener('keyup', function() {
  age.value && height.value && weight.value ? submitButton.disabled = false : submitButton.disabled = true;
});

height.addEventListener('keyup', function() {
  age.value && height.value && weight.value ? submitButton.disabled = false : submitButton.disabled = true;
});

weight.addEventListener('keyup', function() {
  age.value && height.value && weight.value ? submitButton.disabled = false : submitButton.disabled = true;
});