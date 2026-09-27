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
    if (!input || !result) return;

    const goal = input.value.trim();

    if (!goal) {
      input.focus();
      return;
    }

    result.innerHTML = `
      <div class="result-card">

        <p class="result-label">YOUR GOAL</p>

        <h2>${escapeHTML(goal)}</h2>

        <p class="result-message">
          Got it.
        </p>

        <p class="result-description">
          BOFYT AI is going to understand what you're
          trying to achieve before building your path.
        </p>

        <button class="continue-button" id="continueButton">
          Continue →
        </button>

      </div>
    `;

    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    const continueButton =
      document.getElementById("continueButton");

    if (continueButton) {
      continueButton.addEventListener("click", () => {
        continueGoal(goal, result);
      });
    }
  }


  function continueGoal(goal, result) {

    result.innerHTML = `
      <div class="result-card">

        <p class="result-label">LET'S BUILD YOUR PATH</p>

        <h2>
          Let's understand<br>
          what success means to you.
        </h2>

        <p class="result-description">
          A few simple questions will help BOFYT AI
          create a path that actually fits your goal.
        </p>

        <div class="question-box">

          <label>
            What would achieving this goal
            change for you?
          </label>

          <textarea
            id="goalMeaning"
            placeholder="Tell BOFYT AI what this would mean for you..."
            rows="4"
          ></textarea>

          <button
            class="continue-button"
            id="meaningButton"
          >
            Continue →
          </button>

        </div>

      </div>
    `;

    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    const meaningButton =
      document.getElementById("meaningButton");

    if (meaningButton) {
      meaningButton.addEventListener("click", () => {

        const meaning =
          document.getElementById("goalMeaning").value.trim();

        if (!meaning) {
          document.getElementById("goalMeaning").focus();
          return;
        }

        buildPath(goal, meaning, result);
      });
    }
  }


  function buildPath(goal, meaning, result) {

    result.innerHTML = `
      <div class="result-card">

        <p class="result-label">BOFYT AI</p>

        <h2>
          Your goal is becoming<br>
          a clear direction.
        </h2>

        <p class="result-description">
          We understand what you want to achieve
          and why it matters to you.
        </p>

        <div class="path-preview">

          <div>
            <span>01</span>
            <strong>Understand</strong>
            <p>Clarify your objective.</p>
          </div>

          <div>
            <span>02</span>
            <strong>Build</strong>
            <p>Create your personalised path.</p>
          </div>

          <div>
            <span>03</span>
            <strong>Achieve</strong>
            <p>Track progress and adapt.</p>
          </div>

        </div>

        <button
          class="continue-button"
          id="buildButton"
        >
          Build my path →
        </button>

      </div>
    `;

    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    const buildButton =
      document.getElementById("buildButton");

    if (buildButton) {
      buildButton.addEventListener("click", () => {

        result.innerHTML = `
          <div class="result-card">

            <p class="result-label">BOFYT AI</p>

            <h2>
              Your path is ready<br>
              to be built.
            </h2>

            <p class="result-description">
              This is where the full BOFYT AI experience
              will generate your personalised plan.
            </p>

            <div class="goal-summary">

              <p>
                <strong>Goal</strong><br>
                ${escapeHTML(goal)}
              </p>

              <p>
                <strong>Why it matters</strong><br>
                ${escapeHTML(meaning)}
              </p>

            </div>

          </div>
        `;

        result.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      });
    }
  }


  function escapeHTML(value) {
    const element = document.createElement("div");
    element.textContent = value;
    return element.innerHTML;
  }


  /* Goal buttons */

  inputs.forEach(({ input, button, result }) => {

    if (!input || !button || !result) return;

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


  /* Smooth reveal */

  const elements = document.querySelectorAll(
    ".feature, .card, .plan-card"
  );

  if ("IntersectionObserver" in window) {

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

  }

});
