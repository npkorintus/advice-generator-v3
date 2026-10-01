async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    const { advice, id } = data.slip;

    document.getElementById("adviceText").textContent = `“${advice}”`;
    document.getElementById("adviceId").textContent = `Advice #${id}`;
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
}

const adviceButton = document.getElementById("adviceButton");
adviceButton.addEventListener("click", async () => {
  try {
    fetchAdvice();
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
});

fetchAdvice();
