const myHeader = document.getElementById('my-header');
const myBody = document.getElementById('my-body');
const myButton = document.getElementById('my-button');

function getRandomMood() {
    const moods = ['🙂', '😍', '😂', '😢', '😡', '🥴'];
    const randomIndex = Math.floor(Math.random() * moods.length);
    return moods[randomIndex];
}   

myButton.addEventListener('click', () => {
    mood = getRandomMood();
    myBody.innerHTML = mood;
});
