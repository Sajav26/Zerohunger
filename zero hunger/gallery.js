document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'flex';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        document.querySelector('.popup-image .description').innerText = image.getAttribute('alt');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};

document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        const color = this.style.backgroundColor;
        document.querySelector('.popup-content').style.backgroundColor = color;
    });
});

document.querySelectorAll('.font-style-option').forEach(option => {
    option.addEventListener('click', function() {
        const fontStyle = this.dataset.fontStyle;
        document.querySelector('.popup-image .description').style.fontFamily = fontStyle;
    });
});

window.addEventListener('scroll', function() {
    var footer = document.getElementById('myFooter');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = Math.max(
        document.documentElement.scrollHeight, 
        document.body.scrollHeight,
        document.documentElement.clientHeight
    );

    var distanceToBottom = documentHeight - (scrollPosition + windowHeight);

    var threshold = 100;

    if (distanceToBottom <= threshold) {
        footer.style.display = 'block'; 
    } else {
        footer.style.display = 'none'; 
    }
});

// Wait for the page to be fully loaded before executing the code
window.addEventListener('load', function() {
    // Scroll a bit to trigger the scroll event and hide the footer initially
    window.scrollBy(0, 1);
});