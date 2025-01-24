// Get references to the input field and button
const wordInput = document.getElementById("wordInput");
const generateBtn = document.getElementById("generateBtn");

// Function to generate links and open them
function generateLinks() {
    const word = wordInput.value.trim().toLowerCase();
    if (word[word.length - 1] == 's') {
        word.slice(0, -1)
    }

    if (word) {
        // Generate links
        const dictionaryLink = `https://dictionary.cambridge.org/dictionary/english/${word}`;
        const thesaurusLink = `https://dictionary.cambridge.org/thesaurus/${word}`;

        // Open links in new tabs
        window.open(dictionaryLink, "_blank");
        window.open(thesaurusLink, "_blank");
    } else {
        alert("Please enter a word.");
    }
}

// Add event listener for the button click
generateBtn.addEventListener("click", generateLinks);

// Add event listener for pressing "Enter" in the input field
wordInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        generateLinks();
    }
});
