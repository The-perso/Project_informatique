// تعريف المتغيرات
let userName = "";
let userAge = "";
let userSchool = "";
let userScore = 0;
let questions = [];
let currentQuestionIndex = 0;
let timerInterval;
let wrongAnswers = [];
// الانتقال من واجهة الترحيب إلى الواجهة الرئيسية
document.getElementById('user-info-form').onsubmit = function(event) {
    event.preventDefault();
    userName = document.getElementById('name').value;
    userAge = document.getElementById('age').value;
    userSchool = document.getElementById('school').value;
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
    showSection('home');
};
// عرض الأقسام
function showSection(sectionId) {
    const content = document.getElementById('content');
    const developersSection = document.getElementById('developers-section');
    let htmlContent = '';
    switch (sectionId) {
        case 'home':
            htmlContent = '<p>مرحبًا بك في الصفحة الرئيسية.</p>';
            developersSection.style.display = 'block';
            break;
        case 'training':
            htmlContent = `
                <h2>فضاء التكوين</h2>
                <button onclick="showTopic('air')">تلوث الهواء</button>
                <button onclick="showTopic('environment')">التلوث البيئي</button>
                <button onclick="showTopic('water')">تلوث المياه والمحيطات</button>
                <button onclick="showTopic('warming')">الاحتباس الحراري</button>
                <button onclick="showTopic('solid-waste')">إدارة النفايات الصلبة</button>
                <button onclick="showTopic('renewable-energy')">الطاقة المتجددة</button>
                <button onclick="showTopic('biodiversity')">التنوع البيولوجي</button>
            `;
            developersSection.style.display = 'none';
            break;
        case 'about':
            htmlContent = `
                <h2>حول المسابقة</h2>
                <p>تعريف البرنامج هو لعبة تتكون من عدة أسئلة كل سؤال له أربعة خيارات.</p>
                <p>شروط المشاركة: التوفر على هاتف أو حاسوب والدخول للموقع المخصص لنادي البيئة للمؤسسة.</p>
                <p>الهدف من البرنامج: تمكين جميع التلميذات والتلاميذ من اجتياز مسابقة علال بن عبد الله للبيئة وتشجيع التلاميذ على استعمال الوسائل التكنولوجية الحديثة فيما هو تعليمي ومفيد للبيئة.</p>
            `;
            developersSection.style.display = 'none';
            break;
        case 'participate':
            htmlContent = `
                <h2>المشاركة في المسابقة</h2>
                <button onclick="startQuiz('air')">تلوث الهواء</button>
                <button onclick="startQuiz('environment')">التلوث البيئي</button>
                <button onclick="startQuiz('water')">تلوث المياه والمحيطات</button>
                <br><br><button onclick="startQuiz('warming')">الاحتباس الحراري</button>
                <button onclick="startQuiz('solid-waste')">إدارة النفايات الصلبة</button>
                <button onclick="startQuiz('renewable-energy')">الطاقة المتجددة</button>
                <button onclick="startQuiz('biodiversity')">التنوع البيولوجي</button>
            `;
            developersSection.style.display = 'none';
            break;
            // إضافة قسم العبارات التحسيسية
            const awarenessMessages = `
    <div id="awareness-messages" class="awareness-section">
        <h3 class="awareness-title">رسائل تحسيسية</h3>
        <p class="awareness-message">"البيئة هي ميراثنا المشترك، فلنحافظ عليها للأجيال القادمة."</p>
        <p class="awareness-message">"كل قطرة ماء تُهدر اليوم قد تكون غالية غدًا."</p>
        <p class="awareness-message">"زراعة شجرة واحدة يمكن أن تصنع فرقًا كبيرًا."</p>
        <p class="awareness-message">"التلوث مشكلة الجميع، والحل يبدأ منك."</p>
        <p class="awareness-message">"الطبيعة لا تحتاجنا، لكننا نحتاج الطبيعة."</p>
    </div>
`;

            // تعديل وظيفة showSection لإظهار الرسائل التحسيسية فقط في الصفحة الرئيسية
            function showSection(sectionId) {
                const content = document.getElementById('content');
                const developersSection = document.getElementById('developers-section');
                let htmlContent = '';

                switch (sectionId) {
                    case 'home':
                        htmlContent = '<p>مرحبًا بك في الصفحة الرئيسية.</p>';
                        // إضافة الرسائل التحسيسية فقط في الصفحة الرئيسية
                        htmlContent += awarenessMessages;
                        developersSection.style.display = 'block';
                        break;
                    case 'training':
                        htmlContent = `
                <h2>فضاء التكوين</h2>
                <button onclick="showTopic('air')">تلوث الهواء</button>
                <button onclick="showTopic('environment')">التلوث البيئي</button>
                <button onclick="showTopic('water')">تلوث المياه والمحيطات</button>
                <button onclick="showTopic('warming')">الاحتباس الحراري</button>
                <button onclick="showTopic('solid-waste')">إدارة النفايات الصلبة</button>
                <button onclick="showTopic('renewable-energy')">الطاقة المتجددة</button>
                <button onclick="showTopic('biodiversity')">التنوع البيولوجي</button>
            `;
                        developersSection.style.display = 'none';
                        break;
                    case 'about':
                        htmlContent = `
                <h2>حول المسابقة</h2>
                <p>تعريف البرنامج هو لعبة تتكون من عدة أسئلة كل سؤال له أربعة خيارات.</p>
                <p>شروط المشاركة: التوفر على هاتف أو حاسوب والدخول للموقع المخصص لنادي البيئة للمؤسسة.</p>
                <p>الهدف من البرنامج: تمكين جميع التلميذات والتلاميذ من اجتياز مسابقة علال بن عبد الله للبيئة وتشجيع التلاميذ على استعمال الوسائل التكنولوجية الحديثة فيما هو تعليمي ومفيد للبيئة.</p>
            `;
                        developersSection.style.display = 'none';
                        break;
                    case 'participate':
                        htmlContent = `
                <h2>المشاركة في المسابقة</h2>
                <button onclick="startQuiz('air')">تلوث الهواء</button>
                <button onclick="startQuiz('environment')">التلوث البيئي</button>
                <button onclick="startQuiz('water')">تلوث المياه والمحيطات</button>
                <button onclick="startQuiz('warming')">الاحتباس الحراري</button>
                <button onclick="startQuiz('solid-waste')">إدارة النفايات الصلبة</button>
                <button onclick="startQuiz('renewable-energy')">الطاقة المتجددة</button>
                <button onclick="startQuiz('biodiversity')">التنوع البيولوجي</button>
            `;
                        developersSection.style.display = 'none';
                        break;
                }
                content.innerHTML = htmlContent;
            }
    }
    content.innerHTML = htmlContent;
}
// عرض معلومات الموضوع
function showTopic(topic) {
    const content = document.getElementById('content');
    let info = '';
    switch (topic) {
        case 'air':
            info = `
                <h3>تلوث الهواء</h3>
                <p>تلوث الهواء يحدث بسبب انبعاث الغازات الضارة من السيارات والمصانع. هذه الغازات تشمل ثاني أكسيد الكربون وأكاسيد النيتروجين التي تسبب أمراضًا خطيرة مثل الربو والحساسية.</p>
                <p>يمكن الحد من تلوث الهواء عن طريق:</p>
                <ul>
                    <li>زراعة المزيد من الأشجار.</li>
                    <li>استخدام الطاقة المتجددة.</li>
                    <li>تحسين كفاءة المحركات.</li>
                </ul>
            `;
            break;
        case 'environment':
            info = `
                <h3>التلوث البيئي</h3>
                <p>يشمل التلوث البيئي تلوث الهواء والماء والتربة. ينتج هذا التلوث عن الأنشطة البشرية مثل الصناعة وإلقاء النفايات بشكل غير صحيح.</p>
                <p>طرق الحد من التلوث البيئي:</p>
                <ul>
                    <li>إعادة التدوير.</li>
                    <li>تقليل استخدام البلاستيك.</li>
                    <li>الاعتماد على الطاقة النظيفة.</li>
                </ul>
            `;
            break;
        case 'water':
            info = `
                <h3>تلوث المياه والمحيطات</h3>
                <p>يحدث بسبب إلقاء النفايات الكيميائية والنفطية في المسطحات المائية. يؤدي ذلك إلى تدمير الموائل البحرية وانتشار الأمراض.</p>
                <p>حلول لتلوث المياه:</p>
                <ul>
                    <li>معالجة المياه قبل تصريفها.</li>
                    <li>التخلص الآمن من النفايات الصناعية.</li>
                    <li>تنظيف الشواطئ والمحيطات.</li>
                </ul>
            `;
            break;
        case 'warming':
            info = `
                <h3>الاحتباس الحراري</h3>
                <p>ارتفاع درجة حرارة الأرض بسبب زيادة غازات الدفيئة مثل ثاني أكسيد الكربون والميثان. يؤدي ذلك إلى ذوبان الجليد القطبي وارتفاع مستوى سطح البحر.</p>
                <p>حلول لمواجهة الاحتباس الحراري:</p>
                <ul>
                    <li>استخدام الطاقة المتجددة.</li>
                    <li>زيادة الغطاء الأخضر.</li>
                    <li>تقليل الانبعاثات الكربونية.</li>
                </ul>
            `;
            break;
        case 'solid-waste':
            info = `
                <h3>إدارة النفايات الصلبة</h3>
                <p>النفايات الصلبة هي واحدة من أكبر التحديات البيئية. تشمل النفايات المنزلية والصناعية والطبية. يمكن أن تسبب هذه النفايات تلوثًا بيئيًا خطيرًا إذا لم يتم التخلص منها بشكل صحيح.</p>
                <p>طرق إدارة النفايات الصلبة:</p>
                <ul>
                    <li>إعادة التدوير.</li>
                    <li>تحويل النفايات إلى طاقة.</li>
                    <li>التخلص الآمن في مكبات صحية.</li>
                </ul>
            `;
            break;
        case 'renewable-energy':
            info = `
                <h3>الطاقة المتجددة</h3>
                <p>الطاقة المتجددة هي مصدر مستدام للطاقة يأتي من مصادر طبيعية مثل الشمس والرياح والماء. تساعد هذه الطاقة في تقليل الاعتماد على الوقود الأحفوري وتقليل الانبعاثات الكربونية.</p>
                <p>أنواع الطاقة المتجددة:</p>
                <ul>
                    <li>الطاقة الشمسية.</li>
                    <li>الطاقة الريحية.</li>
                    <li>الطاقة المائية.</li>
                </ul>
            `;
            break;
        case 'biodiversity':
            info = `
                <h3>التنوع البيولوجي</h3>
                <p>التنوع البيولوجي يشير إلى تنوع الحياة على الأرض، بما في ذلك النباتات والحيوانات والنظم البيئية. يلعب التنوع البيولوجي دورًا حيويًا في الحفاظ على التوازن البيئي.</p>
                <p>أسباب فقدان التنوع البيولوجي:</p>
                <ul>
                    <li>تدمير الموائل الطبيعية.</li>
                    <li>التلوث البيئي.</li>
                    <li>التغير المناخي.</li>
                </ul>
            `;
            break;
    }
    content.innerHTML = `${info}<button onclick="showSection('training')">العودة إلى فضاء التكوين</button>`;
}
// بدء المسابقة
function startQuiz(topic) {
    questions = getQuestions(topic);
    currentQuestionIndex = 0;
    userScore = 0;
    wrongAnswers = [];
    displayQuestion();
}

// عرض السؤال
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
        <p>الوقت المتبقي: <span id="timer">20</span> ثانية</p>
    `;
    let timeLeft = 20;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1, correctAnswerIndex); // الإجابة انتهت بسبب انتهاء الوقت
        }
    }, 1000);
}

// التحقق من الإجابة
function checkAnswer(selectedIndex, correctAnswerIndex) {
    const content = document.getElementById('content');
    const question = questions[currentQuestionIndex];
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    if (selectedIndex === correctAnswerIndex) {
        userScore++;
        content.innerHTML += `<p style="color: green;">إجابة صحيحة!</p>`;
    } else {
        content.innerHTML += `
            <p style="color: red;">إجابة خاطئة!</p>
            <p>الإجابة الصحيحة هي: <strong>${question.options[question.correctAnswer]}</strong></p>
            <button onclick="showTopicForRelearning('${question.topic}')">إعادة التكوين</button>
        `;
        wrongAnswers.push({
            question: question.question,
            userAnswer: selectedIndex !== -1 ? question.options[selectedIndex] : "لم تجب",
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

// إنهاء المسابقة
function endQuiz(score) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h3>انتهت المسابقة!</h3>
        <p>نقاطك: ${score} من ${questions.length}</p>
        <button onclick="downloadCertificate()">تحميل الشهادة (PDF)</button>
        <button onclick="showWrongAnswers()">عرض الإجابات الخاطئة</button>
        <button onclick="showSection('home')">العودة إلى الصفحة الرئيسية</button>
    `;
}

// تحميل الشهادة كملف PDF
function downloadCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(`شهادة تقدير`, 80, 20);
    doc.setFontSize(14);
    doc.text(`تهنئة خاصة للطالب/ة: ${userName}`, 20, 40);
    doc.text(`على إتمام المسابقة بنجاح.`, 20, 50);
    doc.text(`عدد النقاط: ${userScore} من ${questions.length}`, 20, 60);
    doc.save(`${userName}-certificate.pdf`);
}

// عرض الإجابات الخاطئة
function showWrongAnswers() {
    const content = document.getElementById('content');
    let htmlContent = '<h3>الإجابات الخاطئة:</h3>';
    wrongAnswers.forEach((answer, index) => {
        htmlContent += `
            <p><strong>السؤال:</strong> ${answer.question}</p>
            <p><strong>إجابتك:</strong> ${answer.userAnswer}</p>
            <p><strong>الإجابة الصحيحة:</strong> ${answer.correctAnswer}</p>
            <p><strong>معلومات إضافية:</strong> ${answer.info}</p>
            <hr>
        `;
    });
    content.innerHTML = htmlContent;
}

// ترتيب الإجابات بشكل عشوائي
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// الأسئلة والأجوبة الجديدة (10 أسئلة لكل موضوع)
function getQuestions(topic) {
    const questions = {
        air: [
            {
                question: "ما هو المصدر الرئيسي لتلوث الهواء؟",
                options: ["حرق الوقود الأحفوري", "زراعة الأشجار", "الرياح الطبيعية", "الأمطار"],
                correctAnswer: 0,
                topic: 'air',
                info: "حرق الوقود الأحفوري يطلق غازات ضارة مثل ثاني أكسيد الكربون."
            },
            {
                question: "ما هي الغازات المسببة للتلوث الجوي؟",
                options: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"],
                correctAnswer: 1,
                topic: 'air',
                info: "ثاني أكسيد الكربون يساهم في ظاهرة الاحتباس الحراري."
            },
            {
                question: "ما هي الآثار الصحية لتلوث الهواء؟",
                options: ["أمراض الجهاز التنفسي", "تحسين الصحة", "زيادة الطاقة", "تحسين الرؤية"],
                correctAnswer: 0,
                topic: 'air',
                info: "تلوث الهواء يسبب أمراضًا مثل الربو والحساسية."
            },
            {
                question: "ما هو دور الأشجار في تقليل تلوث الهواء؟",
                options: ["إنتاج الأكسجين", "إطلاق ثاني أكسيد الكربون", "جذب الغبار", "زيادة الرطوبة"],
                correctAnswer: 0,
                topic: 'air',
                info: "الأشجار تمتص ثاني أكسيد الكربون وتطلق الأكسجين."
            },
            {
                question: "ما هي أكثر الدول تلويثًا للهواء؟",
                options: ["الصين", "كندا", "أستراليا", "اليابان"],
                correctAnswer: 0,
                topic: 'air',
                info: "الصين واحدة من أكثر الدول تلويثًا للهواء بسبب الصناعة."
            },
            {
                question: "ما هو تأثير تلوث الهواء على المحاصيل الزراعية؟",
                options: ["زيادة الإنتاج", "تلف المحاصيل", "تحسين جودة التربة", "زيادة الأمطار"],
                correctAnswer: 1,
                topic: 'air',
                info: "تلوث الهواء يدمر المحاصيل بسبب المواد السامة."
            },
            {
                question: "ما هي الغازات التي تسبب الاحتباس الحراري؟",
                options: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"],
                correctAnswer: 1,
                topic: 'air',
                info: "ثاني أكسيد الكربون أحد الغازات الرئيسية المسببة للاحتباس الحراري."
            },
            {
                question: "ما هي طرق الحد من تلوث الهواء؟",
                options: ["زيادة المصانع", "زراعة الأشجار", "حرق النفايات", "استخدام البلاستيك"],
                correctAnswer: 1,
                topic: 'air',
                info: "زراعة الأشجار تساعد في امتصاص ثاني أكسيد الكربون."
            },
            {
                question: "ما هو تأثير تلوث الهواء على المناخ؟",
                options: ["انخفاض درجة الحرارة", "تغير المناخ", "زيادة الأمطار", "تحسين الجو"],
                correctAnswer: 1,
                topic: 'air',
                info: "تلوث الهواء يؤدي إلى تغير المناخ بسبب ظاهرة الاحتباس الحراري."
            },
            {
                question: "ما هو الدور الرئيسي للطاقة المتجددة في تقليل تلوث الهواء؟",
                options: ["زيادة التلوث", "تقليل الانبعاثات", "زيادة استخدام الوقود الأحفوري", "لا شيء مما ذكر"],
                correctAnswer: 1,
                topic: 'air',
                info: "الطاقة المتجددة تقلل من انبعاثات الغازات الضارة."
            }
        ],
        environment: [
            {
                question: "ما هو التلوث البيئي؟",
                options: ["زيادة النباتات", "انتشار النفايات", "تنظيف البيئة", "استخدام الطاقة المتجددة"],
                correctAnswer: 1,
                topic: 'environment',
                info: "التلوث البيئي يحدث بسبب النفايات الصناعية والأنشطة البشرية."
            },
            {
                question: "ما هي أفضل طريقة للحد من التلوث البيئي؟",
                options: ["إعادة التدوير", "حرق النفايات", "إلقاء النفايات في البحر", "زيادة استخدام البلاستيك"],
                correctAnswer: 0,
                topic: 'environment',
                info: "إعادة التدوير يقلل من كمية النفايات ويحسن البيئة."
            },
            {
                question: "ما هو تأثير التلوث البيئي على الحياة البحرية؟",
                options: ["زيادة الأسماك", "تدمير الموائل البحرية", "تحسين جودة المياه", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'environment',
                info: "التلوث البيئي يؤدي إلى تدمير الموائل البحرية."
            },
            {
                question: "ما هي أكثر المواد شيوعًا في تلوث البيئة؟",
                options: ["البلاستيك", "الورق", "الزجاج", "المعادن"],
                correctAnswer: 0,
                topic: 'environment',
                info: "البلاستيك هو أحد أكثر المواد تلويثًا للبيئة."
            },
            {
                question: "ما هو الدور الرئيسي للطاقة المتجددة في الحد من التلوث البيئي؟",
                options: ["زيادة التلوث", "تقليل الانبعاثات", "زيادة استخدام الوقود الأحفوري", "لا شيء مما ذكر"],
                correctAnswer: 1,
                topic: 'environment',
                info: "الطاقة المتجددة تقلل من انبعاثات الكربون."
            },
            {
                question: "ما هو تأثير التلوث البيئي على التربة؟",
                options: ["زيادة الخصوبة", "تدهور التربة", "تحسين جودة التربة", "زيادة الأمطار"],
                correctAnswer: 1,
                topic: 'environment',
                info: "التلوث البيئي يؤدي إلى تدهور التربة بسبب المواد الكيميائية."
            },
            {
                question: "ما هي أفضل طريقة للتخلص من النفايات؟",
                options: ["إعادة التدوير", "إلقاء النفايات في البحر", "حرق النفايات", "زيادة استخدام البلاستيك"],
                correctAnswer: 0,
                topic: 'environment',
                info: "إعادة التدوير هي أفضل طريقة للتخلص من النفايات."
            },
            {
                question: "ما هو تأثير التلوث البيئي على الصحة العامة؟",
                options: ["تحسين الصحة", "زيادة الأمراض", "زيادة الطاقة", "تحسين الرؤية"],
                correctAnswer: 1,
                topic: 'environment',
                info: "التلوث البيئي يزيد من الأمراض مثل السرطان وأمراض الجهاز التنفسي."
            },
            {
                question: "ما هي أفضل طريقة للحفاظ على المياه؟",
                options: ["إهمال النظافة", "تقليل استخدام المواد الكيميائية", "زيادة إلقاء النفايات", "حرق النفايات"],
                correctAnswer: 1,
                topic: 'environment',
                info: "تقليل استخدام المواد الكيميائية يساعد في الحفاظ على المياه."
            },
            {
                question: "ما هو تأثير التلوث البيئي على الغلاف الجوي؟",
                options: ["تحسين جودة الهواء", "زيادة تلوث الهواء", "زيادة الأكسجين", "تحسين الرؤية"],
                correctAnswer: 1,
                topic: 'environment',
                info: "التلوث البيئي يزيد من تلوث الهواء."
            }
        ],
        water: [
            {
                question: "ما هي مصادر تلوث المياه؟",
                options: ["النفايات الكيميائية", "الأشجار", "الهواء", "التربة"],
                correctAnswer: 0,
                topic: 'water',
                info: "النفايات الكيميائية هي أحد المصادر الرئيسية لتلوث المياه."
            },
            {
                question: "ما هي الآثار الرئيسية لتلوث المياه على صحة الإنسان؟",
                options: ["انتشار الأمراض", "تحسين الصحة", "زيادة الطاقة", "تحسين جودة المياه"],
                correctAnswer: 0,
                topic: 'water',
                info: "تلوث المياه يسبب أمراضًا مثل الكوليرا والتيفوئيد."
            },
            {
                question: "ما هو الدور الرئيسي للمحيطات في النظام البيئي؟",
                options: ["تنظيم المناخ", "تلوث الهواء", "زيادة النفايات", "تقليل الأكسجين"],
                correctAnswer: 0,
                topic: 'water',
                info: "المحيطات تلعب دورًا رئيسيًا في تنظيم المناخ العالمي."
            },
            {
                question: "ما هي أكثر المواد تلويثًا للمحيطات؟",
                options: ["البلاستيك", "الورق", "الزجاج", "المعادن"],
                correctAnswer: 0,
                topic: 'water',
                info: "البلاستيك هو أحد أكثر المواد تلويثًا للمحيطات."
            },
            {
                question: "ما هي أفضل طريقة للحد من تلوث المياه؟",
                options: ["تقليل استخدام المواد الكيميائية", "زيادة إلقاء النفايات", "حرق النفايات", "إهمال النظافة"],
                correctAnswer: 0,
                topic: 'water',
                info: "تقليل استخدام المواد الكيميائية يساعد في الحد من تلوث المياه."
            },
            {
                question: "ما هو تأثير تلوث المياه على الحياة البحرية؟",
                options: ["زيادة الأسماك", "تدمير الموائل البحرية", "تحسين جودة المياه", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'water',
                info: "تلوث المياه يؤدي إلى تدمير الموائل البحرية."
            },
            {
                question: "ما هو تأثير التلوث المائي على الزراعة؟",
                options: ["زيادة المحاصيل", "تلف المحاصيل", "تحسين جودة التربة", "زيادة الأمطار"],
                correctAnswer: 1,
                topic: 'water',
                info: "تلوث المياه يؤدي إلى تلف المحاصيل الزراعية."
            },
            {
                question: "ما هو الدور الرئيسي للأنهار في النظام البيئي؟",
                options: ["توفير المياه", "تلوث الهواء", "زيادة النفايات", "تقليل الأكسجين"],
                correctAnswer: 0,
                topic: 'water',
                info: "الأنهار تلعب دورًا رئيسيًا في توفير المياه للنظم البيئية."
            },
            {
                question: "ما هو تأثير التلوث المائي على الطيور البحرية؟",
                options: ["زيادة أعداد الطيور", "تدمير موائل الطيور", "تحسين جودة المياه", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'water',
                info: "تلوث المياه يؤدي إلى تدمير موائل الطيور البحرية."
            },
            {
                question: "ما هي أفضل طريقة لتنظيف المحيطات؟",
                options: ["إهمال النظافة", "إزالة النفايات البلاستيكية", "زيادة إلقاء النفايات", "حرق النفايات"],
                correctAnswer: 1,
                topic: 'water',
                info: "إزالة النفايات البلاستيكية هي أفضل طريقة لتنظيف المحيطات."
            }
        ],
        warming: [
            {
                question: "ما هو الاحتباس الحراري؟",
                options: ["انخفاض درجة حرارة الأرض", "ارتفاع درجة حرارة الأرض", "تلوث الهواء", "تلوث المياه"],
                correctAnswer: 1,
                topic: 'warming',
                info: "الاحتباس الحراري هو ارتفاع درجة حرارة الأرض بسبب زيادة غازات الدفيئة."
            },
            {
                question: "ما هي الغازات المسببة للاحتباس الحراري؟",
                options: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"],
                correctAnswer: 1,
                topic: 'warming',
                info: "ثاني أكسيد الكربون هو أحد الغازات الرئيسية المسببة للاحتباس الحراري."
            },
            {
                question: "ما هي الآثار الرئيسية للاحتباس الحراري؟",
                options: ["ارتفاع مستوى سطح البحر", "انخفاض درجة الحرارة", "زيادة الجليد القطبي", "تحسين جودة الهواء"],
                correctAnswer: 0,
                topic: 'warming',
                info: "الاحتباس الحراري يسبب ارتفاع مستوى سطح البحر بسبب ذوبان الجليد."
            },
            {
                question: "ما هو الدور الرئيسي للغابات في الحد من الاحتباس الحراري؟",
                options: ["امتصاص ثاني أكسيد الكربون", "إطلاق ثاني أكسيد الكربون", "تلوث الهواء", "زيادة درجة الحرارة"],
                correctAnswer: 0,
                topic: 'warming',
                info: "الغابات تمتص ثاني أكسيد الكربون وتساعد في الحد من الاحتباس الحراري."
            },
            {
                question: "ما هي أفضل طريقة للحد من الاحتباس الحراري؟",
                options: ["استخدام الطاقة المتجددة", "زيادة استخدام الوقود الأحفوري", "إزالة الغابات", "إهمال النفايات"],
                correctAnswer: 0,
                topic: 'warming',
                info: "استخدام الطاقة المتجددة يساعد في تقليل انبعاثات غازات الدفيئة."
            },
            {
                question: "ما هو تأثير الاحتباس الحراري على الزراعة؟",
                options: ["زيادة المحاصيل", "تلف المحاصيل", "تحسين جودة التربة", "زيادة الأمطار"],
                correctAnswer: 1,
                topic: 'warming',
                info: "الاحتباس الحراري يؤدي إلى تلف المحاصيل بسبب التغيرات المناخية."
            },
            {
                question: "ما هو تأثير الاحتباس الحراري على القمم الجليدية؟",
                options: ["زيادة الجليد", "ذوبان الجليد", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'warming',
                info: "الاحتباس الحراري يؤدي إلى ذوبان القمم الجليدية."
            },
            {
                question: "ما هو تأثير الاحتباس الحراري على أنماط الطقس؟",
                options: ["استقرار الطقس", "تغيرات في الطقس", "زيادة الأمطار", "تحسن الجو"],
                correctAnswer: 1,
                topic: 'warming',
                info: "الاحتباس الحراري يؤدي إلى تغيرات في أنماط الطقس."
            },
            {
                question: "ما هو تأثير الاحتباس الحراري على الكائنات الحيوانية؟",
                options: ["زيادة التنوع البيولوجي", "انقراض بعض الأنواع", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'warming',
                info: "الاحتباس الحراري يؤدي إلى انقراض بعض الأنواع الحيوانية."
            },
            {
                question: "ما هي أفضل طريقة للحد من انبعاثات غازات الدفيئة؟",
                options: ["زيادة الصناعات", "استخدام الطاقة المتجددة", "إزالة الغابات", "إهمال النفايات"],
                correctAnswer: 1,
                topic: 'warming',
                info: "استخدام الطاقة المتجددة يساعد في تقليل انبعاثات غازات الدفيئة."
            }
        ],
        "solid-waste": [
            // الأسئلة الجديدة لإدارة النفايات الصلبة (15 سؤالًا)
            {
                question: "ما هي النفايات الصلبة؟",
                options: ["النفايات المنزلية", "النفايات السائلة", "الغازات الضارة", "الأمطار"],
                correctAnswer: 0,
                topic: 'solid-waste',
                info: "النفايات الصلبة تشمل النفايات المنزلية والصناعية والطبية."
            },
            {
                question: "ما هي أفضل طريقة لإدارة النفايات الصلبة؟",
                options: ["إعادة التدوير", "إلقاء النفايات في الشوارع", "حرق النفايات", "ترك النفايات للتتحلل"],
                correctAnswer: 0,
                topic: 'solid-waste',
                info: "إعادة التدوير هي أفضل طريقة لإدارة النفايات الصلبة."
            },
            {
                question: "ما هو تأثير النفايات الصلبة على البيئة؟",
                options: ["تلوث التربة والمياه", "تحسين جودة الهواء", "زيادة الأكسجين", "زيادة الأمطار"],
                correctAnswer: 0,
                topic: 'solid-waste',
                info: "النفايات الصلبة تسبب تلوث التربة والمياه إذا لم يتم التخلص منها بشكل صحيح."
            },
            {
                question: "ما هي تقنية تحويل النفايات إلى طاقة؟",
                options: ["إعادة التدوير", "تحويل النفايات إلى سماد", "تحويل النفايات إلى طاقة كهربائية", "ترك النفايات للتتحلل"],
                correctAnswer: 2,
                topic: 'solid-waste',
                info: "تقنية تحويل النفايات إلى طاقة تستخدم لتحويل النفايات إلى طاقة كهربائية."
            },
            {
                question: "ما هو الدور الرئيسي للمدافن الصحية في إدارة النفايات؟",
                options: ["التخلص الآمن من النفايات", "زيادة التلوث", "تحسين جودة الهواء", "زيادة الأمطار"],
                correctAnswer: 0,
                topic: 'solid-waste',
                info: "المدافن الصحية توفر طريقة آمنة للتخلص من النفايات الصلبة."
            },
            {
                question: "ما هو تأثير النفايات الإلكترونية على البيئة؟",
                options: ["زيادة التلوث", "تحسين الصحة", "زيادة الطاقة", "تحسين الرؤية"],
                correctAnswer: 0,
                topic: 'solid-waste',
                info: "النفايات الإلكترونية تحتوي على مواد سامة تلوث البيئة."
            },
            {
                question: "ما هي فوائد إعادة التدوير؟",
                options: ["تقليل النفايات", "زيادة التلوث", "زيادة استخدام البلاستيك", "زيادة إنتاج الغازات الضارة"],
                correctAnswer: 0,
                topic: 'solid-waste',
                info: "إعادة التدوير تقلل من كمية النفايات وتوفر المواد الخام."
            },
            {
                question: "ما هي النفايات الخطرة؟",
                options: ["النفايات العادية", "النفايات الطبية", "النفايات المنزلية", "النفايات الزراعية"],
                correctAnswer: 1,
                topic: 'solid-waste',
                info: "النفايات الخطرة تشمل النفايات الطبية والكيميائية التي تحتاج إلى التخلص الآمن."
            },
            {
                question: "ما هي أهمية الفرز عند التخلص من النفايات؟",
                options: ["زيادة التلوث", "تسهيل إعادة التدوير", "زيادة النفايات", "زيادة استخدام البلاستيك"],
                correctAnswer: 1,
                topic: 'solid-waste',
                info: "الفرز يسهل عملية إعادة التدوير ويقلل من النفايات."
            },
            {
                question: "ما هو تأثير النفايات الصلبة على الصحة العامة؟",
                options: ["زيادة الأمراض", "تحسين الصحة", "زيادة الطاقة", "تحسين الرؤية"],
                correctAnswer: 0,
                topic: 'solid-waste',
                info: "النفايات الصلبة تسبب أمراضًا مثل الحساسية والتسمم."
            },
            {
                question: "ما هي النفايات العضوية؟",
                options: ["النفايات المنزلية", "بقايا الطعام", "النفايات الإلكترونية", "النفايات الطبية"],
                correctAnswer: 1,
                topic: 'solid-waste',
                info: "النفايات العضوية تشمل بقايا الطعام والمواد القابلة للتحلل."
            },
            {
                question: "ما هو دور السماد في إدارة النفايات؟",
                options: ["تحويل النفايات العضوية إلى سماد", "زيادة التلوث", "تحسين جودة الهواء", "زيادة الأمطار"],
                correctAnswer: 0,
                topic: 'solid-waste',
                info: "السماد يحول النفايات العضوية إلى سماد طبيعي."
            },
            {
                question: "ما هي النفايات غير القابلة للتحلل؟",
                options: ["البلاستيك", "بقايا الطعام", "الورق", "الخشب"],
                correctAnswer: 0,
                topic: 'solid-waste',
                info: "البلاستيك من أبرز النفايات غير القابلة للتحلل."
            },
            {
                question: "ما هو تأثير النفايات الصلبة على الحياة البرية؟",
                options: ["زيادة التنوع البيولوجي", "تدمير الموائل", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'solid-waste',
                info: "النفايات الصلبة تدمر الموائل الطبيعية للحيوانات."
            },
            {
                question: "ما هي أفضل طريقة للتخلص من النفايات الإلكترونية؟",
                options: ["إعادة التدوير", "إلقاءها في الشوارع", "حرقها", "تركها للتتحلل"],
                correctAnswer: 0,
                topic: 'solid-waste',
                info: "إعادة التدوير هي أفضل طريقة للتخلص من النفايات الإلكترونية."
            }
        ],
        "renewable-energy": [
            // الأسئلة الجديدة للطاقة المتجددة (15 سؤالًا)
            {
                question: "ما هي الطاقة المتجددة؟",
                options: ["الطاقة الشمسية", "الطاقة الأحفورية", "الطاقة النووية", "الطاقة الكهرومغناطيسية"],
                correctAnswer: 0,
                topic: 'renewable-energy',
                info: "الطاقة المتجددة تأتي من مصادر طبيعية مثل الشمس والرياح والماء."
            },
            {
                question: "ما هو مثال على الطاقة المتجددة؟",
                options: ["الفحم", "الرياح", "البترول", "الغاز الطبيعي"],
                correctAnswer: 1,
                topic: 'renewable-energy',
                info: "الرياح هي مصدر طاقة متجدد يساعد في تقليل الانبعاثات الكربونية."
            },
            {
                question: "ما هي فوائد استخدام الطاقة الشمسية؟",
                options: ["زيادة التلوث", "تقليل انبعاثات الكربون", "زيادة استهلاك الوقود الأحفوري", "لا شيء مما ذكر"],
                correctAnswer: 1,
                topic: 'renewable-energy',
                info: "الطاقة الشمسية تقلل من انبعاثات الكربون وتعد مصدرًا نظيفًا للطاقة."
            },
            {
                question: "ما هو أكبر عائق أمام استخدام الطاقة المتجددة؟",
                options: ["التكلفة العالية", "الوفرة الزائدة", "سهولة الاستخدام", "لا شيء مما ذكر"],
                correctAnswer: 0,
                topic: 'renewable-energy',
                info: "التكلفة العالية لإنشاء البنية التحتية تعد أحد التحديات الرئيسية."
            },
            {
                question: "ما هي الطاقة التي يتم إنتاجها من حركة المياه؟",
                options: ["الطاقة الشمسية", "الطاقة الريحية", "الطاقة المائية", "الطاقة الحرارية"],
                correctAnswer: 2,
                topic: 'renewable-energy',
                info: "الطاقة المائية تنتج من حركة المياه مثل السدود والأنهار."
            },
            {
                question: "ما هي فوائد استخدام الطاقة الريحية؟",
                options: ["زيادة التلوث", "تقليل انبعاثات الكربون", "زيادة استخدام الوقود الأحفوري", "لا شيء مما ذكر"],
                correctAnswer: 1,
                topic: 'renewable-energy',
                info: "الطاقة الريحية تقلل من انبعاثات الكربون وتعد مصدرًا نظيفًا للطاقة."
            },
            {
                question: "ما هي الطاقة الحرارية الجوفية؟",
                options: ["الطاقة الشمسية", "الطاقة المستخرجة من باطن الأرض", "الطاقة الريحية", "الطاقة المائية"],
                correctAnswer: 1,
                topic: 'renewable-energy',
                info: "الطاقة الحرارية الجوفية تأتي من الحرارة الموجودة داخل الأرض."
            },
            {
                question: "ما هو الدور الرئيسي للطاقة المتجددة في الحد من التلوث؟",
                options: ["زيادة التلوث", "تقليل الانبعاثات", "زيادة استخدام الوقود الأحفوري", "لا شيء مما ذكر"],
                correctAnswer: 1,
                topic: 'renewable-energy',
                info: "الطاقة المتجددة تقلل من انبعاثات الكربون."
            },
            {
                question: "ما هي أكثر الدول استخدامًا للطاقة المتجددة؟",
                options: ["الصين", "كندا", "ألمانيا", "اليابان"],
                correctAnswer: 0,
                topic: 'renewable-energy',
                info: "الصين واحدة من أكثر الدول استخدامًا للطاقة المتجددة."
            },
            {
                question: "ما هو تأثير الطاقة المتجددة على الاقتصاد؟",
                options: ["زيادة البطالة", "خلق فرص عمل جديدة", "زيادة التلوث", "لا شيء مما ذكر"],
                correctAnswer: 1,
                topic: 'renewable-energy',
                info: "الطاقة المتجددة تخلق فرص عمل جديدة في مجالات متعددة."
            },
            {
                question: "ما هي الطاقة التي تعتمد على المد والجزر؟",
                options: ["الطاقة الشمسية", "الطاقة الريحية", "الطاقة المدية", "الطاقة الحرارية"],
                correctAnswer: 2,
                topic: 'renewable-energy',
                info: "الطاقة المدية تعتمد على حركة المد والجزر."
            },
            {
                question: "ما هو تأثير الطاقة المتجددة على البيئة؟",
                options: ["زيادة التلوث", "تقليل التلوث", "زيادة استخدام الوقود الأحفوري", "لا شيء مما ذكر"],
                correctAnswer: 1,
                topic: 'renewable-energy',
                info: "الطاقة المتجددة تقلل من التلوث البيئي."
            },
            {
                question: "ما هي الطاقة التي تنتج من الكتلة الحيوية؟",
                options: ["الطاقة الشمسية", "الطاقة الكتلية", "الطاقة الريحية", "الطاقة المائية"],
                correctAnswer: 1,
                topic: 'renewable-energy',
                info: "الطاقة الكتلية تنتج من المواد العضوية مثل النباتات."
            },
            {
                question: "ما هو تأثير الطاقة المتجددة على الأمن الطاقي؟",
                options: ["زيادة الاعتماد على النفط", "تقليل الاعتماد على الوقود الأحفوري", "زيادة التلوث", "لا شيء مما ذكر"],
                correctAnswer: 1,
                topic: 'renewable-energy',
                info: "الطاقة المتجددة تقلل من الاعتماد على الوقود الأحفوري."
            },
            {
                question: "ما هي الطاقة التي تنتج من حركة الأمواج؟",
                options: ["الطاقة الشمسية", "الطاقة الريحية", "الطاقة الموجية", "الطاقة الحرارية"],
                correctAnswer: 2,
                topic: 'renewable-energy',
                info: "الطاقة الموجية تعتمد على حركة الأمواج."
            },
            {
                question: "ما هو تأثير الطاقة المتجددة على المناخ؟",
                options: ["زيادة الانبعاثات", "تقليل الانبعاثات", "زيادة التلوث", "لا شيء مما ذكر"],
                correctAnswer: 1,
                topic: 'renewable-energy',
                info: "الطاقة المتجددة تقلل من الانبعاثات الضارة بالمناخ."
            }
        ],
        biodiversity: [
            // الأسئلة الجديدة للتنوع البيولوجي (15 سؤالًا)
            {
                question: "ما هو التنوع البيولوجي؟",
                options: ["تنوع الحياة على الأرض", "تنوع الصخور", "تنوع الأجواء", "تنوع الألوان"],
                correctAnswer: 0,
                topic: 'biodiversity',
                info: "التنوع البيولوجي يشير إلى تنوع الحياة على الأرض."
            },
            {
                question: "ما هي أهمية التنوع البيولوجي؟",
                options: ["تحسين الاقتصاد", "الحفاظ على التوازن البيئي", "زيادة التلوث", "زيادة استخدام البلاستيك"],
                correctAnswer: 1,
                topic: 'biodiversity',
                info: "التنوع البيولوجي يلعب دورًا حيويًا في الحفاظ على التوازن البيئي."
            },
            {
                question: "ما هي أكبر تهديدات التنوع البيولوجي؟",
                options: ["تدمير الموائل", "زراعة الأشجار", "استخدام الطاقة المتجددة", "تنظيف البيئة"],
                correctAnswer: 0,
                topic: 'biodiversity',
                info: "تدمير الموائل الطبيعية هو أحد أكبر التهديدات للتنوع البيولوجي."
            },
            {
                question: "ما هو الدور الرئيسي للنباتات في التنوع البيولوجي؟",
                options: ["إنتاج الأكسجين", "زيادة التلوث", "إطلاق ثاني أكسيد الكربون", "تقليل الأمطار"],
                correctAnswer: 0,
                topic: 'biodiversity',
                info: "النباتات تلعب دورًا رئيسيًا في إنتاج الأكسجين والحفاظ على التوازن البيئي."
            },
            {
                question: "ما هو تأثير التغير المناخي على التنوع البيولوجي؟",
                options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'biodiversity',
                info: "التغير المناخي يؤدي إلى انخفاض التنوع البيولوجي بسبب تدمير الموائل."
            },
            {
                question: "ما هو تأثير الصيد الجائر على التنوع البيولوجي؟",
                options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'biodiversity',
                info: "الصيد الجائر يؤدي إلى انخفاض التنوع البيولوجي."
            },
            {
                question: "ما هي المناطق الغنية بالتنوع البيولوجي؟",
                options: ["الصحاري", "الغابات الاستوائية", "الجبال", "المناطق القطبية"],
                correctAnswer: 1,
                topic: 'biodiversity',
                info: "الغابات الاستوائية من أغنى المناطق بالتنوع البيولوجي."
            },
            {
                question: "ما هو تأثير الزراعة المفرطة على التنوع البيولوجي؟",
                options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'biodiversity',
                info: "الزراعة المفرطة تدمر الموائل الطبيعية وتقلل التنوع البيولوجي."
            },
            {
                question: "ما هو دور الحشرات في التنوع البيولوجي؟",
                options: ["نقل اللقاح", "زيادة التلوث", "إطلاق ثاني أكسيد الكربون", "تقليل الأمطار"],
                correctAnswer: 0,
                topic: 'biodiversity',
                info: "الحشرات تلعب دورًا رئيسيًا في نقل اللقاح وإنتاج الغذاء."
            },
            {
                question: "ما هو تأثير الغابات على التنوع البيولوجي؟",
                options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 0,
                topic: 'biodiversity',
                info: "الغابات توفر موائل طبيعية وتحافظ على التنوع البيولوجي."
            },
            {
                question: "ما هو تأثير التحضر على التنوع البيولوجي؟",
                options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'biodiversity',
                info: "التحضر يؤدي إلى تدمير الموائل الطبيعية وانخفاض التنوع البيولوجي."
            },
            {
                question: "ما هو تأثير التلوث على التنوع البيولوجي؟",
                options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'biodiversity',
                info: "التلوث يدمر الموائل الطبيعية ويقلل التنوع البيولوجي."
            },
            {
                question: "ما هو تأثير السياحة على التنوع البيولوجي؟",
                options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'biodiversity',
                info: "السياحة الجائرة تدمر الموائل الطبيعية وتنخفض التنوع البيولوجي."
            },
            {
                question: "ما هو تأثير الحرائق الغابات على التنوع البيولوجي؟",
                options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'biodiversity',
                info: "الحرائق تدمر الموائل الطبيعية وتنخفض التنوع البيولوجي."
            },
            {
                question: "ما هو تأثير الحروب على التنوع البيولوجي؟",
                options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'biodiversity',
                info: "الحروب تدمر الموائل الطبيعية وتنخفض التنوع البيولوجي."
            }
        ]
    };
    return questions[topic] || [];
}