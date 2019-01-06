import bme280

temperature,pressure,humidity = bme280.readBME280All()
# post data to db api