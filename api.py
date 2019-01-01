from flask import Flask
from flask import jsonify

import bme280

app = Flask(__name__)

@app.route("/")
def hello():
	temperature,pressure,humidity = bme280.readBME280All()
	d = {'t':temperature,'p':pressure,'h':humidity}
	jsonify(d)
    return jsonify(d)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)
