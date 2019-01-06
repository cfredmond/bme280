import bme280
from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route("/")
def index():
	temperature,pressure,humidity = bme280.readBME280All()
	data = {'t':temperature,'p':pressure,'h':humidity}
    return jsonify(data)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)
