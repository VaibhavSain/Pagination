const itemTitle = document.querySelector("#item p");
const itemTitle2 = document.querySelector("#item2 p");

const itemImg = document.querySelector("#item img");
const item2Img = document.querySelector("#item2 img");

const itemHeading = document.querySelector("#item h3");
const item2Heading = document.querySelector("#item2 h3");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let currentIndex = 0;

const courses = [
    {
        id: 1,
        title: "MERN Full Stack Development",
        description: "Learn MongoDB, Express, React, and Node.js.",
        image: "https://picsum.photos/id/1/300/200"
    },
    {
        id: 2,
        title: "JavaScript Mastery",
        description: "Master modern JavaScript from basics to advanced.",
        image: "https://picsum.photos/id/2/300/200"
    },
    {
        id: 3,
        title: "React Development",
        description: "Build modern web applications using React.",
        image: "https://picsum.photos/id/3/300/200"
    },
    {
        id: 4,
        title: "Node.js Backend",
        description: "Create scalable APIs with Node.js and Express.",
        image: "https://picsum.photos/id/4/300/200"
    },
    {
        id: 5,
        title: "Python for Beginners",
        description: "Learn Python programming from scratch.",
        image: "https://picsum.photos/id/5/300/200"
    },
    {
        id: 6,
        title: "Data Structures & Algorithms",
        description: "Ace coding interviews with DSA concepts.",
        image: "https://picsum.photos/id/6/300/200"
    },
    {
        id: 7,
        title: "Cloud Computing",
        description: "Introduction to AWS and Azure",
        image: "https://picsum.photos/id/7/300/200"
    }
];

function updateCard(course, titleEl, headingEl, imgEl) {
    if (!course) {
        titleEl.textContent = "";
        headingEl.textContent = "";
        imgEl.src = "";
        return;
    }

    titleEl.textContent = course.description;
    headingEl.textContent = course.title;
    imgEl.src = course.image;
}

function loadPage() {
    updateCard(
        courses[currentIndex],
        itemTitle,
        itemHeading,
        itemImg
    );

    updateCard(
        courses[currentIndex + 1],
        itemTitle2,
        item2Heading,
        item2Img
    );

    prev.disabled = currentIndex === 0;
    next.disabled = currentIndex >= courses.length - 2;
}

next.addEventListener("click", () => {
    if (currentIndex < courses.length - 2) {
        currentIndex += 2; // move to next page
        loadPage();
    }
});

prev.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex -= 2; // move to previous page
        loadPage();
    }
});

// Initial Load
loadPage();