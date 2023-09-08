document.querySelector(".today").textContent = new Date().toLocaleDateString("en-US", {weekday: "long"});

document.querySelector('.time').textContent = Date.now().toString();