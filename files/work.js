let questions = [];
questions[0] = new Question("С какво гориво се отопляват част от филиалите?", "Газ", "Дърва", "Въглища", "Пелети");
questions[1] = new Question("Каква е целта на автоматичното управление на системите във филиала?", "Оптимална и енерго ефективна работа на инсталациите", "Да следи почистването на филиала", "Да сигнализира за поява на вредители", "Да спира водата на конвектоматите");
questions[2] = new Question("За какво служи спринклерната инсталация?","За пожарогасене", "За къпане", "За пожароизвестяване", "За поливане на тревни площи");
questions[3] = new Question("Защо вратата на хладилните камери трябва да бъде винаги затворена?", "За икономия на енергия, против обледяване","За да не влизат птици", "За да не се охлажда склада","За да се освободи място за складиране");
questions[4] = new Question("Каква е стандартната настройка на температурата на климатичната инсталация през зимен/летен период в магазините?","18 / 24","13 / 18","25 / 30", "0 / 10");
questions[5] = new Question("Какво следва да направим, ако забележим, че осветлението остава активно след издаване на филиала под СОТ?", "Подава се сигнал към енергийния мениджър/Отговорник поддръжка", "Нищо", "Звъни се на пожарната", "Връщаме се да работим");
questions[6] = new Question("Какво следва да направим, ако забележим извираща вода на паркинга?", "Уведомяваме отдел Техническа поддръжка", "Изстудяваме си бирата", "Измиваме си колата", "Обаждаме се в енерго дружеството");
questions[7] = new Question("До какво ниво се зареждат хладилните мебели?", "До обозначеното ниво на зареждане", "Колкото могат да съберат", "Държат се полу-празни", "Не се зареждат");
questions[8] = new Question("Колко често трябва да се проверява състоянието на инсталациите в техническите помещения?", "Ежедневно", "Ежегодно", "Ежемесечно", "Никога");
questions[9] = new Question("За какво сигнализира гонга във филиала?", "Наличие на пожарна опасност", "Заплатата е преведена", "Време е за почивка", "Баничките са готови");
questions[10] = new Question("С какво се занимава отдел Отдаване под наем?", "Търси потенциални нови наематели и се грижи за концесионерните зони", "Обикаля по обектите на конкурентите", "Проучва пазара за хранителни стоки в Източна Европа", "С нищо интересно");
questions[11] = new Question("Как се определя периода на договорa за наем с концесионерите?", "Според бранша на партньора", "Според местоположението на ретроградния Меркурий", "Според аурата на партньора", "Според настроението на партньорите");
questions[12] = new Question("На кой цвят съответства RAL 7016?", "антрацит", "светлосив", "червен", "лилав");
questions[13] = new Question("Защо рециклираме хартията?", "защото 90% от всички хартиени и картонени опаковки могат да се преработват", "за получаване на по-добър цвят на хартията", "за да откриваме работни места", "Не рециклираме");
questions[14] = new Question("Кои са двата основни цвята в работното облекло на служителите във филиалите?", "червен и антрацитен", "жълт и червен", "бял на черни точки", "зелен и жълт");
questions[15] = new Question("Какво спестяваме с рециклирането на 1 тон хартия в Кауфланд?", "Изсичането на 13 дървета","отпадъци на пътя и други обществени места", "Разходка до кофите за боклук", "Не спестяваме");


let randomQuestion;
let answers = [];
let currentScore = 0;
let counter = 0;
let b;

document.addEventListener("DOMContentLoaded", function() {
  buttonClickNextQuestion();
});
function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3) {
  this.question = question;
  this.rightAnswer = rightAnswer;
  this.wrongAnswer1 = wrongAnswer1;
  this.wrongAnswer2 = wrongAnswer2;
  this.wrongAnswer3 = wrongAnswer3;
}
function shuffle(o) {
	for (let j, x, i = o.length; i; j = parseInt(Math.random() * i), 
  x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
function buttonClickNextQuestion() { 
  getRandomNumber();
  adjustAnswers();
  shuffle(answers);
  defineQuestionsAndAnswers();
}
function getRandomNumber(){
  let randomNumber = Math.floor(Math.random()*questions.length);
  randomQuestion = questions[randomNumber];   
}
function adjustAnswers() {
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, 
  randomQuestion.wrongAnswer2 , randomQuestion.wrongAnswer3];
}
function defineQuestionsAndAnswers() {
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
  document.getElementById("answerD").value= answers[3];
  document.getElementById("answerD").innerHTML= answers[3];
}
function answerA_clicked() {
  let answerA = document.getElementById("answerA");
  checkAnswer(answerA);
}
function answerB_clicked() {
	let answerB = document.getElementById("answerB");
	checkAnswer(answerB);
}
function answerC_clicked() {
  let answerC = document.getElementById("answerC");
	checkAnswer(answerC);
}
function answerD_clicked() {
  let answerD = document.getElementById("answerD");
  checkAnswer(answerD);
}
function adjustScore(isCorrect) {
  if (isCorrect) {
    currentScore++;
  }
  document.getElementById("score").innerHTML = currentScore;
  myFunction();
}
function myFunction() {
  countQuestions();
  document.getElementById("count").innerHTML = counter;
  checkCurrentQuestion();
}
function countQuestions() {
  counter++;
}
function checkCurrentQuestion() {
  if (counter === 5) {
    windowOpenEndGame();
  }
}
function windowOpenEndGame() {
    if (currentScore === 0) {
      window.open('0.html', '_self');
    }  
    else if (currentScore === 1) {
      window.open('1.html', '_self');
    }
    else if (currentScore === 2) {
      window.open('2.html', '_self');
    }
    else if (currentScore === 3) {
      window.open('3.html', '_self');
    }
    else if (currentScore === 4) {
      window.open('4.html', '_self');
    }
    else if (currentScore === 5) {
      window.open('5.html', '_self');
    }
}
function checkAnswer(answer) {
  if (answer.value === randomQuestion.rightAnswer) {
    answer.style.backgroundColor = 'green';
    setTimeout(function(){
      buttonClickNextQuestion();
      adjustScore(true);
      resetColor();  
    }, 1000);
  } else { 
      do {
        answer.style.backgroundColor = 'red';
        checkContent()
      }
      while (this === true);
        setTimeout(function() {
          buttonClickNextQuestion();
          adjustScore(false);
          resetColor();  
        }, 1000);
    }  
    function resetColor(){
      answer.style.backgroundColor = '#293133';
      b.style.backgroundColor = '#293133';
  }
}
function checkContent() {
  for (const button of document.querySelectorAll("button")) {
    if (button.textContent.includes(randomQuestion.rightAnswer)){ 
      b = button;
      b.style.backgroundColor = 'green';
    }
  }
}