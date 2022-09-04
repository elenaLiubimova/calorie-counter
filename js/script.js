let submitButton = document.querySelector('.form__submit-button');
let resetButton = document.querySelector('.form__reset-button');
let age = document.getElementById('age');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let ageValue = age.value;
let heightValue = height.value;
let weightValue = weight.value;
let counterResult = document.querySelector('.counter__result');
let counterForm = document.querySelector('.counter__form');
let weightNorm;
let weightMinimal;
let weightMaximal;
let actitvityCoefficient;
let caloriesNorm = document.getElementById('calories-norm');
let caloriesMinimal = document.getElementById('calories-minimal');
let caloriesMaximal = document.getElementById('calories-maximal');
let caloriesMinCoefficient = 1.15;
let caloriesMaxCoefficient = 0.85;

function checkCalculationButton() {
  age.value && height.value && weight.value ? submitButton.disabled = false : submitButton.disabled = true;
}

age.addEventListener('keyup', checkCalculationButton);
height.addEventListener('keyup', checkCalculationButton);
weight.addEventListener('keyup', checkCalculationButton);

function checkResetButton() {
  age.value || height.value || weight.value ? resetButton.disabled = false : resetButton.disabled = true;
}

age.addEventListener('keyup', checkResetButton);
height.addEventListener('keyup', checkResetButton);
weight.addEventListener('keyup', checkResetButton);

function counterFormHandler(evt) {
  evt.preventDefault();
  counterResult.classList.remove('counter__result--hidden');

  if (counterForm.elements.activity.value === 'min') {
    actitvityCoefficient = 1.2;
  } else if (counterForm.elements.activity.value === 'low') {
    actitvityCoefficient = 1.375;
  } else if (counterForm.elements.activity.value === 'medium') {
    actitvityCoefficient = 1.55;
  } else if (counterForm.elements.activity.value === 'high') {
    actitvityCoefficient = 1.725;
  } else if (counterForm.elements.activity.value === 'max') {
    actitvityCoefficient = 1.9;
  }

  if (counterForm.elements.gender.value === 'female') {
    weightNorm = actitvityCoefficient * ((10 * weight.value) + (6,25 * height.value) - (5 * age.value) - 161);
  } else {
    weightNorm = actitvityCoefficient * ((10 * weight.value) + (6,25 * height.value) - (5 * age.value) + 5);
  }

  caloriesNorm.textContent = Math.round(weightNorm);
  caloriesMinimal.textContent = Math.round(weightNorm * caloriesMinCoefficient);
  caloriesMaximal.textContent = Math.round(weightNorm * caloriesMaxCoefficient);
}

function counterFormReset() {
  counterResult.classList.add('counter__result--hidden');
  resetButton.disabled = true;
  submitButton.disabled = true;
}

counterForm.addEventListener('submit', counterFormHandler);
counterForm.addEventListener('reset', counterFormReset);
