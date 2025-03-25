document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("chat-form");
    const input = document.getElementById("user-input");
    const responseBox = document.getElementById("chat-response");
    const botText = document.getElementById("bot-text");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const message = input.value.trim();
        if (!message) return;

        const res = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await res.json();
        botText.textContent = data.response;
        responseBox.style.display = "block";
        input.value = "";
    });
});
