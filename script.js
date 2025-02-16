async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<div class='user-message'><strong>You:</strong> ${userInput}</div>`;

    // Send request to Flask API
    let response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    });

    let data = await response.json();
    let botResponse = data.response;

    chatbox.innerHTML += `<div class='bot-message'><strong>Bot:</strong> ${botResponse}</div>`;

    document.getElementById("user-input").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}
