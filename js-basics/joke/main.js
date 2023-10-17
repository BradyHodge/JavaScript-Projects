document.addEventListener("DOMContentLoaded", function() {
    const jokeText = document.querySelector(".joke-text");
    const newJokeBtn = document.querySelector(".new-joke-btn");
    const body = document.querySelector("body");

    // Function to fetch a new joke
    function fetchJoke() {
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            jokeText.textContent = data.joke;
        })
        .catch(error => {
            jokeText.textContent = "Oops! Couldn't fetch a joke right now.";
        });
    }

    // Function to generate a random color
    function randomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for the new joke button
    newJokeBtn.addEventListener("click", function() {
        fetchJoke();
        body.style.backgroundColor = randomColor();
    });

    // Fetch the first joke on page load
    fetchJoke();
});
