document.addEventListener("DOMContentLoaded", () => {

  const inputs = [
    {
      input: document.getElementById("goalInput"),
      button: document.getElementById("goalButton")
    },
    {
      input: document.getElementById("goalInputBottom"),
      button: document.getElementById("goalButtonBottom")
    }
  ];


  function escapeHTML(value) {
    const element = document.createElement("div");
    element.textContent = value;
    return element.innerHTML;
  }


  function showGoal(input) {

    if (!input) return;

    const goal = input.value.trim();

    if (!goal) {
      input.focus();
      return;
    }


    const result = document.getElementById("goalResult");

    if (!result) return;


    result.innerHTML = `
      <div class="result-card">

        <p class="result-label">
          YOUR GOAL
        </p>

        <h2>
          ${escapeHTML(goal)}
        </h2>

        <p>
          BOFYT AI is going to understand what
          you're trying to achieve before building
          your path.
        </p>

      </div>
    `;


    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }


  inputs.forEach(({ input, button }) => {

    if (!input || !button) return;


    button.addEventListener("click", () => {
      showGoal(input);
    });


    input.addEventListener("keydown", (event) => {

      if (event.key === "Enter") {

        event.preventDefault();

        showGoal(input);

      }

    });

  });


  /* MOBILE MENU */

  const menu = document.querySelector(".mobile-menu");
  const nav = document.querySelector("nav");

  if (menu && nav) {

    menu.addEventListener("click", () => {

      nav.classList.toggle("open");

    });

  }

});
