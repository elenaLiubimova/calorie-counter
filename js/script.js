let submitButton = document.querySelector('.form__submit-button');
let counterForm = document.querySelector('.counter__form');
let age = document.getElementById('age');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let ageValue;
let heightValue = height.value;
let weightValue = weight.value;

age.addEventListener('input', function() {
  ageValue = age.value;
  console.log(ageValue);
  return ageValue;
});

console.log(ageValue);

height.addEventListener('input', function() {
  console.log(height.value)
});

weight.addEventListener('input', function() {
  console.log(weight.value)
});



