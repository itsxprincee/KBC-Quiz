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
const PASSWORD = "yfpiw7cr";
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
if(selectedSet == "5") questions = questionsSet5;
if(selectedSet == "6") questions = questionsSet6;
if(selectedSet == "7") questions = questionsSet7;
if(selectedSet == "8") questions = questionsSet8;
if(selectedSet == "9") questions = questionsSet9;

    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("playerDisplay").innerText = playerName;

    document.getElementById("loginSound").play();

    prepareQuestion();
}

// ------------------------
// QUESTION SETS
// ------------------------
// ------------------------
// QUESTION SETS
// ------------------------

let questionsSet1 = [
{question:"How many days are there in a leap year?",options:["A. 365","B. 366","C. 364","D. 367"],answer:"B"},
{question:"Which is the smallest planet in our solar system?",options:["A. Mercury","B. Venus","C. Mars","D. Pluto"],answer:"A"},
{question:"Who invented the telephone?",options:["A. Thomas Edison","B. Alexander Graham Bell","C. Isaac Newton","D. Nikola Tesla"],answer:"B"},
{question:"Which country is known as the Land of the Rising Sun?",options:["A. China","B. Japan","C. Thailand","D. Korea"],answer:"B"},
{question:"Who is known as the Father of the Indian Constitution?",options:["A. Mahatma Gandhi","B. B. R. Ambedkar","C. Jawaharlal Nehru","D. Rajendra Prasad"],answer:"B"},
{question:"The Parliament of India consists of which three parts?",options:["A. President, Lok Sabha, Rajya Sabha","B. Prime Minister, Lok Sabha, Rajya Sabha","C. President, Chief Justice, Lok Sabha","D. Cabinet, Lok Sabha, Rajya Sabha"],answer:"A"},
{question:"Which metal is liquid at room temperature?",options:["A. Iron","B. Mercury","C. Copper","D. Gold"],answer:"B"},
{question:"Which Indian state is known as the Spice Garden of India?",options:["A. Tamil Nadu","B. Kerala","C. Karnataka","D. Assam"],answer:"B"},
{question:"How many members are there in the Lok Sabha (maximum strength)?",options:["A. 545","B. 552","C. 543","D. 550"],answer:"B"},
{question:"Which sport is associated with Wimbledon?",options:["A. Cricket","B. Tennis","C. Football","D. Badminton"],answer:"B"},
{question:"Name of India's first dedicated scientific mission to study the Sun?",options:["A. Surya-L1","B. Aditya-L1","C. Bhaskar-1","D. Ravi-L1"],answer:"B"},
{question:"Which is the highest civilian award in India?",options:["A. Padma Bhushan","B. Padma Shri","C. Bharat Ratna","D. Padma Vibhushan"],answer:"C"},
{question:"Which monument was built to commemorate King George V's visit in 1911?",options:["A. India Gate","B. Gateway of India","C. Victoria Memorial","D. Charminar"],answer:"B"},
{question:"Which is considered the first Hindi newspaper published in India?",options:["A. Harijan","B. Udant Martand","C. Saraswati","D. Kavi Vachan Sudha"],answer:"B"},
{question:"Which article of the Indian Constitution is termed the 'Heart and Soul'?",options:["A. Article 14","B. Article 19","C. Article 21","D. Article 32"],answer:"D"},
{question:"Which legendary Hindi author wrote the classic novel 'Godan'?",options:["A. Harivansh Rai Bachchan","B. Munshi Premchand","C. Ramdhari Singh Dinkar","D. Jaishankar"],answer:"B"}
];

let questionsSet2 = [
{question:"Which Indian state is famous for tea production?",options:["A. Punjab","B. Assam","C. Haryana","D. Gujarat"],answer:"B"},
{question:"Which Indian city is known as the Silicon Valley of India?",options:["A. Hyderabad","B. Bengaluru","C. Pune","D. Chennai"],answer:"B"},
{question:"Which Indian city is known as the City of Dreams?",options:["A. Delhi","B. Mumbai","C. Bengaluru","D. Hyderabad"],answer:"B"},
{question:"Who wrote the Indian national song 'Vande Mataram'?",options:["A. Rabindranath Tagore","B. Bankim Chandra Chatterjee","C. Sarojini Naidu","D. Subramania Bharati"],answer:"B"},
{question:"Who was the first Indian to go to space?",options:["A. Kalpana Chawla","B. Rakesh Sharma","C. Sunita Williams","D. Vikram Sarabhai"],answer:"B"},
{question:"Which Indian city is called the City of Lakes?",options:["A. Udaipur","B. Bhopal","C. Srinagar","D. Nainital"],answer:"A"},
{question:"Who invented the airplane?",options:["A. Wright Brothers","B. Isaac Newton","C. Galileo","D. Edison"],answer:"A"},
{question:"Who was the first woman President of India?",options:["A. Indira Gandhi","B. Pratibha Patil","C. Draupadi Murmu","D. Sarojini Naidu"],answer:"B"},
{question:"Which Indian river is called the Sorrow of Bihar?",options:["A. Kosi","B. Ganga","C. Yamuna","D. Godavari"],answer:"A"},
{question:"Which is known as 'white gold' in India?",options:["A. Cotton","B. Silver","C. Platinum","D. Aluminium"],answer:"A"},
{question:"Which article of the Indian Constitution gives Right to Equality?",options:["A. Article 14","B. Article 19","C. Article 21","D. Article 32"],answer:"A"},
{question:"Which Indian Prime Minister gave the slogan 'Jai Jawan Jai Kisan'?",options:["A. Indira Gandhi","B. Lal Bahadur Shastri","C. Nehru","D. Morarji Desai"],answer:"B"},
{question:"Who is the Head of the Indian Armed Forces?",options:["A. Prime Minister","B. President of India","C. Defence Minister","D. Army Chief"],answer:"B"},
{question:"Which river flows through Delhi?",options:["A. Ganga","B. Yamuna","C. Godavari","D. Narmada"],answer:"B"},
{question:"Father of the Indian Space Program?",options:["A. A.P.J. Abdul Kalam","B. Vikram Sarabhai","C. Satish Dhawan","D. Homi Bhabha"],answer:"B"},
{question:"Which is the longest dam in India?",options:["A. Hirakud Dam","B. Bhakra Nangal Dam","C. Tehri Dam","D. Sardar Sarovar Dam"],answer:"A"}
];

let questionsSet3 = [
{question:"Which Indian city is known as the IT Hub of India?",options:["A. Pune","B. Bengaluru","C. Hyderabad","D. Chennai"],answer:"B"},
{question:"Which river is the longest in the world?",options:["A. Amazon","B. Nile","C. Yangtze","D. Mississippi"],answer:"B"},
{question:"Which Indian state is famous for Kaziranga National Park?",options:["A. Assam","B. Kerala","C. Gujarat","D. Madhya Pradesh"],answer:"A"},
{question:"Which Indian festival celebrates the harvest season in Punjab?",options:["A. Pongal","B. Baisakhi","C. Onam","D. Lohri"],answer:"B"},
{question:"Which Indian state is known as the Land of Rising Sun in India?",options:["A. Sikkim","B. Arunachal Pradesh","C. Nagaland","D. Mizoram"],answer:"B"},
{question:"Who is known as the Nightingale of India?",options:["A. Sarojini Naidu","B. Lata Mangeshkar","C. Indira Gandhi","D. Annie Besant"],answer:"A"},
{question:"'Dukh mein sumiran sab kare' is a famous Doha by?",options:["A. Tulsidas","B. Rahim","C. Kabir Das","D. Mirabai"],answer:"C"},
{question:"Which space agency launched Aditya-L1 mission?",options:["A. NASA","B. ISRO","C. ESA","D. Roscosmos"],answer:"B"},
{question:"Which Indian state produces maximum coffee?",options:["A. Kerala","B. Tamil Nadu","C. Karnataka","D. Andhra Pradesh"],answer:"C"},
{question:"Which Indian state has the longest coastline?",options:["A. Maharashtra","B. Tamil Nadu","C. Gujarat","D. Kerala"],answer:"C"},
{question:"Which Indian mission landed near Moon's south pole?",options:["A. Chandrayaan-1","B. Chandrayaan-2","C. Chandrayaan-3","D. Mangalyaan"],answer:"C"},
{question:"Highest mountain peak in India?",options:["A. Nanda Devi","B. Kanchenjunga","C. K2","D. Annapurna"],answer:"B"},
{question:"First Indian Governor-General of independent India?",options:["A. C. Rajagopalachari","B. Lord Mountbatten","C. Nehru","D. B. R. Ambedkar"],answer:"A"},
{question:"First Indian woman Chief Minister?",options:["A. Indira Gandhi","B. Sucheta Kriplani","C. Jayalalithaa","D. Mayawati"],answer:"B"},
{question:"India's 'Operation Ganga' in 2022 evacuated citizens from?",options:["A. Afghanistan","B. Sudan","C. Israel","D. Ukraine"],answer:"D"},
{question:"First Battle of Panipat fought between?",options:["A. Akbar and Hemu","B. Babur and Ibrahim Lodi","C. Marathas and Ahmad Shah Durrani","D. Humayun and Sher Shah Suri"],answer:"B"}
];

let questionsSet4 = [
{question:"Which planet is known as the Red Planet?",options:["A. Jupiter","B. Mars","C. Venus","D. Saturn"],answer:"B"},
{question:"Which is the smallest continent?",options:["A. Europe","B. Antarctica","C. Australia","D. South America"],answer:"C"},
{question:"Which festival marks the return of Lord Rama to Ayodhya?",options:["A. Holi","B. Diwali","C. Dussehra","D. Navratri"],answer:"B"},
{question:"Which country has Moscow as its capital?",options:["A. Russia","B. Ukraine","C. Poland","D. Belarus"],answer:"A"},
{question:"Oldest mountain range in India?",options:["A. Himalayas","B. Aravalli Range","C. Western Ghats","D. Vindhyas"],answer:"B"},
{question:"Country claiming Taiwan?",options:["A. China","B. Japan","C. USA","D. Philippines"],answer:"A"},
{question:"'Hindi Diwas' celebrated on?",options:["A. 14 September","B. 10 January","C. 15 August","D. 2 October"],answer:"A"},
{question:"Which organization maintains world peace?",options:["A. NATO","B. United Nations","C. IMF","D. World Bank"],answer:"B"},
{question:"Mother of Lord Krishna?",options:["A. Yashoda","B. Devaki","C. Kunti","D. Gandhari"],answer:"B"},
{question:"State with largest tribal population?",options:["A. Jharkhand","B. Madhya Pradesh","C. Odisha","D. Chhattisgarh"],answer:"B"},
{question:"Last Mughal emperor?",options:["A. Bahadur Shah Zafar","B. Aurangzeb","C. Shah Alam II","D. Prince Kumar II"],answer:"A"},
{question:"NATO stands for?",options:["A. North Atlantic Treaty Organization","B. National Atlantic Trade Organization","C. Northern Alliance Treaty Office","D. North Asian Treaty Organization"],answer:"A"},
{question:"Which country joined BRICS in 2024?",options:["A. Argentina","B. Saudi Arabia","C. Japan","D. South Korea"],answer:"B"},
{question:"Indian dance form originated in Uttar Pradesh?",options:["A. Kathak","B. Bharatanatyam","C. Odissi","D. Mohiniyattam"],answer:"A"},
{question:"Hindi autobiography 'Kya Bhoolun Kya Yaad Karoon'?",options:["A. Harivansh Rai Bachchan","B. Rahul Sankrityayan","C. Phanishwar Nath Renu","D. Hazari Prasad Dwivedi"],answer:"A"},
{question:"India's first medal at Paris 2024 Olympics?",options:["A. Neeraj Chopra","B. Manu Bhaker","C. PV Sindhu","D. Lakshya Sen"],answer:"B"}
];

let questionsSet5 = [
{question:"Which is the national flower of India?",options:["A. Rose","B. Lotus","C. Sunflower","D. Lily"],answer:"B"},
{question:"Which is the largest country by area?",options:["A. USA","B. China","C. Russia","D. India"],answer:"C"},
{question:"Which country hosted the 2022 FIFA World Cup?",options:["A. Brazil","B. Qatar","C. Russia","D. USA"],answer:"B"},
{question:"Which Indian leader wrote 'Discovery of India'?",options:["A. Gandhi","B. Jawaharlal Nehru","C. Prince 🙂","D. Bose"],answer:"B"},
{question:"Teacher of Pandavas and Kauravas?",options:["A. Kripacharya","B. Dronacharya","C. Parashurama","D. Vyasa"],answer:"B"},
{question:"Country that invented pizza?",options:["A. France","B. Italy","C. Spain","D. Greece"],answer:"B"},
{question:"Indian YouTuber known for 'CarryMinati'?",options:["A. Ajey Nagar","B. Ashish Chanchlani","C. Bhuvan Bam","D. Amit Bhadana"],answer:"A"},
{question:"'How's the Josh?' phrase from which film?",options:["A. URI: The Surgical Strike","B. Raazi","C. War","D. Pathaan"],answer:"A"},
{question:"Battle of Plassey (1757) fought against?",options:["A. Mir Jafar","B. Siraj-ud-Daulah","C. Tipu Sultan","D. Haider Ali"],answer:"B"},
{question:"Instrument that measures earthquakes?",options:["A. Barometer","B. Thermometer","C. Seismograph","D. Speedometer"],answer:"C"},
{question:"Temple dedicated to Lord Jagannath?",options:["A. Puri Temple","B. Meenakshi Temple","C. Somnath Temple","D. Kedarnath Temple"],answer:"A"},
{question:"Largest economy by GDP?",options:["A. China","B. USA","C. Germany","D. Japan"],answer:"B"},
{question:"Sea in China–Philippines dispute?",options:["A. South China Sea","B. East China Sea","C. Arabian Sea","D. Mediterranean Sea"],answer:"A"},
{question:"Who wrote 'Sare Jahan Se Achha'?",options:["A. Rabindranath Tagore","B. Bankim Chandra","C. Muhammad Iqbal","D. Ramprasad Bismil"],answer:"C"},
{question:"Capital of Chhatrapati Shivaji Maharaj's Maratha Empire?",options:["A. Pune","B. Raigad","C. Satara","D. Kolhapur"],answer:"B"},
{question:"Film that won 'Best Picture' Oscar 2024?",options:["A. Barbie","B. Poor Things","C. Oppenheimer","D. Killers of the Flower Moon"],answer:"C"}
];

let questionsSet6 = [
{question:"How many months have 28 days?",options:["A. 1","B. 2","C. 6","D. 12"],answer:"D"},
{question:"Which fruit keeps doctor away?",options:["A. Mango","B. Banana","C. Apple","D. Orange"],answer:"C"},
{question:"Delhi war memorial?",options:["A. Qutub Minar","B. Red Fort","C. India Gate","D. Lotus Temple"],answer:"C"},
{question:"Minecraft creator?",options:["A. Mojang","B. Epic Games","C. Rockstar Games","D. Valve"],answer:"A"},
{question:"Bird known for delivering letters?",options:["A. Crow","B. Pigeon","C. Owl","D. Eagle"],answer:"B"},
{question:"Who discovered gravity?",options:["A. Einstein","B. Newton","C. Galileo","D. Tesla"],answer:"B"},
{question:"Gateway of India city?",options:["A. Delhi","B. Kolkata","C. Mumbai","D. Chennai"],answer:"C"},
{question:"Metal used to make coins?",options:["A. Gold","B. Copper","C. Platinum","D. Barium"],answer:"B"},
{question:"National aquatic animal of India?",options:["A. Dolphin","B. Shark","C. Whale","D. Octopus"],answer:"A"},
{question:"Indian chess World Rapid Champion 2018?",options:["A. R Praggnanandhaa","B. Viswanathan Anand","C. Koneru Humpy","D. Arjun Erigaisi"],answer:"B"},
{question:"Rann of Kutch state?",options:["A. Rajasthan","B. Gujarat","C. Punjab","D. Haryana"],answer:"B"},
{question:"Country that invented Olympics?",options:["A. Greece","B. Italy","C. France","D. Germany"],answer:"A"},
{question:"Movie with 'Pushpa, I hate tears'?",options:["A. Amar Prem","B. Anand","C. Sholay","D. Deewar"],answer:"A"},
{question:"Founder of Paytm?",options:["A. Vijay Shekhar Sharma","B. Byju Raveendran","C. Nandan Nilekani","D. Kunal Shah"],answer:"A"},
{question:"Jhansi Ki Rani poem author?",options:["A. Subhadra Kumari Chauhan","B. Mahadevi Varma","C. Makhanlal Chaturvedi","D. Ramdhari Singh Dinkar"],answer:"A"},
{question:"Indian song won Academy Award 2023?",options:["A. Jai Ho","B. Naatu Naatu","C. Kesariya","D. Dosti"],answer:"B"}
];
let questionsSet7 = [
{question:"Which animal is famous for its black and white color?",options:["A. Panda","B. Tiger","C. Lion","D. Dog"],answer:"A"},
{question:"Which is the capital of Kerala?",options:["A. Kochi","B. Thiruvananthapuram","C. Kozhikode","D. Kannur"],answer:"B"},
{question:"Which sport uses a shuttlecock?",options:["A. Tennis","B. Badminton","C. Cricket","D. Football"],answer:"B"},
{question:"Which Indian festival celebrates the harvest in Tamil Nadu?",options:["A. Pongal","B. Diwali","C. Holi","D. Eid"],answer:"A"},
{question:"Which Indian economist later became Prime Minister in 1991?",options:["A. P.V. Narasimha Rao","B. Manmohan Singh","C. I.K. Gujral","D. Morarji Desai"],answer:"B"},
{question:"Which Mughal emperor commissioned the Peacock Throne?",options:["A. Babur","B. Akbar","C. Shah Jahan","D. Aurangzeb"],answer:"C"},
{question:"Which animal is known as the fastest bird?",options:["A. Eagle","B. Falcon","C. Sparrow","D. Crow"],answer:"B"},
{question:"Indian state with the largest number of Lok Sabha seats?",options:["A. Maharashtra","B. Uttar Pradesh","C. West Bengal","D. Bihar"],answer:"B"},
{question:"Largest producer of spices in India?",options:["A. Kerala","B. Karnataka","C. Tamil Nadu","D. Gujarat"],answer:"A"},
{question:"Who wrote the political treatise Arthashastra?",options:["A. Chanakya","B. Kalidasa","C. Panini","D. Varahamihira"],answer:"A"},
{question:"Which animal stores food in cheeks?",options:["A. Hamster","B. Dog","C. Cat","D. Horse"],answer:"A"},
{question:"Which international organization publishes the Human Development Index?",options:["A. IMF","B. World Bank","C. UNDP","D. WHO"],answer:"C"},
{question:"Which country has the largest number of time zones?",options:["A. USA","B. Russia","C. France","D. China"],answer:"C"},
{question:"Which planet is known as the Morning Star?",options:["A. Mars","B. Venus","C. Jupiter","D. Mercury"],answer:"B"},
{question:"Which Indian state is known as the Land of Five Rivers?",options:["A. Haryana","B. Punjab","C. Himachal Pradesh","D. Uttarakhand"],answer:"B"},
{question:"Which strait separates Asia and North America?",options:["A. Bering Strait","B. Strait of Hormuz","C. Bosphorus Strait","D. Malacca Strait"],answer:"A"}
];

let questionsSet8 = [
  {question:"Largest producer of rice in India?", options:["A. West Bengal","B. Punjab","C. Andhra Pradesh","D. Uttar Pradesh"], answer:"A"},
  {question:"Indian leader called the Iron Man of India?", options:["A. Nehru","B. Patel","C. Gandhi","D. Bose"], answer:"B"},
  {question:"Bird symbol of peace?", options:["A. Dove","B. Crow","C. Eagle","D. Owl"], answer:"A"},
  {question:"Capital of Spain?", options:["A. Madrid","B. Barcelona","C. Valencia","D. Seville"], answer:"A"},
  {question:"Planet with the largest number of moons?", options:["A. Jupiter","B. Saturn","C. Uranus","D. Neptune"], answer:"B"},
  {question:"Father of Nuclear Science in India?", options:["A. Homi Bhabha","B. Vikram Sarabhai","C. A.P.J. Abdul Kalam","D. C.V. Raman"], answer:"A"},
  {question:"Ancient Indian university destroyed by Bakhtiyar Khilji?", options:["A. Nalanda","B. Takshashila","C. Vikramashila","D. Vallabhi"], answer:"A"},
  {question:"Treaty that ended World War I?", options:["A. Treaty of Versailles","B. Treaty of Paris","C. Treaty of Vienna","D. Treaty of Tordesillas"], answer:"A"},
  {question:"Indian state famous for Konark Sun Temple?", options:["A. Odisha","B. Andhra Pradesh","C. Tamil Nadu","D. Karnataka"], answer:"A"},
  {question:"Indian freedom fighter known as Punjab Kesari?", options:["A. Bhagat Singh","B. Lala Lajpat Rai","C. Udham Singh","D. Kartar Singh Sarabha"], answer:"B"},
  {question:"The slang word “Rizz”, popular among Gen-Z, refers to what?", options:["A. Wealth","B. Charisma or flirting ability","C. Anger","D. Fashion style"], answer:"B"},
  {question:"Indian city known as 'City of Joy'?", options:["A. Mumbai","B. Delhi","C. Kolkata","D. Chennai"], answer:"C"},
  {question:"Country gifted Statue of Liberty to USA?", options:["A. Germany","B. France","C. Italy","D. Spain"], answer:"B"},
  {question:"Indian river called 'Dakshin Ganga'?", options:["A. Godavari","B. Krishna","C. Kaveri","D. Narmada"], answer:"A"},
  {question:"Sea between Europe and Africa?", options:["A. Black Sea","B. Mediterranean Sea","C. Baltic Sea","D. Adriatic Sea"], answer:"B"},
  {question:"Largest coral reef system in the world?", options:["A. Belize Barrier Reef","B. Great Barrier Reef","C. Red Sea Reef","D. Florida Reef"], answer:"B"}
];

let questionsSet9 = [
{question:"Indian state famous for houseboats?",options:["A. Kerala","B. Gujarat","C. Punjab","D. Haryana"],answer:"A"},
{question:"Gas most abundant in Earth's atmosphere?",options:["A. Oxygen","B. Nitrogen","C. Carbon dioxide","D. Hydrogen"],answer:"B"},
{question:"Indian state sharing border with maximum states?",options:["A. Madhya Pradesh","B. Uttar Pradesh","C. Rajasthan","D. Maharashtra"],answer:"B"},
{question:"Metal with chemical symbol Fe?",options:["A. Fluorine","B. Iron","C. Francium","D. Fermium"],answer:"B"},
{question:"First Indian to win a Nobel Prize?",options:["A. CV Raman","B. Rabindranath Tagore","C. Amartya Sen","D. Mother Teresa"],answer:"B"},
{question:"Indian classical dance from Kerala?",options:["A. Bharatanatyam","B. Kathakali","C. Odissi","D. Kuchipudi"],answer:"B"},
{question:"Largest desert in the world?",options:["A. Sahara","B. Arabian","C. Gobi","D. Antarctic Desert"],answer:"D"},
{question:"Planet with strongest gravity?",options:["A. Jupiter","B. Saturn","C. Earth","D. Neptune"],answer:"A"},
{question:"Gas responsible for greenhouse effect?",options:["A. Nitrogen","B. Carbon dioxide","C. Hydrogen","D. Oxygen"],answer:"B"},
{question:"River flowing through Paris?",options:["A. Rhine","B. Danube","C. Seine","D. Thames"],answer:"C"},
{question:"Indian state known as 'Spice Garden of India'?",options:["A. Kerala","B. Karnataka","C. Tamil Nadu","D. Goa"],answer:"A"},
{question:"Metal best conductor of electricity?",options:["A. Copper","B. Silver","C. Aluminium","D. Gold"],answer:"B"},
{question:"Planet rotating opposite to most planets?",options:["A. Venus","B. Mars","C. Mercury","D. Jupiter"],answer:"A"},
{question:"Mughal emperor who built Fatehpur Sikri?",options:["A. Babur","B. Akbar","C. Jahangir","D. Shah Jahan"],answer:"B"},
{question:"Country known as Land of the Midnight Sun?",options:["A. Norway","B. Sweden","C. Finland","D. Iceland"],answer:"A"},
{question:"Author of epic Mahabharata?",options:["A. Valmiki","B. Ved Vyasa","C. Kalidasa","D. Tulsidas"],answer:"B"}
];
// ------------------------
// VARIABLES
// ------------------------


let current = 0;
let displayIndex = 0;
let selected = null;
let timer;
let timeLeft = 30;
let gameOver = false;
let pollUsedForCurrentQuestion = false;
let countdownPlayed = false;

// ------------------------
// PREPARE QUESTION (SHOW OPTIONS FEATURE)
// ------------------------
function prepareQuestion(){
    if(displayIndex >= questions.length){
        endGame(true);
        return;
    }
    let q = questions[displayIndex];
    document.getElementById("question").innerText = q.question;

    let btn = document.querySelectorAll(".option");
    btn.forEach((b,i)=>{
        b.innerText = q.options[i];
        b.classList.remove("selected","correct","wrong");
        b.disabled = false;
        b.style.visibility = "hidden"; // hidden until show options
    });

    selected = null;
    pollUsedForCurrentQuestion = false;
    countdownPlayed = false;
    document.getElementById("pollChart").innerHTML = "";

    // Reset buttons
    document.getElementById("lockBtn").style.display = "none";
    document.getElementById("lockBtn").disabled = false;
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("nextBtn").disabled = true;

    document.getElementById("showOptionsBtn").style.display = "inline-block";
}

// ------------------------
// SHOW OPTIONS
// ------------------------
function showOptions(){
    let btn = document.querySelectorAll(".option");
    btn.forEach(b => b.style.visibility = "visible");

    document.getElementById("lockBtn").style.display = "inline-block";
    document.getElementById("lockBtn").disabled = false;
    document.getElementById("nextBtn").style.display = "inline-block";
    document.getElementById("nextBtn").disabled = true;

    document.getElementById("showOptionsBtn").style.display = "none";

    startTimer();
    document.getElementById("bgMusic").play();
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
// ------------------------
// LOCK ANSWER
// ------------------------
function lockAnswer(){
    if(selected == null || gameOver) return;

    document.getElementById("lockBtn").disabled = true;
    clearInterval(timer);
    document.getElementById("countdownAudio").pause();
    document.getElementById("countdownAudio").currentTime = 0;

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
        // DELAY END SCREEN BY 6 SECONDS
        setTimeout(()=>{ endGame(false); }, 6000);
    }

    btn.forEach(b => b.disabled = true);
    document.getElementById("nextBtn").disabled = false;
}

// ------------------------
// PREPARE QUESTION (SHOW OPTIONS FEATURE)
// ------------------------
function prepareQuestion(){
    if(displayIndex >= questions.length){
        // DELAY END SCREEN BY 6 SECONDS
        setTimeout(()=>{ endGame(true); }, 6000);
        return;
    }
    let q = questions[displayIndex];
    document.getElementById("question").innerText = q.question;

    let btn = document.querySelectorAll(".option");
    btn.forEach((b,i)=>{
        b.innerText = q.options[i];
        b.classList.remove("selected","correct","wrong");
        b.disabled = false;
        b.style.visibility = "hidden"; // hidden until show options
    });

    selected = null;
    pollUsedForCurrentQuestion = false;
    countdownPlayed = false;
    document.getElementById("pollChart").innerHTML = "";

    // Reset buttons
    document.getElementById("lockBtn").style.display = "none";
    document.getElementById("lockBtn").disabled = false;
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("nextBtn").disabled = true;

    document.getElementById("showOptionsBtn").style.display = "inline-block";
}

// ------------------------
// NEXT QUESTION
// ------------------------
// ------------------------
// NEXT QUESTION
// ------------------------
function nextQuestion(){
    if(gameOver) return;
    if(document.getElementById("nextBtn").disabled) return;

    // Play login sound for next question
    document.getElementById("loginSound").play();

    prepareQuestion();
}
// ------------------------
// TIMER
// ------------------------
function startTimer(){
    if(gameOver) return;

    let totalTime;
    if(current < 6){ totalTime = 30; }
    else if(current < 11){ totalTime = 60; }
    else{ totalTime = 120; }

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

        if(timeLeft > 20){ bar.style.background = "lime"; timerBox.style.borderColor="lime"; }
        else if(timeLeft>10){ bar.style.background="yellow"; timerBox.style.borderColor="yellow"; }
        else{ bar.style.background="red"; timerBox.style.borderColor="red"; }

        if(timeLeft===10 && !countdownPlayed){
            countdownPlayed=true;
            document.getElementById("countdownAudio").currentTime=0;
            document.getElementById("countdownAudio").play();
        }

        if(timeLeft<=0){
            clearInterval(timer);
            gameOver=true;
            updateWinningAmount();
            endGame(false);
        }
    },1000);
}

// ------------------------
// HIGHLIGHT LADDER
// ------------------------
function highlight(){
    let items = document.querySelectorAll("#ladderList li");
    items.forEach(i=>{ i.classList.remove("active"); i.style.animation=""; });
    let index = items.length-1-current;
    if(items[index]){ items[index].classList.add("active"); items[index].style.animation="glow 1s infinite"; }
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
    let wrongButtons = Array.from(btn).filter((b,i)=> i!==correctIndex);
    wrongButtons.slice(0,2).forEach(b=>b.style.visibility="hidden");

    btnElement.classList.add("used");
    btnElement.disabled=true;
}

function audiencePoll(){
    if(gameOver) return;
    const btnElement=document.querySelector(".lifelines button:nth-child(2)");
    if(btnElement.classList.contains("used")) return;

    pollUsedForCurrentQuestion=true;
    let chart=document.getElementById("pollChart");
    chart.innerHTML="";
    let options=["A","B","C","D"];
    let correct=questions[displayIndex].answer;
    const MIN_PERCENT=8;
    let correctPercent=Math.floor(Math.random()*21)+50;
    let remaining=100-correctPercent;
    let wrongPercents=[MIN_PERCENT,MIN_PERCENT,MIN_PERCENT];
    remaining-=MIN_PERCENT*3;
    let extra1=Math.floor(Math.random()*(remaining+1));
    let extra2=Math.floor(Math.random()*(remaining-extra1+1));
    let extra3=remaining-extra1-extra2;
    wrongPercents[0]+=extra1; wrongPercents[1]+=extra2; wrongPercents[2]+=extra3;

    let percents=[];
    let wrongIndex=0;
    for(let i=0;i<4;i++){
        percents[i]=options[i]===correct? correctPercent:wrongPercents[wrongIndex++];
    }

    for(let i=0;i<4;i++){
        let bar=document.createElement("div");
        bar.style.width="0%"; bar.style.height="30px"; bar.style.margin="5px 0";
        bar.style.background="linear-gradient(90deg, #ff9900, #ffcc00)";
        bar.style.borderRadius="8px"; bar.style.position="relative"; bar.style.transition="width 1s ease-out";
        let span=document.createElement("span");
        span.innerText=options[i]+" ("+percents[i]+"%)";
        span.style.position="absolute"; span.style.left="50%"; span.style.top="50%";
        span.style.transform="translate(-50%, -50%)"; span.style.color="white"; span.style.fontWeight="bold";
        span.style.fontSize="14px"; span.style.pointerEvents="none";
        bar.appendChild(span); chart.appendChild(bar);
        setTimeout(()=>{bar.style.width=percents[i]+"%";},50);
    }

    btnElement.classList.add("used");
    btnElement.disabled=true;
}

function skipQuestion(){
    if(gameOver) return;
    const btnElement=document.querySelector(".lifelines button:nth-child(3)");
    if(btnElement.classList.contains("used")) return;

    clearInterval(timer);
    displayIndex++;
    prepareQuestion();

    btnElement.classList.add("used");
    btnElement.disabled=true;
    document.getElementById("nextBtn").disabled=false;
}

// ------------------------
// END GAME
// ------------------------
function endGame(win){
    clearInterval(timer);
    document.getElementById("gameScreen").style.display="none";
    document.getElementById("endScreen").style.display="flex";

    let amount=getWinningAmount();

    if(win){
        document.getElementById("finalMessage").innerText="🎉 GRAND WINNER!\nYou won "+amount;
    } else {
        document.getElementById("finalMessage").innerText="❌ Game Over!!!\nYour Points = "+amount;
    }
}

// ------------------------
// RESTART GAME
// ------------------------
function restartGame(){
    location.reload();
}
