from setuptools import find_packages, setup

setup(
    name='cfredmond_bme280',
    packages=find_packages(include=['cfredmond_bme280']),
    version='0.2.0',
    description='BME280 enviornment sensor library',
    author='Charles Redmond',
    license='MIT',
    install_requires=['smbus2'],
)   