// تعريف المتغيرات
let userName = "";
let userAge = "";
let userSchool = "";
let userScore = 0;
let questions = [];
let currentQuestionIndex = 0;
let timerInterval;
let wrongAnswers = [];
// الانتقال من شاشة الترحيب إلى القائمة الرئيسية
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
            htmlContent = '<p>مرحبًا بكم في الصفحة الرئيسية.</p>';
            developersSection.style.display = 'block';
            break;
        case 'training':
            htmlContent = `
                <h2>مساحة التدريب</h2>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('air')">تلوث الهواء</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('environment')">التلوث البيئي</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('water')">تلوث الماء والبحار</button><br><br>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('warming')">الاحتباس الحراري</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('solid-waste')">إدارة النفايات الصلبة</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('renewable-energy')">الطاقة المتجددة</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('biodiversity')">التنوع البيولوجي</button>
            `;
            developersSection.style.display = 'none';
            break;
        case 'about':
            htmlContent = `
                <h2>حول الاختبار</h2>
                <p>البرنامج عبارة عن لعبة تتكون من عدة أسئلة، لكل منها أربعة خيارات.</p>
                <p>شروط المشاركة: امتلاك هاتف أو جهاز كمبيوتر والوصول إلى الموقع المخصص لنادي البيئة التابع للمؤسسة.</p>
                <p>هدف البرنامج: تمكين جميع الطلاب من اجتياز اختبار البيئة "Allal Bin Abdullah" وتشجيع الطلاب على استخدام التكنولوجيا الحديثة لأغراض تعليمية ومفيدة للبيئة.</p>
            `;
            developersSection.style.display = 'none';
            break;
        case 'participate':
            htmlContent = `
                <h2>المشاركة في الاختبار</h2>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('air')">تلوث الهواء</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('environment')">التلوث البيئي</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('water')">تلوث الماء والبحار</button>
                <br><br><button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('warming')">الاحتباس الحراري</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('solid-waste')">إدارة النفايات الصلبة</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('renewable-energy')">الطاقة المتجددة</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('biodiversity')">التنوع البيولوجي</button>
            `;
            developersSection.style.display = 'none';
            break;
            // إضافة قسم الرسائل التوعوية
            const awarenessMessages = `
    <div id="awareness-messages" class="awareness-section">
        <h3 class="awareness-title">رسائل توعوية</h3>
        <p class="awareness-message">"البيئة هي تراثنا المشترك، دعونا نحافظ عليها للأجيال القادمة."</p>
        <p class="awareness-message">"كل قطرة ماء تُهدر اليوم قد تكون ثمينة غدًا."</p>
        <p class="awareness-message">"زراعة شجرة يمكن أن تحدث فرقًا كبيرًا."</p>
        <p class="awareness-message">"التلوث مشكلة الجميع، والحل يبدأ بك."</p>
        <p class="awareness-message">"الطبيعة لا تحتاجنا، لكننا نحتاج الطبيعة."</p>
    </div>
`;
            // تعديل دالة showSection لعرض الرسائل التوعوية فقط في الصفحة الرئيسية
            function showSection(sectionId) {
                const content = document.getElementById('content');
                const developersSection = document.getElementById('developers-section');
                let htmlContent = '';

                switch (sectionId) {
                    case 'home':
                        htmlContent = '<p>مرحبًا بكم في الصفحة الرئيسية.</p>';
                        // إضافة الرسائل التوعوية فقط في الصفحة الرئيسية
                        htmlContent += awarenessMessages;
                        developersSection.style.display = 'block';
                        break;
                    case 'training':
                        htmlContent = `
                <h2>مساحة التدريب</h2>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('air')">تلوث الهواء</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('environment')">التلوث البيئي</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('water')">تلوث الماء والبحار</button>
                <br><br><button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('warming')">الاحتباس الحراري</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('solid-waste')">إدارة النفايات الصلبة</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('renewable-energy')">الطاقة المتجددة</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopic('biodiversity')">التنوع البيولوجي</button>
            `;
                        developersSection.style.display = 'none';
                        break;
                    case 'about':
                        htmlContent = `
                <h2>حول الاختبار</h2>
                <p>البرنامج عبارة عن لعبة تتكون من عدة أسئلة، لكل منها أربعة خيارات.</p>
                <p>شروط المشاركة: امتلاك هاتف أو جهاز كمبيوتر والوصول إلى الموقع المخصص لنادي البيئة التابع للمؤسسة.</p>
                <p>هدف البرنامج: تمكين جميع الطلاب من اجتياز اختبار البيئة "Allal Bin Abdullah" وتشجيع الطلاب على استخدام التكنولوجيا الحديثة لأغراض تعليمية ومفيدة للبيئة.</p>
            `;
                        developersSection.style.display = 'none';
                        break;
                    case 'participate':
                        htmlContent = `
                <h2>المشاركة في الاختبار</h2>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('air')">تلوث الهواء</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('environment')">التلوث البيئي</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('water')">تلوث الماء والبحار</button>
                <br><br><button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('warming')">الاحتباس الحراري</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('solid-waste')">إدارة النفايات الصلبة</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('renewable-energy')">الطاقة المتجددة</button>
                <button class="btn btn-success btn-lg px-4 py-2" onclick="startQuiz('biodiversity')">التنوع البيولوجي</button>
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
                <p>تلوث الهواء ناتج عن انبعاث الغازات الضارة من السيارات والمصانع. هذه الغازات تشمل ثاني أكسيد الكربون وأكاسيد النيتروجين، والتي تسبب أمراضًا خطيرة مثل الربو والحساسية.</p>
                <p>يمكننا تقليل تلوث الهواء من خلال:</p>
                <ul>
                    <li>زراعة المزيد من الأشجار.</li>
                    <li>استخدام الطاقات المتجددة.</li>
                    <li>تحسين كفاءة المحركات.</li>
                </ul>
            `;
            break;
        case 'environment':
            info = `
                <h3>التلوث البيئي</h3>
                <p>التلوث البيئي يشمل تلوث الهواء والماء والتربة. هذا التلوث ناتج عن الأنشطة البشرية مثل الصناعة والتخلص غير الصحيح من النفايات.</p>
                <p>طرق لتقليل التلوث البيئي:</p>
                <ul>
                    <li>التدوير.</li>
                    <li>تقليل استخدام البلاستيك.</li>
                    <li>اعتماد الطاقات النظيفة.</li>
                </ul>
            `;
            break;
        case 'water':
            info = `
                <h3>تلوث الماء والبحار</h3>
                <p>يحدث ذلك بسبب تصريف النفايات الكيميائية والنفطية في المياه. يؤدي ذلك إلى تدمير الموائل البحرية وانتشار الأمراض.</p>
                <p>حلول لتلوث الماء:</p>
                <ul>
                    <li>معالجة المياه قبل تصريفها.</li>
                    <li>التخلص الآمن من النفايات الصناعية.</li>
                    <li>تنظيف الشواطئ والبحار.</li>
                </ul>
            `;
            break;
        case 'warming':
            info = `
                <h3>الاحتباس الحراري</h3>
                <p>زيادة درجة حرارة الأرض بسبب زيادة غازات الاحتباس الحراري مثل ثاني أكسيد الكربون والميثان. يؤدي ذلك إلى ذوبان الجليد القطبي وارتفاع مستوى سطح البحر.</p>
                <p>حلول لمكافحة الاحتباس الحراري:</p>
                <ul>
                    <li>استخدام الطاقات المتجددة.</li>
                    <li>زيادة الغطاء النباتي.</li>
                    <li>تقليل انبعاثات الكربون.</li>
                </ul>
            `;
            break;
        case 'solid-waste':
            info = `
                <h3>إدارة النفايات الصلبة</h3>
                <p>النفايات الصلبة هي واحدة من أكبر التحديات البيئية. تشمل النفايات المنزلية والصناعية والطبية. يمكن أن تسبب هذه النفايات تلوثًا بيئيًا خطيرًا إذا لم يتم التخلص منها بشكل صحيح.</p>
                <p>طرق إدارة النفايات الصلبة:</p>
                <ul>
                    <li>التدوير.</li>
                    <li>تحويل النفايات إلى طاقة.</li>
                    <li>التخلص الآمن في مكبات صحية.</li>
                </ul>
            `;
            break;
        case 'renewable-energy':
            info = `
                <h3>الطاقة المتجددة</h3>
                <p>الطاقة المتجددة هي مصدر مستدام للطاقة يأتي من المصادر الطبيعية مثل الشمس والرياح والماء. هذه الطاقة تساعد في تقليل الاعتماد على الوقود الأحفوري وتقليل انبعاثات الكربون.</p>
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
                <p>التنوع البيولوجي يشير إلى تنوع الحياة على الأرض، بما في ذلك النباتات والحيوانات والنظم الإيكولوجية. يلعب التنوع البيولوجي دورًا حيويًا في الحفاظ على التوازن البيئي.</p>
                <p>أسباب فقدان التنوع البيولوجي:</p>
                <ul>
                    <li>تدمير الموائل الطبيعية.</li>
                    <li>التلوث البيئي.</li>
                    <li>تغير المناخ.</li>
                </ul>
            `;
            break;
    }
    content.innerHTML = `${info}<button class="btn btn-success btn-lg px-4 py-2" onclick="showSection('training')">العودة إلى مساحة التدريب</button>`;
}
// بدء الاختبار
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
        <h3 style="color:black;">${question.question}</h3>
        ${shuffledOptions.map((option, index) => `
            <button class="btn btn-success btn-lg px-4 py-2" onclick="checkAnswer(${index}, ${correctAnswerIndex})">${option}</button>
        `).join('')}

        <h4><p>الوقت المتبقي: <span id="timer">20</span> ثانية</p></h4>

    `;
    let timeLeft = 20;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1, correctAnswerIndex); // انتهاء الوقت دون إجابة
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
            <button class="btn btn-success btn-lg px-4 py-2" onclick="showTopicForRelearning('${question.topic}')">مراجعة الموضوع</button>
        `;
        wrongAnswers.push({
            question: question.question,
            userAnswer: selectedIndex !== -1 ? question.options[selectedIndex] : "لا يوجد إجابة",
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

// إنهاء الاختبار
function endQuiz(score) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h3>انتهى الاختبار!</h3>
        <p>نتيجتك: ${score} من أصل ${questions.length}</p>
        <button class="btn btn-success btn-lg px-4 py-2" onclick="downloadCertificate()">تنزيل الشهادة (PDF)</button>
        <button class="btn btn-success btn-lg px-4 py-2" onclick="showWrongAnswers()">عرض الإجابات الخاطئة</button>
       <br><br> <button class="btn btn-success btn-lg px-4 py-2" onclick="showSection('home')">العودة إلى الصفحة الرئيسية</button>
    `;
}
// تحميل الشهادة بصيغة PDF
function downloadCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(`شهادة تقدير`, 80, 20);
    doc.setFontSize(14);
    doc.text(`تهانينا الخاصة للطالب/الطالبة: ${userName}`, 20, 40);
    doc.text(`لإكمالك الاختبار بنجاح.`, 20, 50);
    doc.text(`عدد النقاط: ${userScore} من أصل ${questions.length}`, 20, 60);
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

// خلط الإجابات بشكل عشوائي
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// الأسئلة والإجابات الجديدة (10 أسئلة لكل موضوع)
function getQuestions(topic) {
    const questions = {
        air: [
            {
                question: "ما هي المصدر الرئيسي لتلوث الهواء؟",
                options: ["حرق الوقود الأحفوري", "زراعة الأشجار", "الرياح الطبيعية", "الأمطار"],
                correctAnswer: 0,
                topic: 'air',
                info: "حرق الوقود الأحفوري يطلق غازات ضارة مثل ثاني أكسيد الكربون."
            },
            {
                question: "ما هي الغازات المسؤولة عن تلوث الهواء؟",
                options: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"],
                correctAnswer: 1,
                topic: 'air',
                info: "ثاني أكسيد الكربون يساهم في ظاهرة الاحتباس الحراري."
            },
            {
                question: "ما هي الآثار الصحية لتلوث الهواء؟",
                options: ["أمراض الجهاز التنفسي", "تحسين الصحة", "زيادة الطاقة", "تحسين البصر"],
                correctAnswer: 0,
                topic: 'air',
                info: "تلوث الهواء يسبب أمراضًا مثل الربو والحساسية."
            },
            {
                question: "ما هو دور الأشجار في تقليل تلوث الهواء؟",
                options: ["إنتاج الأكسجين", "انبعاث ثاني أكسيد الكربون", "جذب الغبار", "زيادة الرطوبة"],
                correctAnswer: 0,
                topic: 'air',
                info: "تمتص الأشجار ثاني أكسيد الكربون وتطلق الأكسجين."
            },
            {
                question: "ما هو البلد الذي يلوث الهواء أكثر؟",
                options: ["الصين", "كندا", "أستراليا", "اليابان"],
                correctAnswer: 0,
                topic: 'air',
                info: "الصين هي واحدة من الدول التي تلوث الهواء بسبب صناعتها."
            },
            {
                question: "ما هو تأثير تلوث الهواء على المحاصيل الزراعية؟",
                options: ["زيادة الإنتاج", "تدهور المحاصيل", "تحسين جودة التربة", "زيادة الأمطار"],
                correctAnswer: 1,
                topic: 'air',
                info: "تلوث الهواء يدمر المحاصيل بسبب المواد السامة."
            },
            {
                question: "ما هي الغازات المسؤولة عن الاحتباس الحراري؟",
                options: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"],
                correctAnswer: 1,
                topic: 'air',
                info: "ثاني أكسيد الكربون هو أحد الغازات الرئيسية المسؤولة عن الاحتباس الحراري."
            },
            {
                question: "ما هي الطرق لتقليل تلوث الهواء؟",
                options: ["زيادة المصانع", "زراعة الأشجار", "حرق النفايات", "استخدام البلاستيك"],
                correctAnswer: 1,
                topic: 'air',
                info: "زراعة الأشجار تساعد على امتصاص ثاني أكسيد الكربون."
            },
            {
                question: "ما هو تأثير تلوث الهواء على المناخ؟",
                options: ["انخفاض درجات الحرارة", "تغير المناخ", "زيادة الأمطار", "تحسين الهواء"],
                correctAnswer: 1,
                topic: 'air',
                info: "تلوث الهواء يؤدي إلى تغير المناخ بسبب الاحتباس الحراري."
            },
            {
                question: "ما هو الدور الرئيسي للطاقات المتجددة في تقليل تلوث الهواء؟",
                options: ["زيادة التلوث", "تقليل الانبعاثات", "زيادة استخدام الوقود الأحفوري", "لا شيء مما سبق"],
                correctAnswer: 1,
                topic: 'air',
                info: "الطاقة المتجددة تقلل من انبعاث الغازات الضارة."
            }
        ],
        environment: [
            {
                question: "ما هي التلوث البيئي؟",
                options: ["زيادة النباتات", "انتشار النفايات", "تنظيف البيئة", "استخدام الطاقات المتجددة"],
                correctAnswer: 1,
                topic: 'environment',
                info: "التلوث البيئي ناجم عن النفايات الصناعية والأنشطة البشرية."
            },
            {
                question: "ما هي أفضل طريقة لتقليل التلوث البيئي؟",
                options: ["التدوير", "حرق النفايات", "رمي النفايات في البحر", "زيادة استخدام البلاستيك"],
                correctAnswer: 0,
                topic: 'environment',
                info: "التدوير يقلل من كمية النفايات ويعزز البيئة."
            },
            {
                question: "ما هو تأثير التلوث البيئي على الحياة البحرية؟",
                options: ["زيادة الأسماك", "تدمير الموائل البحرية", "تحسين جودة المياه", "زيادة الأكسجين"],
                correctAnswer: 1,
                topic: 'environment',
                info: "التلوث البيئي يدمر الموائل البحرية."
            },
            {
                question: "ما هو المادة الأكثر شيوعًا في التلوث البيئي؟",
                options: ["البلاستيك", "الورق", "الزجاج", "المعادن"],
                correctAnswer: 0,
                topic: 'environment',
                info: "البلاستيك هو أحد أكثر المواد تلوثًا للبيئة."
            },
            {
                question: "ما هو الدور الرئيسي للطاقة المتجددة في تقليل التلوث البيئي؟",
                options: ["زيادة التلوث", "تقليل الانبعاثات", "زيادة استخدام الوقود الأحفوري", "لا شيء مما سبق"],
                correctAnswer: 1,
                topic: 'environment',
                info: "الطاقة المتجددة تقلل من انبعاث الكربون."
            },
            {
                question: "ما هو تأثير التلوث البيئي على التربة؟",
                options: ["زيادة الخصوبة", "تدهور التربة", "تحسين جودة التربة", "زيادة الأمطار"],
                correctAnswer: 1,
                topic: 'environment',
                info: "التلوث البيئي يتسبب في تدهور التربة بسبب المواد الكيميائية."
            },
            {
                question: "ما هي أفضل طريقة للتخلص من النفايات؟",
                options: ["التدوير", "رمي النفايات في البحر", "حرق النفايات", "زيادة استخدام البلاستيك"],
                correctAnswer: 0,
                topic: 'environment',
                info: "التدوير هو أفضل طريقة للتخلص من النفايات."
            },
            {
                question: "ما هو تأثير التلوث البيئي على الصحة العامة؟",
                options: ["تحسين الصحة", "زيادة الأمراض", "زيادة الطاقة", "تحسين الرؤية"],
                correctAnswer: 1,
                topic: 'environment',
                info: "التلوث البيئي يزيد من الأمراض مثل السرطان وأمراض الجهاز التنفسي."
            },
            {
                question: "ما هي أفضل طريقة لحماية المياه؟",
                options: ["إهمال النظافة", "تقليل استخدام المواد الكيميائية", "زيادة تصريف النفايات", "حرق النفايات"],
                correctAnswer: 1,
                topic: 'environment',
                info: "تقليل استخدام المواد الكيميائية يساعد في حماية المياه."
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
        question: "ما هي مصادر تلوث الماء؟",
        options: ["النفايات الكيميائية", "الأشجار", "الهواء", "التربة"],
        correctAnswer: 0,
        topic: 'water',
        info: "النفايات الكيميائية هي واحدة من المصادر الرئيسية لتلوث الماء."
    },
    {
        question: "ما هي الآثار الرئيسية لتلوث الماء على صحة الإنسان؟",
        options: ["انتشار الأمراض", "تحسين الصحة", "زيادة الطاقة", "تحسين جودة الماء"],
        correctAnswer: 0,
        topic: 'water',
        info: "تلوث الماء يسبب أمراضًا مثل الكوليرا والتيفوئيد."
    },
    {
        question: "ما هو الدور الرئيسي للمحيطات في النظام البيئي؟",
        options: ["تنظيم المناخ", "تلوث الهواء", "زيادة النفايات", "تقليل الأكسجين"],
        correctAnswer: 0,
        topic: 'water',
        info: "تلعب المحيطات دورًا رئيسيًا في تنظيم المناخ العالمي."
    },
    {
        question: "ما هو المادة الأكثر تلوثًا للمحيطات؟",
        options: ["البلاستيك", "الورق", "الزجاج", "المعادن"],
        correctAnswer: 0,
        topic: 'water',
        info: "البلاستيك هو أحد أكثر المواد تلوثًا للمحيطات."
    },
    {
        question: "ما هي أفضل طريقة لتقليل تلوث الماء؟",
        options: ["تقليل استخدام المواد الكيميائية", "زيادة تصريف النفايات", "حرق النفايات", "إهمال النظافة"],
        correctAnswer: 0,
        topic: 'water',
        info: "تقليل استخدام المواد الكيميائية يساعد في تقليل تلوث الماء."
    },
    {
        question: "ما هو تأثير تلوث الماء على الحياة البحرية؟",
        options: ["زيادة الأسماك", "تدمير الموائل البحرية", "تحسين جودة الماء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'water',
        info: "تلوث الماء يؤدي إلى تدمير الموائل البحرية."
    },
    {
        question: "ما هو تأثير تلوث الماء على الزراعة؟",
        options: ["زيادة المحاصيل", "تدمير المحاصيل", "تحسين جودة التربة", "زيادة الأمطار"],
        correctAnswer: 1,
        topic: 'water',
        info: "تلوث الماء يتسبب في تدمير المحاصيل الزراعية."
    },
    {
        question: "ما هو الدور الرئيسي للأنهار في النظام البيئي؟",
        options: ["توفير المياه", "تلوث الهواء", "زيادة النفايات", "تقليل الأكسجين"],
        correctAnswer: 0,
        topic: 'water',
        info: "تلعب الأنهار دورًا أساسيًا في توفير المياه للنظم البيئية."
    },
    {
        question: "ما هو تأثير تلوث الماء على الطيور البحرية؟",
        options: ["زيادة عدد الطيور", "تدمير موائل الطيور", "تحسين جودة الماء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'water',
        info: "تلوث الماء يدمر موائل الطيور البحرية."
    },
    {
        question: "ما هي أفضل طريقة لتنظيف المحيطات؟",
        options: ["إهمال النظافة", "إزالة النفايات البلاستيكية", "زيادة تصريف النفايات", "حرق النفايات"],
        correctAnswer: 1,
        topic: 'water',
        info: "إزالة النفايات البلاستيكية هي أفضل طريقة لتنظيف المحيطات."
    }
],
warming: [
    {
        question: "ما هو الاحتباس الحراري؟",
        options: ["انخفاض درجة حرارة الأرض", "ارتفاع درجة حرارة الأرض", "تلوث الهواء", "تلوث الماء"],
        correctAnswer: 1,
        topic: 'warming',
        info: "الاحتباس الحراري هو زيادة في درجة حرارة الأرض بسبب زيادة غازات الاحتباس الحراري."
    },
    {
        question: "ما هي الغازات المسؤولة عن الاحتباس الحراري؟",
        options: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"],
        correctAnswer: 1,
        topic: 'warming',
        info: "ثاني أكسيد الكربون هو أحد الغازات الرئيسية المسؤولة عن الاحتباس الحراري."
    },
    {
        question: "ما هي الآثار الرئيسية للاحترار العالمي؟",
        options: ["ارتفاع مستوى سطح البحر", "انخفاض درجات الحرارة", "زيادة الجليد القطبي", "تحسين جودة الهواء"],
        correctAnswer: 0,
        topic: 'warming',
        info: "الاحترار العالمي يؤدي إلى ارتفاع مستوى سطح البحر بسبب ذوبان الجليد."
    },
    {
        question: "ما هو الدور الرئيسي للغابات في مكافحة الاحترار العالمي؟",
        options: ["امتصاص ثاني أكسيد الكربون", "انبعاث ثاني أكسيد الكربون", "تلوث الهواء", "زيادة درجة الحرارة"],
        correctAnswer: 0,
        topic: 'warming',
        info: "تمتص الغابات ثاني أكسيد الكربون وتساعد في الحد من الاحترار العالمي."
    },
    {
        question: "ما هي أفضل طريقة لمكافحة الاحترار العالمي؟",
        options: ["استخدام الطاقات المتجددة", "زيادة استخدام الوقود الأحفوري", "تدمير الغابات", "إهمال النفايات"],
        correctAnswer: 0,
        topic: 'warming',
        info: "استخدام الطاقات المتجددة يساعد في تقليل انبعاث غازات الاحتباس الحراري."
    },
    {
        question: "ما هو تأثير الاحترار العالمي على الزراعة؟",
        options: ["زيادة المحاصيل", "تدمير المحاصيل", "تحسين جودة التربة", "زيادة الأمطار"],
        correctAnswer: 1,
        topic: 'warming',
        info: "الاحترار العالمي يدمر المحاصيل بسبب التغيرات المناخية."
    },
    {
        question: "ما هو تأثير الاحترار العالمي على القمم الجليدية؟",
        options: ["زيادة الجليد", "ذوبان الجليد", "تحسين جودة الهواء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'warming',
        info: "الاحترار العالمي يؤدي إلى ذوبان القمم الجليدية."
    },
    {
        question: "ما هو تأثير الاحترار العالمي على أنماط الطقس؟",
        options: ["استقرار المناخ", "تغيرات في المناخ", "زيادة الأمطار", "تحسين الأحوال الجوية"],
        correctAnswer: 1,
        topic: 'warming',
        info: "الاحترار العالمي يؤدي إلى تغيرات في أنماط الطقس."
    },
    {
        question: "ما هو تأثير الاحترار العالمي على الحيوانات؟",
        options: ["زيادة التنوع البيولوجي", "انقراض بعض الأنواع", "تحسين جودة الهواء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'warming',
        info: "الاحترار العالمي يؤدي إلى انقراض بعض الأنواع الحيوانية."
    },
    {
        question: "ما هي أفضل طريقة لتقليل انبعاثات غازات الاحتباس الحراري؟",
        options: ["زيادة الصناعات", "استخدام الطاقات المتجددة", "تدمير الغابات", "إهمال النفايات"],
        correctAnswer: 1,
        topic: 'warming',
        info: "استخدام الطاقات المتجددة يساعد في تقليل انبعاثات غازات الاحتباس الحراري."
    }
],
      "solid-waste": [
    // الأسئلة الجديدة حول إدارة النفايات الصلبة (15 سؤالًا)
    {
        question: "ما هي النفايات الصلبة؟",
        options: ["النفايات المنزلية", "النفايات السائلة", "الغازات الضارة", "الأمطار"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "النفايات الصلبة تشمل النفايات المنزلية والصناعية والطبية."
    },
    {
        question: "ما هي أفضل طريقة لإدارة النفايات الصلبة؟",
        options: ["التدوير", "رمي النفايات في الشوارع", "حرق النفايات", "ترك النفايات لتتحلل"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "التدوير هو أفضل طريقة لإدارة النفايات الصلبة."
    },
    {
        question: "ما هو تأثير النفايات الصلبة على البيئة؟",
        options: ["تلوث التربة والماء", "تحسين جودة الهواء", "زيادة الأكسجين", "زيادة الأمطار"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "النفايات الصلبة تسبب تلوث التربة والماء إذا لم يتم التخلص منها بشكل صحيح."
    },
    {
        question: "ما هي تقنية تحويل النفايات إلى طاقة؟",
        options: ["التدوير", "تحويل النفايات إلى سماد", "تحويل النفايات إلى طاقة كهربائية", "ترك النفايات لتتحلل"],
        correctAnswer: 2,
        topic: 'solid-waste',
        info: "تُستخدم تقنية تحويل النفايات إلى طاقة لتحويل النفايات إلى كهرباء."
    },
    {
        question: "ما هو الدور الرئيسي للمكبات الصحية في إدارة النفايات؟",
        options: ["التخلص الآمن من النفايات", "زيادة التلوث", "تحسين جودة الهواء", "زيادة الأمطار"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "المكبات الصحية توفر طريقة آمنة للتخلص من النفايات الصلبة."
    },
    {
        question: "ما هو تأثير النفايات الإلكترونية على البيئة؟",
        options: ["زيادة التلوث", "تحسين الصحة", "زيادة الطاقة", "تحسين الرؤية"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "النفايات الإلكترونية تحتوي على مواد سامة تلوث البيئة."
    },
    {
        question: "ما هي فوائد التدوير؟",
        options: ["تقليل النفايات", "زيادة التلوث", "زيادة استخدام البلاستيك", "زيادة إنتاج الغازات الضارة"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "التدوير يقلل من كمية النفايات ويوفر المواد الخام."
    },
    {
        question: "ما هي النفايات الخطرة؟",
        options: ["النفايات العادية", "النفايات الطبية", "النفايات المنزلية", "النفايات الزراعية"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "النفايات الخطرة تشمل النفايات الطبية والكيميائية التي تتطلب التخلص الآمن."
    },
    {
        question: "ما هي أهمية الفرز أثناء التخلص من النفايات؟",
        options: ["زيادة التلوث", "تسهيل التدوير", "زيادة النفايات", "زيادة استخدام البلاستيك"],
        correctAnswer: 1,
        topic: 'solid-waste',
        info: "الفرز يسهل عملية التدوير ويقلل من النفايات."
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
        info: "النفايات العضوية تشمل بقايا الطعام والمواد القابلة للتحلل البيولوجي."
    },
    {
        question: "ما هو دور السماد في إدارة النفايات؟",
        options: ["تحويل النفايات العضوية إلى سماد", "زيادة التلوث", "تحسين جودة الهواء", "زيادة الأمطار"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "السماد يحول النفايات العضوية إلى أسمدة طبيعية."
    },
    {
        question: "ما هي النفايات غير القابلة للتحلل؟",
        options: ["البلاستيك", "بقايا الطعام", "الورق", "الخشب"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "البلاستيك هو أحد النفايات الرئيسية غير القابلة للتحلل."
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
        options: ["التدوير", "رميها في الشوارع", "حرقها", "تركها لتتحلل"],
        correctAnswer: 0,
        topic: 'solid-waste',
        info: "التدوير هو أفضل طريقة للتخلص من النفايات الإلكترونية."
    }
],
  "renewable-energy": [
    // الأسئلة الجديدة حول الطاقة المتجددة (15 سؤالًا)
    {
        question: "ما هي الطاقة المتجددة؟",
        options: ["الطاقة الشمسية", "الطاقة الأحفورية", "الطاقة النووية", "الطاقة الكهرومغناطيسية"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "الطاقة المتجددة تأتي من مصادر طبيعية مثل الشمس والرياح والماء."
    },
    {
        question: "ما هو مثال على الطاقة المتجددة؟",
        options: ["الفحم", "الرياح", "النفط", "الغاز الطبيعي"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "الرياح هي مصدر للطاقة المتجددة التي تساعد في تقليل انبعاثات الكربون."
    },
    {
        question: "ما هي فوائد استخدام الطاقة الشمسية؟",
        options: ["زيادة التلوث", "تقليل انبعاثات الكربون", "زيادة استهلاك الوقود الأحفوري", "لا شيء مما سبق"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "الطاقة الشمسية تقلل من انبعاثات الكربون وهي مصدر طاقة نظيف."
    },
    {
        question: "ما هو العائق الرئيسي لاستخدام الطاقة المتجددة؟",
        options: ["التكلفة العالية", "الوفرة الزائدة", "سهولة الاستخدام", "لا شيء مما سبق"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "التكلفة العالية لإنشاء البنية التحتية هي واحدة من التحديات الرئيسية."
    },
    {
        question: "ما هي الطاقة المنتجة من حركة الماء؟",
        options: ["الطاقة الشمسية", "الطاقة الريحية", "الطاقة الكهرومائية", "الطاقة الحرارية"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "الطاقة الكهرومائية تنتج من حركة الماء، مثل السدود والأنهار."
    },
    {
        question: "ما هي فوائد استخدام الطاقة الريحية؟",
        options: ["زيادة التلوث", "تقليل انبعاثات الكربون", "زيادة استخدام الوقود الأحفوري", "لا شيء مما سبق"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "الطاقة الريحية تقلل من انبعاثات الكربون وهي مصدر طاقة نظيف."
    },
    {
        question: "ما هي الطاقة الجيوحرارية؟",
        options: ["الطاقة الشمسية", "الطاقة المستخرجة من باطن الأرض", "الطاقة الريحية", "الطاقة الكهرومائية"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "الطاقة الجيوحرارية تأتي من الحرارة الموجودة في باطن الأرض."
    },
    {
        question: "ما هو الدور الرئيسي للطاقة المتجددة في تقليل التلوث؟",
        options: ["زيادة التلوث", "تقليل الانبعاثات", "زيادة استخدام الوقود الأحفوري", "لا شيء مما سبق"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "الطاقة المتجددة تقلل من انبعاثات الكربون."
    },
    {
        question: "ما هو البلد الذي يستخدم الطاقة المتجددة أكثر من غيره؟",
        options: ["الصين", "كندا", "ألمانيا", "اليابان"],
        correctAnswer: 0,
        topic: 'renewable-energy',
        info: "الصين هي واحدة من الدول التي تستخدم الطاقة المتجددة بشكل كبير."
    },
    {
        question: "ما هو تأثير الطاقة المتجددة على الاقتصاد؟",
        options: ["زيادة البطالة", "خلق وظائف جديدة", "زيادة التلوث", "لا شيء مما سبق"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "الطاقة المتجددة تخلق وظائف جديدة في مختلف المجالات."
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
        options: ["زيادة التلوث", "تقليل التلوث", "زيادة استخدام الوقود الأحفوري", "لا شيء مما سبق"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "الطاقة المتجددة تقلل من التلوث البيئي."
    },
    {
        question: "ما هي الطاقة المنتجة من الكتلة الحيوية؟",
        options: ["الطاقة الشمسية", "الطاقة الحيوية", "الطاقة الريحية", "الطاقة الكهرومائية"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "الطاقة الحيوية تنتج من المواد العضوية مثل النباتات."
    },
    {
        question: "ما هو تأثير الطاقة المتجددة على الأمن الطاقوي؟",
        options: ["زيادة الاعتماد على النفط", "تقليل الاعتماد على الوقود الأحفوري", "زيادة التلوث", "لا شيء مما سبق"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "الطاقة المتجددة تقلل من الاعتماد على الوقود الأحفوري."
    },
    {
        question: "ما هي الطاقة المنتجة من حركة الأمواج؟",
        options: ["الطاقة الشمسية", "الطاقة الريحية", "الطاقة الموجية", "الطاقة الحرارية"],
        correctAnswer: 2,
        topic: 'renewable-energy',
        info: "الطاقة الموجية تعتمد على حركة الأمواج."
    },
    {
        question: "ما هو تأثير الطاقة المتجددة على المناخ؟",
        options: ["زيادة الانبعاثات", "تقليل الانبعاثات", "زيادة التلوث", "لا شيء مما سبق"],
        correctAnswer: 1,
        topic: 'renewable-energy',
        info: "الطاقة المتجددة تقلل من الانبعاثات الضارة للمناخ."
    }
],
    biodiversity: [
    // الأسئلة الجديدة حول التنوع البيولوجي (15 سؤالًا)
    {
        question: "ما هو التنوع البيولوجي؟",
        options: ["تنوع الحياة على الأرض", "تنوع الصخور", "تنوع المناخ", "تنوع الألوان"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "يشير التنوع البيولوجي إلى تنوع الحياة على الأرض."
    },
    {
        question: "ما هي أهمية التنوع البيولوجي؟",
        options: ["تحسين الاقتصاد", "الحفاظ على التوازن البيئي", "زيادة التلوث", "زيادة استخدام البلاستيك"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "يلعب التنوع البيولوجي دورًا حيويًا في الحفاظ على التوازن البيئي."
    },
    {
        question: "ما هي أكبر التهديدات للتنوع البيولوجي؟",
        options: ["تدمير الموائل", "زراعة الأشجار", "استخدام الطاقات المتجددة", "تنظيف البيئة"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "تدمير الموائل الطبيعية هو أحد أكبر التهديدات للتنوع البيولوجي."
    },
    {
        question: "ما هو الدور الرئيسي للنباتات في التنوع البيولوجي؟",
        options: ["إنتاج الأكسجين", "زيادة التلوث", "انبعاث ثاني أكسيد الكربون", "تقليل الأمطار"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "تلعب النباتات دورًا أساسيًا في إنتاج الأكسجين والحفاظ على التوازن البيئي."
    },
    {
        question: "ما هو تأثير تغير المناخ على التنوع البيولوجي؟",
        options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "يتسبب تغير المناخ في انخفاض التنوع البيولوجي بسبب تدمير الموائل."
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
        info: "الغابات الاستوائية هي من بين أغنى المناطق بالتنوع البيولوجي."
    },
    {
        question: "ما هو تأثير الزراعة المفرطة على التنوع البيولوجي؟",
        options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "الزراعة المفرطة تدمر الموائل الطبيعية وتقلل من التنوع البيولوجي."
    },
    {
        question: "ما هو دور الحشرات في التنوع البيولوجي؟",
        options: ["التلقيح", "زيادة التلوث", "انبعاث ثاني أكسيد الكربون", "تقليل الأمطار"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "تلعب الحشرات دورًا رئيسيًا في التلقيح وإنتاج الغذاء."
    },
    {
        question: "ما هو تأثير الغابات على التنوع البيولوجي؟",
        options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
        correctAnswer: 0,
        topic: 'biodiversity',
        info: "توفر الغابات موائل طبيعية وتحافظ على التنوع البيولوجي."
    },
    {
        question: "ما هو تأثير التحضر على التنوع البيولوجي؟",
        options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "يؤدي التحضر إلى تدمير الموائل الطبيعية وانخفاض التنوع البيولوجي."
    },
    {
        question: "ما هو تأثير التلوث على التنوع البيولوجي؟",
        options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "يؤدي التلوث إلى تدمير الموائل الطبيعية وانخفاض التنوع البيولوجي."
    },
    {
        question: "ما هو تأثير السياحة على التنوع البيولوجي؟",
        options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "السياحة المفرطة تدمر الموائل الطبيعية وتنخفض التنوع البيولوجي."
    },
    {
        question: "ما هو تأثير حرائق الغابات على التنوع البيولوجي؟",
        options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "تدمر الحرائق الموائل الطبيعية وتنخفض التنوع البيولوجي."
    },
    {
        question: "ما هو تأثير الحروب على التنوع البيولوجي؟",
        options: ["زيادة التنوع", "انخفاض التنوع", "تحسين جودة الهواء", "زيادة الأكسجين"],
        correctAnswer: 1,
        topic: 'biodiversity',
        info: "تدمر الحروب الموائل الطبيعية وتنخفض التنوع البيولوجي."
     }
],
         };
    return questions[topic] || [];
}