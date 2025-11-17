function checkSymptom() {
  const input = document.getElementById('symptomInput').value.toLowerCase();
  const result = document.getElementById('symptomResult');

  const seriousSymptoms = ['dizziness', 'shortness of breath', 'chest pain', 'extreme fatigue'];
  const mildSymptoms = ['pale skin', 'cold hands', 'headache', 'weakness'];

  if (seriousSymptoms.includes(input)) {
    result.innerText = "This symptom may be serious. Please consult a doctor.";
    result.style.color = "red";
  } else if (mildSymptoms.includes(input)) {
    result.innerText = "This symptom may be mild. Monitor it and consider a checkup.";
    result.style.color = "orange";
  } else {
    result.innerText = "Symptom not recognized. Please consult a healthcare provider.";
    result.style.color = "gray";
  }
}