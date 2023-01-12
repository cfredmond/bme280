from setuptools import find_packages, setup

setup(
    name='lib_bme280',
    packages=find_packages(include=['lib_bme280']),
    version='0.1.0',
    description='BME280 enviornment sensor library',
    author='Charles Redmond',
    license='MIT',
    install_requires=['smbus2'],
)   