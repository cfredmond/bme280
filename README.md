# lib-bme280

BME280 enviornment sensor library

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