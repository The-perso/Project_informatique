// Variable definitions
let userName = "";
let userAge = "";
let userSchool = "";
let userScore = 0;
let questions = [];
let currentQuestionIndex = 0;
let timerInterval;
let wrongAnswers = [];
// Transition from welcome screen to main menu
document.getElementById('user-info-form').onsubmit = function(event) {
    event.preventDefault();
    userName = document.getElementById('name').value;
    userAge = document.getElementById('age').value;
    userSchool = document.getElementById('school').value;
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
    showSection('home');
};
// Display sections
function showSection(sectionId) {
    const content = document.getElementById('content');
    const developersSection = document.getElementById('developers-section');
    let htmlContent = '';
    switch (sectionId) {
        case 'home':
            htmlContent = '<p>Welcome to the home page.</p>';
            developersSection.style.display = 'block';
            break;
        case 'training':
            htmlContent = `
                <h2>Training Space</h2>
                <button onclick="showTopic('air')">Air Pollution</button>
                <button onclick="showTopic('environment')">Environmental Pollution</button>
                <button onclick="showTopic('water')">Water and Ocean Pollution</button>
                <button onclick="showTopic('warming')">Global Warming</button>
                <button onclick="showTopic('solid-waste')">Solid Waste Management</button>
                <button onclick="showTopic('renewable-energy')">Renewable Energy</button>
                <button onclick="showTopic('biodiversity')">Biodiversity</button>
            `;
            developersSection.style.display = 'none';
            break;
        case 'about':
            htmlContent = `
                <h2>About the Quiz</h2>
                <p>The program definition is a game consisting of multiple questions, each with four options.</p>
                <p>Participation conditions: Having a phone or computer and accessing the dedicated website for the Environmental Club of the institution.</p>
                <p>Program objective: Enable all students to successfully complete the Allal Bin Abdullah Environmental Quiz and encourage students to use modern technology for educational and environmental purposes.</p>
            `;
            developersSection.style.display = 'none';
            break;
        case 'participate':
            htmlContent = `
                <h2>Participate in the Quiz</h2>
                <button onclick="startQuiz('air')">Air Pollution</button>
                <button onclick="startQuiz('environment')">Environmental Pollution</button>
                <button onclick="startQuiz('water')">Water and Ocean Pollution</button>
                <button onclick="startQuiz('warming')">Global Warming</button>
                <button onclick="startQuiz('solid-waste')">Solid Waste Management</button>
                <button onclick="startQuiz('renewable-energy')">Renewable Energy</button>
                <button onclick="startQuiz('biodiversity')">Biodiversity</button>
            `;
            developersSection.style.display = 'none';
            break;
            // Add awareness messages section
            const awarenessMessages = `
    <div id="awareness-messages" class="awareness-section">
        <h3 class="awareness-title">Awareness Messages</h3>
        <p class="awareness-message">"The environment is our shared heritage; let's preserve it for future generations."</p>
        <p class="awareness-message">"Every drop of water wasted today may be precious tomorrow."</p>
        <p class="awareness-message">"Planting one tree can make a big difference."</p>
        <p class="awareness-message">"Pollution is everyone's problem, and the solution starts with you."</p>
        <p class="awareness-message">"Nature doesn't need us, but we need nature."</p>
    </div>
`;
            // Modify the showSection function to display awareness messages only on the home page
            function showSection(sectionId) {
                const content = document.getElementById('content');
                const developersSection = document.getElementById('developers-section');
                let htmlContent = '';

                switch (sectionId) {
                    case 'home':
                        htmlContent = '<p>Welcome to the home page.</p>';
                        // Add awareness messages only on the home page
                        htmlContent += awarenessMessages;
                        developersSection.style.display = 'block';
                        break;
                    case 'training':
                        htmlContent = `
                <h2>Training Space</h2>
                <button onclick="showTopic('air')">Air Pollution</button>
                <button onclick="showTopic('environment')">Environmental Pollution</button>
                <button onclick="showTopic('water')">Water and Ocean Pollution</button>
                <button onclick="showTopic('warming')">Global Warming</button>
                <button onclick="showTopic('solid-waste')">Solid Waste Management</button>
                <button onclick="showTopic('renewable-energy')">Renewable Energy</button>
                <button onclick="showTopic('biodiversity')">Biodiversity</button>
            `;
                        developersSection.style.display = 'none';
                        break;
                    case 'about':
                        htmlContent = `
                <h2>About the Quiz</h2>
                <p>The program definition is a game consisting of multiple questions, each with four options.</p>
                <p>Participation conditions: Having a phone or computer and accessing the dedicated website for the Environmental Club of the institution.</p>
                <p>Program objective: Enable all students to successfully complete the Allal Bin Abdullah Environmental Quiz and encourage students to use modern technology for educational and environmental purposes.</p>
            `;
                        developersSection.style.display = 'none';
                        break;
                    case 'participate':
                        htmlContent = `
                <h2>Participate in the Quiz</h2>
                <button onclick="startQuiz('air')">Air Pollution</button>
                <button onclick="startQuiz('environment')">Environmental Pollution</button>
                <button onclick="startQuiz('water')">Water and Ocean Pollution</button>
                <button onclick="startQuiz('warming')">Global Warming</button>
                <button onclick="startQuiz('solid-waste')">Solid Waste Management</button>
                <button onclick="startQuiz('renewable-energy')">Renewable Energy</button>
                <button onclick="startQuiz('biodiversity')">Biodiversity</button>
            `;
                        developersSection.style.display = 'none';
                        break;
                }
                content.innerHTML = htmlContent;
            }
    }
    content.innerHTML = htmlContent;
}
// Display topic information
function showTopic(topic) {
    const content = document.getElementById('content');
    let info = '';
    switch (topic) {
        case 'air':
            info = `
                <h3>Air Pollution</h3>
                <p>Air pollution occurs due to harmful gas emissions from cars and factories. These gases include carbon dioxide and nitrogen oxides, which cause serious diseases like asthma and allergies.</p>
                <p>Air pollution can be reduced by:</p>
                <ul>
                    <li>Planting more trees.</li>
                    <li>Using renewable energy.</li>
                    <li>Improving engine efficiency.</li>
                </ul>
            `;
            break;
        case 'environment':
            info = `
                <h3>Environmental Pollution</h3>
                <p>Environmental pollution includes air, water, and soil pollution. This pollution is caused by human activities such as industry and improper waste disposal.</p>
                <p>Ways to reduce environmental pollution:</p>
                <ul>
                    <li>Recycling.</li>
                    <li>Reducing plastic use.</li>
                    <li>Adopting clean energy.</li>
                </ul>
            `;
            break;
        case 'water':
            info = `
                <h3>Water and Ocean Pollution</h3>
                <p>This occurs due to the dumping of chemical and oil waste into water bodies. It leads to the destruction of marine habitats and the spread of diseases.</p>
                <p>Solutions for water pollution:</p>
                <ul>
                    <li>Treating water before discharge.</li>
                    <li>Safe disposal of industrial waste.</li>
                    <li>Cleaning beaches and oceans.</li>
                </ul>
            `;
            break;
        case 'warming':
            info = `
                <h3>Global Warming</h3>
                <p>The increase in Earth's temperature due to greenhouse gases like carbon dioxide and methane. This leads to polar ice melting and rising sea levels.</p>
                <p>Solutions to combat global warming:</p>
                <ul>
                    <li>Using renewable energy.</li>
                    <li>Increasing green cover.</li>
                    <li>Reducing carbon emissions.</li>
                </ul>
            `;
            break;
        case 'solid-waste':
            info = `
                <h3>Solid Waste Management</h3>
                <p>Solid waste is one of the biggest environmental challenges. It includes household, industrial, and medical waste. If not disposed of properly, this waste can cause significant environmental pollution.</p>
                <p>Methods for solid waste management:</p>
                <ul>
                    <li>Recycling.</li>
                    <li>Converting waste to energy.</li>
                    <li>Safe disposal in sanitary landfills.</li>
                </ul>
            `;
            break;
        case 'renewable-energy':
            info = `
                <h3>Renewable Energy</h3>
                <p>Renewable energy is a sustainable energy source that comes from natural sources like the sun, wind, and water. This energy helps reduce reliance on fossil fuels and decreases carbon emissions.</p>
                <p>Types of renewable energy:</p>
                <ul>
                    <li>Solar energy.</li>
                    <li>Wind energy.</li>
                    <li>Hydropower.</li>
                </ul>
            `;
            break;
        case 'biodiversity':
            info = `
                <h3>Biodiversity</h3>
                <p>Biodiversity refers to the diversity of life on Earth, including plants, animals, and ecosystems. Biodiversity plays a vital role in maintaining ecological balance.</p>
                <p>Causes of biodiversity loss:</p>
                <ul>
                    <li>Destruction of natural habitats.</li>
                    <li>Environmental pollution.</li>
                    <li>Climate change.</li>
                </ul>
            `;
            break;
    }
    content.innerHTML = `${info}<button onclick="showSection('training')">Back to Training Space</button>`;
}
// Start the quiz
function startQuiz(topic) {
    questions = getQuestions(topic);
    currentQuestionIndex = 0;
    userScore = 0;
    wrongAnswers = [];
    displayQuestion();
}

// Display the question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const content = document.getElementById('content');
    const shuffledOptions = shuffleArray([...question.options]);
    const correctAnswerIndex = shuffledOptions.indexOf(question.options[question.correctAnswer]);
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    content.innerHTML = `
        <h3>${question.question}</h3>
        ${shuffledOptions.map((option, index) => `
            <button onclick="checkAnswer(${index}, ${correctAnswerIndex})">${option}</button>
        `).join('')}
        <p>Time remaining: <span id="timer">20</span> seconds</p>
    `;
    let timeLeft = 20;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1, correctAnswerIndex); // Answer expired due to time running out
        }
    }, 1000);
}

// Check the answer
function checkAnswer(selectedIndex, correctAnswerIndex) {
    const content = document.getElementById('content');
    const question = questions[currentQuestionIndex];
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    if (selectedIndex === correctAnswerIndex) {
        userScore++;
        content.innerHTML += `<p style="color: green;">Correct answer!</p>`;
    } else {
        content.innerHTML += `
            <p style="color: red;">Incorrect answer!</p>
            <p>The correct answer is: <strong>${question.options[question.correctAnswer]}</strong></p>
            <button onclick="showTopicForRelearning('${question.topic}')">Review the topic</button>
        `;
        wrongAnswers.push({
            question: question.question,
            userAnswer: selectedIndex !== -1 ? question.options[selectedIndex] : "No answer",
            correctAnswer: question.options[question.correctAnswer],
            info: question.info
        });
    }
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endQuiz(userScore);
        }
    }, 2000);
}

// End the quiz
function endQuiz(score) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h3>The quiz has ended!</h3>
        <p>Your score: ${score} out of ${questions.length}</p>
        <button onclick="downloadCertificate()">Download Certificate (PDF)</button>
        <button onclick="showWrongAnswers()">Show Incorrect Answers</button>
        <button onclick="showSection('home')">Back to Home Page</button>
    `;
}

// Download certificate as a PDF file
function downloadCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(`Certificate of Appreciation`, 80, 20);
    doc.setFontSize(14);
    doc.text(`Special congratulations to the student: ${userName}`, 20, 40);
    doc.text(`For successfully completing the quiz.`, 20, 50);
    doc.text(`Number of points: ${userScore} out of ${questions.length}`, 20, 60);
    doc.save(`${userName}-certificate.pdf`);
}

// Show incorrect answers
function showWrongAnswers() {
    const content = document.getElementById('content');
    let htmlContent = '<h3>Incorrect Answers:</h3>';
    wrongAnswers.forEach((answer, index) => {
        htmlContent += `
            <p><strong>Question:</strong> ${answer.question}</p>
            <p><strong>Your Answer:</strong> ${answer.userAnswer}</p>
            <p><strong>Correct Answer:</strong> ${answer.correctAnswer}</p>
            <p><strong>Additional Information:</strong> ${answer.info}</p>
            <hr>
        `;
    });
    content.innerHTML = htmlContent;
}

// Shuffle array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// The new questions and answers (10 questions per topic)
function getQuestions(topic) {
    const questions = {
        air: [
            {
                question: "What is the main source of air pollution?",
                options: ["Burning fossil fuels", "Planting trees", "Natural winds", "Rain"],
                correctAnswer: 0,
                topic: 'air',
                info: "Burning fossil fuels releases harmful gases like carbon dioxide."
            },
            {
                question: "Which gases cause air pollution?",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                correctAnswer: 1,
                topic: 'air',
                info: "Carbon dioxide contributes to global warming."
            },
            {
                question: "What are the health effects of air pollution?",
                options: ["Respiratory diseases", "Improved health", "Increased energy", "Improved vision"],
                correctAnswer: 0,
                topic: 'air',
                info: "Air pollution causes diseases like asthma and allergies."
            },
            {
                question: "What is the role of trees in reducing air pollution?",
                options: ["Producing oxygen", "Releasing carbon dioxide", "Attracting dust", "Increasing humidity"],
                correctAnswer: 0,
                topic: 'air',
                info: "Trees absorb carbon dioxide and release oxygen."
            },
            {
                question: "Which country pollutes the air the most?",
                options: ["China", "Canada", "Australia", "Japan"],
                correctAnswer: 0,
                topic: 'air',
                info: "China is one of the biggest air polluters due to its industry."
            },
            {
                question: "What is the impact of air pollution on agricultural crops?",
                options: ["Increased production", "Crop damage", "Improved soil quality", "Increased rainfall"],
                correctAnswer: 1,
                topic: 'air',
                info: "Air pollution destroys crops due to toxic substances."
            },
            {
                question: "Which gases cause global warming?",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                correctAnswer: 1,
                topic: 'air',
                info: "Carbon dioxide is one of the main gases responsible for global warming."
            },
            {
                question: "What are ways to reduce air pollution?",
                options: ["Increasing factories", "Planting trees", "Burning waste", "Using plastic"],
                correctAnswer: 1,
                topic: 'air',
                info: "Planting trees helps absorb carbon dioxide."
            },
            {
                question: "What is the impact of air pollution on climate?",
                options: ["Lower temperatures", "Climate change", "Increased rainfall", "Improved air quality"],
                correctAnswer: 1,
                topic: 'air',
                info: "Air pollution leads to climate change due to global warming."
            },
            {
                question: "What is the main role of renewable energy in reducing air pollution?",
                options: ["Increase pollution", "Reduce emissions", "Increase use of fossil fuels", "None of the above"],
                correctAnswer: 1,
                topic: 'air',
                info: "Renewable energy reduces emissions of harmful gases."
            }
        ],
        environment: [
            {
                question: "What is environmental pollution?",
                options: ["Increased plants", "Spread of waste", "Cleaning the environment", "Using renewable energy"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Environmental pollution occurs due to industrial waste and human activities."
            },
            {
                question: "What is the best way to reduce environmental pollution?",
                options: ["Recycling", "Burning waste", "Dumping waste in the sea", "Increasing plastic use"],
                correctAnswer: 0,
                topic: 'environment',
                info: "Recycling reduces waste and improves the environment."
            },
            {
                question: "What is the impact of environmental pollution on marine life?",
                options: ["Increased fish", "Destruction of marine habitats", "Improved water quality", "Increased oxygen"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Environmental pollution destroys marine habitats."
            },
            {
                question: "What is the most common material polluting the environment?",
                options: ["Plastic", "Paper", "Glass", "Metals"],
                correctAnswer: 0,
                topic: 'environment',
                info: "Plastic is one of the most polluting materials for the environment."
            },
            {
                question: "What is the main role of renewable energy in reducing environmental pollution?",
                options: ["Increase pollution", "Reduce emissions", "Increase use of fossil fuels", "None of the above"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Renewable energy reduces carbon emissions."
            },
            {
                question: "What is the impact of environmental pollution on soil?",
                options: ["Increased fertility", "Soil degradation", "Improved soil quality", "Increased rainfall"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Environmental pollution leads to soil degradation due to chemicals."
            },
            {
                question: "What is the best way to dispose of waste?",
                options: ["Recycling", "Dumping waste in the sea", "Burning waste", "Increasing plastic use"],
                correctAnswer: 0,
                topic: 'environment',
                info: "Recycling is the best way to dispose of waste."
            },
            {
                question: "What is the impact of environmental pollution on public health?",
                options: ["Improved health", "Increased diseases", "Increased energy", "Improved vision"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Environmental pollution increases diseases like cancer and respiratory illnesses."
            },
            {
                question: "What is the best way to conserve water?",
                options: ["Neglecting cleanliness", "Reducing chemical use", "Increasing waste dumping", "Burning waste"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Reducing chemical use helps conserve water."
            },
            {
                question: "What is the impact of environmental pollution on the atmosphere?",
                options: ["Improved air quality", "Increased air pollution", "Increased oxygen", "Improved visibility"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Environmental pollution increases air pollution."
            }
        ],
      water: [
    {
        question: "What are the sources of water pollution?",
        options: ["Chemical waste", "Trees", "Air", "Soil"],
        correctAnswer: 0,
        topic: 'water',
        info: "Chemical waste is one of the main sources of water pollution."
    },
    {
        question: "What are the main effects of water pollution on human health?",
        options: ["Spread of diseases", "Improved health", "Increased energy", "Improved water quality"],
        correctAnswer: 0,
        topic: 'water',
        info: "Water pollution causes diseases such as cholera and typhoid."
    },
    {
        question: "What is the main role of oceans in the ecosystem?",
        options: ["Climate regulation", "Air pollution", "Increased waste", "Reduced oxygen"],
        correctAnswer: 0,
        topic: 'water',
        info: "Oceans play a key role in regulating the global climate."
    },
    {
        question: "What is the most polluting material for oceans?",
        options: ["Plastic", "Paper", "Glass", "Metals"],
        correctAnswer: 0,
        topic: 'water',
        info: "Plastic is one of the most polluting materials for oceans."
    },
    {
        question: "What is the best way to reduce water pollution?",
        options: ["Reduce the use of chemicals", "Increase waste disposal", "Burn waste", "Neglect cleanliness"],
        correctAnswer: 0,
        topic: 'water',
        info: "Reducing the use of chemicals helps to reduce water pollution."
    },
    {
        question: "What is the impact of water pollution on marine life?",
        options: ["Increased fish", "Destruction of marine habitats", "Improved water quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'water',
        info: "Water pollution leads to the destruction of marine habitats."
    },
    {
        question: "What is the impact of water pollution on agriculture?",
        options: ["Increased crops", "Crop damage", "Improved soil quality", "Increased rainfall"],
        correctAnswer: 1,
        topic: 'water',
        info: "Water pollution leads to crop damage."
    },
    {
        question: "What is the main role of rivers in the ecosystem?",
        options: ["Providing water", "Air pollution", "Increased waste", "Reduced oxygen"],
        correctAnswer: 0,
        topic: 'water',
        info: "Rivers play a key role in providing water to ecosystems."
    },
    {
        question: "What is the impact of water pollution on seabirds?",
        options: ["Increased bird numbers", "Destruction of bird habitats", "Improved water quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'water',
        info: "Water pollution leads to the destruction of seabird habitats."
    },
    {
        question: "What is the best way to clean up the oceans?",
        options: ["Neglect cleanliness", "Remove plastic waste", "Increase waste dumping", "Burn waste"],
        correctAnswer: 1,
        topic: 'water',
        info: "Removing plastic waste is the best way to clean up the oceans."
    }
],
warming: [
    {
        question: "What is global warming?",
        options: ["Decrease in Earth's temperature", "Increase in Earth's temperature", "Air pollution", "Water pollution"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Global warming is the rise in Earth's temperature due to increased greenhouse gases."
    },
    {
        question: "What are the gases causing global warming?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Carbon dioxide is one of the main gases causing global warming."
    },
    {
        question: "What are the main effects of global warming?",
        options: ["Rise in sea level", "Decrease in temperature", "Increased polar ice", "Improved air quality"],
        correctAnswer: 0,
        topic: 'warming',
        info: "Global warming causes a rise in sea level due to melting ice."
    },
    {
        question: "What is the main role of forests in mitigating global warming?",
        options: ["Absorbing carbon dioxide", "Releasing carbon dioxide", "Air pollution", "Increasing temperature"],
        correctAnswer: 0,
        topic: 'warming',
        info: "Forests absorb carbon dioxide and help mitigate global warming."
    },
    {
        question: "What is the best way to mitigate global warming?",
        options: ["Using renewable energy", "Increasing fossil fuel use", "Deforestation", "Neglecting waste"],
        correctAnswer: 0,
        topic: 'warming',
        info: "Using renewable energy helps reduce greenhouse gas emissions."
    },
    {
        question: "What is the impact of global warming on agriculture?",
        options: ["Increased crops", "Crop damage", "Improved soil quality", "Increased rainfall"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Global warming leads to crop damage due to climate changes."
    },
    {
        question: "What is the impact of global warming on polar ice caps?",
        options: ["Increased ice", "Melting ice", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Global warming leads to the melting of polar ice caps."
    },
    {
        question: "What is the impact of global warming on weather patterns?",
        options: ["Stable weather", "Changes in weather", "Increased rainfall", "Improved weather"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Global warming leads to changes in weather patterns."
    },
    {
        question: "What is the impact of global warming on animal species?",
        options: ["Increased biodiversity", "Extinction of some species", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Global warming leads to the extinction of some animal species."
    },
    {
        question: "What is the best way to reduce greenhouse gas emissions?",
        options: ["Increase industries", "Use renewable energy", "Deforestation", "Neglect waste"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Using renewable energy helps reduce greenhouse gas emissions."
    }
],
      "solid-waste": [
    // The new questions for solid waste management (15 questions)
    {
        question: "What are solid wastes?",
        options: ["Household waste", "Liquid waste", "Harmful gases", "Rain"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Solid waste includes household, industrial, and medical waste."
    },
    {
        question: "What is the best way to manage solid waste?",
        options: ["Recycling", "Throwing waste in the streets", "Burning waste", "Leaving waste to decompose"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Recycling is the best way to manage solid waste."
    },
    {
        question: "What is the impact of solid waste on the environment?",
        options: ["Soil and water pollution", "Improved air quality", "Increased oxygen", "Increased rainfall"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Solid waste causes soil and water pollution if not disposed of properly."
    },
    {
        question: "What is waste-to-energy technology?",
        options: ["Recycling", "Composting", "Converting waste into electricity", "Leaving waste to decompose"],
        correctAnswer: 2,
        topic: 'solid-waste',
        info: "Waste-to-energy technology is used to convert waste into electricity."
    },
    {
        question: "What is the main role of sanitary landfills in waste management?",
        options: ["Safe disposal of waste", "Increased pollution", "Improved air quality", "Increased rainfall"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Sanitary landfills provide a safe method for disposing of solid waste."
    },
    {
        question: "What is the impact of electronic waste on the environment?",
        options: ["Increased pollution", "Improved health", "Increased energy", "Improved visibility"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Electronic waste contains toxic substances that pollute the environment."
    },
    {
        question: "What are the benefits of recycling?",
        options: ["Reduced waste", "Increased pollution", "Increased plastic use", "Increased production of harmful gases"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Recycling reduces the amount of waste and provides raw materials."
    },
    {
        question: "What are hazardous wastes?",
        options: ["Ordinary waste", "Medical waste", "Household waste", "Agricultural waste"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Hazardous waste includes medical and chemical waste that requires safe disposal."
    },
    {
        question: "What is the importance of sorting when disposing of waste?",
        options: ["Increased pollution", "Easier recycling", "Increased waste", "Increased plastic use"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Sorting facilitates the recycling process and reduces waste."
    },
    {
        question: "What is the impact of solid waste on public health?",
        options: ["Increased diseases", "Improved health", "Increased energy", "Improved visibility"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Solid waste causes diseases such as allergies and poisoning."
    },
    {
        question: "What is organic waste?",
        options: ["Household waste", "Food leftovers", "Electronic waste", "Medical waste"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Organic waste includes food leftovers and biodegradable materials."
    },
    {
        question: "What is the role of compost in waste management?",
        options: ["Turning organic waste into compost", "Increased pollution", "Improved air quality", "Increased rainfall"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Compost turns organic waste into natural fertilizer."
    },
    {
        question: "What are non-biodegradable wastes?",
        options: ["Plastic", "Food leftovers", "Paper", "Wood"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Plastic is one of the most prominent non-biodegradable wastes."
    },
    {
        question: "What is the impact of solid waste on wildlife?",
        options: ["Increased biodiversity", "Destruction of habitats", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Solid waste destroys the natural habitats of animals."
    },
    {
        question: "What is the best way to dispose of electronic waste?",
        options: ["Recycling", "Throwing it in the streets", "Burning it", "Leaving it to decompose"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Recycling is the best way to dispose of electronic waste."
    }
],
      "renewable-energy": [
    // The new questions for renewable energy (15 questions)
    {
        question: "What is renewable energy?",
        options: ["Solar energy", "Fossil energy", "Nuclear energy", "Electromagnetic energy"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "Renewable energy comes from natural sources like the sun, wind, and water."
    },
    {
        question: "What is an example of renewable energy?",
        options: ["Coal", "Wind", "Petroleum", "Natural gas"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Wind is a renewable energy source that helps reduce carbon emissions."
    },
    {
        question: "What are the benefits of using solar energy?",
        options: ["Increased pollution", "Reduced carbon emissions", "Increased fossil fuel consumption", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Solar energy reduces carbon emissions and is a clean energy source."
    },
    {
        question: "What is the biggest obstacle to using renewable energy?",
        options: ["High cost", "Excessive abundance", "Ease of use", "None of the above"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "The high cost of building infrastructure is one of the main challenges."
    },
    {
        question: "What is the energy produced by the movement of water?",
        options: ["Solar energy", "Wind energy", "Hydropower", "Thermal energy"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "Hydropower is produced by the movement of water such as dams and rivers."
    },
    {
        question: "What are the benefits of using wind energy?",
        options: ["Increased pollution", "Reduced carbon emissions", "Increased fossil fuel usage", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Wind energy reduces carbon emissions and is a clean energy source."
    },
    {
        question: "What is geothermal energy?",
        options: ["Solar energy", "Energy extracted from the Earth's interior", "Wind energy", "Hydropower"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Geothermal energy comes from the heat inside the Earth."
    },
    {
        question: "What is the main role of renewable energy in reducing pollution?",
        options: ["Increased pollution", "Reduced emissions", "Increased fossil fuel usage", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Renewable energy reduces carbon emissions."
    },
    {
        question: "Which country uses renewable energy the most?",
        options: ["China", "Canada", "Germany", "Japan"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "China is one of the countries that uses renewable energy the most."
    },
    {
        question: "What is the impact of renewable energy on the economy?",
        options: ["Increased unemployment", "Creation of new jobs", "Increased pollution", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Renewable energy creates new jobs in various fields."
    },
    {
        question: "What is tidal energy?",
        options: ["Solar energy", "Wind energy", "Tidal energy", "Thermal energy"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "Tidal energy depends on the movement of tides."
    },
    {
        question: "What is the impact of renewable energy on the environment?",
        options: ["Increased pollution", "Reduced pollution", "Increased fossil fuel usage", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Renewable energy reduces environmental pollution."
    },
    {
        question: "What is biomass energy?",
        options: ["Solar energy", "Biomass energy", "Wind energy", "Hydropower"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Biomass energy is produced from organic materials like plants."
    },
    {
        question: "What is the impact of renewable energy on energy security?",
        options: ["Increased dependence on oil", "Reduced dependence on fossil fuels", "Increased pollution", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Renewable energy reduces dependence on fossil fuels."
    },
    {
        question: "What is wave energy?",
        options: ["Solar energy", "Wind energy", "Wave energy", "Thermal energy"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "Wave energy depends on the movement of waves."
    },
    {
        question: "What is the impact of renewable energy on the climate?",
        options: ["Increased emissions", "Reduced emissions", "Increased pollution", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Renewable energy reduces harmful emissions affecting the climate."
    }
],
      biodiversity: [
    // The new questions on biodiversity (15 questions)
    {
        question: "What is biodiversity?",
        options: ["The diversity of life on Earth", "The diversity of rocks", "The diversity of climates", "The diversity of colors"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Biodiversity refers to the diversity of life on Earth."
    },
    {
        question: "What is the importance of biodiversity?",
        options: ["Improving the economy", "Maintaining ecological balance", "Increasing pollution", "Increasing plastic use"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Biodiversity plays a vital role in maintaining ecological balance."
    },
    {
        question: "What are the biggest threats to biodiversity?",
        options: ["Habitat destruction", "Tree planting", "Use of renewable energy", "Cleaning the environment"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Habitat destruction is one of the biggest threats to biodiversity."
    },
    {
        question: "What is the main role of plants in biodiversity?",
        options: ["Producing oxygen", "Increasing pollution", "Releasing carbon dioxide", "Reducing rainfall"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Plants play a key role in producing oxygen and maintaining ecological balance."
    },
    {
        question: "What is the impact of climate change on biodiversity?",
        options: ["Increased diversity", "Decreased diversity", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Climate change leads to a decrease in biodiversity due to habitat destruction."
    },
    {
        question: "What is the impact of overfishing on biodiversity?",
        options: ["Increased diversity", "Decreased diversity", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Overfishing leads to a decrease in biodiversity."
    },
    {
        question: "Which regions are rich in biodiversity?",
        options: ["Deserts", "Tropical forests", "Mountains", "Polar regions"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Tropical forests are among the regions richest in biodiversity."
    },
    {
        question: "What is the impact of excessive agriculture on biodiversity?",
        options: ["Increased diversity", "Decreased diversity", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Excessive agriculture destroys natural habitats and reduces biodiversity."
    },
    {
        question: "What is the role of insects in biodiversity?",
        options: ["Pollination", "Increasing pollution", "Releasing carbon dioxide", "Reducing rainfall"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Insects play a key role in pollination and food production."
    },
    {
        question: "What is the impact of forests on biodiversity?",
        options: ["Increased diversity", "Decreased diversity", "Improved air quality", "Increased oxygen"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Forests provide natural habitats and preserve biodiversity."
    },
    {
        question: "What is the impact of urbanization on biodiversity?",
        options: ["Increased diversity", "Decreased diversity", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Urbanization leads to the destruction of natural habitats and a decrease in biodiversity."
    },
    {
        question: "What is the impact of pollution on biodiversity?",
        options: ["Increased diversity", "Decreased diversity", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Pollution destroys natural habitats and reduces biodiversity."
    },
    {
        question: "What is the impact of tourism on biodiversity?",
        options: ["Increased diversity", "Decreased diversity", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Excessive tourism destroys natural habitats and reduces biodiversity."
    },
    {
        question: "What is the impact of forest fires on biodiversity?",
        options: ["Increased diversity", "Decreased diversity", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Forest fires destroy natural habitats and reduce biodiversity."
    },
    {
        question: "What is the impact of wars on biodiversity?",
        options: ["Increased diversity", "Decreased diversity", "Improved air quality", "Increased oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Wars destroy natural habitats and reduce biodiversity."
    }
]
         };
    return questions[topic] || [];
}