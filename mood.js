const myHeader = document.getElementById('my-header');
const myDiv1 = document.getElementById('my-div1');
const myButton1 = document.getElementById('my-button1');
const myDiv2 = document.getElementById('my-div2');
const myButton2 = document.getElementById('my-button2');

function getRandomMood() {
    const moods = ['🙂', '😍', '😂', '😢', '😡', '🥴'];
    const randomIndex = Math.floor(Math.random() * moods.length);
    return moods[randomIndex];
}   

myButton1.addEventListener('click', () => {
    mood = getRandomMood();
    myDiv1.innerHTML = mood;
});

function getRandomThought() {
    const thoughts = ['Clubs', 'Food', 'The Beach', 'Classes', 'Friends'];
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    return thoughts[randomIndex];
}   

myButton2.addEventListener('click', () => {
    thought = getRandomThought();
    myDiv2.innerHTML = thought;
});
