const questions = [
	{
		question: 'What is the capital of France?',
		answers: ['Paris', 'London', 'Rome', 'Madrid'],
		correctAnswer: 0,
        points:1
	},
	{
		question: 'What is the capital of England?',
		answers: ['Paris', 'London', 'Rome', 'Madrid'],
		correctAnswer: 1,
        points:1
       
	},
    {
		question: 'What is the capital of japan?',
		answers: ['Paris', 'beijing', 'tokyo', 'Madrid'],
		correctAnswer: 2,
        points:1
        
	},
	{
		question: 'What is the capital of india?',
		answers: ['Paris', 'mumbai', 'delhi', 'Madrid'],
		correctAnswer: 2,
        points:1
       
	},
    {
		question: 'What is the capital of turkey?',
		answers: ['Paris', 'Ankara', 'Istanbul', 'Madrid'],
		correctAnswer: 1,
        points:1
       
	},
	{
		question: 'What is the capital of pakistan?',
		answers: ['Paris', 'London', 'islamabad', 'Madrid'],
		correctAnswer: 2,
        points:1
       
	},
// More questions...
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.querySelector('.question');
const answersEls = document.querySelectorAll('.answer');
const scoreEl = document.querySelector('.score');

function showQuestion() {
	const question = questions[currentQuestion];
	questionEl.textContent = question.question;
	answersEls.forEach((answerEl, index) => {
		answerEl.textContent = question.answers[index];
		answerEl.value = index;
	});
	scoreEl.textContent = score;
}

answersEls.forEach(answerEl => {
	answerEl.addEventListener('click', e => {
		const answer = e.target.value;
		if (answer == questions[currentQuestion].correctAnswer) {
			score += questions[currentQuestion].points;
		}
		currentQuestion++;
		if (currentQuestion < questions.length) {
			showQuestion();
		} else {
			alert('Quiz complete!');
		}
	});
});
showQuestion();
