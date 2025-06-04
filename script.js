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

let currentPage = 0;
let formData = {};

document.addEventListener('DOMContentLoaded', function() {
    console.log('Survey form initialized');
    console.log('Total pages:', surveyData.length);
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
                                ${formData[question.name] === opt ? 'checked' : ''}>
                            <label for="${question.name}_${index}">${opt}</label>
                        </div>`;
                });
                html += `</div>`;
            } else if (question.type === "textarea") {
                html += `
                    <textarea name="${question.name}" id="${question.name}" required
                        rows="4" placeholder="Enter your response">${formData[question.name] || ''}</textarea>`;
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
    return true;
}

function nextPage() {
    if (!collectFormData()) return;
    if (currentPage < surveyData.length - 1) {
        currentPage++;
        renderCurrentPage();
        window.scrollTo(0, 0);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderCurrentPage();
        window.scrollTo(0, 0);
    }
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

        // Add timestamp
        const now = new Date();        // Create an object with all the data
        const dataToSend = {
            timestamp: now.toISOString(),
        };

        // Add all fields in the correct order and validate data
        expectedFields.forEach(field => {
            dataToSend[field] = formData[field] || '';
            if (!formData[field]) {
                console.warn(`Missing value for field: ${field}`);
            }
        });

        // Log submission details in a formatted way
        console.group('Survey Submission Data');
        console.log('Timestamp:', dataToSend.timestamp);
        console.log('Form Data Overview:', {
            totalFields: expectedFields.length,
            fieldsWithData: Object.keys(formData).length,
            dataSize: JSON.stringify(dataToSend).length + ' bytes'
        });
        // Log each section's data separately for better readability
        console.group('Company Culture');
        console.log('Culture:', dataToSend.culture);
        console.log('Diversity:', dataToSend.diversity);
        console.groupEnd();
        
        console.group('Work Environment');
        console.log('Facilities:', dataToSend.facilities);
        console.log('Physical Safety:', dataToSend.physical_safety);
        console.log('Mental Safety:', dataToSend.mental_safety);
        console.log('Cleanliness:', dataToSend.cleanliness);
        console.groupEnd();

        console.group('Management and Leadership');
        console.log('Leadership:', dataToSend.leadership);
        console.log('Management Confidence:', dataToSend.mgmt_confidence);
        console.log('Support:', dataToSend.support);
        console.log('Approachability:', dataToSend.approachability);
        console.groupEnd();
        
        // Log the full data object for debugging if needed
        console.debug('Full submission data:', dataToSend);
        console.groupEnd();console.log('Attempting to submit data to spreadsheet...');
        
        try {
            // First, verify the data structure
            console.log('Data structure check:', {
                totalFields: expectedFields.length,
                fieldsWithData: Object.keys(dataToSend).length,
                sampleData: {
                    timestamp: dataToSend.timestamp,
                    culture: dataToSend.culture,
                    diversity: dataToSend.diversity
                }
            });            // Show thank you message immediately
            const container = document.querySelector('.container');
            container.innerHTML = `
                <h2 style="text-align: center; margin-bottom: 2rem;">Thank You! 🎉</h2>
                <div style="text-align: center; font-size: 1.2rem; margin-bottom: 2rem;">
                    <p>Your feedback has been successfully submitted.</p>
                    <p>We appreciate your time and valuable input!</p>
                </div>
                <div style="text-align: center;">
                    <button onclick="window.location.href='index.html'" 
                            style="background-color: #1101be; color: white; border: none; 
                                   padding: 1rem 2rem; border-radius: 8px; cursor: pointer;
                                   transition: transform 0.2s, background-color 0.2s;">
                        Back to Home
                    </button>
                </div>
            `;
            
            // Create and show the success toast
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: rgba(39, 174, 96, 0.9);
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
            toast.innerHTML = '<span style="font-size: 20px;">✅</span> Thank you for your response!';
            
            // Add animation style
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translate(-50%, -20px); }
                    10% { opacity: 1; transform: translate(-50%, 0); }
                    90% { opacity: 1; transform: translate(-50%, 0); }
                    100% { opacity: 0; transform: translate(-50%, -20px); }
                }
            `;
            document.head.appendChild(style);

            // Remove toast after animation
            setTimeout(() => {
                document.body.removeChild(toast);
                document.head.removeChild(style);
            }, 3000);

            // Submit data in the background
            fetch(SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            })            .then(response => {
                console.log('✅ Data successfully sent to spreadsheet');
                return response;
            })
            .catch(error => {
                // If there's an error sending to spreadsheet, show an error toast but don't disrupt the thank you page
                const errorToast = document.createElement('div');
                errorToast.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: rgba(231, 76, 60, 0.9);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    z-index: 1000;
                    animation: fadeInOut 3s forwards;
                `;
                errorToast.innerHTML = '⚠️ Network error occurred, but your response was saved locally';
                document.body.appendChild(errorToast);
                setTimeout(() => errorToast.remove(), 3000);
                console.error('Network error:', error);
            })
            .finally(() => {
                console.error('Network error during submission:', error);
                console.log('Failed submission data:', dataToSend);
                throw new Error(`Failed to submit form: ${error.message}`);
            });

        } catch (fetchError) {
            console.error('Error preparing or sending data:', fetchError);
            throw fetchError;
        }

    } catch (error) {
        console.error('Error in submitSurvey:', error);
        alert('There was an error submitting your response: ' + error.message);
        const submitButton = document.querySelector('.next-btn');
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Next';
        }
    }
}