function calculateAverage(grades, courses) {
  let weightedSum = 0;
  let totalCoef = 0;

  for (let i = 0; i < courses.length; i++) {
    weightedSum += grades[i] * courses[i].coef;
    totalCoef += courses[i].coef;
  }

  return (weightedSum / totalCoef).toFixed(2);
}
