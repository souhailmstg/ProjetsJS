const quizData = [
  {
    question: "Quelle planète est la plus proche du Soleil ?",
    options: ["Venus", "Terre", "Mercure", "Mars"],
    answer: "Mercure"
  },
  {
    question: "Combien y a-t-il de dents dans une dentition adulte complète ?",
    options: ["28", "30", "32", "34"],
    answer: "32"
  },
  {
    question: "Quelle est la plus grande mer fermée du monde ?",
    options: ["Mer Morte", "Mer Noire", "Mer Caspienne", "Mer Baltique"],
    answer: "Mer Caspienne"
  }
];

const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');

function loadQuiz() {
  quizContainer.innerHTML = '';
  quizData.forEach((q, index) => {
    const div = document.createElement('div');
    div.classList.add('question-block');
    div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
    q.options.forEach(option => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="radio" name="question${index}" value="${option}"> ${option}
      `;
      div.appendChild(label);
    });
    quizContainer.appendChild(div);
  });
}

function checkAnswers() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  result.className = '';
  if (score === quizData.length) {
    result.classList.add('result-good');
  } else {
    result.classList.add('result-bad');
  }

  result.textContent = `🎯 Score : ${score} / ${quizData.length}`;
}

submitBtn.addEventListener('click', checkAnswers);
loadQuiz();
