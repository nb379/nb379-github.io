document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('ConfirmPassword').value;
    var passwordError = document.getElementById('passwordError');

    if (password === confirmPassword) {
        passwordError.style.display = 'none'; 
        showModal(); 
    } else {
        passwordError.textContent = "Passwords do not match."; 
        passwordError.style.display = 'block'; 
    }
});


function showModal() {
    document.getElementById('registrationModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('registrationModal').style.display = 'none';
}


window.onclick = function(event) {
    if (event.target == document.getElementById('registrationModal')) {
        closeModal();
    }
}


function toggleHighContrast() {
    var body = document.body;
    body.classList.toggle('high-contrast');

    
    if (body.classList.contains('high-contrast')) {
        localStorage.setItem('highContrast', 'enabled');
    } else {
        localStorage.removeItem('highContrast');
    }
}

function applyHighContrastSetting() {
    if (localStorage.getItem('highContrast') === 'enabled') {
        document.body.classList.add('high-contrast');
    }
}


document.getElementById('toggleContrast').addEventListener('click', toggleHighContrast);

document.addEventListener('DOMContentLoaded', applyHighContrastSetting);

function togglePasswordVisibility(passwordId, iconId) {
    var passwordInput = document.getElementById(passwordId);
    var passStatus = document.getElementById(iconId);
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


