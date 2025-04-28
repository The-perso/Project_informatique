
let userName = "";
let userAge = "";
let userSchool = "";
let userScore = 0;
let questions = [];
let currentQuestionIndex = 0;
let timerInterval;
let wrongAnswers = [];

document.getElementById('user-info-form').onsubmit = function(event) {
    event.preventDefault();


    document.getElementById('name-error').textContent = '';
    document.getElementById('age-error').textContent = '';
    document.getElementById('school-error').textContent = '';

    
    const nameInput = document.getElementById('name').value.trim();
    const ageInput = document.getElementById('age').value;
    const schoolInput = document.getElementById('school').value.trim();

    let isValid = true;

   
    const englishNamePattern = /^[A-Za-z\s]{1,30}$/;
    if (!englishNamePattern.test(nameInput)) {
        document.getElementById('name-error').textContent = 'Please enter a name in English only (maximum 30 characters).';
        isValid = false;
    }

   
    const age = parseInt(ageInput);
    if (isNaN(age) || age < 5) {
        document.getElementById('age-error').textContent = 'Please enter a valid age (5 years and above).';
        isValid = false;
    }

 
    const englishSchoolPattern = /^[A-Za-z\s]{1,50}$/;
    if (!englishSchoolPattern.test(schoolInput)) {
        document.getElementById('school-error').textContent = 'Please enter an institution name in English only (maximum 50 characters).';
        isValid = false;
    }

   
    if (isValid) {
        userName = nameInput;
        userAge = age;
        userSchool = schoolInput;
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('main-menu').style.display = 'block';
        showSection('home');
    }
};


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
                <h2 class="training-title">Training Space</h2>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('air')">Air Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('environment')">Environmental Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('water')">Water and Ocean Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('warming')">Global Warming</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('solid-waste')">Solid Waste Management</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('renewable-energy')">Renewable Energy</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px;" onclick="showTopic('biodiversity')">Biodiversity</button>
            `;
            developersSection.style.display = 'none';
            break;
        case 'about':
            htmlContent = `
                <h2 class="about-title">About the Quiz</h2>
                <p>The program is a game consisting of several questions, each having four options.</p>
                <p>Participation conditions: Have a phone or computer and access the dedicated website of the Environmental Club of the institution.</p>
                <p>Program objective: Allow all students to pass the Allal Bin Abdullah Environmental Quiz and encourage students to use modern technology for educational and environmental purposes.</p>
            `;
            developersSection.style.display = 'none';
            break;
        case 'participate':
            htmlContent = `
                <h2 class="participate-title">Participate in the Quiz</h2>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('air')">Air Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('environment')">Environmental Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('water')">Water and Ocean Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('warming')">Global Warming</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('solid-waste')">Solid Waste Management</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('renewable-energy')">Renewable Energy</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px;" onclick="startQuiz('biodiversity')">Biodiversity</button>
            `;
            developersSection.style.display = 'none';
            break;
          
            const awarenessMessages = `
    <div id="awareness-messages" class="awareness-section">
        <h3 class="awareness-title">Awareness Messages</h3>
        <p class="awareness-message">"The environment is our common heritage; let's preserve it for future generations."</p>
        <p class="awareness-message">"Every drop of water wasted today may be precious tomorrow."</p>
        <p class="awareness-message">"Planting a tree can make a big difference."</p>
        <p class="awareness-message">"Pollution is everyone's problem, and the solution starts with you."</p>
        <p class="awareness-message">"Nature doesn't need us, but we need nature."</p>
    </div>
`;
         
            function showSection(sectionId) {
                const content = document.getElementById('content');
                const developersSection = document.getElementById('developers-section');
                let htmlContent = '';

                switch (sectionId) {
                    case 'home':
                        htmlContent = '<p>Welcome to the home page.</p>';
                      
                        htmlContent += awarenessMessages;
                        developersSection.style.display = 'block';
                        break;
                    case 'training':
                        htmlContent = `
                <h2>Training Space</h2>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('air')">Air Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('environment')">Environmental Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('water')">Water and Ocean Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('warming')">Global Warming</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('solid-waste')">Solid Waste Management</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="showTopic('renewable-energy')">Renewable Energy</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px;" onclick="showTopic('biodiversity')">Biodiversity</button>
            `;

                        developersSection.style.display = 'none';
                        break;
                    case 'about':
                        htmlContent = `
                <h2>About the Quiz</h2>
                <p>The program is a game consisting of several questions, each having four options.</p>
                <p>Participation conditions: Have a phone or computer and access the dedicated website of the Environmental Club of the institution.</p>
                <p>Program objective: Enable all students to pass the Allal Bin Abdullah Environmental Quiz and encourage students to use modern technology for educational and environmental purposes.</p>
            `;
                        developersSection.style.display = 'none';
                        break;
                    case 'participate':
                        htmlContent = `
                <h2>Participate in the Quiz</h2>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('air')">Air Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('environment')">Environmental Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('water')">Water and Ocean Pollution</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('warming')">Global Warming</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('solid-waste')">Solid Waste Management</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px; margin-right: 5px;" onclick="startQuiz('renewable-energy')">Renewable Energy</button>
                <button class="btn btn-success btn-lg px-4 py-2" style="margin-bottom: 10px;" onclick="startQuiz('biodiversity')">Biodiversity</button>
            `;
                        developersSection.style.display = 'none';
                        break;
                }
                content.innerHTML = htmlContent;
            }
    }
    content.innerHTML = htmlContent;
}

function showTopic(topic) {
    const content = document.getElementById('content');
    let info = '';
    switch (topic) {
        case 'air':
            info = `
                <h3>Air Pollution</h3>
                <p>Air pollution is caused by harmful gas emissions from cars and factories. These gases include carbon dioxide and nitrogen oxides, which cause serious diseases like asthma and allergies.</p>
                <p>We can reduce air pollution by:</p>
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
                <p>Methods to reduce environmental pollution:</p>
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
                <p>This occurs due to the discharge of chemical and oil waste into water bodies. It leads to the destruction of marine habitats and the spread of diseases.</p>
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
                <p>The increase in Earth's temperature due to the rise in greenhouse gases such as carbon dioxide and methane. This leads to the melting of polar ice caps and rising sea levels.</p>
                <p>Solutions to combat global warming:</p>
                <ul>
                    <li>Using renewable energy.</li>
                    <li>Increasing vegetation cover.</li>
                    <li>Reducing carbon emissions.</li>
                </ul>
            `;
            break;
        case 'solid-waste':
            info = `
                <h3>Solid Waste Management</h3>
                <p>Solid waste is one of the biggest environmental challenges. It includes domestic, industrial, and medical waste. These wastes can cause severe environmental pollution if not disposed of properly.</p>
                <p>Methods for solid waste management:</p>
                <ul>
                    <li>Recycling.</li>
                    <li>Converting waste into energy.</li>
                    <li>Safe disposal in sanitary landfills.</li>
                </ul>
            `;
            break;
        case 'renewable-energy':
            info = `
                <h3>Renewable Energy</h3>
                <p>Renewable energy is a sustainable source of energy that comes from natural sources such as the sun, wind, and water. This energy helps reduce dependence on fossil fuels and decreases carbon emissions.</p>
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
    content.innerHTML = `${info}<button class="btn btn-success btn-lg px-4 py-2" onclick="showSection('training')">Back to Training Space</button>`;
}

function startQuiz(topic) {
    questions = getQuestions(topic);
    currentQuestionIndex = 1;
    userScore = 0;
    wrongAnswers = [];
    displayQuestion();
}


function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const content = document.getElementById('content');
    const shuffledOptions = shuffleArray([...question.options]);
    const correctAnswerIndex = shuffledOptions.indexOf(question.options[question.correctAnswer]);
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    content.innerHTML = `
        <h3 style="color:black;">Question number : ${currentQuestionIndex}/${questions.length-1}</h3>
        <h3 style="color:black;">${question.question}</h3>
        ${shuffledOptions.map((option, index) => `
            <button class="btn btn-success btn-lg px-4 py-2" onclick="checkAnswer(${index}, ${correctAnswerIndex})">${option}</button>
        `).join('')}

    <br><br>
        <h4><p>Time remaining: <span id="timer">15</span> seconds</p></h4>

    `;
    let timeLeft = 15;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1, correctAnswerIndex);
        }
    }, 1000);
}


function checkAnswer(selectedIndex, correctAnswerIndex) {
    const content = document.getElementById('content');
    const question = questions[currentQuestionIndex];
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    if (selectedIndex === correctAnswerIndex) {
        userScore++;
        content.innerHTML += `<p style="color: green;">Correct answer!</p>`;

        
    		const correctSound = new Audio('assets/sounds/correct.MP3');
    		correctSound.play();
    }
    else {
        content.innerHTML += `
            <p style="color: red;">Incorrect answer!</p>
            <p>The correct answer is: <strong>${question.options[question.correctAnswer]}</strong></p>
            <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopicForRelearning('${question.topic}')">Review the topic</button>
        `;
        wrongAnswers.push({
            question: question.question,
            userAnswer: selectedIndex !== -1 ? question.options[selectedIndex] : "No answer",
            correctAnswer: question.options[question.correctAnswer],
            info: question.info
        });
        
    		const wrongSound = new Audio('assets/sounds/wrong.MP3');
    		wrongSound.play();
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


function endQuiz(score) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h3 class="end_title">The quiz is over !</h3>
        <p>Your score: ${score} out of ${questions.length-1}</p>
        <button class="btn btn-success btn-lg px-4 py-2" onclick="downloadCertificate()">Download Certificate (PDF)</button>
        <button class="btn btn-success btn-lg px-4 py-2" onclick="showWrongAnswers()">Show Incorrect Answers</button>
       <br><br> <button class="btn btn-success btn-lg px-4 py-2" onclick="showSection('home')">Back to Home Page</button>
    `;
}


async function downloadCertificate() {

  const name = document.getElementById('name').value.trim();

  try {
  	const pdfScore = userScore;
		const totalQuestion = questions.length - 1;
		const pourcentage = (pdfScore / totalQuestion) * 100;

		let pdfPath;
    if (pourcentage >= 0 && pourcentage < 20) {
      pdfPath = 'assets/pdf/0stars_english.pdf';
    } else if (pourcentage >= 20 && pourcentage < 60) {
      pdfPath = 'assets/pdf/1stars_english.pdf';
    } else if (pourcentage >= 60 && pourcentage < 100) {
      pdfPath = 'assets/pdf/2stars_english.pdf';
    } else {
      pdfPath = 'assets/pdf/3stars_english.pdf';
    }


    // Chargement du fichier PDF
    const response = await fetch(pdfPath);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const existingPdfBytes = await response.arrayBuffer()

   
    const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

   
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    
    const font = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman);
    const fontSize = 95;
    const textColor = PDFLib.rgb(0, 0, 0);
    const x = 265;
    const y = 295;

   
    firstPage.drawText(name, {
      x, 
			y,
      size: fontSize,
      font,
      color: textColor,
    });

    
    const modifiedPdfBytes = await pdfDoc.save();

   
    const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

   
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ecologic team certificate.pdf';
    document.body.appendChild(a);
    a.click();

    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("An error has occurred:", error);
    alert("An error occurred while generating the certificate.");
  }
}


function showWrongAnswers() {
    const content = document.getElementById('content');
    let htmlContent = '<h3>Incorrect Answers:</h3>';
    wrongAnswers.forEach((answer, index) => {
        htmlContent += `
            <p><strong>Question:</strong> ${answer.question}</p>
            <p><strong>Your answer:</strong> ${answer.userAnswer}</p>
            <p><strong>Correct answer:</strong> ${answer.correctAnswer}</p>
            <p><strong>Additional information:</strong> ${answer.info}</p>
            <hr>
        `;
    });
    content.innerHTML = htmlContent;
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function getQuestions(topic) {
    const questions = {
        air: [
            {
                question: "What is the main source of air pollution?",
                options: ["The burning of fossil fuels", "Planting trees", "Natural winds", "Rain"],
                correctAnswer: 0,
                topic: 'air',
                info: "The burning of fossil fuels releases harmful gases such as carbon dioxide."
            },
            {
                question: "Which gases are responsible for atmospheric pollution?",
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
                info: "Air pollution causes diseases such as asthma and allergies."
            },
            {
                question: "What is the role of trees in reducing air pollution?",
                options: ["Production of oxygen", "Emission of carbon dioxide", "Attraction of dust", "Increase in humidity"],
                correctAnswer: 0,
                topic: 'air',
                info: "Trees absorb carbon dioxide and release oxygen."
            },
            {
                question: "Which country pollutes the air the most?",
                options: ["China", "Canada", "Australia", "Japan"],
                correctAnswer: 0,
                topic: 'air',
                info: "China is one of the countries that pollutes the air the most due to its industry."
            },
            {
                question: "What is the impact of air pollution on agricultural crops?",
                options: ["Increased production", "Crop deterioration", "Improved soil quality", "Increased rainfall"],
                correctAnswer: 1,
                topic: 'air',
                info: "Air pollution destroys crops due to toxic substances."
            },
            {
                question: "Which gases are responsible for global warming?",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                correctAnswer: 1,
                topic: 'air',
                info: "Carbon dioxide is one of the main gases responsible for global warming."
            },
            {
                question: "What are the methods to reduce air pollution?",
                options: ["Increase factories", "Plant trees", "Burn waste", "Use plastic"],
                correctAnswer: 1,
                topic: 'air',
                info: "Planting trees helps absorb carbon dioxide."
            },
            {
                question: "What is the impact of air pollution on the climate?",
                options: ["Drop in temperatures", "Climate change", "Increase in rainfall", "Improvement in air quality"],
                correctAnswer: 1,
                topic: 'air',
                info: "Air pollution leads to climate change due to global warming."
            },
            {
                question: "What is the main role of renewable energy in reducing air pollution?",
                options: ["Increase pollution", "Reduce emissions", "Increase the use of fossil fuels", "None of the above"],
                correctAnswer: 1,
                topic: 'air',
                info: "Renewable energy reduces the emission of harmful gases."
            }
        ],
        environment: [
            {
                question: "What is environmental pollution?",
                options: ["Increase in plants", "Spread of waste", "Cleaning the environment", "Use of renewable energy"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Environmental pollution is caused by industrial waste and human activities."
            },
            {
                question: "What is the best method to reduce environmental pollution?",
                options: ["Recycling", "Incinerating waste", "Dumping waste in the sea", "Increasing plastic use"],
                correctAnswer: 0,
                topic: 'environment',
                info: "Recycling reduces the amount of waste and improves the environment."
            },
            {
                question: "What is the impact of environmental pollution on marine life?",
                options: ["Increase in fish", "Destruction of marine habitats", "Improvement in water quality", "Increase in oxygen"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Environmental pollution destroys marine habitats."
            },
            {
                question: "Which material is most common in environmental pollution?",
                options: ["Plastic", "Paper", "Glass", "Metals"],
                correctAnswer: 0,
                topic: 'environment',
                info: "Plastic is one of the most polluting materials for the environment."
            },
            {
                question: "What is the main role of renewable energy in reducing environmental pollution?",
                options: ["Increase pollution", "Reduce emissions", "Increase the use of fossil fuels", "None of the above"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Renewable energy reduces carbon emissions."
            },
            {
                question: "What is the impact of environmental pollution on soil?",
                options: ["Increase in fertility", "Soil degradation", "Improvement in soil quality", "Increase in rainfall"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Environmental pollution degrades soil due to chemical substances."
            },
            {
                question: "What is the best method to dispose of waste?",
                options: ["Recycling", "Dumping waste in the sea", "Incinerating waste", "Increasing plastic use"],
                correctAnswer: 0,
                topic: 'environment',
                info: "Recycling is the best method to dispose of waste."
            },
            {
                question: "What is the impact of environmental pollution on public health?",
                options: ["Improvement in health", "Increase in diseases", "Increase in energy", "Improvement in vision"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Environmental pollution increases diseases like cancer and respiratory illnesses."
            },
            {
                question: "What is the best method to preserve water?",
                options: ["Neglect cleanliness", "Reduce the use of chemicals", "Increase waste discharge", "Incinerate waste"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Reducing the use of chemicals helps preserve water."
            },
            {
                question: "What is the impact of environmental pollution on the atmosphere?",
                options: ["Improvement in air quality", "Increase in air pollution", "Increase in oxygen", "Improvement in visibility"],
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
                options: ["Spread of diseases", "Improvement in health", "Increase in energy", "Improvement in water quality"],
                correctAnswer: 0,
                topic: 'water',
                info: "Water pollution causes diseases such as cholera and typhoid."
            },
    {
        question: "What is the main role of oceans in the ecosystem?",
        options: ["Climate regulation", "Air pollution", "Increase in waste", "Reduction of oxygen"],
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
        question: "What is the best method to reduce water pollution?",
        options: ["Reduce the use of chemicals", "Increase waste discharge", "Burn waste", "Neglect hygiene"],
        correctAnswer: 0,
        topic: 'water',
        info: "Reducing the use of chemicals helps reduce water pollution."
    },
    {
        question: "What is the impact of water pollution on marine life?",
        options: ["Increase in fish", "Destruction of marine habitats", "Improvement in water quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'water',
        info: "Water pollution leads to the destruction of marine habitats."
    },
    {
        question: "What is the impact of water pollution on agriculture?",
        options: ["Increase in crops", "Damage to crops", "Improvement in soil quality", "Increase in rainfall"],
        correctAnswer: 1,
        topic: 'water',
        info: "Water pollution damages agricultural crops."
    },
    {
        question: "What is the main role of rivers in the ecosystem?",
        options: ["Provide water", "Air pollution", "Increase in waste", "Reduction of oxygen"],
        correctAnswer: 0,
        topic: 'water',
        info: "Rivers play an essential role in providing water to ecosystems."
    },
    {
        question: "What is the impact of water pollution on seabirds?",
        options: ["Increase in the number of birds", "Destruction of bird habitats", "Improvement in water quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'water',
        info: "Water pollution destroys the habitats of seabirds."
    },
    {
        question: "What is the best method to clean the oceans?",
        options: ["Neglect hygiene", "Remove plastic waste", "Increase waste discharge", "Burn waste"],
        correctAnswer: 1,
        topic: 'water',
        info: "Removing plastic waste is the best method to clean the oceans."
    }
],
warming: [
    {
        question: "What is global warming?",
        options: ["Drop in Earth's temperature", "Rise in Earth's temperature", "Air pollution", "Water pollution"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Global warming is an increase in Earth's temperature due to the rise in greenhouse gases."
    },
    {
        question: "Which gases are responsible for global warming?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Carbon dioxide is one of the main gases responsible for global warming."
    },
    {
        question: "What are the main effects of global warming?",
        options: ["Rising sea levels", "Drop in temperatures", "Increase in polar ice", "Improvement in air quality"],
        correctAnswer: 0,
        topic: 'warming',
        info: "Global warming causes rising sea levels due to the melting of ice."
    },
    {
        question: "What is the main role of forests in combating global warming?",
        options: ["Absorption of carbon dioxide", "Release of carbon dioxide", "Air pollution", "Increase in temperature"],
        correctAnswer: 0,
        topic: 'warming',
        info: "Forests absorb carbon dioxide and help limit global warming."
    },
    {
        question: "What is the best method to combat global warming?",
        options: ["Use of renewable energy", "Increase in the use of fossil fuels", "Destruction of forests", "Neglect of waste"],
        correctAnswer: 0,
        topic: 'warming',
        info: "The use of renewable energy helps reduce greenhouse gas emissions."
    },
    {
        question: "What is the impact of global warming on agriculture?",
        options: ["Increase in crops", "Damage to crops", "Improvement in soil quality", "Increase in rainfall"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Global warming damages crops due to climate changes."
    },
    {
        question: "What is the impact of global warming on ice caps?",
        options: ["Increase in ice", "Melting of ice", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Global warming leads to the melting of ice caps."
    },
    {
        question: "What is the impact of global warming on weather patterns?",
        options: ["Climate stability", "Changes in climate", "Increase in rainfall", "Improvement in weather"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Global warming causes changes in weather patterns."
    },
    {
        question: "What is the impact of global warming on animals?",
        options: ["Increase in biodiversity", "Extinction of certain species", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Global warming leads to the extinction of certain animal species."
    },
    {
        question: "What is the best method to reduce greenhouse gas emissions?",
        options: ["Increase in industries", "Use of renewable energy", "Destruction of forests", "Neglect of waste"],
        correctAnswer: 1,
        topic: 'warming',
        info: "The use of renewable energy helps reduce greenhouse gas emissions."
    }
],
      "solid-waste": [
    
    {
        question: "What are solid wastes?",
        options: ["Household waste", "Liquid waste", "Harmful gases", "Rain"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Solid waste includes household, industrial, and medical waste."
    },
    {
        question: "What is the best method to manage solid waste?",
        options: ["Recycling", "Throwing waste in the streets", "Burning waste", "Leaving waste to decompose"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Recycling is the best method to manage solid waste."
    },
    {
        question: "What is the impact of solid waste on the environment?",
        options: ["Soil and water pollution", "Improvement in air quality", "Increase in oxygen", "Increase in rainfall"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Solid waste causes soil and water pollution if not disposed of properly."
    },
    {
        question: "What is waste-to-energy technology?",
        options: ["Recycling", "Converting waste into compost", "Converting waste into electricity", "Leaving waste to decompose"],
        correctAnswer: 2,
        topic: 'solid-waste',
        info: "Waste-to-energy technology is used to convert waste into electricity."
    },
    {
        question: "What is the main role of sanitary landfills in waste management?",
        options: ["Safe disposal of waste", "Increase in pollution", "Improvement in air quality", "Increase in rainfall"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Sanitary landfills provide a safe method for disposing of solid waste."
    },
    {
        question: "What is the impact of electronic waste on the environment?",
        options: ["Increase in pollution", "Improvement in health", "Increase in energy", "Improvement in visibility"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Electronic waste contains toxic substances that pollute the environment."
    },
    {
        question: "What are the benefits of recycling?",
        options: ["Reduction of waste", "Increase in pollution", "Increase in plastic use", "Increase in production of harmful gases"],
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
        question: "What is the importance of sorting during waste disposal?",
        options: ["Increase in pollution", "Facilitation of recycling", "Increase in waste", "Increase in plastic use"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Sorting facilitates the recycling process and reduces waste."
    },
    {
        question: "What is the impact of solid waste on public health?",
        options: ["Increase in diseases", "Improvement in health", "Increase in energy", "Improvement in visibility"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Solid waste causes diseases such as allergies and poisoning."
    },
    {
        question: "What are organic wastes?",
        options: ["Household waste", "Food leftovers", "Electronic waste", "Medical waste"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Organic waste includes food leftovers and biodegradable materials."
    },
    {
        question: "What is the role of compost in waste management?",
        options: ["Transform organic waste into compost", "Increase pollution", "Improve air quality", "Increase rainfall"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Compost transforms organic waste into natural fertilizer."
    },
    {
        question: "What are non-biodegradable wastes?",
        options: ["Plastic", "Food leftovers", "Paper", "Wood"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Plastic is one of the main non-biodegradable wastes."
    },
    {
        question: "What is the impact of solid waste on wildlife?",
        options: ["Increase in biodiversity", "Destruction of habitats", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Solid waste destroys the natural habitats of animals."
    },
    {
        question: "What is the best method to dispose of electronic waste?",
        options: ["Recycling", "Throwing it in the streets", "Burning it", "Leaving it to decompose"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Recycling is the best method to dispose of electronic waste."
    }
],
  "renewable-energy": [
    
    {
        question: "What is renewable energy?",
        options: ["Solar energy", "Fossil energy", "Nuclear energy", "Electromagnetic energy"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "Renewable energy comes from natural sources such as the sun, wind, and water."
    },
    {
        question: "What is an example of renewable energy?",
        options: ["Coal", "Wind", "Oil", "Natural gas"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Wind is a source of renewable energy that helps reduce carbon emissions."
    },
    {
        question: "What are the benefits of using solar energy?",
        options: ["Increase in pollution", "Reduction in carbon emissions", "Increase in fossil fuel consumption", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Solar energy reduces carbon emissions and is a clean energy source."
    },
    {
        question: "What is the main obstacle to using renewable energy?",
        options: ["High cost", "Excessive abundance", "Ease of use", "None of the above"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "The high cost of creating infrastructure is one of the main challenges."
    },
    {
        question: "What is the energy produced by the movement of water?",
        options: ["Solar energy", "Wind energy", "Hydropower", "Thermal energy"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "Hydropower is produced by the movement of water, such as dams and rivers."
    },
    {
        question: "What are the benefits of using wind energy?",
        options: ["Increase in pollution", "Reduction in carbon emissions", "Increase in fossil fuel usage", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Wind energy reduces carbon emissions and is a clean energy source."
    },
    {
        question: "What is geothermal energy?",
        options: ["Solar energy", "Energy extracted from underground", "Wind energy", "Hydropower"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Geothermal energy comes from the heat present in the Earth's subsurface."
    },
    {
        question: "What is the main role of renewable energy in reducing pollution?",
        options: ["Increase in pollution", "Reduction in emissions", "Increase in fossil fuel usage", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Renewable energy reduces carbon emissions."
    },
    {
        question: "Which country uses the most renewable energy?",
        options: ["China", "Canada", "Germany", "Japan"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "China is one of the countries that uses the most renewable energy."
    },
    {
        question: "What is the impact of renewable energy on the economy?",
        options: ["Increase in unemployment", "Creation of new jobs", "Increase in pollution", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Renewable energy creates new jobs in various fields."
    },
    {
        question: "What is the energy that depends on tides?",
        options: ["Solar energy", "Wind energy", "Tidal energy", "Thermal energy"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "Tidal energy depends on the movement of tides."
    },
    {
        question: "What is the impact of renewable energy on the environment?",
        options: ["Increase in pollution", "Reduction in pollution", "Increase in fossil fuel usage", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Renewable energy reduces environmental pollution."
    },
    {
        question: "What is the energy produced by biomass?",
        options: ["Solar energy", "Biomass energy", "Wind energy", "Hydropower"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Biomass energy is produced from organic materials such as plants."
    },
    {
        question: "What is the impact of renewable energy on energy security?",
        options: ["Increase in oil dependency", "Reduction in dependency on fossil fuels", "Increase in pollution", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Renewable energy reduces dependency on fossil fuels."
    },
    {
        question: "What is the energy produced by wave motion?",
        options: ["Solar energy", "Wind energy", "Wave energy", "Thermal energy"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "Wave energy depends on the motion of waves."
    },
    {
        question: "What is the impact of renewable energy on the climate?",
        options: ["Increase in emissions", "Reduction in emissions", "Increase in pollution", "None of the above"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Renewable energy reduces harmful emissions for the climate."
    }
],
    biodiversity: [
    
    {
        question: "What is biodiversity?",
        options: ["The diversity of life on Earth", "The diversity of rocks", "The diversity of climates", "The diversity of colors"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Biodiversity refers to the diversity of life on Earth."
    },
    {
        question: "What is the importance of biodiversity?",
        options: ["Improvement of the economy", "Maintenance of ecological balance", "Increase in pollution", "Increase in plastic use"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Biodiversity plays a vital role in maintaining ecological balance."
    },
    {
        question: "What are the greatest threats to biodiversity?",
        options: ["Destruction of habitats", "Planting trees", "Use of renewable energy", "Cleaning the environment"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Destruction of natural habitats is one of the greatest threats to biodiversity."
    },
    {
        question: "What is the main role of plants in biodiversity?",
        options: ["Production of oxygen", "Increase in pollution", "Emission of carbon dioxide", "Reduction in rainfall"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Plants play an essential role in producing oxygen and maintaining ecological balance."
    },
    {
        question: "What is the impact of climate change on biodiversity?",
        options: ["Increase in diversity", "Decrease in diversity", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Climate change leads to a decrease in biodiversity due to habitat destruction."
    },
    {
        question: "What is the impact of overfishing on biodiversity?",
        options: ["Increase in diversity", "Decrease in diversity", "Improvement in air quality", "Increase in oxygen"],
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
        options: ["Increase in diversity", "Decrease in diversity", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Excessive agriculture destroys natural habitats and reduces biodiversity."
    },
    {
        question: "What is the role of insects in biodiversity?",
        options: ["Pollination", "Increase in pollution", "Emission of carbon dioxide", "Reduction in rainfall"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Insects play a key role in pollination and food production."
    },
    {
        question: "What is the impact of forests on biodiversity?",
        options: ["Increase in diversity", "Decrease in diversity", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Forests provide natural habitats and preserve biodiversity."
    },
    {
        question: "What is the impact of urbanization on biodiversity?",
        options: ["Increase in diversity", "Decrease in diversity", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Urbanization leads to the destruction of natural habitats and a decrease in biodiversity."
    },
    {
        question: "What is the impact of pollution on biodiversity?",
        options: ["Increase in diversity", "Decrease in diversity", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Pollution destroys natural habitats and reduces biodiversity."
    },
    {
        question: "What is the impact of tourism on biodiversity?",
        options: ["Increase in diversity", "Decrease in diversity", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Excessive tourism destroys natural habitats and reduces biodiversity."
    },
    {
        question: "What is the impact of forest fires on biodiversity?",
        options: ["Increase in diversity", "Decrease in diversity", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Fires destroy natural habitats and reduce biodiversity."
    },
    {
        question: "What is the impact of wars on biodiversity?",
        options: ["Increase in diversity", "Decrease in diversity", "Improvement in air quality", "Increase in oxygen"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Wars destroy natural habitats and reduce biodiversity."
     }
],
         };
    return questions[topic] || [];
}