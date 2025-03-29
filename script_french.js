// Définition des variables
let userName = "";
let userAge = "";
let userSchool = "";
let userScore = 0;
let questions = [];
let currentQuestionIndex = 0;
let timerInterval;
let wrongAnswers = [];
// Transition de l'écran d'accueil vers le menu principal
document.getElementById('user-info-form').onsubmit = function(event) {
    event.preventDefault();
    userName = document.getElementById('name').value;
    userAge = document.getElementById('age').value;
    userSchool = document.getElementById('school').value;
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
    showSection('home');
};
// Affichage des sections
function showSection(sectionId) {
    const content = document.getElementById('content');
    const developersSection = document.getElementById('developers-section');
    let htmlContent = '';
    switch (sectionId) {
        case 'home':
            htmlContent = '<p>Bienvenue sur la page d\'accueil.</p>';
            developersSection.style.display = 'block';
            break;
        case 'training':
            htmlContent = `
                <h2>Espace de formation</h2>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('air')">Pollution de l'air</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('environment')">Pollution environnementale</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('water')">Pollution de l'eau et des océans</button><br><br>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('warming')">Réchauffement climatique</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('solid-waste')">Gestion des déchets solides</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('renewable-energy')">Énergie renouvelable</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('biodiversity')">Biodiversité</button>
            `;
            developersSection.style.display = 'none';
            break;
        case 'about':
            htmlContent = `
                <h2>À propos du quiz</h2>
                <p>Le programme est un jeu composé de plusieurs questions, chacune ayant quatre options.</p>
                <p>Conditions de participation : Avoir un téléphone ou un ordinateur et accéder au site dédié au Club Environnemental de l'institution.</p>
                <p>Objectif du programme : Permettre à tous les élèves de réussir le Quiz Environnemental Allal Bin Abdullah et encourager les élèves à utiliser la technologie moderne à des fins éducatives et bénéfiques pour l'environnement.</p>
            `;
            developersSection.style.display = 'none';
            break;
        case 'participate':
            htmlContent = `
                <h2>Participer au quiz</h2>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('air')">Pollution de l'air</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('environment')">Pollution environnementale</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('water')">Pollution de l'eau et des océans</button>
                <br><br><button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('warming')">Réchauffement climatique</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('solid-waste')">Gestion des déchets solides</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('renewable-energy')">Énergie renouvelable</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('biodiversity')">Biodiversité</button>
            `;
            developersSection.style.display = 'none';
            break;
            // Ajout de la section des messages de sensibilisation
            const awarenessMessages = `
    <div id="awareness-messages" class="awareness-section">
        <h3 class="awareness-title">Messages de sensibilisation</h3>
        <p class="awareness-message">"L'environnement est notre héritage commun, préservons-le pour les générations futures."</p>
        <p class="awareness-message">"Chaque goutte d'eau gaspillée aujourd'hui peut être précieuse demain."</p>
        <p class="awareness-message">"Planter un arbre peut faire une grande différence."</p>
        <p class="awareness-message">"La pollution est un problème de tous, et la solution commence par vous."</p>
        <p class="awareness-message">"La nature n'a pas besoin de nous, mais nous avons besoin de la nature."</p>
    </div>
`;
            // Modification de la fonction showSection pour afficher les messages de sensibilisation uniquement sur la page d'accueil
            function showSection(sectionId) {
                const content = document.getElementById('content');
                const developersSection = document.getElementById('developers-section');
                let htmlContent = '';

                switch (sectionId) {
                    case 'home':
                        htmlContent = '<p>Bienvenue sur la page d\'accueil.</p>';
                        // Ajout des messages de sensibilisation uniquement sur la page d'accueil
                        htmlContent += awarenessMessages;
                        developersSection.style.display = 'block';
                        break;
                    case 'training':
                        htmlContent = `
                <h2>Espace de formation</h2>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('air')">Pollution de l'air</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('environment')">Pollution environnementale</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('water')">Pollution de l'eau et des océans</button>
                <br><br><button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('warming')">Réchauffement climatique</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('solid-waste')">Gestion des déchets solides</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('renewable-energy')">Énergie renouvelable</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('biodiversity')">Biodiversité</button>
            `;
                        developersSection.style.display = 'none';
                        break;
                    case 'about':
                        htmlContent = `
                <h2>À propos du quiz</h2>
                <p>Le programme est un jeu composé de plusieurs questions, chacune ayant quatre options.</p>
                <p>Conditions de participation : Avoir un téléphone ou un ordinateur et accéder au site dédié au Club Environnemental de l'institution.</p>
                <p>Objectif du programme : Permettre à tous les élèves de réussir le Quiz Environnemental Allal Bin Abdullah et encourager les élèves à utiliser la technologie moderne à des fins éducatives et bénéfiques pour l'environnement.</p>
            `;
                        developersSection.style.display = 'none';
                        break;
                    case 'participate':
                        htmlContent = `
                <h2>Participer au quiz</h2>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('air')">Pollution de l'air</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('environment')">Pollution environnementale</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('water')">Pollution de l'eau et des océans</button>
                <br><br><button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('warming')">Réchauffement climatique</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('solid-waste')">Gestion des déchets solides</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('renewable-energy')">Énergie renouvelable</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('biodiversity')">Biodiversité</button>
            `;
                        developersSection.style.display = 'none';
                        break;
                }
                content.innerHTML = htmlContent;
            }
    }
    content.innerHTML = htmlContent;
}
// Afficher les informations sur le sujet
function showTopic(topic) {
    const content = document.getElementById('content');
    let info = '';
    switch (topic) {
        case 'air':
            info = `
                <h3>Pollution de l'air</h3>
                <p>La pollution de l'air est causée par les émissions de gaz nocifs provenant des voitures et des usines. Ces gaz incluent le dioxyde de carbone et les oxydes d'azote, qui provoquent des maladies graves comme l'asthme et les allergies.</p>
                <p>On peut réduire la pollution de l'air en :</p>
                <ul>
                    <li>Plantant plus d'arbres.</li>
                    <li>Utilisant des énergies renouvelables.</li>
                    <li>Améliorant l'efficacité des moteurs.</li>
                </ul>
            `;
            break;
        case 'environment':
            info = `
                <h3>Pollution environnementale</h3>
                <p>La pollution environnementale inclut la pollution de l'air, de l'eau et du sol. Cette pollution est causée par les activités humaines telles que l'industrie et le rejet incorrect des déchets.</p>
                <p>Méthodes pour réduire la pollution environnementale :</p>
                <ul>
                    <li>Recyclage.</li>
                    <li>Réduction de l'utilisation du plastique.</li>
                    <li>Adoption d'énergies propres.</li>
                </ul>
            `;
            break;
        case 'water':
            info = `
                <h3>Pollution de l'eau et des océans</h3>
                <p>Cela se produit en raison du rejet de déchets chimiques et pétroliers dans les masses d'eau. Cela entraîne la destruction des habitats marins et la propagation des maladies.</p>
                <p>Solutions pour la pollution de l'eau :</p>
                <ul>
                    <li>Traitement de l'eau avant son rejet.</li>
                    <li>Élimination sûre des déchets industriels.</li>
                    <li>Nettoyage des plages et des océans.</li>
                </ul>
            `;
            break;
        case 'warming':
            info = `
                <h3>Réchauffement climatique</h3>
                <p>L'augmentation de la température de la Terre due à l'augmentation des gaz à effet de serre tels que le dioxyde de carbone et le méthane. Cela entraîne la fonte des glaces polaires et l'élévation du niveau de la mer.</p>
                <p>Solutions pour lutter contre le réchauffement climatique :</p>
                <ul>
                    <li>Utilisation des énergies renouvelables.</li>
                    <li>Augmentation de la couverture végétale.</li>
                    <li>Réduction des émissions de carbone.</li>
                </ul>
            `;
            break;
        case 'solid-waste':
            info = `
                <h3>Gestion des déchets solides</h3>
                <p>Les déchets solides sont l'un des plus grands défis environnementaux. Ils incluent les déchets domestiques, industriels et médicaux. Ces déchets peuvent causer une pollution environnementale grave s'ils ne sont pas éliminés correctement.</p>
                <p>Méthodes de gestion des déchets solides :</p>
                <ul>
                    <li>Recyclage.</li>
                    <li>Conversion des déchets en énergie.</li>
                    <li>Élimination sûre dans des décharges sanitaires.</li>
                </ul>
            `;
            break;
        case 'renewable-energy':
            info = `
                <h3>Énergie renouvelable</h3>
                <p>L'énergie renouvelable est une source durable d'énergie qui provient de sources naturelles comme le soleil, le vent et l'eau. Cette énergie aide à réduire la dépendance aux combustibles fossiles et diminue les émissions de carbone.</p>
                <p>Types d'énergie renouvelable :</p>
                <ul>
                    <li>Énergie solaire.</li>
                    <li>Énergie éolienne.</li>
                    <li>Énergie hydraulique.</li>
                </ul>
            `;
            break;
        case 'biodiversity':
            info = `
                <h3>Biodiversité</h3>
                <p>La biodiversité fait référence à la diversité de la vie sur Terre, y compris les plantes, les animaux et les écosystèmes. La biodiversité joue un rôle vital dans le maintien de l'équilibre écologique.</p>
                <p>Causes de la perte de biodiversité :</p>
                <ul>
                    <li>Destruction des habitats naturels.</li>
                    <li>Pollution environnementale.</li>
                    <li>Changement climatique.</li>
                </ul>
            `;
            break;
    }
    content.innerHTML = `${info}<button class="btn btn-success btn-lg px-4 py-2" onclick="showSection('training')">Retour à l'espace de formation</button>`;
}
// Démarrer le quiz
function startQuiz(topic) {
    questions = getQuestions(topic);
    currentQuestionIndex = 0;
    userScore = 0;
    wrongAnswers = [];
    displayQuestion();
}

// Afficher la question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const content = document.getElementById('content');
    const shuffledOptions = shuffleArray([...question.options]);
    const correctAnswerIndex = shuffledOptions.indexOf(question.options[question.correctAnswer]);
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    content.innerHTML = `
        <h3 style="color:black;">${question.question}</h3>
        ${shuffledOptions.map((option, index) => `
            <button class="btn btn-success btn-lg px-4 py-2" onclick="checkAnswer(${index}, ${correctAnswerIndex})">${option}</button>
        `).join('')}
    
        <h4><p>Temps restant: <span id="timer">20</span> secondes</p> <h4>
    
    `;
    let timeLeft = 20;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1, correctAnswerIndex); // Réponse expirée à cause du temps écoulé
        }
    }, 1000);
}

// Vérifier la réponse
function checkAnswer(selectedIndex, correctAnswerIndex) {
    const content = document.getElementById('content');
    const question = questions[currentQuestionIndex];
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    if (selectedIndex === correctAnswerIndex) {
        userScore++;
        content.innerHTML += `<p style="color: green;">Réponse correcte!</p>`;
    } else {
        content.innerHTML += `
            <p style="color: red;">Réponse incorrecte!</p>
            <p>La réponse correcte est: <strong>${question.options[question.correctAnswer]}</strong></p>
            <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopicForRelearning('${question.topic}')">Revoir le sujet</button>
        `;
        wrongAnswers.push({
            question: question.question,
            userAnswer: selectedIndex !== -1 ? question.options[selectedIndex] : "Pas de réponse",
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

// Terminer le quiz
function endQuiz(score) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h3>Le quiz est terminé!</h3>
        <p>Votre score: ${score} sur ${questions.length}</p>
        <button class="btn btn-success btn-lg px-4 py-2" onclick="downloadCertificate()">Télécharger le certificat (PDF)</button>
        <button class="btn btn-success btn-lg px-4 py-2" onclick="showWrongAnswers()">Afficher les réponses incorrectes</button>
       <br><br> <button class="btn btn-success btn-lg px-4 py-2" onclick="showSection('home')">Retour à la page d'accueil</button>
    `;
}

// Télécharger le certificat au format PDF
function downloadCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(`Certificat d'appréciation`, 80, 20);
    doc.setFontSize(14);
    doc.text(`Félicitations spéciales à l'étudiant(e): ${userName}`, 20, 40);
    doc.text(`Pour avoir réussi le quiz avec succès.`, 20, 50);
    doc.text(`Nombre de points: ${userScore} sur ${questions.length}`, 20, 60);
    doc.save(`${userName}-certificate.pdf`);
}

// Afficher les réponses incorrectes
function showWrongAnswers() {
    const content = document.getElementById('content');
    let htmlContent = '<h3>Réponses incorrectes:</h3>';
    wrongAnswers.forEach((answer, index) => {
        htmlContent += `
            <p><strong>Question:</strong> ${answer.question}</p>
            <p><strong>Votre réponse:</strong> ${answer.userAnswer}</p>
            <p><strong>Réponse correcte:</strong> ${answer.correctAnswer}</p>
            <p><strong>Informations supplémentaires:</strong> ${answer.info}</p>
            <hr>
        `;
    });
    content.innerHTML = htmlContent;
}

// Mélanger les réponses de manière aléatoire
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Les nouvelles questions et réponses (10 questions par sujet)
function getQuestions(topic) {
    const questions = {
        air: [
            {
                question: "Quelle est la principale source de pollution de l'air ?",
                options: ["La combustion des combustibles fossiles", "La plantation d'arbres", "Les vents naturels", "Les pluies"],
                correctAnswer: 0,
                topic: 'air',
                info: "La combustion des combustibles fossiles libère des gaz nocifs comme le dioxyde de carbone."
            },
            {
                question: "Quels sont les gaz responsables de la pollution atmosphérique ?",
                options: ["L'oxygène", "Le dioxyde de carbone", "L'azote", "L'hydrogène"],
                correctAnswer: 1,
                topic: 'air',
                info: "Le dioxyde de carbone contribue au phénomène de réchauffement climatique."
            },
            {
                question: "Quels sont les effets sanitaires de la pollution de l'air ?",
                options: ["Maladies respiratoires", "Amélioration de la santé", "Augmentation de l'énergie", "Amélioration de la vision"],
                correctAnswer: 0,
                topic: 'air',
                info: "La pollution de l'air cause des maladies comme l'asthme et les allergies."
            },
            {
                question: "Quel est le rôle des arbres dans la réduction de la pollution de l'air ?",
                options: ["Production d'oxygène", "Émission de dioxyde de carbone", "Attraction de la poussière", "Augmentation de l'humidité"],
                correctAnswer: 0,
                topic: 'air',
                info: "Les arbres absorbent le dioxyde de carbone et libèrent de l'oxygène."
            },
            {
                question: "Quel est le pays qui pollue le plus l'air ?",
                options: ["La Chine", "Le Canada", "L'Australie", "Le Japon"],
                correctAnswer: 0,
                topic: 'air',
                info: "La Chine est l'un des pays qui polluent le plus l'air en raison de son industrie."
            },
            {
                question: "Quel est l'impact de la pollution de l'air sur les cultures agricoles ?",
                options: ["Augmentation de la production", "Détérioration des cultures", "Amélioration de la qualité du sol", "Augmentation des pluies"],
                correctAnswer: 1,
                topic: 'air',
                info: "La pollution de l'air détruit les cultures à cause des substances toxiques."
            },
            {
                question: "Quels sont les gaz responsables du réchauffement climatique ?",
                options: ["L'oxygène", "Le dioxyde de carbone", "L'azote", "L'hydrogène"],
                correctAnswer: 1,
                topic: 'air',
                info: "Le dioxyde de carbone est l'un des principaux gaz responsables du réchauffement climatique."
            },
            {
                question: "Quelles sont les méthodes pour réduire la pollution de l'air ?",
                options: ["Augmenter les usines", "Planter des arbres", "Brûler les déchets", "Utiliser du plastique"],
                correctAnswer: 1,
                topic: 'air',
                info: "Planter des arbres aide à absorber le dioxyde de carbone."
            },
            {
                question: "Quel est l'impact de la pollution de l'air sur le climat ?",
                options: ["Baisse des températures", "Changement climatique", "Augmentation des pluies", "Amélioration de l'air"],
                correctAnswer: 1,
                topic: 'air',
                info: "La pollution de l'air entraîne un changement climatique en raison du réchauffement climatique."
            },
            {
                question: "Quel est le rôle principal des énergies renouvelables dans la réduction de la pollution de l'air ?",
                options: ["Augmenter la pollution", "Réduire les émissions", "Augmenter l'utilisation des combustibles fossiles", "Aucune des réponses ci-dessus"],
                correctAnswer: 1,
                topic: 'air',
                info: "Les énergies renouvelables réduisent les émissions de gaz nocifs."
            }
        ],
        environment: [
            {
                question: "Qu'est-ce que la pollution environnementale ?",
                options: ["Augmentation des plantes", "Propagation des déchets", "Nettoyage de l'environnement", "Utilisation des énergies renouvelables"],
                correctAnswer: 1,
                topic: 'environment',
                info: "La pollution environnementale est causée par les déchets industriels et les activités humaines."
            },
            {
                question: "Quelle est la meilleure méthode pour réduire la pollution environnementale ?",
                options: ["Recyclage", "Incinération des déchets", "Jeter les déchets dans la mer", "Augmenter l'utilisation du plastique"],
                correctAnswer: 0,
                topic: 'environment',
                info: "Le recyclage réduit la quantité de déchets et améliore l'environnement."
            },
            {
                question: "Quel est l'impact de la pollution environnementale sur la vie marine ?",
                options: ["Augmentation des poissons", "Destruction des habitats marins", "Amélioration de la qualité de l'eau", "Augmentation de l'oxygène"],
                correctAnswer: 1,
                topic: 'environment',
                info: "La pollution environnementale détruit les habitats marins."
            },
            {
                question: "Quel matériau est le plus courant dans la pollution environnementale ?",
                options: ["Le plastique", "Le papier", "Le verre", "Les métaux"],
                correctAnswer: 0,
                topic: 'environment',
                info: "Le plastique est l'un des matériaux les plus polluants pour l'environnement."
            },
            {
                question: "Quel est le rôle principal des énergies renouvelables dans la réduction de la pollution environnementale ?",
                options: ["Augmenter la pollution", "Réduire les émissions", "Augmenter l'utilisation des combustibles fossiles", "Aucune des réponses ci-dessus"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Les énergies renouvelables réduisent les émissions de carbone."
            },
            {
                question: "Quel est l'impact de la pollution environnementale sur le sol ?",
                options: ["Augmentation de la fertilité", "Dégradation du sol", "Amélioration de la qualité du sol", "Augmentation des pluies"],
                correctAnswer: 1,
                topic: 'environment',
                info: "La pollution environnementale dégrade le sol à cause des substances chimiques."
            },
            {
                question: "Quelle est la meilleure méthode pour éliminer les déchets ?",
                options: ["Recyclage", "Jeter les déchets dans la mer", "Incinérer les déchets", "Augmenter l'utilisation du plastique"],
                correctAnswer: 0,
                topic: 'environment',
                info: "Le recyclage est la meilleure méthode pour éliminer les déchets."
            },
            {
                question: "Quel est l'impact de la pollution environnementale sur la santé publique ?",
                options: ["Amélioration de la santé", "Augmentation des maladies", "Augmentation de l'énergie", "Amélioration de la vision"],
                correctAnswer: 1,
                topic: 'environment',
                info: "La pollution environnementale augmente les maladies comme le cancer et les maladies respiratoires."
            },
            {
                question: "Quelle est la meilleure méthode pour préserver l'eau ?",
                options: ["Négliger la propreté", "Réduire l'utilisation des produits chimiques", "Augmenter les rejets de déchets", "Incinérer les déchets"],
                correctAnswer: 1,
                topic: 'environment',
                info: "Réduire l'utilisation des produits chimiques aide à préserver l'eau."
            },
            {
                question: "Quel est l'impact de la pollution environnementale sur l'atmosphère ?",
                options: ["Amélioration de la qualité de l'air", "Augmentation de la pollution de l'air", "Augmentation de l'oxygène", "Amélioration de la visibilité"],
                correctAnswer: 1,
                topic: 'environment',
                info: "La pollution environnementale augmente la pollution de l'air."
            }
        ],
      water: [
    {
        question: "Quelles sont les sources de pollution de l'eau ?",
        options: ["Déchets chimiques", "Arbres", "Air", "Sol"],
        correctAnswer: 0,
        topic: 'water',
        info: "Les déchets chimiques sont l'une des principales sources de pollution de l'eau."
    },
    {
        question: "Quels sont les principaux effets de la pollution de l'eau sur la santé humaine ?",
        options: ["Propagation des maladies", "Amélioration de la santé", "Augmentation de l'énergie", "Amélioration de la qualité de l'eau"],
        correctAnswer: 0,
        topic: 'water',
        info: "La pollution de l'eau provoque des maladies comme le choléra et la typhoïde."
    },
    {
        question: "Quel est le rôle principal des océans dans l'écosystème ?",
        options: ["Régulation du climat", "Pollution de l'air", "Augmentation des déchets", "Réduction de l'oxygène"],
        correctAnswer: 0,
        topic: 'water',
        info: "Les océans jouent un rôle clé dans la régulation du climat mondial."
    },
    {
        question: "Quel est le matériau le plus polluant pour les océans ?",
        options: ["Plastique", "Papier", "Verre", "Métaux"],
        correctAnswer: 0,
        topic: 'water',
        info: "Le plastique est l'un des matériaux les plus polluants pour les océans."
    },
    {
        question: "Quelle est la meilleure méthode pour réduire la pollution de l'eau ?",
        options: ["Réduire l'utilisation de produits chimiques", "Augmenter le rejet des déchets", "Brûler les déchets", "Négliger l'hygiène"],
        correctAnswer: 0,
        topic: 'water',
        info: "Réduire l'utilisation de produits chimiques aide à réduire la pollution de l'eau."
    },
    {
        question: "Quel est l'impact de la pollution de l'eau sur la vie marine ?",
        options: ["Augmentation des poissons", "Destruction des habitats marins", "Amélioration de la qualité de l'eau", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'water',
        info: "La pollution de l'eau conduit à la destruction des habitats marins."
    },
    {
        question: "Quel est l'impact de la pollution de l'eau sur l'agriculture ?",
        options: ["Augmentation des cultures", "Dommages aux cultures", "Amélioration de la qualité du sol", "Augmentation des pluies"],
        correctAnswer: 1,
        topic: 'water',
        info: "La pollution de l'eau endommage les cultures agricoles."
    },
    {
        question: "Quel est le rôle principal des rivières dans l'écosystème ?",
        options: ["Fournir de l'eau", "Pollution de l'air", "Augmentation des déchets", "Réduction de l'oxygène"],
        correctAnswer: 0,
        topic: 'water',
        info: "Les rivières jouent un rôle essentiel en fournissant de l'eau aux écosystèmes."
    },
    {
        question: "Quel est l'impact de la pollution de l'eau sur les oiseaux marins ?",
        options: ["Augmentation du nombre d'oiseaux", "Destruction des habitats des oiseaux", "Amélioration de la qualité de l'eau", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'water',
        info: "La pollution de l'eau détruit les habitats des oiseaux marins."
    },
    {
        question: "Quelle est la meilleure méthode pour nettoyer les océans ?",
        options: ["Négliger l'hygiène", "Supprimer les déchets plastiques", "Augmenter le rejet des déchets", "Brûler les déchets"],
        correctAnswer: 1,
        topic: 'water',
        info: "Supprimer les déchets plastiques est la meilleure méthode pour nettoyer les océans."
    }
],
warming: [
    {
        question: "Qu'est-ce que le réchauffement climatique ?",
        options: ["Baisse de la température de la Terre", "Hausse de la température de la Terre", "Pollution de l'air", "Pollution de l'eau"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Le réchauffement climatique est une augmentation de la température de la Terre due à l'augmentation des gaz à effet de serre."
    },
    {
        question: "Quels sont les gaz responsables du réchauffement climatique ?",
        options: ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Le dioxyde de carbone est l'un des principaux gaz responsables du réchauffement climatique."
    },
    {
        question: "Quels sont les principaux effets du réchauffement climatique ?",
        options: ["Élévation du niveau de la mer", "Baisse des températures", "Augmentation de la glace polaire", "Amélioration de la qualité de l'air"],
        correctAnswer: 0,
        topic: 'warming',
        info: "Le réchauffement climatique provoque une élévation du niveau de la mer en raison de la fonte des glaces."
    },
    {
        question: "Quel est le rôle principal des forêts dans la lutte contre le réchauffement climatique ?",
        options: ["Absorption du dioxyde de carbone", "Rejet de dioxyde de carbone", "Pollution de l'air", "Augmentation de la température"],
        correctAnswer: 0,
        topic: 'warming',
        info: "Les forêts absorbent le dioxyde de carbone et aident à limiter le réchauffement climatique."
    },
    {
        question: "Quelle est la meilleure méthode pour lutter contre le réchauffement climatique ?",
        options: ["Utilisation des énergies renouvelables", "Augmentation de l'utilisation des combustibles fossiles", "Destruction des forêts", "Négligence des déchets"],
        correctAnswer: 0,
        topic: 'warming',
        info: "L'utilisation des énergies renouvelables aide à réduire les émissions de gaz à effet de serre."
    },
    {
        question: "Quel est l'impact du réchauffement climatique sur l'agriculture ?",
        options: ["Augmentation des cultures", "Dommages aux cultures", "Amélioration de la qualité du sol", "Augmentation des pluies"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Le réchauffement climatique endommage les cultures en raison des changements climatiques."
    },
    {
        question: "Quel est l'impact du réchauffement climatique sur les calottes glaciaires ?",
        options: ["Augmentation de la glace", "Fonte de la glace", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Le réchauffement climatique entraîne la fonte des calottes glaciaires."
    },
    {
        question: "Quel est l'impact du réchauffement climatique sur les modèles météorologiques ?",
        options: ["Stabilité du climat", "Changements dans le climat", "Augmentation des pluies", "Amélioration du temps"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Le réchauffement climatique entraîne des changements dans les modèles météorologiques."
    },
    {
        question: "Quel est l'impact du réchauffement climatique sur les animaux ?",
        options: ["Augmentation de la biodiversité", "Extinction de certaines espèces", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'warming',
        info: "Le réchauffement climatique entraîne l'extinction de certaines espèces animales."
    },
    {
        question: "Quelle est la meilleure méthode pour réduire les émissions de gaz à effet de serre ?",
        options: ["Augmentation des industries", "Utilisation des énergies renouvelables", "Destruction des forêts", "Négligence des déchets"],
        correctAnswer: 1,
        topic: 'warming',
        info: "L'utilisation des énergies renouvelables aide à réduire les émissions de gaz à effet de serre."
    }
],
      "solid-waste": [
    // Les nouvelles questions sur la gestion des déchets solides (15 questions)
    {
        question: "Qu'est-ce que les déchets solides ?",
        options: ["Les déchets ménagers", "Les déchets liquides", "Les gaz nocifs", "Les pluies"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Les déchets solides incluent les déchets ménagers, industriels et médicaux."
    },
    {
        question: "Quelle est la meilleure méthode pour gérer les déchets solides ?",
        options: ["Recyclage", "Jeter les déchets dans les rues", "Brûler les déchets", "Laisser les déchets se décomposer"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Le recyclage est la meilleure méthode pour gérer les déchets solides."
    },
    {
        question: "Quel est l'impact des déchets solides sur l'environnement ?",
        options: ["Pollution du sol et de l'eau", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène", "Augmentation des pluies"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Les déchets solides causent une pollution du sol et de l'eau s'ils ne sont pas éliminés correctement."
    },
    {
        question: "Quelle est la technologie de conversion des déchets en énergie ?",
        options: ["Recyclage", "Conversion des déchets en compost", "Conversion des déchets en énergie électrique", "Laisser les déchets se décomposer"],
        correctAnswer: 2,
        topic: 'solid-waste',
        info: "La technologie de conversion des déchets en énergie est utilisée pour transformer les déchets en électricité."
    },
    {
        question: "Quel est le rôle principal des décharges sanitaires dans la gestion des déchets ?",
        options: ["Élimination sécurisée des déchets", "Augmentation de la pollution", "Amélioration de la qualité de l'air", "Augmentation des pluies"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Les décharges sanitaires offrent une méthode sûre pour éliminer les déchets solides."
    },
    {
        question: "Quel est l'impact des déchets électroniques sur l'environnement ?",
        options: ["Augmentation de la pollution", "Amélioration de la santé", "Augmentation de l'énergie", "Amélioration de la visibilité"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Les déchets électroniques contiennent des substances toxiques qui polluent l'environnement."
    },
    {
        question: "Quels sont les avantages du recyclage ?",
        options: ["Réduction des déchets", "Augmentation de la pollution", "Augmentation de l'utilisation du plastique", "Augmentation de la production de gaz nocifs"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Le recyclage réduit la quantité de déchets et fournit des matières premières."
    },
    {
        question: "Quels sont les déchets dangereux ?",
        options: ["Les déchets ordinaires", "Les déchets médicaux", "Les déchets ménagers", "Les déchets agricoles"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Les déchets dangereux incluent les déchets médicaux et chimiques qui nécessitent une élimination sécurisée."
    },
    {
        question: "Quelle est l'importance du tri lors de l'élimination des déchets ?",
        options: ["Augmentation de la pollution", "Facilitation du recyclage", "Augmentation des déchets", "Augmentation de l'utilisation du plastique"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Le tri facilite le processus de recyclage et réduit les déchets."
    },
    {
        question: "Quel est l'impact des déchets solides sur la santé publique ?",
        options: ["Augmentation des maladies", "Amélioration de la santé", "Augmentation de l'énergie", "Amélioration de la visibilité"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Les déchets solides provoquent des maladies comme les allergies et les empoisonnements."
    },
    {
        question: "Quels sont les déchets organiques ?",
        options: ["Les déchets ménagers", "Les restes de nourriture", "Les déchets électroniques", "Les déchets médicaux"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Les déchets organiques comprennent les restes de nourriture et les matériaux biodégradables."
    },
    {
        question: "Quel est le rôle du compost dans la gestion des déchets ?",
        options: ["Transformer les déchets organiques en compost", "Augmentation de la pollution", "Amélioration de la qualité de l'air", "Augmentation des pluies"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Le compost transforme les déchets organiques en engrais naturel."
    },
    {
        question: "Quels sont les déchets non biodégradables ?",
        options: ["Le plastique", "Les restes de nourriture", "Le papier", "Le bois"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Le plastique est l'un des principaux déchets non biodégradables."
    },
    {
        question: "Quel est l'impact des déchets solides sur la faune sauvage ?",
        options: ["Augmentation de la biodiversité", "Destruction des habitats", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "Les déchets solides détruisent les habitats naturels des animaux."
    },
    {
        question: "Quelle est la meilleure méthode pour éliminer les déchets électroniques ?",
        options: ["Recyclage", "Les jeter dans les rues", "Les brûler", "Les laisser se décomposer"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "Le recyclage est la meilleure méthode pour éliminer les déchets électroniques."
    }
],
  "renewable-energy": [
    // Les nouvelles questions sur l'énergie renouvelable (15 questions)
    {
        question: "Qu'est-ce que l'énergie renouvelable ?",
        options: ["L'énergie solaire", "L'énergie fossile", "L'énergie nucléaire", "L'énergie électromagnétique"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "L'énergie renouvelable provient de sources naturelles comme le soleil, le vent et l'eau."
    },
    {
        question: "Quel est un exemple d'énergie renouvelable ?",
        options: ["Le charbon", "Le vent", "Le pétrole", "Le gaz naturel"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "Le vent est une source d'énergie renouvelable qui aide à réduire les émissions de carbone."
    },
    {
        question: "Quels sont les avantages de l'utilisation de l'énergie solaire ?",
        options: ["Augmentation de la pollution", "Réduction des émissions de carbone", "Augmentation de la consommation d'énergie fossile", "Aucune des réponses ci-dessus"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "L'énergie solaire réduit les émissions de carbone et est une source d'énergie propre."
    },
    {
        question: "Quel est le principal obstacle à l'utilisation de l'énergie renouvelable ?",
        options: ["Coût élevé", "Abondance excessive", "Facilité d'utilisation", "Aucune des réponses ci-dessus"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "Le coût élevé de la création des infrastructures est l'un des principaux défis."
    },
    {
        question: "Quelle est l'énergie produite par le mouvement de l'eau ?",
        options: ["L'énergie solaire", "L'énergie éolienne", "L'énergie hydraulique", "L'énergie thermique"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "L'énergie hydraulique est produite par le mouvement de l'eau, comme les barrages et les rivières."
    },
    {
        question: "Quels sont les avantages de l'utilisation de l'énergie éolienne ?",
        options: ["Augmentation de la pollution", "Réduction des émissions de carbone", "Augmentation de l'utilisation d'énergie fossile", "Aucune des réponses ci-dessus"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "L'énergie éolienne réduit les émissions de carbone et est une source d'énergie propre."
    },
    {
        question: "Qu'est-ce que l'énergie géothermique ?",
        options: ["L'énergie solaire", "L'énergie extraite du sous-sol", "L'énergie éolienne", "L'énergie hydraulique"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "L'énergie géothermique provient de la chaleur présente dans le sous-sol de la Terre."
    },
    {
        question: "Quel est le rôle principal de l'énergie renouvelable dans la réduction de la pollution ?",
        options: ["Augmentation de la pollution", "Réduction des émissions", "Augmentation de l'utilisation d'énergie fossile", "Aucune des réponses ci-dessus"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "L'énergie renouvelable réduit les émissions de carbone."
    },
    {
        question: "Quel est le pays qui utilise le plus l'énergie renouvelable ?",
        options: ["La Chine", "Le Canada", "L'Allemagne", "Le Japon"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "La Chine est l'un des pays qui utilise le plus l'énergie renouvelable."
    },
    {
        question: "Quel est l'impact de l'énergie renouvelable sur l'économie ?",
        options: ["Augmentation du chômage", "Création de nouveaux emplois", "Augmentation de la pollution", "Aucune des réponses ci-dessus"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "L'énergie renouvelable crée de nouveaux emplois dans divers domaines."
    },
    {
        question: "Quelle est l'énergie qui dépend des marées ?",
        options: ["L'énergie solaire", "L'énergie éolienne", "L'énergie marémotrice", "L'énergie thermique"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "L'énergie marémotrice dépend du mouvement des marées."
    },
    {
        question: "Quel est l'impact de l'énergie renouvelable sur l'environnement ?",
        options: ["Augmentation de la pollution", "Réduction de la pollution", "Augmentation de l'utilisation d'énergie fossile", "Aucune des réponses ci-dessus"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "L'énergie renouvelable réduit la pollution environnementale."
    },
    {
        question: "Quelle est l'énergie produite par la biomasse ?",
        options: ["L'énergie solaire", "L'énergie biomasse", "L'énergie éolienne", "L'énergie hydraulique"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "L'énergie biomasse est produite à partir de matières organiques comme les plantes."
    },
    {
        question: "Quel est l'impact de l'énergie renouvelable sur la sécurité énergétique ?",
        options: ["Augmentation de la dépendance au pétrole", "Réduction de la dépendance aux énergies fossiles", "Augmentation de la pollution", "Aucune des réponses ci-dessus"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "L'énergie renouvelable réduit la dépendance aux énergies fossiles."
    },
    {
        question: "Quelle est l'énergie produite par le mouvement des vagues ?",
        options: ["L'énergie solaire", "L'énergie éolienne", "L'énergie houlomotrice", "L'énergie thermique"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "L'énergie houlomotrice dépend du mouvement des vagues."
    },
    {
        question: "Quel est l'impact de l'énergie renouvelable sur le climat ?",
        options: ["Augmentation des émissions", "Réduction des émissions", "Augmentation de la pollution", "Aucune des réponses ci-dessus"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "L'énergie renouvelable réduit les émissions nocives pour le climat."
    }
],
    biodiversity: [
    // Les nouvelles questions sur la biodiversité (15 questions)
    {
        question: "Qu'est-ce que la biodiversité ?",
        options: ["La diversité de la vie sur Terre", "La diversité des roches", "La diversité des climats", "La diversité des couleurs"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "La biodiversité fait référence à la diversité de la vie sur Terre."
    },
    {
        question: "Quelle est l'importance de la biodiversité ?",
        options: ["Amélioration de l'économie", "Maintien de l'équilibre écologique", "Augmentation de la pollution", "Augmentation de l'utilisation du plastique"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "La biodiversité joue un rôle vital dans le maintien de l'équilibre écologique."
    },
    {
        question: "Quelles sont les plus grandes menaces pour la biodiversité ?",
        options: ["Destruction des habitats", "Plantation d'arbres", "Utilisation des énergies renouvelables", "Nettoyage de l'environnement"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "La destruction des habitats naturels est l'une des plus grandes menaces pour la biodiversité."
    },
    {
        question: "Quel est le rôle principal des plantes dans la biodiversité ?",
        options: ["Production d'oxygène", "Augmentation de la pollution", "Émission de dioxyde de carbone", "Réduction des pluies"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Les plantes jouent un rôle essentiel dans la production d'oxygène et le maintien de l'équilibre écologique."
    },
    {
        question: "Quel est l'impact du changement climatique sur la biodiversité ?",
        options: ["Augmentation de la diversité", "Diminution de la diversité", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Le changement climatique entraîne une diminution de la biodiversité en raison de la destruction des habitats."
    },
    {
        question: "Quel est l'impact de la surpêche sur la biodiversité ?",
        options: ["Augmentation de la diversité", "Diminution de la diversité", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "La surpêche entraîne une diminution de la biodiversité."
    },
    {
        question: "Quelles sont les régions riches en biodiversité ?",
        options: ["Les déserts", "Les forêts tropicales", "Les montagnes", "Les régions polaires"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Les forêts tropicales sont parmi les régions les plus riches en biodiversité."
    },
    {
        question: "Quel est l'impact de l'agriculture excessive sur la biodiversité ?",
        options: ["Augmentation de la diversité", "Diminution de la diversité", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "L'agriculture excessive détruit les habitats naturels et réduit la biodiversité."
    },
    {
        question: "Quel est le rôle des insectes dans la biodiversité ?",
        options: ["Pollinisation", "Augmentation de la pollution", "Émission de dioxyde de carbone", "Réduction des pluies"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Les insectes jouent un rôle clé dans la pollinisation et la production alimentaire."
    },
    {
        question: "Quel est l'impact des forêts sur la biodiversité ?",
        options: ["Augmentation de la diversité", "Diminution de la diversité", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "Les forêts fournissent des habitats naturels et préservent la biodiversité."
    },
    {
        question: "Quel est l'impact de l'urbanisation sur la biodiversité ?",
        options: ["Augmentation de la diversité", "Diminution de la diversité", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "L'urbanisation entraîne la destruction des habitats naturels et une diminution de la biodiversité."
    },
    {
        question: "Quel est l'impact de la pollution sur la biodiversité ?",
        options: ["Augmentation de la diversité", "Diminution de la diversité", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "La pollution détruit les habitats naturels et réduit la biodiversité."
    },
    {
        question: "Quel est l'impact du tourisme sur la biodiversité ?",
        options: ["Augmentation de la diversité", "Diminution de la diversité", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Le tourisme excessif détruit les habitats naturels et réduit la biodiversité."
    },
    {
        question: "Quel est l'impact des incendies de forêt sur la biodiversité ?",
        options: ["Augmentation de la diversité", "Diminution de la diversité", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Les incendies détruisent les habitats naturels et réduisent la biodiversité."
    },
    {
        question: "Quel est l'impact des guerres sur la biodiversité ?",
        options: ["Augmentation de la diversité", "Diminution de la diversité", "Amélioration de la qualité de l'air", "Augmentation de l'oxygène"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "Les guerres détruisent les habitats naturels et réduisent la biodiversité."
     }
],
         };
    return questions[topic] || [];
}