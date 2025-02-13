const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Debugging - ვნახოთ, ელემენტები არსებობს თუ არა
console.log("questionContainer:", questionContainer);
console.log("resultContainer:", resultContainer);
console.log("gifResult:", gifResult);
console.log("heartLoader:", heartLoader);
console.log("yesBtn:", yesBtn);
console.log("noBtn:", noBtn);

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
      heartLoader.style.display = "none";
      resultContainer.style.display = "inherit";

      // ვამოწმებთ, შეუძლია თუ არა ვიდეოს დაკვრა
      if (gifResult && gifResult.paused) {
          gifResult.muted = true; // თუ საჭიროა
          gifResult.play().catch(error => console.error("ვიდეოს დაკვრა ვერ მოხერხდა:", error));
      }
  }, 3000);
});

console.log("Yes Button Clicked"); // შემოწმებისთვის
