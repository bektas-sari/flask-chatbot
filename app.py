from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = Flask(__name__)
CORS(app)

# Using English model
MODEL_NAME = "microsoft/DialoGPT-medium"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForCausalLM.from_pretrained(MODEL_NAME)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_input = data.get("message", "")

    inputs = tokenizer.encode(user_input + tokenizer.eos_token, return_tensors="pt")
    response_ids = model.generate(inputs, max_length=1000, pad_token_id=tokenizer.eos_token_id)

    bot_response = tokenizer.decode(response_ids[:, inputs.shape[-1]:][0], skip_special_tokens=True)

    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)
