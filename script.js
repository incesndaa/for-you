const messages = [
    "i'm sorry if i hurt you a lot..",
    "i'm sorry if i never understand how and what you feel",
    "i'm sorry for disappointing you",
    "i'm sorry you met me, your life would have been so much better if i wasn't in it",
    "if loving me is hard and tiring, i deeply apologize."
];

let index = 0;
const introElement = document.getElementById("intro");
const startButton = document.getElementById("startButton");
const messageElement = document.getElementById("message");
const nextMessageButton = document.getElementById("nextMessage");

startButton.addEventListener("click", () => {
    introElement.classList.add("hidden");
    startButton.classList.add("hidden");
    showMessage();
});

nextMessageButton.addEventListener("click", () => {
    index++;
    if (index < messages.length) {
        showMessage();
    } else {
        nextMessageButton.textContent = "trust me, i love you. -adinda";
        nextMessageButton.disabled = true; // Disable button setelah semua pesan ditampilkan
    }
});

function showMessage() {
    messageElement.textContent = messages[index];
    messageElement.style.opacity = 10;
    messageElement.classList.remove("hidden");
    nextMessageButton.classList.remove("hidden");

    setTimeout(() => {
        messageElement.style.opacity = 0;
    }, 2500);
}
