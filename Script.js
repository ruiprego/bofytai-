document.addEventListener("DOMContentLoaded", () => {
  const inputs = [
    {
      input: document.getElementById("goalInput"),
      button: document.getElementById("goalButton"),
      result: document.getElementById("goalResult")
    },
    {
      input: document.getElementById("goalInputBottom"),
      button: document.getElementById("goalButtonBottom"),
      result: document.getElementById("goalResult")
    }
  ];

  function startGoal(input, result) {
    if (!input) return;

    const goal = input.value.trim();

    if (!goal) {
      input.focus();
      return;
    }

    if (result) {
      result.innerHTML = `
        <div class="result-card">
          <p class="result-label">YOUR GOAL</p>
          <h2>${escapeHTML(goal)}</h2>
          <p>
            BOFYT AI is understanding your goal
            and preparing your path forward.
          </p>
        </div>
      `;

      result.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }

  inputs.forEach(({ input, button, result }) => {
    if (!input || !button) return;

    button.addEventListener("click", () => {
      startGoal(input, result);
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        startGoal(input, result);
      }
    });
  });

  function escapeHTML(value) {
    const element = document.createElement("div");
    element.textContent = value;
    return element.innerHTML;
  }

  /* Smooth reveal */

  const elements = document.querySelectorAll(
    ".feature, .card, .plan-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
