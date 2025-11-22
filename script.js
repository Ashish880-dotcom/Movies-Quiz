function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// KEEP ALL YOUR ORIGINAL 101 QUESTIONS - DON'T REMOVE THEM!
let questions = [
    {
        question: "In which movie does a character say, 'With great power comes great responsibility'?",
        options: ["The Dark Knight", "Spider-Man (2002)", "Iron Man", "X-Men"],
        answer: "Spider-Man (2002)"
    },
    {
        question: "Who directed the sci-fi epic 'Interstellar'?",
        options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Denis Villeneuve"],
        answer: "Christopher Nolan"
    },
    {
        question: "Which movie features the character Jack Sparrow?",
        options: ["Harry Potter", "Pirates of the Caribbean", "Avatar", "Titanic"],
        answer: "Pirates of the Caribbean"
    },
    {
        question: "Who directed the movie Inception?",
        options: ["James Cameron", "Christopher Nolan", "Spielberg", "Russo Brothers"],
        answer: "Christopher Nolan"
    },
    {
        question: "Which movie won Best Picture (2020)?",
        options: ["Joker", "Parasite", "1917", "Ford v Ferrari"],
        answer: "Parasite"
    },
    {
        question: "What is the name of the fictional African nation in 'Black Panther'?",
        options: ["Genosha", "Zamunda", "Wakanda", "Malawi"],
        answer: "Wakanda"
    },
    {
        question: "Which 2021 film features a teenage web-slinger dealing with the multiverse?",
        options: ["Spider-Man: Homecoming", "Spider-Man: Far From Home", "Spider-Man: No Way Home", "Into the Spider-Verse"],
        answer: "Spider-Man: No Way Home"
    },
    {
        question: "In 'Inception', what is the name of Dom Cobb's (Leonardo DiCaprio) wife who haunts his dreams?",
        options: ["Ariadne", "Mal", "Molly", "Emilia"],
        answer: "Mal"
    },
    {
        question: "Which actor played the Joker in the 2008 film 'The Dark Knight'?",
        options: ["Jared Leto", "Joaquin Phoenix", "Heath Ledger", "Jack Nicholson"],
        answer: "Heath Ledger"
    },
    {
        question: "What is the name of the asteroid destined to destroy Earth in 'Armageddon'?",
        options: ["Dottie", "Aphophis", "Bennu", "No common name"],
        answer: "No common name"
    },
    {
        question: "Which 2019 film became the highest-grossing movie of all time?",
        options: ["Avengers: Infinity War", "Avatar", "Avengers: Endgame", "Titanic"],
        answer: "Avengers: Endgame"
    },
    {
        question: "In 'The Shawshank Redemption', what does Andy Dufresne use to hide his rock hammer?",
        options: ["A Poster of Rita Hayworth", "The Bible", "A Floorboard", "A Mattress"],
        answer: "The Bible"
    },
    {
        question: "Which film features a scene where the Avengers assemble for the first time in New York?",
        options: ["The Avengers (2012)", "Avengers: Age of Ultron", "Captain America: The First Avenger", "Iron Man 2"],
        answer: "The Avengers (2012)"
    },
    {
        question: "Who is the main villain in 'The Godfather'?",
        options: ["Virgil Sollozzo", "Barzini", "Cicci", "No single main villain"],
        answer: "No single main villain"
    },
    {
        question: "What is the name of the robot in 'Interstellar'?",
        options: ["KIPP", "AUTO", "TARS", "GERTY"],
        answer: "TARS"
    },
    {
        question: "Which 2004 film is about a man with short-term memory loss searching for his wife's killer?",
        options: ["Memento", "Shutter Island", "The Machinist", "Insomnia"],
        answer: "Memento"
    },
    {
        question: "In 'X-Men: Days of Future Past', which character's mind is sent back in time to prevent a dystopian future?",
        options: ["Professor X", "Wolverine", "Kitty Pryde", "Jean Grey"],
        answer: "Wolverine"
    },
    {
        question: "Which movie won the Oscar for Best Picture in 2024?",
        options: ["Oppenheimer", "Everything Everywhere All at Once", "The Zone of Interest", "American Fiction"],
        answer: "Oppenheimer"
    },
    {
        question: "What is the name of the fictional social media company in 'The Social Network'?",
        options: ["Twitter", "Facebook", "Friendster", "MySpace"],
        answer: "Facebook"
    },
    {
        question: "Who directed the 2023 film 'Barbie'?",
        options: ["Greta Gerwig", "Olivia Wilde", "Patty Jenkins", "Kathryn Bigelow"],
        answer: "Greta Gerwig"
    },
    {
        question: "In 'The Matrix', what is the real world like?",
        options: ["A utopian society", "A post-apocalyptic wasteland", "A virtual reality", "The same as the Matrix"],
        answer: "A post-apocalyptic wasteland"
    },
    {
        question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
        options: ["Chris Evans", "Robert Downey Jr.", "Jeff Bridges", "Jon Favreau"],
        answer: "Robert Downey Jr."
    },
    {
        question: "What is the name of the planet the crew visits in 'Interstellar' that is entirely covered by water?",
        options: ["Miller", "Mann", "Edmunds", "Gargantua"],
        answer: "Miller"
    },
    {
        question: "Which film features a character named John Wick, a legendary hitman?",
        options: ["The Equalizer", "John Wick", "Nobody", "Taken"],
        answer: "John Wick"
    },
    {
        question: "In 'The Godfather Part II', which character's backstory is shown through flashbacks?",
        options: ["Michael Corleone", "Sonny Corleone", "Tom Hagen", "Vito Corleone"],
        answer: "Vito Corleone"
    },
    {
        question: "What is the name of the AI system in 'Avengers: Age of Ultron' that Tony Stark and Bruce Banner create?",
        options: ["J.A.R.V.I.S.", "FRIDAY", "Ultron", "Vision"],
        answer: "Ultron"
    },
    {
        question: "Which 2010 film by Christopher Nolan is about dream-sharing and extraction?",
        options: ["The Prestige", "Inception", "Tenet", "Interstellar"],
        answer: "Inception"
    },
    {
        question: "Who is the main antagonist in 'Black Panther'?",
        options: ["Ulysses Klaue", "M'Baku", "Erik Killmonger", "Zemo"],
        answer: "Erik Killmonger"
    },
    {
        question: "In 'The Dark Knight Rises', what is the name of the prison Bruce Wayne must escape from?",
        options: ["Blackgate Penitentiary", "The Pit", "Arkham Asylum", "Lazarus Pit"],
        answer: "The Pit"
    },
    {
        question: "Which 2022 film features a superhero who can stretch her body in incredible ways?",
        options: ["Ms. Marvel", "She-Hulk", "Doctor Strange 2", "The Incredibles"],
        answer: "Ms. Marvel"
    },
    {
        question: "What is the name of the fictional sport in 'Avatar'?",
        options: ["Banshee Racing", "Ikran Riding", "Thanator Hunting", "No specific name"],
        answer: "No specific name"
    },
    {
        question: "Which actor played Wolverine in the 'X-Men' film series?",
        options: ["Hugh Jackman", "Ryan Reynolds", "Patrick Stewart", "James McAvoy"],
        answer: "Hugh Jackman"
    },
    {
        question: "In 'The Shawshank Redemption', what business does Andy Dufresne help the warden run?",
        options: ["A Car Wash", "A Money Laundering Scheme", "A Bookie Operation", "A Construction Company"],
        answer: "A Money Laundering Scheme"
    },
    {
        question: "Which film features a scene where the Joker blows up a hospital?",
        options: ["Joker (2019)", "The Dark Knight", "Suicide Squad", "Batman Begins"],
        answer: "The Dark Knight"
    },
    {
        question: "What is the name of the AI assistant in Tony Stark's suit?",
        options: ["ULTRON", "FRIDAY", "J.A.R.V.I.S.", "EDITH"],
        answer: "J.A.R.V.I.S."
    },
    {
        question: "Which 2015 film is a sequel to 'Mad Max: Beyond Thunderdome'?",
        options: ["Mad Max: Fury Road", "The Road Warrior", "Mad Max 2", "Furiosa"],
        answer: "Mad Max: Fury Road"
    },
    {
        question: "In 'Inception', what is the iconic spinning top a symbol of?",
        options: ["Time", "Reality", "Guilt", "The Heist"],
        answer: "Reality"
    },
    {
        question: "Who directed the 'Lord of the Rings' trilogy?",
        options: ["Steven Spielberg", "Peter Jackson", "James Cameron", "Ridley Scott"],
        answer: "Peter Jackson"
    },
    {
        question: "What is the name of the superhero team in 'The Avengers'?",
        options: ["The Justice League", "The X-Men", "The Avengers", "The Fantastic Four"],
        answer: "The Avengers"
    },
    {
        question: "Which 2006 film features a magician rivalry between Alfred Borden and Robert Angier?",
        options: ["The Illusionist", "The Prestige", "Now You See Me", "The Incredible Burt Wonderstone"],
        answer: "The Prestige"
    },
    {
        question: "What is the name of the planet in 'Avatar'?",
        options: ["Polyphemus", "Pandora", "Mongo", "Ego"],
        answer: "Pandora"
    },
    {
        question: "Which actor played Captain America in the MCU?",
        options: ["Chris Hemsworth", "Chris Pratt", "Chris Evans", "Chris Pine"],
        answer: "Chris Evans"
    },
    {
        question: "In 'Interstellar', what is the name of the main character played by Matthew McConaughey?",
        options: ["Joseph Cooper", "John Cooper", "James Cooper", "Jack Cooper"],
        answer: "Joseph Cooper"
    },
    {
        question: "Which 2014 film features a team of heroes protecting the galaxy from Ronan the Accuser?",
        options: ["Guardians of the Galaxy", "The Avengers", "Thor: The Dark World", "Captain Marvel"],
        answer: "Guardians of the Galaxy"
    },
    {
        question: "What is the name of the villain in 'The Incredibles'?",
        options: ["Syndrome", "Buddy Pine", "The Underminer", "Bomb Voyage"],
        answer: "Syndrome"
    },
    {
        question: "Who played the character of Thanos in the Marvel Cinematic Universe?",
        options: ["Josh Brolin", "Dave Bautista", "Mark Ruffalo", "Tom Hiddleston"],
        answer: "Josh Brolin"
    },
    {
        question: "In 'The Dark Knight', what does Harvey Dent famously use to make decisions?",
        options: ["A Coin", "A Die", "A Deck of Cards", "His Gut Feeling"],
        answer: "A Coin"
    },
    {
        question: "Which 2017 war film was directed by Christopher Nolan?",
        options: ["1917", "Dunkirk", "Hacksaw Ridge", "Fury"],
        answer: "Dunkirk"
    },
    {
        question: "What is the name of the fictional city where 'The Batman' (2022) is set?",
        options: ["Gotham City", "Metropolis", "Star City", "Central City"],
        answer: "Gotham City"
    },
    {
        question: "In 'The Matrix', what is the real name of Neo?",
        options: ["Thomas Anderson", "John Wick", "Mr. Anderson", "Trinity"],
        answer: "Thomas Anderson"
    },
    {
        question: "Which film features a character named Groot who only says 'I am Groot'?",
        options: ["Avengers: Endgame", "Guardians of the Galaxy", "Thor: Ragnarok", "The Avengers"],
        answer: "Guardians of the Galaxy"
    },
    {
        question: "What year is 'Back to the Future Part II' set in when they travel to the future?",
        options: ["2020", "2015", "2035", "2055"],
        answer: "2015"
    },
    {
        question: "Who directed the 2023 film 'Oppenheimer'?",
        options: ["Martin Scorsese", "Christopher Nolan", "Steven Spielberg", "Quentin Tarantino"],
        answer: "Christopher Nolan"
    },
    {
        question: "In 'The Shawshank Redemption', where does Andy tell Red to look if he ever gets out?",
        options: ["Under a Rock Wall", "In a Hay Field", "Under a Black Volcanic Rock", "In an Oak Tree"],
        answer: "Under a Black Volcanic Rock"
    },
    {
        question: "Which 2009 film is set on the planet Pandora?",
        options: ["Avatar", "Guardians of the Galaxy", "Valerian", "John Carter"],
        answer: "Avatar"
    },
    {
        question: "What is the name of Tony Stark's AI-powered glasses in 'Spider-Man: Far From Home'?",
        options: ["J.A.R.V.I.S.", "EDITH", "FRIDAY", "ULTRON"],
        answer: "EDITH"
    },
    {
        question: "Who is the director of the 2024 film 'Dune: Part Two'?",
        options: ["Christopher Nolan", "Denis Villeneuve", "Ridley Scott", "James Cameron"],
        answer: "Denis Villeneuve"
    },
    {
        question: "In 'Inception', how many levels of dreams do the characters enter in the final heist?",
        options: ["Three", "Four", "Five", "Six"],
        answer: "Four"
    },
    {
        question: "Which actor played the older version of Charles Xavier in the original X-Men trilogy?",
        options: ["James McAvoy", "Ian McKellen", "Patrick Stewart", "Michael Fassbender"],
        answer: "Patrick Stewart"
    },
    {
        question: "What is the name of the fictional metal that Captain America's shield is made from?",
        options: ["Adamantium", "Vibranium", "Promethium", "Carbonadium"],
        answer: "Vibranium"
    },
    {
        question: "Which 2018 film features the superhero Shazam?",
        options: ["Shazam!", "Black Adam", "Man of Steel", "Wonder Woman"],
        answer: "Shazam!"
    },
    {
        question: "In 'The Godfather Part II', which city does young Vito Corleone immigrate to?",
        options: ["Chicago", "Boston", "New York", "Philadelphia"],
        answer: "New York"
    },
    {
        question: "What is the name of the AI villain in 'Eagle Eye'?",
        options: ["Skynet", "ARIA", "The Machine", "Samaritan"],
        answer: "ARIA"
    },
    {
        question: "Which film features a scene where the Avengers fight an alien army in New York?",
        options: ["The Avengers (2012)", "Avengers: Age of Ultron", "Avengers: Infinity War", "Captain America: The Winter Soldier"],
        answer: "The Avengers (2012)"
    },
    {
        question: "Who played the character of Katniss Everdeen in 'The Hunger Games'?",
        options: ["Emma Watson", "Jennifer Lawrence", "Shailene Woodley", "Kristen Stewart"],
        answer: "Jennifer Lawrence"
    },
    {
        question: "In 'Interstellar', what is the name of the black hole?",
        options: ["Gargantua", "Miller", "Mann", "TARS"],
        answer: "Gargantua"
    },
    {
        question: "Which 2008 film features a billionaire who becomes a vigilante using advanced technology?",
        options: ["Iron Man", "The Dark Knight", "Batman Begins", "RoboCop"],
        answer: "Iron Man"
    },
    {
        question: "What is the name of the fictional country in 'Black Panther'?",
        options: ["Wakanda", "Genosha", "Latveria", "Zamunda"],
        answer: "Wakanda"
    },
    {
        question: "Who directed the 2022 film 'The Batman'?",
        options: ["Matt Reeves", "Christopher Nolan", "Zack Snyder", "Tim Burton"],
        answer: "Matt Reeves"
    },
    {
        question: "In 'The Matrix', what is the name of the ship that Neo wakes up on?",
        options: ["The Nebuchadnezzar", "The Osiris", "The Logos", "The Hammer"],
        answer: "The Nebuchadnezzar"
    },
    {
        question: "Which film features a character named John Wick, a legendary hitman?",
        options: ["The Equalizer", "John Wick", "Nobody", "Taken"],
        answer: "John Wick"
    },
    {
        question: "What is the name of the fictional social media company in 'The Social Network'?",
        options: ["Twitter", "Facebook", "Friendster", "MySpace"],
        answer: "Facebook"
    },
    {
        question: "In 'The Dark Knight', what is the name of the district attorney who becomes Two-Face?",
        options: ["Harvey Dent", "James Gordon", "Sal Maroni", "Carmine Falcone"],
        answer: "Harvey Dent"
    },
    {
        question: "Which 2015 film is a sequel to 'Mad Max: Beyond Thunderdome'?",
        options: ["Mad Max: Fury Road", "The Road Warrior", "Mad Max 2", "Furiosa"],
        answer: "Mad Max: Fury Road"
    },
    {
        question: "What is the name of the AI system in 'Avengers: Age of Ultron' that Tony Stark and Bruce Banner create?",
        options: ["J.A.R.V.I.S.", "FRIDAY", "Ultron", "Vision"],
        answer: "Ultron"
    },
    {
        question: "Who played the character of Thanos in the Marvel Cinematic Universe?",
        options: ["Josh Brolin", "Dave Bautista", "Mark Ruffalo", "Tom Hiddleston"],
        answer: "Josh Brolin"
    },
    {
        question: "What is the name of the planet in 'Avatar'?",
        options: ["Polyphemus", "Pandora", "Mongo", "Ego"],
        answer: "Pandora"
    },
    {
        question: "Which actor played Captain America in the MCU?",
        options: ["Chris Hemsworth", "Chris Pratt", "Chris Evans", "Chris Pine"],
        answer: "Chris Evans"
    },
    {
        question: "In 'Interstellar', what is the name of the main character played by Matthew McConaughey?",
        options: ["Joseph Cooper", "John Cooper", "James Cooper", "Jack Cooper"],
        answer: "Joseph Cooper"
    },
    {
        question: "Which 2014 film features a team of heroes protecting the galaxy from Ronan the Accuser?",
        options: ["Guardians of the Galaxy", "The Avengers", "Thor: The Dark World", "Captain Marvel"],
        answer: "Guardians of the Galaxy"
    },
    {
        question: "What is the name of the villain in 'The Incredibles'?",
        options: ["Syndrome", "Buddy Pine", "The Underminer", "Bomb Voyage"],
        answer: "Syndrome"
    },
    {
        question: "Who played the character of Katniss Everdeen in 'The Hunger Games'?",
        options: ["Emma Watson", "Jennifer Lawrence", "Shailene Woodley", "Kristen Stewart"],
        answer: "Jennifer Lawrence"
    },
    {
        question: "In 'The Dark Knight', what does Harvey Dent famously use to make decisions?",
        options: ["A Coin", "A Die", "A Deck of Cards", "His Gut Feeling"],
        answer: "A Coin"
    },
    {
        question: "Which 2017 war film was directed by Christopher Nolan?",
        options: ["1917", "Dunkirk", "Hacksaw Ridge", "Fury"],
        answer: "Dunkirk"
    },
    {
        question: "What is the name of the fictional city where 'The Batman' (2022) is set?",
        options: ["Gotham City", "Metropolis", "Star City", "Central City"],
        answer: "Gotham City"
    },
    {
        question: "In 'The Matrix', what is the real name of Neo?",
        options: ["Thomas Anderson", "John Wick", "Mr. Anderson", "Trinity"],
        answer: "Thomas Anderson"
    },
    {
        question: "Which film features a character named Groot who only says 'I am Groot'?",
        options: ["Avengers: Endgame", "Guardians of the Galaxy", "Thor: Ragnarok", "The Avengers"],
        answer: "Guardians of the Galaxy"
    },
    {
        question: "What year is 'Back to the Future Part II' set in when they travel to the future?",
        options: ["2020", "2015", "2035", "2055"],
        answer: "2015"
    },
    {
        question: "Who directed the 2023 film 'Oppenheimer'?",
        options: ["Martin Scorsese", "Christopher Nolan", "Steven Spielberg", "Quentin Tarantino"],
        answer: "Christopher Nolan"
    },
    {
        question: "In 'The Shawshank Redemption', where does Andy tell Red to look if he ever gets out?",
        options: ["Under a Rock Wall", "In a Hay Field", "Under a Black Volcanic Rock", "In an Oak Tree"],
        answer: "Under a Black Volcanic Rock"
    },
    {
        question: "Which 2009 film is set on the planet Pandora?",
        options: ["Avatar", "Guardians of the Galaxy", "Valerian", "John Carter"],
        answer: "Avatar"
    },
    {
        question: "What is the name of Tony Stark's AI-powered glasses in 'Spider-Man: Far From Home'?",
        options: ["J.A.R.V.I.S.", "EDITH", "FRIDAY", "ULTRON"],
        answer: "EDITH"
    },
    {
        question: "Who is the director of the 2024 film 'Dune: Part Two'?",
        options: ["Christopher Nolan", "Denis Villeneuve", "Ridley Scott", "James Cameron"],
        answer: "Denis Villeneuve"
    },
    {
        question: "In 'Inception', how many levels of dreams do the characters enter in the final heist?",
        options: ["Three", "Four", "Five", "Six"],
        answer: "Four"
    },
    {
        question: "Which actor played the older version of Charles Xavier in the original X-Men trilogy?",
        options: ["James McAvoy", "Ian McKellen", "Patrick Stewart", "Michael Fassbender"],
        answer: "Patrick Stewart"
    },
    {
        question: "What is the name of the fictional metal that Captain America's shield is made from?",
        options: ["Adamantium", "Vibranium", "Promethium", "Carbonadium"],
        answer: "Vibranium"
    },
    {
        question: "Which 2018 film features the superhero Shazam?",
        options: ["Shazam!", "Black Adam", "Man of Steel", "Wonder Woman"],
        answer: "Shazam!"
    },
    {
        question: "In 'The Godfather Part II', which city does young Vito Corleone immigrate to?",
        options: ["Chicago", "Boston", "New York", "Philadelphia"],
        answer: "New York"
    },
    {
        question: "What is the name of the AI villain in 'Eagle Eye'?",
        options: ["Skynet", "ARIA", "The Machine", "Samaritan"],
        answer: "ARIA"
    },
    {
        question: "Which film features a scene where the Avengers fight an alien army in New York?",
        options: ["The Avengers (2012)", "Avengers: Age of Ultron", "Avengers: Infinity War", "Captain America: The Winter Soldier"],
        answer: "The Avengers (2012)"
    },
    {
        question: "In 'The Dark Knight Rises', what is the name of the mercenary who leads Bane's army?",
        options: ["Talia al Ghul", "Bane", "The Scarecrow", "No specific name"],
        answer: "Bane"
    }
];


// Game state variables
let currentQuestionIndex = 0;
let playerScore = 0;
let globalTimer;
let questionTimer;
let totalTime = 120;
let timePerQuestion = 10;
let quizStarted = false;
let attemptedQuestions = 0;

function startQuiz() {
    console.log("Quiz started!"); // Debug log
    shuffleArray(questions);
    currentQuestionIndex = 0;
    playerScore = 0;
    attemptedQuestions = 0;
    totalTime = 120;
    quizStarted = true;
    
    // Hide start container, show quiz elements
    document.getElementById("start-container").classList.add("hidden");
    document.querySelector(".global-timer").classList.remove("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("result-box").classList.add("hidden");
    
    // Update displays
    document.getElementById("score").textContent = "0";
    document.getElementById("totalQuestions").textContent = "0";
    
    loadQuestion();
    startGlobalTimer();
}

function loadQuestion() {
    console.log("Loading question:", currentQuestionIndex); // Debug log
    clearInterval(questionTimer);
    timePerQuestion = 10;
    
    // Update timers
    document.getElementById("timer").textContent = timePerQuestion;
    document.getElementById("globalTimer").textContent = totalTime;
    
    let currentQ = questions[currentQuestionIndex];
    console.log("Current question:", currentQ); // Debug log
    
    // Display question
    document.getElementById("question").textContent = currentQ.question;
    
    // Display options
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    currentQ.options.forEach(option => {
        let button = document.createElement("button");
        button.className = "option-btn";
        button.textContent = option;
        button.onclick = () => checkAnswer(option, button);
        optionsDiv.appendChild(button);
    });
    
    startQuestionTimer();
}

function startQuestionTimer() {
    questionTimer = setInterval(() => {
        timePerQuestion--;
        document.getElementById("timer").textContent = timePerQuestion;
        
        if (timePerQuestion <= 0) {
            clearInterval(questionTimer);
            attemptedQuestions++;
            nextQuestion();
        }
    }, 1000);
}

function startGlobalTimer() {
    globalTimer = setInterval(() => {
        totalTime--;
        document.getElementById("globalTimer").textContent = totalTime;
        
        if (totalTime <= 0) {
            endQuiz();
        }
    }, 1000);
}

function checkAnswer(selectedOption, buttonElement) {
    clearInterval(questionTimer);
    attemptedQuestions++;
    
    let correctAnswer = questions[currentQuestionIndex].answer;
    let allButtons = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    allButtons.forEach(btn => {
        btn.disabled = true;
        // Highlight correct answer in green
        if (btn.textContent === correctAnswer) {
            btn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        }
        // Highlight wrong selection in red
        if (btn === buttonElement && selectedOption !== correctAnswer) {
            btn.style.background = 'linear-gradient(135deg, #f44336, #da190b)';
        }
    });
    
    // Update score if correct
    if (selectedOption === correctAnswer) {
        playerScore++;
    }
    
    // Update score display immediately
    document.getElementById("score").textContent = playerScore;
    
    // Move to next question after delay
    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length && totalTime > 0) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(globalTimer);
    clearInterval(questionTimer);
    quizStarted = false;
    
    // Hide quiz, show results
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.querySelector(".global-timer").classList.add("hidden");
    
    // Display final score out of attempted questions
    document.getElementById("score").textContent = playerScore;
    document.getElementById("totalQuestions").textContent = attemptedQuestions;
    
    // Add performance message
    let performanceMessage = "";
    let percentage = attemptedQuestions > 0 ? (playerScore / attemptedQuestions) * 100 : 0;
    
    if (percentage === 100) {
        performanceMessage = "🎉 Perfect! You're a movie genius! 🎉";
    } else if (percentage >= 80) {
        performanceMessage = "🌟 Excellent! You know your movies! 🌟";
    } else if (percentage >= 60) {
        performanceMessage = "👍 Great job! You're quite the cinephile!";
    } else if (percentage >= 40) {
        performanceMessage = "😊 Good effort! Keep watching those movies!";
    } else {
        performanceMessage = "🎬 Keep practicing! You'll get better!";
    }
    
    // Update or create performance message element
    let performanceElement = document.getElementById("performance-message");
    if (!performanceElement) {
        performanceElement = document.createElement("p");
        performanceElement.id = "performance-message";
        performanceElement.style.marginTop = "15px";
        performanceElement.style.fontSize = "1.1rem";
        performanceElement.style.color = "#ffd700";
        document.querySelector("#result-box h3").after(performanceElement);
    }
    performanceElement.textContent = performanceMessage;
}

function restartQuiz() {
    // Show start container again
    document.getElementById("start-container").classList.remove("hidden");
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-box").classList.add("hidden");
    document.querySelector(".global-timer").classList.add("hidden");
    
    // Reset display
    document.getElementById("question").textContent = "";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").textContent = "0";
    document.getElementById("totalQuestions").textContent = "0";
}

// Initialize the page
window.onload = function() {
    if (document.getElementById('quiz-container')) {
        console.log("Page loaded - initializing quiz"); // Debug log
        // Show start container, hide quiz and results
        document.getElementById("start-container").classList.remove("hidden");
        document.getElementById("quiz-container").classList.add("hidden");
        document.getElementById("result-box").classList.add("hidden");
        document.querySelector(".global-timer").classList.add("hidden");
        
        // Initialize display values
        document.getElementById("globalTimer").textContent = "120";
        document.getElementById("timer").textContent = "10";
        document.getElementById("score").textContent = "0";
        document.getElementById("totalQuestions").textContent = "0";
    }
};