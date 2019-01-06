import bme280
import requests

temperature,pressure,humidity = bme280.readBME280All()
# post data to db api

url = 'http://68.183.121.223:8000/log'

data = {"device_id":1, "temperature": temperature, "pressure": pressure, "humidity": humidity}
params = {}

response = requests.post(url, params=params, json=data)
print response.status_code