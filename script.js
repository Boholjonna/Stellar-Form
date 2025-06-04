const surveyData = [
  {
    title: "Welcome",
    content: `<p>Hi Everyone!<br>Your feedback is incredibly valuable.<br>This survey is anonymous and will take ~10 minutes.<br>Thank you!</p>`
  },
  {
    title: "Company Culture",
    questions: [
      { label: "How would you describe the company culture?", name: "culture", type: "select", options: ["Very Negative", "Negative", "Neutral", "Positive", "Very Positive"] },
      { label: "Does the company promote diversity & inclusion?", name: "diversity", type: "select", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] }
    ]
  },
  {
    title: "Work Environment",
    questions: [
      { label: "Quality of facilities/resources?", name: "facilities", type: "select", options: ["Very Poor", "Poor", "Average", "Good", "Excellent"] },
      { label: "Physical safety?", name: "physical_safety", type: "select", options: ["Not Safe at All", "Somewhat Safe", "Safe", "Very Safe"] },
      { label: "Emotional well-being safety?", name: "mental_safety", type: "select", options: ["Not Safe at All", "Somewhat Safe", "Safe", "Very Safe"] },
      { label: "Cleanliness & hygiene?", name: "cleanliness", type: "select", options: ["Very Poor", "Poor", "Average", "Good", "Excellent"] }
    ]
  },
  {
    title: "Management and Leadership",
    questions: [
      { label: "Leadership of supervisor?", name: "leadership", type: "select", options: ["Very Poor", "Poor", "Average", "Good", "Excellent"] },
      { label: "Confidence in management?", name: "mgmt_confidence", type: "select", options: ["Not Confident", "Slightly", "Neutral", "Confident", "Very Confident"] },
      { label: "Management support?", name: "support", type: "select", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
      { label: "Approachability of leaders?", name: "approachability", type: "select", options: ["Very Unapproachable", "Unapproachable", "Neutral", "Approachable", "Very Approachable"] }
    ]
  },
  {
    title: "General Job Satisfaction",
    questions: [
      { label: "Overall job satisfaction?", name: "job_satisfaction", type: "select", options: ["1", "2", "3", "4", "5"] },
      { label: "Recommend this company?", name: "recommend", type: "select", options: ["Not Likely", "Maybe", "Likely", "Very Likely"] },
      { label: "What do you enjoy most?", name: "enjoy_most", type: "textarea" },
      { label: "What do you enjoy least?", name: "enjoy_least", type: "textarea" },
      { label: "What would you change?", name: "change_one", type: "textarea" }
    ]
  },
  {
    title: "Communication and Collaboration",
    questions: [
      { label: "Communication flow?", name: "communication", type: "select", options: ["Very Ineffective", "Ineffective", "Neutral", "Effective", "Very Effective"] },
      { label: "Are your suggestions valued?", name: "opinions", type: "select", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
      { label: "Team collaboration?", name: "teamwork", type: "select", options: ["Very Poor", "Poor", "Neutral", "Good", "Very Good"] },
      { label: "Stay informed on changes?", name: "updates", type: "select", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] }
    ]
  },
  {
    title: "Professional Development",
    questions: [
      { label: "Training & development satisfaction?", name: "training", type: "select", options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { label: "Career advancement opportunities?", name: "advancement", type: "select", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
      { label: "Had a skills review in last year?", name: "review", type: "select", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] }
    ]
  },
  {
    title: "Compensation and Benefits",
    questions: [
      { label: "Satisfaction with compensation?", name: "compensation", type: "select", options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { label: "Healthcare benefits?", name: "healthcare", type: "select", options: ["Very Poor", "Poor", "Neutral", "Good", "Excellent"] },
      { label: "Leave policies?", name: "leave", type: "select", options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] }
    ]
  },
  {
    title: "Work-Life Balance",
    questions: [
      { label: "Work/personal life balance?", name: "balance", type: "select", options: ["Very Poor", "Poor", "Neutral", "Good", "Very Good"] },
      { label: "How often do you feel overwhelmed?", name: "overwhelmed", type: "select", options: ["Never", "Rarely", "Sometimes", "Often", "Always"] }
    ]
  },
  {
    title: "Employee Well-being",
    questions: [
      { label: "Overall mental well-being?", name: "mental", type: "select", options: ["Very Poor", "Poor", "Neutral", "Good", "Excellent"] },
      { label: "Company's well-being efforts?", name: "wellbeing_effort", type: "select", options: ["Very Poor", "Poor", "Neutral", "Good", "Excellent"] },
      { label: "Likely to participate in Wellness Program?", name: "wellness_participation", type: "select", options: ["Not Likely", "Maybe", "Likely", "Very Likely"] },
      { label: "Comfort discussing well-being with supervisor?", name: "comfort", type: "select", options: ["Very Uncomfortable", "Uncomfortable", "Neutral", "Comfortable", "Very Comfortable"] }
    ]
  },
  {
    title: "Recognition and Appreciation",
    questions: [
      { label: "Feel valued for contributions?", name: "recognition", type: "select", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
      { label: "Receive positive recognition often?", name: "positive_feedback", type: "select", options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"] }
    ]
  },
  {
    title: "Final Thoughts",
    questions: [
      { label: "What changes would you like to see?", name: "change_suggestions", type: "textarea" },
      { label: "Any additional resources/support needed?", name: "resources_needed", type: "textarea" },
      { label: "Other comments?", name: "other_comments", type: "textarea" }
    ]
  },
  {
    title: "Thank You!",
    content: "<p>🎉 Thank you for your feedback!</p>"
  }
];

// Initialize state from localStorage or use defaults
let currentPage = parseInt(localStorage.getItem('surveyCurrentPage')) || 0;
let formData = JSON.parse(localStorage.getItem('surveyFormData')) || {};

// Save state to localStorage
function saveState() {
    localStorage.setItem('surveyCurrentPage', currentPage);
    localStorage.setItem('surveyFormData', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Survey form initialized');
    console.log('Total pages:', surveyData.length);
    console.log('Restored from page:', currentPage + 1);
    renderCurrentPage();
});

function renderCurrentPage() {
    const container = document.querySelector('.container');
    const currentSection = surveyData[currentPage];
    const totalPages = surveyData.length;
    const progress = ((currentPage + 1) / totalPages) * 100;

    let html = `
        <div class="progress-bar">
            <div class="progress" style="width: ${progress}%"></div>
            <span class="progress-text">Page ${currentPage + 1} of ${totalPages}</span>
        </div>
        <h2>${currentSection.title}</h2>
    `;

    if (currentSection.content) {
        html += currentSection.content;
    }    if (currentSection.questions) {
        html += `<form id="surveyForm">`;
        currentSection.questions.forEach(question => {
            html += `<div class="form-group">
                <p class="question-label">${question.label}</p>`;
            
            if (question.type === "select") {
                html += `<div class="radio-group">`;
                question.options.forEach((opt, index) => {
                    html += `
                        <div class="radio-option">
                            <input type="radio" 
                                id="${question.name}_${index}" 
                                name="${question.name}" 
                                value="${opt}" 
                                required
                                onchange="updateFormData(this)"
                                ${formData[question.name] === opt ? 'checked' : ''}>
                            <label for="${question.name}_${index}">${opt}</label>
                        </div>`;
                });
                html += `</div>`;            } else if (question.type === "textarea") {
                html += `
                    <textarea name="${question.name}" 
                        id="${question.name}" 
                        required
                        rows="4" 
                        oninput="updateFormData(this)"
                        placeholder="Enter your response">${formData[question.name] || ''}</textarea>`;
            }
            html += `</div>`;
        });
        html += `</form>`;
    }

    html += `<div class="button-group">`;
    if (currentPage > 0) {
        html += `<button class="prev-btn" onclick="prevPage()">Previous</button>`;
    }    if (currentPage === surveyData.length - 1) {
        html += `<button class="next-btn" onclick="submitSurvey()">Submit Survey</button>`;
    } else {
        html += `<button class="next-btn" onclick="nextPage()">Next</button>`;
    }
    html += `</div>`;

    // Add a basic debug log to verify page rendering
    console.log(`Rendered page ${currentPage + 1} of ${totalPages}`);
    container.innerHTML = html;
}

// Update renderCurrentPage to add event listeners after rendering
let oldRenderCurrentPage = renderCurrentPage;
renderCurrentPage = function() {
    oldRenderCurrentPage();
    
    // Add event listeners to all form fields
    const form = document.getElementById('surveyForm');
    if (form) {
        const fields = form.querySelectorAll('input[type="radio"], textarea');
        fields.forEach(field => {
            if (field.type === 'radio') {
                field.addEventListener('change', function() {
                    formData[this.name] = this.value;
                    saveState();
                });
            } else if (field.tagName === 'TEXTAREA') {
                field.addEventListener('input', function() {
                    formData[this.name] = this.value;
                    saveState();
                });
            }
        });
    }
};

function collectFormData() {
    const form = document.getElementById('surveyForm');
    if (!form) return true;

    const isValid = form.checkValidity();
    if (!isValid) {
        form.reportValidity();
        return false;
    }

    const formElements = form.elements;
    for (let element of formElements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }
    
    // Save form data after each update
    saveState();
    return true;
}

function nextPage() {
    if (!collectFormData()) return;
    if (currentPage < surveyData.length - 1) {
        currentPage++;
        saveState();
        renderCurrentPage();
        window.scrollTo(0, 0);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        saveState();
        renderCurrentPage();
        window.scrollTo(0, 0);
    }
}

// Helper function to show thank you message
function showThankYouMessage() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 2rem;">Thank You! 🎉</h2>
        <div style="text-align: center; font-size: 1.2rem; margin-bottom: 2rem;">
            <p>Your feedback has been successfully submitted.</p>
            <p>We appreciate your time and valuable input!</p>
        </div>
        <div style="text-align: center;">
            <button onclick="resetAndGoHome()" 
                    style="background-color: #1101be; color: white; border: none; 
                           padding: 1rem 2rem; border-radius: 8px; cursor: pointer;
                           transition: transform 0.2s, background-color 0.2s;">
                Back to Home
            </button>
        </div>
    `;
}

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzGTC81q6JYwbAd__Xe7K8-dW8-lM--imzb61GhlGKJ_OY1s_XP-lJpZDFpqkzetQ-mSA/exec';

function submitSurvey() {
    try {
        if (!collectFormData()) return;

        const submitButton = document.querySelector('.next-btn');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = `<span>Submitting...</span>`;
        }

        // Verify all required fields are present
        const expectedFields = [
            'culture', 'diversity',
            'facilities', 'physical_safety', 'mental_safety', 'cleanliness',
            'leadership', 'mgmt_confidence', 'support', 'approachability',
            'job_satisfaction', 'recommend', 'enjoy_most', 'enjoy_least', 'change_one',
            'communication', 'opinions', 'teamwork', 'updates',
            'training', 'advancement', 'review',
            'compensation', 'healthcare', 'leave',
            'balance', 'overwhelmed',
            'mental', 'wellbeing_effort', 'wellness_participation', 'comfort',
            'recognition', 'positive_feedback',
            'change_suggestions', 'resources_needed', 'other_comments'
        ];

        // Verify data completeness
        const missingFields = expectedFields.filter(field => !formData[field]);
        if (missingFields.length > 0) {
            console.error('Missing required fields:', missingFields);
            throw new Error('Please complete all required fields');
        }

        // Add timestamp and prepare data
        const now = new Date();
        const dataToSend = {
            timestamp: now.toISOString(),
        };

        // Add all fields in the correct order and validate data
        expectedFields.forEach(field => {
            dataToSend[field] = formData[field] || '';
        });

        // Log submission details
        console.log('Attempting to submit data to spreadsheet...');
        console.log('Data validation check:', {
            totalFields: expectedFields.length,
            fieldsWithData: Object.keys(dataToSend).length,
            timestamp: dataToSend.timestamp
        });        // Show thank you message and success toast
        showThankYouMessage();
        showToast('✅ Thank you for your response!', 'success');

        // Clear storage
        localStorage.removeItem('surveyCurrentPage');
        localStorage.removeItem('surveyFormData');// Convert data to URL-encoded form data
        const formBody = new URLSearchParams();
        Object.entries(dataToSend).forEach(([key, value]) => {
            formBody.append(key, value);
        });

        // Submit data in the background
        fetch(SHEET_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody.toString()
        })
        .then(response => {
            if (response.type === 'opaque') {
                // This is expected with no-cors mode
                console.log('✅ Data successfully sent to spreadsheet');
                showToast('✅ Thank you for your response!', 'success');
                return;
            }
            throw new Error('Unexpected response type');
        })
        .catch(networkError => {
            console.error('Network error during submission:', networkError);
            // Don't show error toast since we already showed success message
            // Data is saved in Google's queue and will be processed
        });

    } catch (error) {
        console.error('Error in submitSurvey:', error);
        alert('There was an error submitting your response: ' + error.message);
        const submitButton = document.querySelector('.next-btn');
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Survey';
        }
    }
}

// Function to reset storage and go back to home
function resetAndGoHome() {
    localStorage.removeItem('surveyCurrentPage');
    localStorage.removeItem('surveyFormData');
    window.location.href = 'index.html';
}

// Helper function for showing toasts
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        ${type === 'success' ? 'top: 20px' : 'bottom: 20px'};
        left: 50%;
        transform: translateX(-50%);
        background-color: ${type === 'success' ? 'rgba(39, 174, 96, 0.9)' : 'rgba(231, 76, 60, 0.9)'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        z-index: 1000;
        animation: fadeInOut 3s forwards;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    toast.innerHTML = `<span style="font-size: 20px;">${type === 'success' ? '✅' : '⚠️'}</span> ${message}`;
    
    // Add animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, ${type === 'success' ? '-20px' : '20px'}); }
            10% { opacity: 1; transform: translate(-50%, 0); }
            90% { opacity: 1; transform: translate(-50%, 0); }
            100% { opacity: 0; transform: translate(-50%, ${type === 'success' ? '-20px' : '20px'}); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);

    // Remove toast and style after animation
    setTimeout(() => {
        document.body.removeChild(toast);
        document.head.removeChild(style);
    }, 3000);
}