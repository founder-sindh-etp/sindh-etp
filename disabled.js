/* Prevent Copy */
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

/* Prevent CTRL+C and CMD+C */
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
    }
});

/* Prevent Right Click */
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

/* Prevent actions outside input fields and allow typing in input fields */
document.addEventListener('mousedown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        // Allow mouse actions in input fields
    } else {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    if (!(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
        e.preventDefault(); // Prevent keyboard input outside input fields
    }
});

document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
});

/* Current Year */
/* const year = new Date().getFullYear();
document.getElementById('year').textContent = year; */

/* Show Search Text - Displays search message, then redirects */
function showSearchText() {
    const searchText = document.getElementById("searchText");
    searchText.style.display = "block";
    setTimeout(function() {
        window.location.href = "search.html"; // Placeholder for search result page
    }, 3000);
}

/* Open WhatsApp - Redirect to WhatsApp with pre-filled message */
function openWhatsApp() {
    window.location.href = "https://wa.me/03033032032?text=Hi! I just visited your website *https://edu-quiz-platform.github.io/sbbu* and would like to get more information."; 
}

/* Show WhatsApp Text - Show WhatsApp message, then redirect */
function showWhatsAppText() {
    const whatsappText = document.getElementById("whatsappText");
    whatsappText.style.display = "block";
    setTimeout(function() {
        window.location.href = "https://wa.me/03033032032?text=Hi! I just visited your website *https://edu-quiz-platform.github.io/sbbu* and would like to get more information.";
    }, 3000);
}

/* JavaScript to handle PDF loading state */
document.querySelectorAll('.pdf-box').forEach(function(box) {
    const iframe = box.querySelector('iframe');
    const loadingMessage = box.querySelector('.loading');

    iframe.onload = function() {
        loadingMessage.style.display = 'none';
        iframe.style.display = 'block';
    };
});
