function calculateBMI() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  if (height && weight) {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obese';
    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi} (${category})`;
  } else {
    document.getElementById('bmi-result').innerText = 'Please enter valid height and weight.';
  }
}