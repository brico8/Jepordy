//NEW!!!!!!
var gameData =
{
    PlayersData: [],
    playerBalance: 100
};

// Calculate age function
function calculateAge() {
    document.getElementById("pdob").addEventListener("change", function() {
        var dob = new Date(this.value);
        var today = new Date();
        var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
        document.getElementById("age").value = age;
    });
}

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

    if (!email.endsWith("@SomeEmail.com")) 
    {
        alert("Email address must end with '@SomeEmail.com'.");
        return;
    }

    // Pushing information into player data
    var playerData = 
    {
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





////new
// Function to check if all questions are answered for the category
function checkAllQuestionsAnswered(category) {
    var allQuestionsAnswered = true;
    for (var i = 100; i <= 500; i += 100) {
        var button = document.getElementById("b_" + i + "_" + category.toLowerCase().replace(" ", ""));
        if (!button.disabled) {
            allQuestionsAnswered = false;
            break;
        }
    }
    return allQuestionsAnswered;
}

// Function to check if all questions are answered for the category
function checkAllQuestionsAnswered(category)
 {
    var allQuestionsAnswered = true;
    for (var i = 100; i <= 500; i += 100) {
        var button = document.getElementById("b_" + i + "_" + category.toLowerCase().replace(" ", ""));
        if (!button.disabled) {
            allQuestionsAnswered = false;
            break;
        }
    }
    return allQuestionsAnswered;
}



// Play the game
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
function CheckAnswer(cost, category) 
{
    var answer, correctAnswer, question;
    var remainingTime = 60; // set to 60 seconds


//new

    var isDailyDouble = false;
    //if (dailyDoubleCounter <= 3) - not working hence the probablity // ensure the probability does surpass 3  //NEW!!!!!!
    alert("Your current balance is $" + gameData.playerBalance);

//new
    // Check if this question is a Daily Double
    if (Math.random() < 0.25) { // Adjust the probability as needed
        var isDailyDouble = true;
        dailyDoubleCounter++; // Increment the Daily Double counter
    }

    if (isDailyDouble)  //NEW!!!!!!
    {
        // Check if this question is a Daily Double
        var wager = parseInt(prompt("This is a Daily Double! Please wager an amount between $0 and your current balance:", 0)); //isNaN(wager): This checks if wager is not a number.
        if (isNaN(wager) || wager < 0 || wager > gameData.playerBalance) //his ensures that the wager is not negative & ensures that the wager doesn't exceed the player's current balance. If the wager is greater than the player's balance.
         {
            alert("Invalid wager. Please enter a valid amount.");
            return;
        }
    }

    //NEW!!!
    // Store isDailyDouble value in a global variable for access in updateBalance
    window.isDailyDouble = isDailyDouble;


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
        answer = prompt(question);

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

        // Create and handle submit button
        var submitAnswer = document.createElement("button");

        submitAnswer.textContent = "Answer";
        submitAnswer.classList.add("submit.button"); // Add submit.button class to style the button
        submitAnswer.onclick = function() 
        {
            clearInterval(timer); // Stop the timer
            document.body.removeChild(timeDisplay); // Remove time remaining display
            var userAnswer = prompt("Enter your answer:");
            // Process the submitted answer
            if (userAnswer === correctAnswer) {
                alert("Correct!. The answer is " + correctAnswer);
                updateBalance(true, cost); // Increase balance if answer is correct
            } else {
                alert("Incorrect. The correct answer is " + correctAnswer + ".");
                updateBalance(false, cost); // Decrease balance if answer is incorrect
            }
        };



        
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

        document.body.appendChild(submitAnswer); // Add the submit button to the document body
        document.body.appendChild(endGameButton); // Add the end game button to the document body

        // Function to disable the submit button after it's clicked
        function disableSubmitButton() 
        {
            submitAnswer.disabled = true;
        }
    
}
// Function to update player's balance -Adjusted to support daily double --- //NEW!!!!!!
function updateBalance(isCorrect, cost) {
    var isDailyDouble = window.isDailyDouble || false; // Default to false if isDailyDouble is not set

    if (isCorrect) 
    {
        if (isDailyDouble) 
        {
            var wager = parseInt(prompt("You answered correctly! Your wagered amount will be added to your balance.", 0));
            gameData.playerBalance += wager;
        } else 
        {
            gameData.playerBalance += cost;
        }
        alert("Correct!. Your current balance is $" + gameData.playerBalance);
    } else 
    {
        if (isDailyDouble)
        {
            var wager = parseInt(prompt("You answered incorrectly! Your wagered amount will be deducted from your balance.", 0));
            gameData.playerBalance -= wager;
        } else 
        {
            gameData.playerBalance -= cost;
        }
        alert("Incorrect. Your current balance is $" + gameData.playerBalance);
    }
}

// form

function validateForm() 
{
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
}

// Function to handle Final Jeopardy round
function FinalJeopardy() {
    // Randomly select a category
    var categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
    var finalCategory = categories[Math.floor(Math.random() * categories.length)];
    
    // Prompt player for wager
    var wager = parseInt(prompt("Final Jeopardy! Category: " + finalCategory + ". Please enter your wager (between $0 and $" + gameData.playerBalance + "):", 0));
    if (isNaN(wager) || wager < 0 || wager > gameData.playerBalance) {
        alert("Invalid wager. Please enter a valid amount.");
        return;
    }

    // Present Final Jeopardy question
    var finalQuestion = "Final Jeopardy Question: [Your Final Jeopardy question here]";
    var playerResponse = prompt(finalQuestion);

    // Timer for response
    var remainingTime = 60;
    var timer = setInterval(function() {
        remainingTime--;
        if (remainingTime <= 0) {
            clearInterval(timer);
            alert("Time's up! The correct answer was [Correct answer]. You wagered $" + wager + ". Your total remains unchanged.");
        }
    }, 1000);

    // Handle player's response
    var isCorrect = (playerResponse.trim() === "[Correct answer]"); // Replace [Correct answer] with the actual correct answer
    if (isCorrect) {
        gameData.playerBalance += wager;
        alert("Congratulations! You answered correctly. $" + wager + " has been added to your total balance. Your current balance is $" + gameData.playerBalance);
    } else {
        gameData.playerBalance -= wager;
        alert("Incorrect. $" + wager + " has been deducted from your total balance. Your current balance is $" + gameData.playerBalance);
    }
}


///NEW FUNCTIONS

// Function to handle Final Jeopardy round

function FinalJeopardy() {
    // Randomly select a category
    var categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
    var finalCategory = categories[Math.floor(Math.random() * categories.length)];

    // Prompt player for wager
    var wager = parseInt(prompt("Final Jeopardy! Category: " + finalCategory + ". Please enter your wager (between $0 and $" + gameData.playerBalance + "):", 0));
    if (isNaN(wager) || wager < 0 || wager > gameData.playerBalance) {
        alert("Invalid wager. Please enter a valid amount.");
        return;
    }

    // Present Final Jeopardy question
    var finalQuestion = "Final Jeopardy Question: which year was jeopardy invented?";
    var playerResponse = prompt(finalQuestion);

    // Timer for response
    var remainingTime = 60;
    var timer = setInterval(function() {
        remainingTime--;
        if (remainingTime <= 0) {
            clearInterval(timer);
            alert("Time's up! The correct answer was [Correct answer]. You wagered $" + wager + ". Your total remains unchanged.");
        }
    }, 1000);

    // Handle player's response
    var isCorrect = (playerResponse.trim() === "1964"); // Replace [Correct answer] with the actual correct answer
    if (isCorrect) {
        gameData.playerBalance += wager;
        alert("Congratulations! You answered correctly. $" + wager + " has been added to your total balance. Your current balance is $" + gameData.playerBalance);
    } else {
        gameData.playerBalance -= wager;
        alert("Incorrect. $" + wager + " has been deducted from your total balance. Your current balance is $" + gameData.playerBalance);
    }
}

// Call Final Jeopardy function when the user successfully completes Level 1
function Level1Completed() 
{
    // Your existing Level 1 completion logic here
    // After completing Level 1, prompt the player if they want to play Final Jeopardy
    var playFinalJeopardy = confirm("Congratulations! You have completed Level 1. Do you want to play Final Jeopardy?");
    if (playFinalJeopardy) {
        FinalJeopardy();
    }
}   
