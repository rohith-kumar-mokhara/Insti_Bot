import os
from embedchain import App
from flask import Flask, request, jsonify
from dotenv import load_dotenv

app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()

# Print the Hugging Face access token to verify it's loaded correctly
print("token is ", os.getenv("HUGGINGFACE_ACCESS_TOKEN"))

# Set the Hugging Face access token in the environment variables
os.environ["HUGGINGFACE_ACCESS_TOKEN"] = os.getenv("HUGGINGFACE_ACCESS_TOKEN")

# Initialize your chatbot
def initialise_chatbot():
    config = {
        'llm': {
            'provider': 'huggingface',
            'config': {
                'model': 'mistralai/Mistral-7B-Instruct-v0.2',
                'top_p': 0.5
            }
        },
        'embedder': {
            'provider': 'huggingface',
            'config': {
                'model': 'sentence-transformers/all-mpnet-base-v2'
            }
        }
    }

    # Create an instance of the App with the specified configuration
    chatbot = App.from_config(config=config)
    print("Adding PDF content...")
    chatbot.add("./Clubs_Guidebook.pdf", data_type="pdf_file")
    print("PDF content added.")
    chatbot.add("https://en.wikipedia.org/wiki/IIT_Madras", data_type='web_page')
    chatbot.add("https://www.askiitm.com/", data_type="web_page")
    chatbot.add("https://www.askiitm.com/insightful-reads/what-are-the-new-initiatives-at-iit-madras-in-2024", data_type="web_page")
    chatbot.add("https://www.askiitm.com/insightful-reads/what-is-electrical-engineering", data_type="web_page")

    return chatbot

# Initialize the chatbot
chatbot = initialise_chatbot()

# Route to handle incoming POST requests to '/query'
@app.route('/query', methods=['POST'])
def query():
    data = request.json
    message = data.get('message')
    print("Received message: ", message)

    if not message:
        return jsonify({'error': 'No message provided'}), 400

    # Decode the message if it is in buffer form
    if isinstance(message, dict) and 'type' in message and message['type'] == 'Buffer':
        message = bytes(message['data']).decode('utf-8')
    
    print("Decoded message: ", message)

    try:
        # Query the chatbot with the message
        response = chatbot.query(message)
        
        # Extract the part of the response after "Answer:"
        prefix = "Answer:"
        index = response.find(prefix)
        if index != -1:
            result = response[index + len(prefix):].strip()
        else:
            result = "Response format unrecognized."
        
        return jsonify({'response': result})
    
    except Exception as e:
        print(f"Error querying the chatbot: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
