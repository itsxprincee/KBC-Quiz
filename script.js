
// ------------------------
// RULES PAGE
// ------------------------
function goToLogin(){
    document.getElementById("rulesScreen").style.display = "none";
    document.getElementById("loginScreen").style.display = "flex";
}

// ------------------------
// LOGIN SYSTEM
// ------------------------
const PASSWORD = "123";
let playerName = "";
let questions = []; // will hold selected set

function checkLogin(){
    const nameInput = document.getElementById("playerNameInput").value;
    const pass = document.getElementById("password").value;
    const selectedSet = document.getElementById("questionSet").value;

    if(nameInput.trim() === ""){
        document.getElementById("loginError").innerText = "Enter your name!";
        return;
    }
    if(pass !== PASSWORD){
        document.getElementById("loginError").innerText = "Incorrect password!";
        return;
    }

    playerName = nameInput;

    // Load selected question set
    if(selectedSet == "1") questions = questionsSet1;
    if(selectedSet == "2") questions = questionsSet2;
    if(selectedSet == "3") questions = questionsSet3;
    if(selectedSet == "4") questions = questionsSet4;

    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("playerDisplay").innerText = playerName;

    document.getElementById("loginSound").play();
    document.getElementById("bgMusic").play();

    loadQuestion();
}

// ------------------------
// QUESTION SETS
// ------------------------
let questionsSet1 = [
{question:"Capital of India?",options:["A. Mumbai","B. Delhi","C. Kolkata","D. Chennai"],answer:"B"},
{question:"Red planet?",options:["A. Earth","B. Mars","C. Venus","D. Jupiter"],answer:"B"},
{question:"Largest ocean?",options:["A. Atlantic","B. Indian","C. Pacific","D. Arctic"],answer:"C"},
{question:"Pink city of India?",options:["A. Jaipur","B. Delhi","C. Udaipur","D. Jodhpur"],answer:"A"},
{question:"Fastest land animal?",options:["A. Lion","B. Tiger","C. Cheetah","D. Leopard"],answer:"C"},
{question:"Gas we breathe?",options:["A. Oxygen","B. Nitrogen","C. Hydrogen","D. CO2"],answer:"A"},
{question:"Currency of Japan?",options:["A. Yen","B. Dollar","C. Peso","D. Rupee"],answer:"A"},
{question:"Largest planet?",options:["A. Earth","B. Jupiter","C. Saturn","D. Mars"],answer:"B"},
{question:"Who discovered gravity?",options:["A. Newton","B. Einstein","C. Galileo","D. Tesla"],answer:"A"},
{question:"Symbol of Gold?",options:["A. Go","B. Gd","C. Au","D. Ag"],answer:"C"},
{question:"Painter of Mona Lisa?",options:["A. Picasso","B. Leonardo da Vinci","C. Van Gogh","D. Michelangelo"],answer:"B"},
{question:"Smallest continent?",options:["A. Europe","B. Australia","C. Africa","D. Antarctica"],answer:"B"},
{question:"National bird of India?",options:["A. Peacock","B. Eagle","C. Sparrow","D. Parrot"],answer:"A"},
{question:"Largest desert?",options:["A. Sahara","B. Gobi","C. Thar","D. Arctic"],answer:"A"},
{question:"Number of continents?",options:["A. 5","B. 6","C. 7","D. 8"],answer:"C"},
{question:"Liquid metal?",options:["A. Iron","B. Mercury","C. Copper","D. Zinc"],answer:"B"}
];

let questionsSet2 = [
{question:"Inventor of telephone?",options:["A. Edison","B. Graham Bell","C. Tesla","D. Newton"],answer:"B"},
{question:"Capital of France?",options:["A. Berlin","B. Madrid","C. Paris","D. Rome"],answer:"C"},
{question:"Largest mammal?",options:["A. Elephant","B. Blue Whale","C. Shark","D. Rhino"],answer:"B"},
{question:"Currency of USA?",options:["A. Dollar","B. Euro","C. Pound","D. Peso"],answer:"A"},
{question:"National animal of India?",options:["A. Lion","B. Tiger","C. Leopard","D. Bear"],answer:"B"},
{question:"Hottest planet?",options:["A. Mercury","B. Venus","C. Mars","D. Jupiter"],answer:"B"},
{question:"Longest river?",options:["A. Nile","B. Amazon","C. Ganga","D. Yangtze"],answer:"A"},
{question:"Gas used by plants?",options:["A. Oxygen","B. Carbon Dioxide","C. Hydrogen","D. Nitrogen"],answer:"B"},
{question:"Largest country?",options:["A. USA","B. Russia","C. China","D. Canada"],answer:"B"},
{question:"Players in football team?",options:["A. 9","B. 10","C. 11","D. 12"],answer:"C"},
{question:"Capital of Germany?",options:["A. Berlin","B. Munich","C. Bonn","D. Hamburg"],answer:"A"},
{question:"Writer of Hamlet?",options:["A. Dickens","B. Shakespeare","C. Tolkien","D. Austen"],answer:"B"},
{question:"Speed of light?",options:["A. 300k km/s","B. 100k km/s","C. 500k km/s","D. 1M km/s"],answer:"A"},
{question:"Earth satellite?",options:["A. Moon","B. Mars","C. Venus","D. Sun"],answer:"A"},
{question:"Largest bone?",options:["A. Femur","B. Skull","C. Rib","D. Spine"],answer:"A"},
{question:"Sun vitamin?",options:["A. A","B. B","C. C","D. D"],answer:"D"}
];

let questionsSet3 = [
{question:"Capital of Italy?",options:["A. Milan","B. Venice","C. Rome","D. Naples"],answer:"C"},
{question:"Largest island?",options:["A. Greenland","B. Australia","C. Madagascar","D. Iceland"],answer:"A"},
{question:"Organ pumping blood?",options:["A. Brain","B. Heart","C. Lung","D. Liver"],answer:"B"},
{question:"Water formula?",options:["A. CO2","B. H2O","C. O2","D. NaCl"],answer:"B"},
{question:"Sun is?",options:["A. Planet","B. Star","C. Asteroid","D. Comet"],answer:"B"},
{question:"Greenhouse gas?",options:["A. Oxygen","B. Nitrogen","C. CO2","D. Helium"],answer:"C"},
{question:"Tallest mountain?",options:["A. K2","B. Everest","C. Makalu","D. Kanchenjunga"],answer:"B"},
{question:"Largest organ?",options:["A. Skin","B. Heart","C. Brain","D. Liver"],answer:"A"},
{question:"Capital of Canada?",options:["A. Toronto","B. Ottawa","C. Montreal","D. Vancouver"],answer:"B"},
{question:"First man on moon?",options:["A. Armstrong","B. Aldrin","C. Collins","D. Gagarin"],answer:"A"},
{question:"Disease fighting cells?",options:["A. RBC","B. WBC","C. Platelets","D. Plasma"],answer:"B"},
{question:"Fastest bird?",options:["A. Falcon","B. Eagle","C. Hawk","D. Sparrow"],answer:"A"},
{question:"Asian desert?",options:["A. Gobi","B. Thar","C. Arabian","D. Taklamakan"],answer:"A"},
{question:"Planet with rings?",options:["A. Mars","B. Saturn","C. Mercury","D. Earth"],answer:"B"},
{question:"Discovered America?",options:["A. Columbus","B. Cook","C. Magellan","D. Vespucci"],answer:"A"},
{question:"Metal that rusts?",options:["A. Iron","B. Gold","C. Silver","D. Copper"],answer:"A"}
];

let questionsSet4 = [
{question:"Largest lake?",options:["A. Victoria","B. Superior","C. Baikal","D. Michigan"],answer:"B"},
{question:"King of jungle?",options:["A. Tiger","B. Lion","C. Bear","D. Leopard"],answer:"B"},
{question:"Human bones?",options:["A. 206","B. 210","C. 180","D. 150"],answer:"A"},
{question:"Country with pyramids?",options:["A. Egypt","B. Mexico","C. Peru","D. India"],answer:"A"},
{question:"Largest continent?",options:["A. Asia","B. Africa","C. Europe","D. America"],answer:"A"},
{question:"Hours in a day?",options:["A. 12","B. 24","C. 36","D. 48"],answer:"B"},
{question:"Planet closest to sun?",options:["A. Venus","B. Earth","C. Mercury","D. Mars"],answer:"C"},
{question:"Capital of Australia?",options:["A. Sydney","B. Canberra","C. Melbourne","D. Perth"],answer:"B"},
{question:"Most abundant gas?",options:["A. Oxygen","B. Nitrogen","C. CO2","D. Hydrogen"],answer:"B"},
{question:"Flightless bird?",options:["A. Eagle","B. Penguin","C. Hawk","D. Crow"],answer:"B"},
{question:"Largest rainforest?",options:["A. Amazon","B. Congo","C. Taiga","D. Sundarbans"],answer:"A"},
{question:"Temperature instrument?",options:["A. Barometer","B. Thermometer","C. Hygrometer","D. Altimeter"],answer:"B"},
{question:"Largest volcano?",options:["A. Mauna Loa","B. Fuji","C. Etna","D. Vesuvius"],answer:"A"},
{question:"Penicillin discoverer?",options:["A. Fleming","B. Darwin","C. Jenner","D. Pasteur"],answer:"A"},
{question:"Largest ocean animal?",options:["A. Whale","B. Shark","C. Octopus","D. Dolphin"],answer:"A"},
{question:"Gas in balloons?",options:["A. Helium","B. Oxygen","C. Nitrogen","D. Hydrogen"],answer:"A"}
];

// ------------------------
// VARIABLES
// ------------------------
let money = ["₹1,000","₹2,000","₹5,000","₹10,000","₹20,000","₹40,000","₹80,000",
"₹1,60,000","₹3,20,000","₹6,40,000","₹12,50,000","₹25,00,000",
"₹50,00,000","₹1 Crore","₹7 Crore"];

let current = 0;
let displayIndex = 0;
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

    document.getElementById("nextBtn").disabled = true;
    document.getElementById("lockBtn").disabled = false;

    highlight();
    startTimer();
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
    document.getElementById("nextBtn").disabled = false;
}

// ------------------------
// NEXT QUESTION
// ------------------------
function nextQuestion(){
    if(gameOver) return;
    if(document.getElementById("nextBtn").disabled) return;

    new Audio("login.mp3").play(); // play sound when next question is clicked

    loadQuestion();
}

// ------------------------
// TIMER
// ------------------------
function startTimer(){
    if(gameOver) return;

    let totalTime;

    if(current < 5){
        totalTime = 30;   // Question 1–5
    }
    else if(current < 10){
        totalTime = 60;   // Question 6–10
    }
    else{
        totalTime = 120;  // Question 11–15
    }

    timeLeft = totalTime;

    document.getElementById("time").innerText = timeLeft;
    document.getElementById("timeBar").style.width = "100%";

    clearInterval(timer);
    countdownPlayed = false;

    timer = setInterval(()=>{
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;

    let bar = document.getElementById("timeBar");
    let timerBox = document.querySelector(".timer");

    bar.style.width = (timeLeft/totalTime*100) + "%";

    // Timer Color Logic
    if(timeLeft > 20){
        bar.style.background = "lime";
        timerBox.style.borderColor = "lime";
    }
    else if(timeLeft > 10){
        bar.style.background = "yellow";
        timerBox.style.borderColor = "yellow";
    }
    else{
        bar.style.background = "red";
        timerBox.style.borderColor = "red";
    }

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
    let items = document.querySelectorAll("#ladderList li");
    let index = items.length - current;
    if(current == 0) return "0";
    if(items[index]) return items[index].innerText;
    return "0";
}

function updateWinningAmount(){
    let amount = getWinningAmount();
    const winEl = document.getElementById("winningAmount");
    winEl.innerText = "⭐ Winning Points: " + amount;
}

// ------------------------
// LIFELINES
// ------------------------
function fiftyFifty(){
    if(gameOver) return;
    const btnElement = document.querySelector(".lifelines button:nth-child(1)");
    if(btnElement.classList.contains("used")) return;

    let btn = document.querySelectorAll(".option");
    let correctIndex = ["A","B","C","D"].indexOf(questions[displayIndex].answer);
    let wrongButtons = Array.from(btn).filter((b,i) => i !== correctIndex);
    wrongButtons.slice(0,2).forEach(b => b.style.visibility = "hidden");

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
    const MIN_PERCENT = 8;

    let correctPercent = Math.floor(Math.random() * 21) + 50;
    let remaining = 100 - correctPercent;
    let wrongPercents = [MIN_PERCENT, MIN_PERCENT, MIN_PERCENT];
    remaining -= MIN_PERCENT * 3;

    let extra1 = Math.floor(Math.random() * (remaining + 1));
    let extra2 = Math.floor(Math.random() * (remaining - extra1 + 1));
    let extra3 = remaining - extra1 - extra2;
    wrongPercents[0] += extra1;
    wrongPercents[1] += extra2;
    wrongPercents[2] += extra3;

    let percents = [];
    let wrongIndex = 0;
    for(let i=0;i<4;i++){
        percents[i] = options[i] === correct ? correctPercent : wrongPercents[wrongIndex++];
    }

    for(let i=0;i<4;i++){
        let bar = document.createElement("div");
        bar.style.width = "0%";
        bar.style.height = "30px";
        bar.style.margin = "5px 0";
        bar.style.background = "linear-gradient(90deg, #ff9900, #ffcc00)";
        bar.style.borderRadius = "8px";
        bar.style.position = "relative";
        bar.style.transition = "width 1s ease-out";

        let span = document.createElement("span");
        span.innerText = options[i]+" ("+percents[i]+"%)";
        span.style.position = "absolute";
        span.style.left = "50%";
        span.style.top = "50%";
        span.style.transform = "translate(-50%, -50%)";
        span.style.color = "white";
        span.style.fontWeight = "bold";
        span.style.fontSize = "14px";
        span.style.pointerEvents = "none";

        bar.appendChild(span);
        chart.appendChild(bar);

        setTimeout(()=>{ bar.style.width = percents[i]+"%"; },50);
    }

    btnElement.classList.add("used");
    btnElement.disabled = true;
}

function skipQuestion(){
    if(gameOver) return;
    const btnElement = document.querySelector(".lifelines button:nth-child(3)");
    if(btnElement.classList.contains("used")) return;

    clearInterval(timer);
    displayIndex++;
    loadQuestion();

    btnElement.classList.add("used");
    btnElement.disabled = true;
    document.getElementById("nextBtn").disabled = false;
}
function endGame(win){
document.getElementById("game").style.display="none";
document.getElementById("endScreen").style.display="flex";
if(win){
document.getElementById("finalMessage").innerText="🎉 GRAND WINNER! ₹"+score;
}else{
document.getElementById("finalMessage").innerText="❌ Game Over! ₹"+score;
}
}
