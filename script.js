/* =========================
   MOBILE MENU
   ========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    menuButton.setAttribute("aria-expanded", "true");
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
  });
}


/* Close mobile menu when a link is clicked */

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});


/* =========================
   GOAL EXPERIENCE
   ========================= */

function processGoal(inputId, resultId) {

  const input = document.getElementById(inputId);
  const result = document.getElementById(resultId);

  if (!input || !result) return;

  const goal = input.value.trim();

  if (!goal) {

    input.focus();

    input.style.boxShadow =
      "0 0 20px rgba(255,80,80,0.45)";

    setTimeout(() => {
      input.style.boxShadow = "none";
    }, 700);

    return;
  }


  result.innerHTML = `
    <div class="goal-result-card">

      <h3>
        Let's work towards it.
      </h3>

      <p>
        Your goal:
        <strong>${escapeHtml(goal)}</strong>
      </p>

      <p style="margin-top:12px;">
        BOFYT AI will turn this into a clear,
        practical path forward.
      </p>

    </div>
  `;

  result.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}


/* =========================
   SECURITY
   ========================= */

function escapeHtml(text) {

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


/* =========================
   TOP GOAL BOX
   ========================= */

const goalButton = document.getElementById("goalButton");

if (goalButton) {

  goalButton.addEventListener("click", () => {

    processGoal(
      "goalInput",
      "goalResult"
    );

  });

}


/* Enter key */

const goalInput = document.getElementById("goalInput");

if (goalInput) {

  goalInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

      processGoal(
        "goalInput",
        "goalResult"
      );

    }

  });

}


/* =========================
   BOTTOM GOAL BOX
   ========================= */

const goalButtonBottom =
  document.getElementById("goalButtonBottom");

if (goalButtonBottom) {

  goalButtonBottom.addEventListener("click", () => {

    const input =
      document.getElementById("goalInputBottom");

    if (!input) return;

    const value = input.value.trim();

    if (!value) {
      input.focus();
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {

      const mainInput =
        document.getElementById("goalInput");

      if (mainInput) {

        mainInput.value = value;

        processGoal(
          "goalInput",
          "goalResult"
        );

      }

    }, 500);

  });

}
