const registrationForm = document.querySelector("#registrationForm");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const formMessage = document.querySelector("#formMessage");
const genderInputs = registrationForm.querySelectorAll('input[name="gender"]');

function validatePasswordConfirmation() {
  if (confirmPasswordInput.value && confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.setCustomValidity("Mật khẩu xác nhận chưa khớp.");
    return;
  }

  confirmPasswordInput.setCustomValidity("");
}

passwordInput.addEventListener("input", validatePasswordConfirmation);
confirmPasswordInput.addEventListener("input", validatePasswordConfirmation);
genderInputs.forEach((input) => {
  input.addEventListener("change", () => {
    registrationForm.querySelector(".choice-group").classList.remove("is-invalid");
  });
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validatePasswordConfirmation();
  registrationForm.classList.add("was-validated");
  formMessage.hidden = true;

  const genderGroup = registrationForm.querySelector(".choice-group");
  genderGroup.classList.toggle(
    "is-invalid",
    !registrationForm.querySelector('input[name="gender"]:checked'),
  );

  if (!registrationForm.checkValidity()) {
    const firstInvalidField = registrationForm.querySelector(":invalid");
    firstInvalidField?.focus();
    return;
  }

  formMessage.textContent =
    "Thông tin hợp lệ. Đây là form minh họa; chưa có tài khoản nào được tạo hoặc gửi đi.";
  formMessage.hidden = false;
});
