/* eslint-disable */

// Get the script tag and extract the SURFACE_TAG_ID
const scriptTag = document.currentScript;
const surfaceTagId = scriptTag.getAttribute('data-tag-id');

// Function to initialize tracking
function initializeAnalytics() {
    if (surfaceTagId) {
        // Register the user with the passed SURFACE_TAG_ID
        registerUser(surfaceTagId);

        
    } else {
        console.error('SURFACE_TAG_ID is missing in the script tag');
    }
}

// Function to register the user with the passed SURFACE_TAG_ID
function registerUser(surfaceTagId) {
    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ surfaceTagId })
    })
    .then(response => response.json())
    .then(data => {
        console.log('User registered:', data);
        
        // Track script initialization
        trackEvent('script_init');

        // Add event listeners for tracking
        addEventListeners();
    })
    .catch(error => {
        console.error('Error registering user:', error);
    });
}

// Function to track an event
function trackEvent(eventName, metadata = {}) {
    fetch('/api/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ eventName, metadata, surfaceTagId })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Event tracked:', data);
    })
    .catch(error => {
        console.error('Error tracking event:', error);
    });
}

// Function to track page view
function trackPageView() {
    trackEvent('page_view');
}

// Function to track email entered
function trackEmailEntered(email) {
    trackEvent('email_entered', { email });
}

// Function to track click on a page element
function trackElementClick(elementId) {
    trackEvent('element_click', { elementId });
}

// Function to add event listeners for tracking
function addEventListeners() {
    // Track page view when the window loads
    window.addEventListener('load', trackPageView);

    // Track email input (Assuming there's an input field with id='email')
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('input', () => {
            trackEmailEntered(emailInput.value);
        });
    }

    // Track clicks on elements with data attribute for tracking (data-track-click)
    const clickableElements = document.querySelectorAll('[data-track-click]');
    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            trackElementClick(element.id);
        });
    });
}

// Initialize analytics when the script is loaded
initializeAnalytics();