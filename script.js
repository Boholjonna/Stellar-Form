document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Here you would typically send the data to your Google Sheets
        // For now, we'll just show a thank you message
        alert('Thank you for completing the survey! Your responses have been recorded.');
        
        // Redirect back to index page
        window.location.href = 'index.html';
    });
});

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbx9Tol3B9GbWdyQb09xaIR_NR0jMWXj-qch6UGuqTq7CslhlC-_xqiYt48gNX4kTy4maA/exec';

function submitSurvey() {
    const form = document.getElementById('formPage1');
    const culture = form.culture_description.value;
    const diversity = form.diversity_inclusion.value;

    if (!culture || !diversity) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Disable submit button and show loading state
    const submitButton = form.querySelector('button[type="button"]');
    submitButton.disabled = true;
    submitButton.innerHTML = `
        <span style="display: inline-block;">Submitting...</span>
    `;

    // Prepare the form data
    const formData = new URLSearchParams();
    formData.append('culture_description', culture);
    formData.append('diversity_inclusion', diversity);

    // Send data using POST request
    fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // This is important for cross-origin requests
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
    })
    .then(() => {
        console.log('Data sent successfully');
        // Show success message
        const container = document.querySelector('.container');
        container.innerHTML = `
            <h2 style="color: white; text-align: center; animation: slideDown 1s ease-out;">Thank You!</h2>
            <p style="text-align: center; margin-top: 2rem; animation: fadeIn 1s ease-in;">Your feedback has been successfully recorded.</p>
            <p style="text-align: center; animation: fadeIn 1s ease-in;">Your responses will help us improve our workplace culture.</p>
            <button onclick="window.location.href='index.html'" 
                    style="margin-top: 2rem; background-color: #1101be;"
                    onmouseover="this.style.backgroundColor='#0033B6'"
                    onmouseout="this.style.backgroundColor='#1101be'">
                Return to Home
            </button>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your response. Please try again.');
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    });
}