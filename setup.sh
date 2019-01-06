sudo apt-get update
sudo apt-get upgrade -y

sudo raspi-config
sudo apt-get install -y python-smbus i2c-tools

# reboot

lsmod | grep i2c_