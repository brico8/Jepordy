var PlayersData = []; // global array

var playerBalance = 100; // Global variable to store player's balance


// Calculate age function
function calculateAge() {
    document.getElementById("pdob").addEventListener("change", function() {
        var dob = new Date(this.value);
        var today = new Date();
        var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
        document.getElementById("age").value = age;
    });
}


// Task	2:	(7 marks)		
//Create a JavaScript function called Register() that will accept the values entered in the fields listed in Task 1, validate all entries using JavaScript validations,
// and then append the validated content to a global JavaScript array called PlayersData[]. 
// Get information from form and register player
function Register() {
    var firstName = document.getElementById("fname").value;

    var lastName = document.getElementById("lname").value;

    var dob = document.getElementById("pdob").value;

    var gender = document.querySelector('input[name="pgender"]:checked').value;

    var town = document.getElementById("ptown").value;

    var edLevel = document.getElementById("pedlevel").value;

    var email = document.getElementById("pemail").value;

    var image = document.getElementById("pimage").value;

    if (!email.endsWith("@SomeEmail.com")) {
        alert("Email address must end with '@SomeEmail.com'.");
        return;
    }

    // Pushing information into player data
    var playerData = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        gender: gender,
        town: town,
        edLevel: edLevel,
        email: email,
        image: image
    };

    // Adding information to PlayersData
    PlayersData.push(playerData);
}
//Task	4:
// Play the game Create a JavaScript function called PlayGame() that will: objective a-f
//Task	5: (3 marks)		
//Add another button, called Play to the entry form created in Task 1 and ensure that this button calls PlayGame() 
//from Task 4 whenever it is clicked. When clicked, this button also enables the Play area along with the 
//Player’s answer input, Answer and End Game button.  

function PlayGame(cost, category)
 {
    switch (category)
     {
        case 'Category 1':
            CheckAnswer(cost, category);
            document.getElementById("b_" + cost + "_c1").disabled = true; 
             // Disable the button after it's clicked --fix to remove or make link unable to be reused

            break;
        case 'Category 2':
            CheckAnswer(cost, category);
            document.getElementById("b_" + cost + "_c2").disabled = true;
            break;
        case 'Category 3':
            CheckAnswer(cost, category);
            document.getElementById("b_" + cost + "_c3").disabled = true;
            break;
        case 'Category 4':
            CheckAnswer(cost, category);
            document.getElementById("b_" + cost + "_c4").disabled = true;
            break;
        case 'Category 5':
            CheckAnswer(cost, category);
            document.getElementById("b_" + cost + "_c5").disabled = true;
            break;
        default:
            alert('Invalid category.');
    }
}

// Check answer function
//Task	6: (8 marks)	
//Create a JavaScript function called CheckAnswer() that will check and validate the answer provided by the player.  
//objective: a-b
function CheckAnswer(cost, category) {
    var answer, correctAnswer, question;
    var remainingTime = 60; // set to 60 seconds

        switch(category)

    {
        // Set question and correct answer based on the cost
    case 'Category 1':
        if (cost === 100) {
            question = "What is 100 - 37?";
            correctAnswer = "63";
        } else if (cost === 200) {
            question = "What is the median of (7, 9, 17)?";
            correctAnswer = "9";
        } else if (cost === 300) {
            question = "What is 25% of 920?";
            correctAnswer = "230";
        } else if (cost === 400) {
            question = "If a car uses 2 gallons of gas to travel 60 miles, how much will it use to travel 150 miles?";
            correctAnswer = "5";
        } else if (cost === 500) {
            question = "Solve for X: 3x + 2 = 14";
            correctAnswer = "4";
        }
        break;

    case 'Category 2':
        if (cost === 100) {
            question = "___ are people, places, animals and things.";
            correctAnswer = "nouns";
        } else if (cost === 200) {
            question = "Complete the sentence with the correct verb: Everyone ___ a mind of their own";
            correctAnswer = "has";
        } else if (cost === 300) {
            question = "What literary device is this?“Always trust a glue salesman. They tend to stick to their word.”";
            correctAnswer = "pun";
        } else if (cost === 400) {
            question = "“-ly”, “-tion”, “-ing” are all examples of what?";
            correctAnswer = "suffix";
        } else if (cost === 500) {
            question = "true or false: An informational Text that gives facts, personal accounts and bibliographical information is Non-fiction";
            correctAnswer = "true";
        }
        break;

    case 'Category 3':
        if (cost === 100) {
            question = "Type of programming language the computer can understand consisting of 1’s and 0’s: ___ language";
            correctAnswer = "binary";
        } else if (cost === 200) {
            question = "How many bits make a byte? ____bits";
            correctAnswer = "8";
        } else if (cost === 300) {
            question = "What does the R in RAM stand for?";
            correctAnswer = "random";
        } else if (cost === 400) {
            question = "Do{…. Block of code ….}while(condition); This code is a ____.";
            correctAnswer = "loop";
        } else if (cost === 500) {
            question = "The acronym for a computer memory which stores permanent data and instructions for a device start up:";
            correctAnswer = "ROM";
        }
        break;

    case 'Category 4':
        if (cost === 100) {
            question = "Marcus Garvey is on the Jamaican $_____bill";
            correctAnswer = "100";
        } else if (cost === 200) {
            question = "Which parish is the Rio Minho located";
            correctAnswer = "Clarendon";
        } else if (cost === 300) {
            question = "true or false: Portia Simpson Miller is the Governor General in Jamaica ";
            correctAnswer = "false";
        } else if (cost === 400) {
            question = "What year was the big Port Royal earthquake. June 7th ____";
            correctAnswer = "1692";
        } else if (cost === 500) {
            question = "true or false the first prime minister of Jamaica was Sir Alexander Bustamante.";
            correctAnswer = "true";
        }
        break;

    case 'Category 5':
        if (cost === 100) {
            question = "In Mario who is constantly trying to save :";
            correctAnswer = "princess";
        } else if (cost === 200) {
            question = "Captain America carries this___";
            correctAnswer = "shield";
        } else if (cost === 300) {
            question = "A baby is born with ___ number of bones:";
            correctAnswer = "300";
        } else if (cost === 400) {
            question = "What is the fifth colour of the rainbow?";
            correctAnswer = "blue";
        } else if (cost === 500) {
            question = "Which Jamaican Artiste Government name is Grace Hamilton?";
            correctAnswer = "Spice";
        }
        break;

    default:
        alert('Invalid category.');
        return;


    }
    
    // Prompt user with the question

    // Create element to display time remaining
    var timeDisplay = document.createElement("div");
    timeDisplay.textContent = "Time remaining: " + remainingTime + " seconds";
    document.body.appendChild(timeDisplay);

    // Start timer
    var timer = setInterval(function() 
    {
        remainingTime--; // decrement by 1 second

        timeDisplay.textContent = "Time remaining: " + remainingTime + " seconds"; // Update time remaining display

        if (remainingTime <= 0) 
        { // when times run out it reveals the answer --
            clearInterval(timer);

            alert("Time's up! The correct answer is " + correctAnswer + ".");

            updateBalance(false, cost); // Deduct balance if time runs out

            document.body.removeChild(timeDisplay); // Remove time remaining display


        }
    }, 1000); // Update timer every second
    //Task	7: (2 marks)		
Add //another button, called Answer, to the play area created in Task 5 and ensure that this button calls 
    //CheckAnswer() from Task 6 above.  

    // Create and handle submit button
    var submitAnswer = document.createElement("button");

    submitAnswer.textContent = "Answer";
    submitAnswer.classList.add("submit.button"); // Add submit.button class to style the button
    submitAnswer.onclick = function() 
    {
        clearInterval(timer); // Stop the timer
        document.body.removeChild(timeDisplay); // Remove time remaining display
        var userAnswer = prompt(question);
        // Process the submitted answer
        if (userAnswer === correctAnswer) {
            alert("Correct!. The answer is " + correctAnswer);
            updateBalance(true, cost); // Increase balance if answer is correct
        } else {
            alert("Incorrect. The correct answer is " + correctAnswer + ".");
            updateBalance(false, cost); // Decrease balance if answer is incorrect
        }

    };
    document.body.appendChild(submitAnswer);

    //Task	11: (3 marks)		
//Add another button, called Quit to the entry form created in Task 1. 
//When clicked, the End button also calls the findPercentageScore(). 
    //Clear the form from Task 1 and enabled inputs, all buttons must be disabled except the Register button.
   // Play and Results area are disabled.  

    // Create end game button
    var endGameButton = document.createElement("button");
    endGameButton.textContent = "End Game";
    submitAnswer.classList.add("my-button"); // Add submit.button class to style the button
    endGameButton.onclick = function() {
        clearInterval(timer); // Stop the timer

        document.body.removeChild(timeDisplay); // Remove time remaining display

        disableSubmitButton(); // Disable submit button


        // Redirect to scores.html
        window.location.href = "scores.html";
    };

    document.body.appendChild(endGameButton); // Add the end game button to the document body

    // Function to disable the submit button after it's clicked
    function disableSubmitButton() 
    {
        submitAnswer.disabled = true;
    }

   

}

// Function to update player's balance
function updateBalance(isCorrect, cost) {
    if (isCorrect) {
        playerBalance += cost; // Increase balance if answer is correct
    } else {
        playerBalance -= cost; // Decrease balance if answer is incorrect
    }
    alert("Your current balance is $" + playerBalance);
}


// form

function validateForm() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    // Add similar code to validate other form fields
    
    // Example validation: Check if first name and last name are not empty
    if (fname === '' || lname === '') 
    {
        alert('First name and last name are required.');
        return false; // Prevent form submission
    }
    
    // Other validation logic goes here
    
    return true; // Allow form submission

   // Task	10: (7 marks)		
//Create a JavaScript function called findPercentageScore() that will calculate and display total number of questions, 
    //the number of correct answers, the number of incorrect answers, the percentage score, and the player’s name, town, current date, in the ‘showpercentage’ textarea. 
//You must always clear “showpercentage’” textarea before displaying all data in it.  

    function populatePercentage() {
        var playerName = document.getElementById('fname').value + " " + document.getElementById('lname').value;
        var correctAnswers = parseInt(document.getElementById('correctCount).value').value);
        var totalQuestions = parseInt(document.getElementById('totalQuestions').value);
    
        var percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    
        var result = playerName + ',' + percentage + '%,' + correctCount + ',' + incorrectCount + ',' + totalQuestions;
    
        var showPercentageTextarea = document.getElementById('showpercentage');
        showPercentageTextarea.value = result;
        var percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

        // Get current date
        var currentDate = new Date().toLocaleDateString();

        // Construct the result string
        var result = "Player's Name: " +firstName + "\n";
        result += "Town: " + town + "\n";
        result += "Date: " + currentDate + "\n";
        result += "Total Questions: " + totalQuestions + "\n";
        result += "Correct Answers: " + 'correctCount'+ "\n";
        result += "Incorrect Answers: " + incorrectCount + "\n";
        result += "Percentage Score: " + percentage + "%";

        // Clear and update the textarea
        var showPercentageTextarea = document.getElementById('showpercentage');
        showPercentageTextarea.value = result;
    }

    function quitAndClear() {
        findPercentageScore(); // Call findPercentageScore() as required
        clearForm(); // Clear the form
        // Disable all buttons except Register
        document.getElementById('findScore').disabled = true;
        document.getElementById('quit').disabled = true;
        // Enable Register button
        document.getElementById('register').disabled = false;
    }

    function showAll() {
        var showAllTextarea = document.getElementById('showallplayers');
        showAllTextarea.value = ""; // Clear the textarea
    
        for (var i = 0; i < playerData.length; i++) {
            var player = playerData[i];
            showAllTextarea.value += "Player's Name: " + player.fname + ", Town: " + player.town + ", Total Questions: " + player.totalQuestions + ", Correct Answers: " + player.correctCount + ", Incorrect Answers: " + player.incorrectCount + ", Percentage Score: " + player.percentage + "%\n";
        }
    }





}
