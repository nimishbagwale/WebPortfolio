from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Mail config
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv("EMAIL_USER")
app.config['MAIL_PASSWORD'] = os.getenv("EMAIL_PASS")
app.config['MAIL_DEFAULT_SENDER'] = os.getenv("EMAIL_USER")

mail = Mail(app)

@app.route('/send_mail', methods=['POST'])
def send_mail():
    data = request.json
    name = data['name']
    sender = data['email']
    subject = data['subject']
    message = data['message']

    msg = Message(subject=f"[Portfolio Contact] {subject}",
                  sender=sender,
                  recipients=[os.getenv("EMAIL_USER")])
    msg.body = f"From: {name} <{sender}>\n\n{message}"

    try:
        mail.send(msg)
        return jsonify({'status': 'success'}), 200
    except Exception as e:
        return jsonify({'status': 'fail', 'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
