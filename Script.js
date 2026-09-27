/* =========================================
   BOFYT AI — Core Interaction
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const goalInput = document.querySelector("#goalInput");
  const goalButton = document.querySelector("#goalButton");
  const result = document.querySelector("#goalResult");

  if (!goalInput || !goalButton) {
    console.log("BOFYT AI loaded.");
    return;
  }

  function processGoal() {
    const goal = goalInput.value.trim();

    if (!goal) {
      goalInput.focus();
      return;
    }

    if (result) {
      result.innerHTML = `
        <div class="card">
          <span>YOUR GOAL</span>
          <h3>${escapeHTML(goal)}</h3>
          <p>
            BOFYT AI is understanding your goal and preparing
            the next steps.
          </p>
        </div>
      `;

      result.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }

  goalButton.addEventListener("click", processGoal);

  goalInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      processGoal();
    }
  });

  function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
});


/* =========================================
   BOFYT AI — Smooth reveal
   ========================================= */

const revealElements = document.querySelectorAll(
  ".card, .feature-card, .plan-card, section"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
