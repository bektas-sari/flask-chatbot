# 💬 Flask English Chatbot

This project is a simple Flask-based English chatbot application powered by the [microsoft/DialoGPT-medium](https://huggingface.co/microsoft/DialoGPT-medium) model. 
Users can type their message through a modern web interface and chat with the bot in real time.

> ⚠️ **Note:** This chatbot only works in **English**. Messages in other languages may not receive valid responses.

---

## 🚀 Features

- Flask API-powered backend
- DialoGPT model-based conversational AI
- Modern web interface with HTML, CSS, and JavaScript
- Asynchronous chat without page reload (AJAX)
- Fully local (downloads model from HuggingFace only on first run)

---

## 📁 Project Structure

```bash
flask-chatbot/
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/bektas-sari/flask-chatbot.git
cd flask-chatbot
```

### 2. (Optional) Create a virtual environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` is missing:

```bash
pip install flask flask-cors torch transformers
```

### 4. Run the application

```bash
python app.py
```

Then open in your browser:

```
http://127.0.0.1:5000/
```

---

## 🧠 Technologies Used

- [Flask](https://flask.palletsprojects.com/)
- [PyTorch](https://pytorch.org/)
- [Hugging Face Transformers](https://huggingface.co/transformers/)
- Vanilla HTML, CSS, and JavaScript

---

## 👤 Developer

**Bektas Sari**  
Email: bektas.sari@gmail.com  <br>
GitHub: https://github.com/bektas-sari <br>
LinkedIn: www.linkedin.com/in/bektas-sari <br>
Researchgate: https://www.researchgate.net/profile/Bektas-Sari-3 <br>
Academia: https://independent.academia.edu/bektassari <br>

This project is a good starting point for basic chatbot applications. You can enhance it further by adding:

- Chat history
- Multi-language support
- User sessions
- Database integration



