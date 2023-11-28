// Detect scroll event and dynamically adjust the width of the category bar
window.addEventListener('scroll', function() {
    var kategorie = document.getElementById('Kategorie');

    // Get the current scroll position
    var scrollPosition = window.scrollY;

    // Define the threshold for expanding the width to 100%
    var threshold = 800;

    // If scroll position is more than the threshold, set the width to 100%
    if (scrollPosition > threshold) {
        kategorie.style.width = '100%';
    } else {
        // Otherwise, set the width to the original value
        kategorie.style.width = '1080px';
    }
});
