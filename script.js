let passInput = document.querySelector(".pass-field input");
let eyeBtn = document.querySelector(".pass-field i");
let requirementsList = document.querySelectorAll(".requirement-list li");

const requirements = [
  { regex: /.{8,}/, index: 0 },
  { regex: /[0-9]/, index: 1 },
  { regex: /[a-z]/, index: 2 },
  { regex: /[^A-Za-z0-9]/, index: 3 },
  { regex: /[A-Z]/, index: 4 },
];

passInput.addEventListener("keyup", (e) => {
  requirements.forEach((item) => {
    let isValid = item.regex.test(e.target.value);
    let requirementsItem = requirementsList[item.index];

    if (isValid) {
      requirementsItem.firstElementChild.className = "fa-solid fa-check";
      requirementsItem.classList.add("valid");
    } else {
      requirementsItem.firstElementChild.className = "fa-solid fa-circle";
      requirementsItem.classList.remove("valid");
    }
  });
});

eyeBtn.addEventListener("click", () => {
  passInput.type = passInput.type === "password" ? "text" : "password";

  eyeBtn.className = `fa-solid fa-eye${
    passInput.type === "password" ? "" : "-slash"
  }`;
});
