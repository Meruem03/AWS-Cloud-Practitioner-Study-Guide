document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the quiz page by looking for a specific element
    if (!document.getElementById('quiz-app')) {
        return;
    }

    const topicGrid = document.getElementById('topic-grid');
    const startRandomQuizBtn = document.getElementById('start-random-quiz');

    const selectionScreen = document.getElementById('selection-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');

    const quizTopicTitle = document.getElementById('quiz-topic-title');
    const questionContainer = document.getElementById('question-container');
    const progressBar = document.getElementById('quiz-progress-bar').firstElementChild;
    const feedbackEl = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-question-btn');
    const finishBtn = document.getElementById('finish-quiz-btn');

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    
    // --- 1. Populate Selection Screen ---
    function populateTopics() {
        if (!topicGrid) return;
        const topicNames = {
            domain1: "Domain 1: Cloud Concepts",
            domain2: "Domain 2: Security & Compliance",
            iam: "IAM & Identity Center",
            compute: "Compute",
            storage: "Storage",
            databases: "Databases & Analytics",
            networking: "Networking",
        };

        for (const topicKey in topicNames) {
            if (quizzes[topicKey]) {
                const card = document.createElement('div');
                card.className = 'topic-card';
                card.dataset.topic = topicKey;
                card.innerHTML = `
                    <h3>${topicNames[topicKey]}</h3>
                    <p>${quizzes[topicKey].length} questions</p>
                `;
                card.addEventListener('click', () => startQuiz(topicKey, topicNames[topicKey]));
                topicGrid.appendChild(card);
            }
        }
    }

    // --- 2. Start Quiz ---
    function startQuiz(topicKey, topicTitle) {
        currentQuestionIndex = 0;
        userAnswers = [];
        
        if (topicKey === 'random') {
            const allQuestions = Object.values(quizzes).flat();
            currentQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10); // Limit random quiz to 10
            quizTopicTitle.textContent = 'Random 10-Question Quiz';
        } else {
            currentQuestions = [...quizzes[topicKey]].sort(() => 0.5 - Math.random());
            quizTopicTitle.textContent = topicTitle;
        }

        selectionScreen.classList.add('hidden');
        resultsScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');

        renderQuestion();
    }

    // --- 3. Render a Question ---
    function renderQuestion() {
        feedbackEl.textContent = '';
        nextBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
        
        const question = currentQuestions[currentQuestionIndex];
        
        const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;

        let optionsHTML = '<div class="answer-options">';
        question.choices.forEach((choice, index) => {
            optionsHTML += `<button data-index="${index}">${choice}</button>`;
        });
        optionsHTML += '</div>';

        questionContainer.innerHTML = `
            <p id="question-text">${currentQuestionIndex + 1}. ${question.q}</p>
            ${optionsHTML}
        `;
        
        const answerButtons = questionContainer.querySelectorAll('.answer-options button');
        answerButtons.forEach(button => {
            button.addEventListener('click', handleAnswerSelection);
        });
    }

    // --- 4. Handle User Selection ---
    function handleAnswerSelection(event) {
        const selectedButton = event.target;
        const answerIndex = parseInt(selectedButton.dataset.index);
        const question = currentQuestions[currentQuestionIndex];
        const isCorrect = answerIndex === question.answer;

        userAnswers[currentQuestionIndex] = {
            question: question.q,
            choices: question.choices,
            selected: answerIndex,
            correctAnswer: question.answer,
            isCorrect: isCorrect,
            explanation: question.explain
        };

        const answerButtons = questionContainer.querySelectorAll('.answer-options button');
        answerButtons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.answer) {
                btn.classList.add('correct');
            } else if (index === answerIndex) {
                btn.classList.add('incorrect');
            }
        });

        feedbackEl.textContent = isCorrect ? 'Correct!' : 'Incorrect.';
        feedbackEl.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
        
        if (currentQuestionIndex === currentQuestions.length - 1) {
            nextBtn.classList.add('hidden');
            finishBtn.classList.remove('hidden');
        }
    }

    // --- 5. Move to Next Question or Finish ---
    nextBtn.addEventListener('click', () => {
        if (userAnswers[currentQuestionIndex] === undefined) {
            feedbackEl.textContent = 'Please select an answer.';
            feedbackEl.className = 'feedback incorrect';
            return;
        }
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        }
    });

    finishBtn.addEventListener('click', showResults);

    // --- 6. Show Results ---
    function showResults() {
        const correctAnswers = userAnswers.filter(a => a.isCorrect).length;
        const totalQuestions = currentQuestions.length;
        const score = (correctAnswers / totalQuestions) * 100;
        
        let resultsHTML = `
            <h2>Quiz Complete!</h2>
            <p style="font-size: 1.5rem;">Your Score: <span style="color: ${score >= 70 ? '#10b981' : 'var(--aws-orange)'};">${score.toFixed(0)}%</span></p>
            <p>(${correctAnswers} out of ${totalQuestions} correct)</p>
            <hr style="border-color: var(--aws-hover-blue); margin: 20px 0;">
            <h3>Review Your Answers:</h3>
        `;
        
        userAnswers.forEach((answer, index) => {
            const selectedText = answer.choices[answer.selected];
            const correctText = answer.choices[answer.correctAnswer];
            resultsHTML += `
                <div style="text-align: left; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid var(--aws-hover-blue);">
                    <p><strong>${index + 1}. ${answer.question}</strong></p>
                    <p style="color: ${answer.isCorrect ? '#10b981' : '#ef4444'};">
                        Your answer: ${selectedText} ${answer.isCorrect ? '✔' : '❌'}
                    </p>
                    ${!answer.isCorrect ? `<p style="color: #10b981;">Correct answer: ${correctText}</p>` : ''}
                    <p style="font-size: 0.9em; color: var(--aws-text-light);"><em>Explanation: ${answer.explanation}</em></p>
                </div>
            `;
        });

        resultsHTML += `<button class="btn" id="restart-quiz-btn" style="margin-top: 20px;">Back to Topics</button>`;
        resultsScreen.innerHTML = resultsHTML;

        quizScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');

        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
            resultsScreen.classList.add('hidden');
            selectionScreen.classList.remove('hidden');
        });
    }

    // --- Initial Setup ---
    populateTopics();
    if (startRandomQuizBtn) {
        startRandomQuizBtn.addEventListener('click', () => startQuiz('random'));
    }
});
