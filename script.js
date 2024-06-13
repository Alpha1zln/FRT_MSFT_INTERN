const sections = document.querySelectorAll('.content-section');

function showSection(id) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Mock doctors data
const doctors = [
    { id: 1, name: 'Dr. John Smith', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Dale', specialization: 'Ophthalmology' },
    { id: 3, name: 'Dr. Emily Johnson', specialization: 'Dentistry' },
    { id: 4, name: 'Dr. Michael Brown', specialization: 'Pediatrics' },
    { id: 5, name: 'Dr. Sarah Davis', specialization: 'Psychology' },
];

// Populate doctors list
const doctorList = document.getElementById('doctor-list');
const doctorSelect = document.getElementById('doctor-select');
doctors.forEach(doctor => {
    // Add to doctor list
    const doctorDiv = document.createElement('div');
    doctorDiv.classList.add('col-md-3');
    doctorDiv.innerHTML = `
        <div class="card mb-1">
            <div class="card-body">
                <h5 class="card-title">${doctor.name}</h5>
                <p class="card-text">${doctor.specialization}</p>
            </div>
        </div>
    `;
    doctorList.appendChild(doctorDiv);

    // Add to doctor select
    const doctorOption = document.createElement('option');
    doctorOption.value = doctor.id;
    doctorOption.textContent = `${doctor.name} - ${doctor.specialization}`;
    doctorSelect.appendChild(doctorOption);
});

// Handle booking form submission
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const doctorId = document.getElementById('doctor-select').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (doctorId && date && time) {
        alert(`Appointment booked with Doctor ID: ${doctorId} on ${date} at ${time}`);
    } else {
        alert('Please fill in all fields');
    }
});

// Chatbot functionality
function sendMessage() {
    const input = document.getElementById('input');
    const messageSection = document.getElementById('message-section');
    const userMessage = input.value;
    if (userMessage.trim() === '') return;

    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user');
    userMessageDiv.innerHTML = `<span>${userMessage}</span>`;
    messageSection.appendChild(userMessageDiv);

    input.value = '';
    input.focus();

    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('message', 'bot');

    let botResponse = '';
    if (userMessage.toLowerCase().includes('book appointment')) {
        botResponse = 'Please provide the doctor\'s name and the date you want to book.';
    } else if (userMessage.toLowerCase().includes('doctor')) {
        botResponse = 'Available doctors are: Dr. John Smith, Dr. Jane Doe, Dr. Emily Johnson, Dr. Michael Brown, and Dr. Sarah Davis.';
    } else {
        botResponse = 'I\'m sorry, I didn\'t understand that. Could you please rephrase?';
    }

    botMessageDiv.innerHTML = `<span>${botResponse}</span>`;
    messageSection.appendChild(botMessageDiv);
    messageSection.scrollTop = messageSection.scrollHeight;
}
