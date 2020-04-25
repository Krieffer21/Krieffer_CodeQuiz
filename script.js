// defining some global variables.
var timer = document.createElement("div");
var body = document.querySelector("body");
var scoreList = [];
// Styling the body.
body.setAttribute("style", "margin: 10px; background-color: #e1f1ff; text-align: center;");

// The function below is for the starting page.
letsGo();
    // Defining the quiz questions, answers and correct answers in an object.  
    var questionsAnswers = [
        { q: "Which of the following data types represents an object?", 
          a: ["var x = 21;","var x = \'Billy\'","var x = \'Billy Bob\'","var x = {name:Billy};"],
          c: "var x = {name:Billy};" },
    
        { q: "How would you call the following function. function example() { alert(\“Pick me!\”); }",
          a: ["(Pick Me!)", "alert(Pick me!);", "example();", "Return function();"],
          c: "example();" },
    
        { q: "Which of the following is an example of an array?",
          a: ["var cat = [\“cute\”, \“furry\”, \“sleepy\”];", "var cat = true;", "var cat = (cute, furry, sleepy);", "var cat = \“cute\”, \“furry\”, \“sleepy\”;"],
          c: "var cat = [\“cute\”, \“furry\”, \“sleepy\”];"},
    
        { q: "math.random(); is used for which of the following?",
          a: ["Does math", "Returns a random number", "Nothing", "Makes me happy"],
          c: "Returns a random number" },
    
        { q: "A variable declared in the overall script outside of any  function is?",
          a: ["A Lazy variable", "A Local variable", "A Useless variable", "A Global variable"],
          c: "A Global variable" }
    ];

    // Calling the function.
    function letsGo() {

        // Creating high score button, so when clicked takes you to the list of high scores.
        var highScore = document.createElement("button");
        highScore.textContent = "High Scores!";
        body.appendChild(highScore);

        // Styling the high score button.
        highScore.setAttribute("style", "float: right; background-color: #faffa5;");

        // Setting the timers text and appending it.
        timer.textContent = "Timer: 100"; 
        body.appendChild(timer); 

        // Styling the timer
        timer.setAttribute("style", "font-weight: bold; float: left;");

        // Header for the starting page.
        var header = document.createElement("header");
        header.textContent = "Coding Quiz!";
        body.appendChild(header);

        // Styling the header.
        header.setAttribute("style", "font-size: 30px; font-weight: bold; text-align: center; padding: 20px;");
        
        // Starting prompt for the quiz.
        var intro = document.createElement("p");
        intro.textContent = "Please answer the following code related questions before time runs out! Remeber for every correct answer you will gain a point, but for every incorrect answer you will lose a point.";
        body.appendChild(intro);

        // Styling the prompt. 
        intro.setAttribute("style", "font-size: 20px;");

        // Creating the start quiz start button.
        var start = document.createElement ("button");
        start.textContent = "Start Quiz";
        body.appendChild(start);

        // styling the button.
        start.setAttribute("style", "background-color: #9ce09c; font-weight:bold; font-size:20px; border: 1px ; border-style: solid; padding: 10px;");

        // When the start button is clicked, start quiz & timer.
        start.addEventListener("click", function() {
            // Display the first question and answer options.
            question = undefined;
            currentQ = 0;
            askQuestion(questionsAnswers[0].q, questionsAnswers[0].a);

            setTime(); 
            // no longer display start messages and button when taking quiz
            start.remove();
            intro.remove();
            header.remove();
            highScore.remove();
        });

        // When the high score button is clicked run the score page function and remove the starting operations.
        highScore.addEventListener("click", function(){
            start.remove();
            intro.remove();
            header.remove();
            highScore.remove();
            scorePage();
        });    
}

// Displays the time on the timer and counts down.
function updateTimer() {
    secondsLeft--;
    timer.textContent= "Timer: " + secondsLeft;
    // When the timer reaches 0 end the game. 
    if (secondsLeft <= 0) {
        // call function endGame()
        endGame();
    }
}

// Defining the timer start time. 
var secondsLeft = 100;
var timerInterval;
// Setting the starting time.
function setTime() {
  timerInterval = setInterval(updateTimer, 1000);
}

//  Global question and answer variables. 
var currentQ = 0;
var question; 
var answer1;
var answer2;
var answer3;
var answer4;

// The following function asks the questions and diplays the answers as buttons.
function askQuestion(q,a) {
    if (question == undefined){
        question = document.createElement("h1");
        body.appendChild(question); 
        answer1 = document.createElement("button");
        body.appendChild(answer1);
        answer2 = document.createElement("button");
        body.appendChild(answer2);
        answer3 = document.createElement("button");
        body.appendChild(answer3);
        answer4 = document.createElement("button");
        body.appendChild(answer4);

        question.setAttribute("style", "padding: 30px;");
        answer1.setAttribute("style", "margin: 10px; background-color: #9ad8d8; font-weight: bold;");
        answer2.setAttribute("style", "margin: 10px; background-color: #9ad8d8; font-weight: bold;");
        answer3.setAttribute("style", "margin: 10px; background-color: #9ad8d8; font-weight: bold;");
        answer4.setAttribute("style", "margin: 10px; background-color: #9ad8d8;font-weight: bold;");


        // When an answer button is clicked on check that it was the correct answer.
        answer1.addEventListener("click", function() {
            // Check the current question was answered correctly.
            if (answer1.textContent === questionsAnswers[currentQ].c ) {
                // Check if the was the last question if so,
                if (currentQ==4) {
                    // run endGame function.
                    endGame();
                }
                // If this wasn't the last question, go to the next question.
                else {
                    currentQ++;
                    askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);}  
            }
            // If the answer is wrong deduct time from secondsLeft.
            else {secondsLeft = secondsLeft - 10;}
        });
        answer2.addEventListener("click", function() {
            if (answer2.textContent === questionsAnswers[currentQ].c ) {
                if (currentQ==4) {
                    endGame();
                }
                else {
                    currentQ++;
                    askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);}  
            }
            else {secondsLeft = secondsLeft - 10;}
        });
        answer3.addEventListener("click", function() {
            if (answer3.textContent === questionsAnswers[currentQ].c ) {
                if (currentQ==4) {
                    endGame();
                }
                else {
                    currentQ++;
                    askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);}  
            }
            else {secondsLeft = secondsLeft - 10;}
        });
        answer4.addEventListener("click", function() {
            if (answer4.textContent === questionsAnswers[currentQ].c ) {
                if (currentQ==4) {
                    endGame();
                }
                else {
                    currentQ++;
                    askQuestion(questionsAnswers[currentQ].q, questionsAnswers[currentQ].a);}  
            }
            else {secondsLeft = secondsLeft - 10;}
        });
    }
    // This writes the question and answers in text and assigns the answer an index number. 
    question.textContent = q;
    answer1.textContent = a[0];
    answer2.textContent = a[1];
    answer3.textContent = a[2];
    answer4.textContent = a[3];
}

// The function endGame lets the user know the game is over and to submit their score.
function endGame() { 
    clearInterval(timerInterval);

    question.remove();
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();

    // Adding the header1 to the HTML, 'All done!'.
    var end = document.createElement("h1");
    end.textContent="All done!";
    body.appendChild(end);

    // Styling the text All done.
    end.setAttribute("style", "padding: 40px; font-family: Arial, Helvetica, sans-serif;");

    // Shows the player their final score as the time they had left, if any. 
    var giveScore = document.createElement("h1");
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    giveScore.textContent = "Your final score is " + secondsLeft + "!";
    body.appendChild(giveScore);

    var initials = document.createElement("p");
    initials.textContent = "Please enter your initials in the box below and submit your highscore!";
    body.appendChild(initials);

    var textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("name", "initials");
    body.appendChild(textBox);

    textBox.setAttribute("style","border-style: solid; border-color: blue;");

    var submitHighScore = document.createElement("button");
    submitHighScore.textContent = "submit";
    body.appendChild(submitHighScore);

    submitHighScore.setAttribute("style","margin: 10px; background-color: #fbfbbd;");
    
    submitHighScore.addEventListener("click", function() {
            if (textBox.value == "") {
                alert ("Invalid response! Please enter your initials in the box below.");
            }
            else {
                scoreList.push({
                    initials:textBox.value, score:secondsLeft});
                end.remove();
                giveScore.remove();
                initials.remove();
                textBox.remove();
                submitHighScore.remove();
                scorePage();
            }
    });
}

function scorePage() {

    var highHeader = document.createElement("header");
    highHeader.textContent = "High Scores!";
    body.appendChild(highHeader);

    highHeader.setAttribute("style", "padding: 40px; font-size: 30px;");


    var scores = document.createElement("ol");
    body.appendChild(scores);

        scores.setAttribute("style", "width: 10%; text-align: center; margin-left: auto; margin-right: auto;"); 

    for (var i = 0; i < scoreList.length; i++) {  
        var list = document.createElement("li");
        list.textContent = scoreList[i].initials + " - " + scoreList[i].score;
        scores.appendChild(list);
    }

            // clear scores 
    var clearScores = document.createElement("button");
    clearScores.textContent = "Clear High Scores";
    body.appendChild(clearScores);

    clearScores.setAttribute("style", "margin: 10px; background-color: #e2e2e2;");

    var goBack = document.createElement("button");
    goBack.textContent = "Go Back!";
    body.appendChild(goBack);

    goBack.setAttribute("style", "background-color: #ffbfbf;");

// refreshes the page but doesn't delete the local storage. 
    goBack.addEventListener("click",function() {
        highHeader.remove();
        scores.remove();
        clearScores.remove();
        goBack.remove();
        letsGo();
    });

    clearScores.addEventListener("click", function(){   
        scores.remove();
        scoreList = [];
    });
}