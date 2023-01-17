# lib-bme280

The BME280 Python library offers a user-friendly and streamlined approach for retrieving data from the BME280 environment sensor. It enables precise monitoring of temperature, humidity, and air pressure with minimal setup and configuration, making it an ideal tool for environmental monitoring and data collection.

## Install
Setup a virtual enviorment (optional)

```
python -m venv venv
source venv/bin/activate
```

Install the library

```
pip install lib-bme280
```

## Use

Create a script with the following code

```
import lib-bme280
from lib-bme280 import bme280

print(bme280.readBME280ID())
print(bme280.readBME280All())
```

Run the script

```
python myscript.py
```