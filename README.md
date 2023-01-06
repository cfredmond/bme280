pip install cfredmond-bme280

import cfredmond_bme280
from cfredmond_bme280 import bme280

print(bme280.readBME280ID())
print(bme280.readBME280All())