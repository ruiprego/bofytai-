/* =========================
   MOBILE MENU
   ========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");

if (menuButton) {
  menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("open");

    menuButton.setAttribute(
      "aria-expanded",
      "true"
    );

  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  });
}


/* Close mobile menu when clicking a link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


/* =========================
   GOAL EXPERIENCE
   ========================= */

const goalInput = document.getElementById("goalInput");
const goalButton = document.getElementById("goalButton");
const goalResult = document.getElementById("goalResult");


function startGoal() {

  const goal = goalInput.value.trim();

  if (!goal) {

    goalInput.focus();

    goalInput.placeholder =
      "Tell BOFYT AI what you want to achieve...";

    return;
  }


  goalResult.innerHTML = `

    <div class="goal-result-card">

      <h3>
        Your goal
      </h3>

      <p>
        “${escapeHtml(goal)}”
      </p>

      <p style="margin-top:15px;">
        BOFYT AI is ready to turn this into
        a clear path forward.
      </p>

    </div>

  `;

  goalResult.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}


/* Prevent HTML injection */

function escapeHtml(text) {

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


goalButton.addEventListener(
  "click",
  startGoal
);


goalInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {
      startGoal();
    }

  }
);
