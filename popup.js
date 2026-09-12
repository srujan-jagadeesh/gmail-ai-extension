document.addEventListener("DOMContentLoaded", () => {
  const configBox = document.getElementById("configBox");
  const apiKeyInput = document.getElementById("apiKey");
  const saveBtn = document.getElementById("saveBtn");
  const getApiKeyBtn = document.getElementById("getApiKeyBtn");
  const status = document.getElementById("status");
  const changeKeyBtn = document.getElementById("changeKeyBtn");

  const payBtn = document.getElementById("payBtn");
  const qrBox = document.getElementById("qrBox");
  const qrCodeImg = document.getElementById("qrCodeImg");

  // Initial Key Check
  chrome.storage.local.get(["geminiApiKey"], (data) => {
    if (data.geminiApiKey) {
      configBox.style.display = "none";
      changeKeyBtn.style.display = "block";
      apiKeyInput.value = data.geminiApiKey;
    } else {
      configBox.style.display = "block";
      changeKeyBtn.style.display = "none";
    }
  });

  // Open AI Studio to Get API Key
  getApiKeyBtn.addEventListener("click", () => {
    chrome.tabs.create({ url: "https://aistudio.google.com/app/apikey" });
  });

  // Save/Update Key Handler
  saveBtn.addEventListener("click", () => {
    const key = apiKeyInput.value.trim();
    if (!key) {
      status.textContent = "Enter a valid key";
      status.style.color = "#f87171";
      return;
    }

    chrome.storage.local.set({ geminiApiKey: key }, () => {
      status.textContent = "Saved!";
      status.style.color = "#4ade80";

      setTimeout(() => {
        status.textContent = "";
        configBox.style.display = "none";
        changeKeyBtn.style.display = "block";
      }, 500);
    });
  });

  // Reveal Key Box on "Change API Key"
  changeKeyBtn.addEventListener("click", () => {
    configBox.style.display = "block";
    changeKeyBtn.style.display = "none";
    apiKeyInput.focus();
  });

  // Flexible UPI Payment Handler (No hardcoded amount)
  const UPI_ID = "srujansrujan128-1@oksbi";
  const NAME = "Srujan";
  const NOTE = "Buy me a coffee";

  const upiUrl = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(NAME)}&cu=INR&tn=${encodeURIComponent(NOTE)}`;
  const qrCodeApi = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;

  payBtn.addEventListener("click", () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = upiUrl;
    } else {
      qrCodeImg.src = qrCodeApi;
      qrBox.style.display = "block";
    }
  });
});