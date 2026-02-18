const BASE_URL = `https://api.adviceslip.com/advice`;

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded and parsed");
  getAdvice();
});

const slipId = document.querySelector('div.id');
const advice = document.querySelector('div.advice');
const button = document.querySelector('button.getAdvice');
button?.addEventListener('click', getAdvice);

async function getAdvice() {
  console.log("Fetching advice...");
  // Show loading state and hide advice card
  document.querySelector('.loading').style.display = 'block';
  document.querySelector('.advice-card').style.display = 'none';

  try {
    const response = await fetch(BASE_URL, {
      cache: "no-cache" // prevents cached responses
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.slip.advice);

    slipId.textContent = `Advice #${data.slip.id}`;
    advice.textContent = `${data.slip.advice}`;

    // Hide loading state and show advice card
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.advice-card').style.display = 'block';
  } catch (error) {
    console.error("Failed to fetch advice:", error.message);
  }
}

// getAdvice();

// button?.addEventListener('click', getAdvice);
