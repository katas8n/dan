const btn = document.querySelector(".form__btn");

const form = document.querySelector(".form");

const formValues = {
  email: "",
  password: "",
};

const fields = [...form.children].filter(
  (field) => field.name === "email" || field.name === "password"
);

btn.addEventListener("click", (e) => {
  e.preventDefault();

  fields.forEach((field) => (formValues[field.name] = field.value));

  const emailLength = formValues.email.length;

  if (emailLength > 3) {
    for (const key in formValues) {
      const value = formValues[key];

      const div = document.createElement("div");
      div.className = "form__data";
      div.innerHTML = `
           <span class="form__email">${key} : </span>
           <span class="form__password">${value}</span>
        `;

      document.querySelector(".form").append(div);
    }
  }
});
