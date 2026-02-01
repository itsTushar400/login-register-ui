// ===== ELEMENTS =====
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// ===== TOGGLE LOGIN / REGISTER =====
if (container && registerBtn && loginBtn) {
    registerBtn.addEventListener("click", () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
    });
}

// ===== PREVENT FORM RELOAD =====
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});

// ===== PASSWORD SHOW / HIDE =====
document.querySelectorAll(".eye").forEach(eye => {
    eye.addEventListener("click", () => {
        const inputId = eye.getAttribute("data-target");
        const passwordInput = document.getElementById(inputId);

        if (!passwordInput) return;

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eye.classList.remove("bx-hide");
            eye.classList.add("bx-show");
        } else {
            passwordInput.type = "password";
            eye.classList.remove("bx-show");
            eye.classList.add("bx-hide");
        }
    });
});

// ===== ESC KEY = BACK TO LOGIN =====
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && container) {
        container.classList.remove("active");
    }
});
