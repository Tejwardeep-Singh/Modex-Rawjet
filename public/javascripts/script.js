
gsap.from("#hero h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from("#hero p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
});

function popup()
{
const images = document.querySelectorAll('.gallery-grid img');
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const counter = document.getElementById('counter');

let currentIndex = 0;

// OPEN MODAL
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();

        modal.style.display = "flex";

        gsap.fromTo("#modalImg",
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4 }
        );
    });
});

// SHOW IMAGE
function showImage(){
    modalImg.src = images[currentIndex].src;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
}

// NEXT
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

// PREV
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

// CLOSE
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// CLICK OUTSIDE
modal.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});

// KEYBOARD CONTROLS
document.addEventListener('keydown', (e) => {
    if(modal.style.display === "flex"){
        if(e.key === "ArrowRight") nextBtn.click();
        if(e.key === "ArrowLeft") prevBtn.click();
        if(e.key === "Escape") modal.style.display = "none";
    }
});
}

popup()

function filterModels(category) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function filterModels(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filters button');

    // 🎯 REMOVE ACTIVE FROM ALL
    buttons.forEach(btn => btn.classList.remove('active'));

    // 🎯 ADD ACTIVE TO CLICKED BUTTON
    event.target.classList.add('active');

    // 🔄 FILTER LOGIC
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function goBack(){
    window.history.back();
}