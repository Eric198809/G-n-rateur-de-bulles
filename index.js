const bubble = document.createElement("span");
document.body.appendChild(bubble);
bubble.classList.add("bubble");

const size = Math.random() * 300 + "px";
bubble.style.height = size;
bubble.style.width = size;
