const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height  `;
  } else if (weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //  show the result
    result.innerHTML = `<span> Your bmi is ${bmi}</span>`;
  }
});
