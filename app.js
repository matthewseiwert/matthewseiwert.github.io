let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li a');
let words = document.querySelectorAll('.words span');
let paw = document.querySelector('.paw');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}


navLinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        link.classList.remove("linkChange");
    });
    link.addEventListener("mouseover", () => {
        link.classList.add("linkChange");
    });
})

words.forEach(word => {
    word.addEventListener("mouseleave", () => {
        word.classList.remove("linkColor");
    })
    word.addEventListener("mouseover", () => {
        word.classList.add("linkColor");
    })
})


paw.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
})

paw.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
})
