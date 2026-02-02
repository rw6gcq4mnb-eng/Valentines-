const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gif = document.getElementById("danceGif");
const music = document.getElementById("loveMusic");

let scale = 1;

// Make NO button dodge the mouse
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const distance = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );

  if (distance < 120) {
    const x = Math.random() * 220;
    const y = Math.random() * 80;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Shrink each escape 😈
    scale -= 0.07;
    scale = Math.max(scale, 0.35);
    noBtn.style.transform = `scale(${scale})`;
  }
});

// YES button celebration
yesBtn.addEventListener("click", () => {
  document.querySelector("h1").style.display = "none";
  document.querySelector(".buttons").style.display = "none";
  gif.style.display = "block";

  music.play();

  confetti({
    particleCount: 200,
    spread: 90,
    colors: ["#b71c1c", "#fbc02d", "#6d4c41"]
  });
});