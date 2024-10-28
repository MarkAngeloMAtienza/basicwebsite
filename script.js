document.getElementById('subscribe-btn').onclick = function() {
    document.getElementById('newsletter-popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
};

// Close pop-up when the close button is clicked
document.getElementById('close-popup').onclick = function() {
    document.getElementById('newsletter-popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};
// Function to show the pop-up
function showPopup() {
    document.getElementById('newsletter-popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Automatically show pop-up after 10 seconds
setTimeout(showPopup, 10000);  // 10000 milliseconds = 10 seconds

// Close pop-up when the close button is clicked
document.getElementById('close-popup').onclick = function() {
    document.getElementById('newsletter-popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};

// Get the main content element
const mainContent = document.getElementById('main-content');

// Get the navigation links
const homeLink = document.getElementById('home-link');
const servicesLink = document.getElementById('services-link');
const aboutLink = document.getElementById('about-link');

// Add click event listeners to each navigation link
homeLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior of anchor tag
    mainContent.innerHTML = `
        <h2>Welcome to Our Barangay</h2>
        <p>We are here to serve the community and make life better for everyone.</p>
        <button id="subscribe-btn">Subscribe to Newsletter</button>
    `;
});

servicesLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior of anchor tag
    mainContent.innerHTML = `
        <h2>Our Services</h2>
        <p>We provide various services for our community, including health, education, and social welfare.</p>
        <button id="subscribe-btn">Subscribe to Newsletter</button>
    `;
});

aboutLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior of anchor tag
    mainContent.innerHTML = `
        <h2>About Us</h2>
        <p>Barangay Cabay is committed to improving the quality of life for our residents by providing essential services and fostering a sense of community.</p>
        <button id="subscribe-btn">Subscribe to Newsletter</button>
    `;
})