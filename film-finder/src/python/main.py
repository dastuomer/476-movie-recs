from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Movies API route
@app.route("/movies2")
def movies():
    return {"movies2": ["IT", "Works","YIPEE"]}


if __name__ == "__main__":
    app.run(debug=True)