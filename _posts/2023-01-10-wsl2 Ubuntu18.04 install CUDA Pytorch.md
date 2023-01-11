## Init Ubuntu and change deb&pip source
```sh
wget https://github.com/ebxeax/ebxeax.github.io/blob/main/toolbox/initUbuntu/initUbuntu.sh
bash ./initUbuntu.sh
```

## CUDA11.6
```sh
wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin
sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.6.2/local_installers/cuda-repo-wsl-ubuntu-11-6-local_11.6.2-1_amd64.deb
sudo dpkg -i cuda-repo-wsl-ubuntu-11-6-local_11.6.2-1_amd64.deb
sudo apt-key add /var/cuda-repo-wsl-ubuntu-11-6-local/7fa2af80.pub
sudo apt-get update
sudo apt-get -y install cuda
```
## Load library path
```sh
gedit ~/.bashrc
export PATH=/usr/local/cuda/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PAT
source ~/.bashrc
```

## Test nvidia-smi
```sh
nvidia-smi
```

## Test nvcc -V

```sh
nvcc -V
```

## Pytorch


```sh 
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113
```
### get file when network worse
```sh
wget https://download.pytorch.org/whl/cu113/torch-1.10.2%2Bcu113-cp36-cp36m-linux_x86_64.whl
wget https://download.pytorch.org/whl/cu113/torchvision-0.11.3%2Bcu113-cp36-cp36m-linux_x86_64.whl
wget 
pip3 install ./torch-1.10.2+cu113-cp36-cp36m-linux_x86_64.whl
pip3 install ./torchvision-0.11.3+cu113-cp36-cp36m-linux_x86_64.whl
```