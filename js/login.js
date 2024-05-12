document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showModal('loginModal');
});

function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    if (modalId === 'loginModal') {
        window.location.href = 'home.html';
    }
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal(event.target.id);
    }
}

function toggleHighContrast() {
    var body = document.body;
    body.classList.toggle('high-contrast');
    localStorage.setItem('highContrast', body.classList.contains('high-contrast') ? 'enabled' : '');
}

function applyHighContrastSetting() {
    if (localStorage.getItem('highContrast') === 'enabled') {
        document.body.classList.add('high-contrast');
    }
}

document.getElementById('toggleContrast').addEventListener('click', toggleHighContrast);
document.addEventListener('DOMContentLoaded', applyHighContrastSetting);

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var passStatus = document.querySelector('.icon-eye');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passStatus.classList.remove('fa-eye');
        passStatus.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passStatus.classList.remove('fa-eye-slash');
        passStatus.classList.add('fa-eye');
    }
}

function showResetForm() {
    document.getElementById('resetPasswordModal').style.display = 'block';
}

function validateAndSendResetLink() {
    var email = document.getElementById('resetEmail').value;
    if (email.trim() === '') {
        document.getElementById('resetEmailError').textContent = "Please enter your email address.";
    } else if (!email.includes('@')) {
        document.getElementById('resetEmailError').textContent = "Please include an '@' in the email address.";
    } else {
        document.getElementById('emailSentMessage').textContent = `A reset link has been sent to ${email}.`;
    closeModal('resetPasswordModal');  
    showModal('emailSentModal'); 
}
}
