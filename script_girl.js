function startChallenge(challengeType) {
    if (challengeType === 'self-confidence') {
        const challenges = [
            "Day 1: Identify Strengths - Write down ten things you're good at or proud of.",
            "Day 2: Positive Affirmations - Create a list of five positive affirmations and say them aloud in the mirror.",
            "Day 3: Dress to Impress - Wear an outfit that makes you feel confident and take note of how it affects your day.",
            "Day 4: Step Out of Comfort Zone - Try something new that you've never done before.",
            "Day 5: Practice Self-Care - Dedicate an hour to a self-care activity you enjoy.",
            "Day 6: Gratitude Journal - Write down three things you’re grateful for.",
            "Day 7: Compliment Someone - Give a genuine compliment to at least one person.",
            "Day 8: Body Language - Focus on maintaining good posture throughout the day.",
            "Day 9: Social Media Detox - Take a break from social media for a day and notice how you feel.",
            "Day 10: Learn Something New - Spend an hour learning a new skill or hobby.",
            "Day 11: Affirmation Cards - Create affirmation cards to carry with you and read throughout the day.",
            "Day 12: Reflect on Achievements - Write down your top five achievements and reflect on them.",
            "Day 13: Say No - Practice saying no to something that doesn’t serve you or makes you uncomfortable.",
            "Day 14: Random Act of Kindness - Perform a random act of kindness and note how it makes you feel.",
            "Day 15: Public Speaking - Practice speaking up in a group or during a meeting.",
            "Day 16: Declutter Space - Organize and declutter a part of your home or workspace.",
            "Day 17: Physical Activity - Engage in a physical activity you enjoy for at least 30 minutes.",
            "Day 18: Vision Board - Create a vision board with images and words that inspire you.",
            "Day 19: Read Inspirational Stories - Read about women who inspire you and note the qualities you admire in them.",
            "Day 20: Practice Mindfulness - Spend 10 minutes meditating or practicing mindfulness.",
            "Day 21: Goal Setting - Set a small, achievable goal and make a plan to accomplish it.",
            "Day 22: Celebrate Yourself - Treat yourself to something special and celebrate your uniqueness.",
            "Day 23: Public Compliment - Give a public compliment or praise someone in front of others.",
            "Day 24: Positive Surroundings - Surround yourself with positive people and avoid negativity.",
            "Day 25: Journal Reflection - Reflect on your journey in a journal, noting changes in your confidence.",
            "Day 26: Seek Feedback - Ask a trusted friend or colleague for constructive feedback.",
            "Day 27: Speak Up - Share your opinion in a discussion or meeting.",
            "Day 28: Try a New Look - Experiment with a new hairstyle or makeup look.",
            "Day 29: Encourage Others - Encourage and support someone else in their endeavors.",
            "Day 30: Reflect and Plan - Reflect on the past 30 days and plan how to continue building your confidence moving forward."
        ];

        // Get the current day from localStorage, or initialize it
        let currentDay = localStorage.getItem('selfConfidenceChallengeDay');
        if (currentDay === null) {
            currentDay = 0;
        } else {
            currentDay = parseInt(currentDay, 10);
        }

        // Function to show today's challenge
        function showChallenge(day) {
            if (day < challenges.length) {
                alert(challenges[day]);
                // Increment the day and update localStorage for the next visit
                currentDay++;
                localStorage.setItem('selfConfidenceChallengeDay', currentDay);
            } else {
                alert("Congratulations! You've completed the 30-Day Self-Confidence Challenge!");
                const restart = confirm("Do you want to restart the challenge?");
                if (restart) {
                    currentDay = 0;
                    localStorage.setItem('selfConfidenceChallengeDay', currentDay);
                    showChallenge(currentDay); // Show the first challenge again
                } else {
                    localStorage.removeItem('selfConfidenceChallengeDay'); // Reset the challenge
                }
            }
        }

        // Show the current day's challenge
        showChallenge(currentDay);
    } else {
        alert("Invalid challenge type. Please select 'self-confidence' to start the 30-Day Self-Confidence Challenge.");
    }
}

// Start the challenge by calling the function
startChallenge('self-confidence');


function registerWorkshop(workshopType) {
    let workshopName;
    let workshopURL;
    
    switch (workshopType) {
        case 'leadership':
            workshopName = "Women's Leadership Seminars";
            workshopURL = "leadership_workshop67.html";
            break;
        case 'Sex Education':
            workshopName = "Sex Education";
            workshopURL = "Sex_education67.html";
            break;
        case 'wellness':
            workshopName = "Wellness Session";
            workshopURL = "Wellness_Session67.html";
            break;
        
        default:
            alert("Invalid workshop type!");
            return;
    }

    // Notify the user of successful registration
    alert("You have successfully registered for " + workshopName + "!");

    // Redirect the user to the corresponding workshop webpage
    if (workshopURL) {
        window.location.href = workshopURL;
    } else {
        console.error("Workshop URL is not defined for workshop type: " + workshopType);
    }
}

// Event listeners for navigation links
document.getElementById('nav-home').addEventListener('click', function() {
    navigateToSection('#home');
});

document.getElementById('nav-classes').addEventListener('click', function() {
    navigateToSection('#classes');
});

document.getElementById('nav-motivation').addEventListener('click', function() {
    navigateToSection('#motivation');
});

document.getElementById('nav-workshops').addEventListener('click', function() {
    navigateToSection('#workshops');
});

// Function to navigate to a section
function navigateToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
