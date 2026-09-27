// ================================
// MEMORY DATA
// ================================

const memories = {

    1: {
        title: "The Beginning ❤️",
        note: "Somewhere between our first conversations and all those little moments, something beautiful started. I didn't know then how special you would become to me.",
        image: "images/memory1.jpeg",
        song: "music/song1.mp3",
        songName: "Our Beginning"
    },

    2: {
        title: "That Smile 🌸",
        note: "This day i can never forget because you make me feel loved by giving me first letter",
        image: "images/memory2.jpeg",
        song: "music/song2.mp3",
        songName: "Your Smile"
    },

    3: {
        title: "Our Little Moments ✨",
        note: "It's not always the big things. Sometimes it's the random conversations, stupid jokes, teasing and tiny moments that become my favourite memories.",
        image: "images/memory3.jpeg",
        song: "music/song3.mp3",
        songName: "Little Moments"
    },

    4: {
        title: "Us 🫶",
        note: "There is something about us that I can't properly put into words.I can never forget this day. It was the day we both trusted each other, and what happened after that made it a memory I’ll cherish forever. ❤️.",
        image: "images/memory4.jpeg",
        song: "music/song4.mp3",
        songName: "Just Us"
    },

    5: {
        title: "My Favourite Person 💗",
        note: "Out of all the people in this world, somehow you became my favourite notification, my favourite conversation and my favourite person.",
        image: "images/memory5.jpeg",
        song: "music/song5.mp3",
        songName: "Favourite Person"
    },

    6: {
        title: "Forever Memories 🌙",
        note: "I hope we collect so many memories that one day we'll sit together and laugh about how everything started.",
        image: "images/memory6.jpeg",
        song: "music/song6.mp3",
        songName: "Forever"
    },

    7: {
        title: "You & Me 🥹",
        note: "Maybe we're not perfect, and maybe we don't have everything figured out. But every day with you feels like another page of our story.",
        image: "images/memory7.jpeg",
        song: "music/song7.mp3",
        songName: "You & Me"
    },

    8: {
        title: "To Be Continued... ❤️",
        note: "Three months down. And hopefully a lot more chapters waiting for us. This isn't the end of our story. It's just another beautiful beginning.",
        image: "images/memory8.jpeg",
        song: "music/song8.mp3",
        songName: "Our Next Chapter"
    }

};


// ================================
// PAGE NAVIGATION
// ================================

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================================
// PASSWORD
// ================================

function showPassword() {
    showPage("passwordPage");
}

function unlock() {

    const password = document.getElementById("password").value.trim();

    const error = document.getElementById("error");

    // Password
    if (password === "28/06/2026") {

        error.innerText = "";

        showPage("memoriesPage");

        createHearts();

    } else {

        error.innerText = "That's not our date... try again ❤️";

    }

}


// Press Enter to unlock

document.getElementById("password").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        unlock();
    }

});


// ================================
// MEMORY MODAL
// ================================

let currentAudio = null;

function openMemory(number) {

    const memory = memories[number];

    document.getElementById("modalImage").src = memory.image;

    document.getElementById("modalNumber").innerText =
        "MEMORY " + String(number).padStart(2, "0");

    document.getElementById("modalTitle").innerText =
        memory.title;

    document.getElementById("modalNote").innerText =
        memory.note;

    document.getElementById("songName").innerText =
        memory.songName;

    currentAudio = document.getElementById("audio");

    currentAudio.src = memory.song;

    currentAudio.load();

    document.getElementById("memoryModal").classList.add("show");

}


function closeMemory() {

    document.getElementById("memoryModal").classList.remove("show");

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

}


function toggleMusic() {

    if (!currentAudio) return;

    if (currentAudio.paused) {
        currentAudio.play();
    } else {
        currentAudio.pause();
    }

}


// Close modal when clicking outside

document.getElementById("memoryModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeMemory();
    }

});


// ================================
// FLOATING HEARTS
// ================================

function createHearts() {

    const container = document.querySelector(".hearts");

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            10 + Math.random() * 20 + "px";

        heart.style.animationDuration =
            5 + Math.random() * 7 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 12000);

    }, 700);

}