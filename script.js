// ------------------------
// LOGIN SYSTEM
// ------------------------
const PASSWORD = "123";
let playerName = "";

function checkLogin(){
    const nameInput = document.getElementById("playerNameInput").value;
    const pass = document.getElementById("password").value;

    if(nameInput.trim() === ""){
        document.getElementById("loginError").innerText = "Enter your name!";
        return;
    }

    if(pass !== PASSWORD){
        document.getElementById("loginError").innerText = "Incorrect password!";
        return;
    }

    playerName = nameInput;
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("playerDisplay").innerText = playerName;
    document.getElementById("bgMusic").play();
    loadQuestion();
}

// ------------------------
// QUESTIONS
// ------------------------
let questions = [
    {question:"Who is Father of Nation in India?",options:["A. Nehru","B. Mahatma Gandhi","C. Bose","D. Patel"],answer:"B"},
    {question:"Which planet is Red Planet?",options:["A. Earth","B. Mars","C. Jupiter","D. Venus"],answer:"B"},
    {question:"Largest ocean in the world?",options:["A. Atlantic","B. Indian","C. Pacific","D. Arctic"],answer:"C"},
    {question:"Which Indian city is known as Pink City?",options:["A. Jaipur","B. Jodhpur","C. Udaipur","D. Bikaner"],answer:"A"},
    {question:"Who invented the telephone?",options:["A. Edison","B. Graham Bell","C. Tesla","D. Marconi"],answer:"B"},
    {question:"Which is the smallest continent by area?",options:["A. Africa","B. Europe","C. Australia","D. Antarctica"],answer:"C"},
    {question:"Who wrote the Indian National Anthem?",options:["A. Tagore","B. Nehru","C. Vivekananda","D. Iqbal"],answer:"A"},
    {question:"What is the capital of Japan?",options:["A. Seoul","B. Beijing","C. Tokyo","D. Bangkok"],answer:"C"},
    {question:"Which gas is essential for respiration?",options:["A. Nitrogen","B. Oxygen","C. Carbon Dioxide","D. Hydrogen"],answer:"B"},
    {question:"Who discovered gravity?",options:["A. Newton","B. Einstein","C. Galileo","D. Kepler"],answer:"A"},
    {question:"What is the currency of Japan?",options:["A. Yen","B. Dollar","C. Euro","D. Rupee"],answer:"A"},
    {question:"Who painted the Mona Lisa?",options:["A. Van Gogh","B. Leonardo da Vinci","C. Picasso","D. Michelangelo"],answer:"B"},
    {question:"Which is the largest planet in our solar system?",options:["A. Earth","B. Jupiter","C. Saturn","D. Neptune"],answer:"B"},
    {question:"What is the chemical symbol for Gold?",options:["A. Au","B. Ag","C. Go","D. Gd"],answer:"A"},
    {question:"Which country hosted the 2016 Summer Olympics?",options:["A. China","B. Brazil","C. UK","D. Russia"],answer:"B"},
    {question:"Which is the fastest land animal?",options:["A. Lion","B. Tiger","C. Cheetah","D. Leopard"],answer:"C"} // Backup question
];

// ------------------------
// VARIABLES
// ------------------------
let money = [
"₹1,000","₹2,000","₹5,000","₹10,000","₹20,000","₹40,000","₹80,000",
"₹1,60,000","₹3,20,000","₹6,40,000","₹12,50,000","₹25,00,000",
"₹50,00,000","₹1 Crore","₹7 Crore"
];

let current = 0;          // ladder/winning amount
let displayIndex = 0;     // question currently displayed
let selected = null;
let timer;
let timeLeft = 30;
let gameOver = false;
let pollUsedForCurrentQuestion = false;
let countdownAudio = new Audio("countdown.mp3");
let countdownPlayed = false;

// ------------------------
// LOAD QUESTION
// ------------------------
function loadQuestion(){
    if(gameOver) return;

    if(displayIndex >= questions.length){
        alert("🎉 Congratulations! You completed all questions.");
        gameOver = true;
        updateWinningAmount();
        return;
    }

    let q = questions[displayIndex];
    document.getElementById("question").innerText = q.question;

    let btn = document.querySelectorAll(".option");
    btn.forEach((b,i)=>{
        b.innerText = q.options[i];
        b.classList.remove("selected","correct","wrong");
        b.disabled = false;
        b.style.visibility = "visible";
    });

    selected = null;
    pollUsedForCurrentQuestion = false;
    countdownPlayed = false;
    document.getElementById("pollChart").innerHTML = "";

    // Disable Next Question until user locks or skips
    document.getElementById("nextBtn").disabled = true;

    document.getElementById("lockBtn").disabled = false;

    highlight();
    startTimer(); // resets timer to full
}

// ------------------------
// SELECT OPTION
// ------------------------
function selectOption(letter,button){
    if(gameOver) return;
    let btn = document.querySelectorAll(".option");
    btn.forEach(b=>b.classList.remove("selected"));
    button.classList.add("selected");
    selected = letter;
}

// ------------------------
// LOCK ANSWER
// ------------------------
function lockAnswer(){
    if(selected == null || gameOver) return;

    document.getElementById("lockBtn").disabled = true;
    clearInterval(timer);
    countdownAudio.pause();
    countdownAudio.currentTime = 0;

    let correct = questions[displayIndex].answer;
    let btn = document.querySelectorAll(".option");

    if(selected === correct){
        document.getElementById("correctSound").play();
        btn[["A","B","C","D"].indexOf(selected)].classList.add("correct");

        current++;       
        displayIndex++;
        updateWinningAmount();
        highlight();
    } else {
        document.getElementById("wrongSound").play();
        btn[["A","B","C","D"].indexOf(selected)].classList.add("wrong");
        btn[["A","B","C","D"].indexOf(correct)].classList.add("correct");
        gameOver = true;
        updateWinningAmount();
    }

    btn.forEach(b => b.disabled = true);

    // Enable Next Question after locking
    document.getElementById("nextBtn").disabled = false;
}

// ------------------------
// NEXT QUESTION
// ------------------------
function nextQuestion(){
    if(gameOver) return;

    // Only works if button is enabled
    if(document.getElementById("nextBtn").disabled) return;

    loadQuestion(); // resets timer and loads question
}

// ------------------------
// TIMER
// ------------------------
function startTimer(){
    if(gameOver) return;

    let totalTime = current < 6 ? 30 : 60;
    timeLeft = totalTime;

    document.getElementById("time").innerText = timeLeft;
    document.getElementById("timeBar").style.width = "100%";

    clearInterval(timer);
    countdownPlayed = false;

    timer = setInterval(()=>{
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        document.getElementById("timeBar").style.width = (timeLeft/totalTime*100) + "%";

        if(timeLeft === 10 && !countdownPlayed){
            countdownPlayed = true;
            countdownAudio.currentTime = 0;
            countdownAudio.play();
        }

        if(timeLeft <= 0){
            clearInterval(timer);
            gameOver = true;
            updateWinningAmount();
        }
    },1000);
}

// ------------------------
// HIGHLIGHT LADDER
// ------------------------
function highlight(){
    let items = document.querySelectorAll("#ladderList li");
    items.forEach(i=>{
        i.classList.remove("active");
        i.style.animation = "";
    });

    let index = items.length-1-current;
    if(items[index]){
        items[index].classList.add("active");
        items[index].style.animation = "glow 1s infinite";
    }
}

// ------------------------
// WINNING AMOUNT
// ------------------------
function getWinningAmount(){
    return current==0?"₹0":money[Math.min(current-1,money.length-1)];
}

function updateWinningAmount(){
    let amount = getWinningAmount();
    const winEl = document.getElementById("winningAmount");
    winEl.innerText = "💰 Winning Points: " + amount;
}

// ------------------------
// LIFELINES
// ------------------------
function fiftyFifty(){
    if(gameOver) return;
    const btnElement = document.querySelector(".lifelines button:nth-child(1)");
    if(btnElement.classList.contains("used")) return;

    let btn = document.querySelectorAll(".option");
    let correct = questions[displayIndex].answer;
    let wrongButtons = Array.from(btn).filter(b => !b.innerText.startsWith(correct));
    wrongButtons = wrongButtons.sort(()=>0.5-Math.random());

    wrongButtons.slice(0,2).forEach(b => b.style.visibility="hidden");

    btnElement.classList.add("used");
    btnElement.disabled = true;
}

function audiencePoll(){
    if(gameOver) return;
    const btnElement = document.querySelector(".lifelines button:nth-child(2)");
    if(btnElement.classList.contains("used")) return;

    pollUsedForCurrentQuestion = true;
    let chart = document.getElementById("pollChart");
    chart.innerHTML = "";

    let options = ["A","B","C","D"];
    let correct = questions[displayIndex].answer;

    let correctPercent = Math.floor(Math.random() * 21) + 40;
    let remaining = 100 - correctPercent;
    let wrongPercents = [];
    for(let i=0;i<3;i++){
        if(i<2){
            let p = Math.floor(Math.random()*(remaining+1));
            wrongPercents.push(p);
            remaining -= p;
        } else wrongPercents.push(remaining);
    }
    wrongPercents.sort(() => 0.5 - Math.random());

    let percents = [];
    for(let i=0;i<4;i++){
        percents[i] = options[i] === correct ? correctPercent : wrongPercents.pop();
    }

    for(let i=0; i<4; i++){
        let bar = document.createElement("div");
        bar.style.width = percents[i] + "%";
        bar.style.position = "relative";

        let span = document.createElement("span");
        span.innerText = options[i];
        span.style.position = "absolute";
        span.style.left = "50%";
        span.style.transform = "translateX(-50%)";
        span.style.color = "white";
        bar.appendChild(span);

        chart.appendChild(bar);
    }

    btnElement.classList.add("used");
    btnElement.disabled = true;
}

function skipQuestion(){
    if(gameOver) return;
    const btnElement = document.querySelector(".lifelines button:nth-child(3)");
    if(btnElement.classList.contains("used")) return;

    clearInterval(timer);
    displayIndex++; // show next question without moving ladder
    loadQuestion();

    btnElement.classList.add("used");
    btnElement.disabled = true;

    // Enable Next Question after skip
    document.getElementById("nextBtn").disabled = false;
}
