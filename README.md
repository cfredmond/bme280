python3 -m venv venv
source venv/bin/activate
pip install lib-bme280

import lib-bme280
from lib-bme280 import bme280

print(bme280.readBME280ID())
print(bme280.readBME280All())