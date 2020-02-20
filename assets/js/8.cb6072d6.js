(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{227:function(e,t,n){e.exports=n.p+"assets/img/drivers.4fb4b621.png"},228:function(e,t,n){e.exports=n.p+"assets/img/nvidia.ad13a2b1.png"},229:function(e,t,n){e.exports=n.p+"assets/img/spinningup.973fa9bd.png"},252:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("Hero"),e._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v("Machine learning pipelines can be complex, requiring several libraries and tools to get going. Environment and dependency management can be a change and hinder reproducibility. Recent developments in several machine learning tools have made it possible to setup a clean development GPU enabled pipeline with Docker, Jupyter and VS Code.")]),e._v(" "),o("h2",{attrs:{id:"motivation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),o("p",[e._v("Newcomers into machine learning can be overwhelmed by the setup required to even get started. Between drivers, libraries and tools, several pieces of software have to work together to get a machine learning environment setup. Cloud based machine learning providers such as Paperspace Gradient and FloydHub do solve some of these issues but create their own. In addition to being significantly more expensive for the same amount compute power, using cloud based providers add an extra layer of complexity required in start and stopping machines, reinstalling libraries, rerunning preprocessing scripts and reloading state. Additionally, while cloud based providers such as Paperspace and FloyHub provide Jupyter notebooks, their application development support (that is, turning your experiments into useful code and tools) are lacking compared to usability of local development. Most cloud providers run their stack via Docker, which can be setup locally and additionally tied with some extra quality of life tools to streamline not only the research process but also the development process.")]),e._v(" "),o("h2",{attrs:{id:"the-stack"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-stack"}},[e._v("#")]),e._v(" The Stack")]),e._v(" "),o("p",[e._v("This development environment will be centered around three key tools: Docker, Jupyter and VS Code.")]),e._v(" "),o("ol",[o("li",[e._v("Ubuntu + NVIDIA driver + Docker + nvidia-container-toolkit")]),e._v(" "),o("li",[e._v("Jupyter + pyTorch/Tensorflow + Tensorboard")]),e._v(" "),o("li",[e._v("VS Code + Remote Development extension")])]),e._v(" "),o("p",[e._v("Docker recently added support for GPU passthrough such that only the host requires the NVIDIA driver - all other NVIDIA related dependencies such as cuDNN, etc. are installed in the container, allowing for a very lightweight setup where the host has to do as little as possible. Jupyter is the standard tool for machine learning. In addition, this guide will setup Tensorflow and PyTorch 1.2+, along with Tensorboard, which PyTorch "),o("a",{attrs:{href:"https://pytorch.org/docs/stable/tensorboard.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("added official support for"),o("OutboundLink")],1),e._v(". VS Code with Container Development will allow us to write conventional code in a GPU enabled container. This can be used for things such as OpenAI's Spinning Up course, which we'll setup below.")]),e._v(" "),o("p",[e._v("Finally, we'll merge all of these steps together into a single workflow, allowing one locally running Docker container to serve us PyTorch, Tensorboard and GPU which we can connect to using VS Code.")]),e._v(" "),o("h2",{attrs:{id:"step-0-hardware-selection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-0-hardware-selection"}},[e._v("#")]),e._v(" Step 0 - Hardware Selection")]),e._v(" "),o("p",[e._v("The computer you use will need an NVIDIA GPU and an Intel CPU is recommended. For a desktop, get a computer that has onboard video and plug in your monitor to the onboard video only. We want the GPU for matrix calculations only so we'll avoid putting anything else on it. This isn't possible on a laptop so there may be additional steps required to get video output (see below).")]),e._v(" "),o("h2",{attrs:{id:"step-1-os-installation-and-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-1-os-installation-and-setup"}},[e._v("#")]),e._v(" Step 1 - OS Installation and Setup")]),e._v(" "),o("h3",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),o("p",[e._v("Linux is required - Windows does have a variety of options for Docker support but none of them can forward the GPU to the container. This guide will use Ubuntu but this should be portable to other distros as well. Installing Ubuntu is generally straight forward, just follow the prompts.")]),e._v(" "),o("p",[o("strong",[e._v("Laptops")]),e._v(': On laptops, you may experience crashes, blank screens or unresponsiveness during the installation process. This is due to driver issues (Ubuntu uses the open source nouveau driver which is lacking compared to NVIDIA\'s closed source drivers). The solution is to first test the installer by booting into the live disk mode and installing from there. If you have issues, boot the installer in "safe mode" and then install. After the installation, for the first boot, boot into the OS in safe mode once again and follow the instructions below to install the NVIDIA drivers.')]),e._v(" "),o("h3",{attrs:{id:"nvidia-drivers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-drivers"}},[e._v("#")]),e._v(" NVIDIA Drivers")]),e._v(" "),o("p",[e._v("After installation, the next step is to install the NVIDIA drivers. Once installed, your system will become stable and functional and will no longer require safe mode. Open up "),o("code",[e._v("Software & Updates")]),e._v(", then click over to the "),o("code",[e._v("Additional Drivers")]),e._v(" tab, select "),o("code",[e._v("Using NVIDIA driver metapackage from nvidia-driver-xxx (proprietary, tested)")]),e._v(" and hit apply. After the installation, reboot.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(227),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"switchable-graphics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#switchable-graphics"}},[e._v("#")]),e._v(" Switchable Graphics")]),e._v(" "),o("p",[e._v("On a laptop, you will want to switch to using the onboard GPU only to avoid draining your battery. Open up the NVIDIA control panel and select the "),o("code",[e._v("Power Saving Mode")]),e._v(". The NVIDIA GPU will still work fine but will only be powered up when being used.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(228),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"step-2-install-docker-and-nvidia-container-toolkit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-2-install-docker-and-nvidia-container-toolkit"}},[e._v("#")]),e._v(" Step 2 - Install Docker and nvidia-container-toolkit")]),e._v(" "),o("p",[e._v("This step is straightforward - install Docker, then follow Docker next steps to add user to docker group, then install nvidia-container-toolkit following the instruction on the pages below.")]),e._v(" "),o("ol",[o("li",[e._v("https://docs.docker.com/install/linux/docker-ce/ubuntu/")]),e._v(" "),o("li",[e._v("https://docs.docker.com/install/linux/linux-postinstall/")]),e._v(" "),o("li",[e._v("https://github.com/NVIDIA/nvidia-docker")])]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": if you are using Ubuntu 19.04, you'll need to modify the distribution variable of nvidia-docker script to say ubuntu18.04 as 19.04 binaries aren't available. 18.04 binaries appear to be forward compatible and I have not had any issues with them.")]),e._v(" "),o("h3",{attrs:{id:"install-verification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-verification"}},[e._v("#")]),e._v(" Install Verification")]),e._v(" "),o("p",[e._v("Now is a good time to quickly verify the installation. Here are some quick commands to verify that the containers are working correctly. If this all checks out, you are now setup use GPU in Docker containers.")]),e._v(" "),o("ul",[o("li",[e._v("Tensorflow: https://www.tensorflow.org/install/docker")]),e._v(" "),o("li",[e._v("PyTorch: https://hub.docker.com/r/pytorch/pytorch/")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('docker run -it --rm \\\n---gpus all --shm-size 16G \\\ntensorflow/tensorflow:latest-gpu \\\npython -c "import tensorflow as tf; print(tf.test.is_gpu_available())"\n')])])]),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('docker run -it --rm \\\n--gpus all --shm-size 16G \\\npytorch/pytorch \\\npython -c "import torch; print(torch.cuda.is_available())"\n')])])]),o("p",[o("strong",[e._v("Note")]),e._v(": the magic happens with "),o("code",[e._v("--gpus all")]),e._v(" which tells Docker to pass all GPUs to the container. Additionally, "),o("code",[e._v("--shm-size 16G")]),e._v(" is used to pass access to all RAM (16G on my host) to the container as AI workloads use a lot of RAM.")]),e._v(" "),o("h2",{attrs:{id:"step-4-setup-jupyter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-4-setup-jupyter"}},[e._v("#")]),e._v(" Step 4 - Setup Jupyter")]),e._v(" "),o("p",[e._v("Setting up Jupyter is as simple as running Jupyter in a container. You can use one of the many "),o("a",{attrs:{href:"https://jupyter-docker-stacks.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Jupyter provided images"),o("OutboundLink")],1),e._v(". Further below we will discuss building a custom Dockerfile which has the all the various dependencies that you may care about.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('docker run --rm \\\n-u 1000 \\\n-p 8888:8888 \\\n-e JUPYTER_ENABLE_LAB=yes \\\n-v "$PWD":/home/jovyan/work \\\n--gpus all \\ \n--shm-size 16G \\ \njupyter/datascience-notebook\n')])])]),o("h2",{attrs:{id:"step-5-setup-vs-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-5-setup-vs-code"}},[e._v("#")]),e._v(" Step 5 - Setup VS Code")]),e._v(" "),o("h3",{attrs:{id:"install-vs-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-vs-code"}},[e._v("#")]),e._v(" Install VS Code")]),e._v(" "),o("p",[e._v("Install Visual Studio Code using Snap for the cleanest and simplest install: "),o("code",[e._v("sudo snap install code --classic")])]),e._v(" "),o("h3",{attrs:{id:"install-vs-code-remote-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-vs-code-remote-extension"}},[e._v("#")]),e._v(" Install VS Code Remote Extension")]),e._v(" "),o("p",[e._v("Install the Remote Development Extension Pack in VS Code using "),o("code",[e._v("ext install ms-vscode-remote.vscode-remote-extensionpack")])]),e._v(" "),o("h3",{attrs:{id:"setup-vs-code-for-development-containers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-vs-code-for-development-containers"}},[e._v("#")]),e._v(" Setup VS Code for Development Containers")]),e._v(" "),o("p",[e._v("VS Code is now ready for working in containers. We'll setup an example container using the OpenAI Spinning Up code.")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("git clone https://github.com/openai/spinningup.git")])]),e._v(" "),o("li",[e._v("In VS Code, "),o("code",[e._v("File -> Open Folder > spinningup")])]),e._v(" "),o("li",[e._v("Open up "),o("code",[e._v("setup.py")]),e._v(" and modify it to use the GPU by changing line 29 from "),o("code",[e._v("tensorflow")]),e._v(" to "),o("code",[e._v("tensorflow-gpu")])]),e._v(" "),o("li",[e._v("Create a Dockerfile at the root (see below) (note this Dockerfile is for Tensorflow/Spinning up specifically)")]),e._v(" "),o("li",[e._v("On the bottom left, click the two arrows, then select "),o("code",[e._v("Add Development Container Configuration Files")]),e._v(", then select "),o("code",[e._v("From Dockerfile")])]),e._v(" "),o("li",[e._v("Modify "),o("code",[e._v(".devcontainer.json")]),e._v(" to use the GPU and forward X (see below)")]),e._v(" "),o("li",[e._v("Click the arrows once again and select "),o("code",[e._v("Reopen in Container")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("FROM tensorflow/tensorflow:latest-gpu \n\nENV DEBIAN_FRONTEND=noninteractive\nRUN apt-get update && apt-get install libopenmpi-dev python3-pip python-opengl python3-tk ssh sudo -y\n\nARG USERNAME=tf-docker\nARG USER_UID=1000\nARG USER_GID=$USER_UID\nRUN groupadd --gid $USER_GID $USERNAME \\\n    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \\\n    && echo $USERNAME ALL=\\(root\\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \\\n    && chmod 0440 /etc/sudoers.d/$USERNAME\n\nUSER $USERNAME\nENV HOME /home/$USERNAME\n")])])]),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{\n    "context": "..",\n    "dockerFile": "../Dockerfile",\n    "extensions": [],\n    "runArgs": \n    [\n        "-u", "1000:1000",\n        "--gpus", "all",\n        "--shm-size", "16G",\n        "-e", "DISPLAY=:0", //for graphical output\n        "-v", "/tmp/.X11-unix:/tmp/.X11-unix" //for graphical output\n    ],\n    "settings": \n    { \n        "terminal.integrated.shell.linux": "/bin/bash"\n    },\n    \n    "postCreateCommand": "pip3 install -e ."\n}\n')])])]),o("p",[e._v("You will now be in a Docker container with your code mounted inside with the correct user permissions. To test, open up the terminal and run the following commands from OpenAI.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('python3 -m spinup.run ppo --hid "[32,32]" --env LunarLander-v2 --exp_name installtest --gamma 0.999\npython3 -m spinup.run test_policy data/installtest/installtest_s0\npython3 -m spinup.run plot data/installtest/installtest_s0\n')])])]),o("p",[o("img",{attrs:{src:n(229),alt:""}})]),e._v(" "),o("h2",{attrs:{id:"step-6-bringing-it-all-together"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-6-bringing-it-all-together"}},[e._v("#")]),e._v(" Step 6 - Bringing It All Together")]),e._v(" "),o("p",[e._v('While it is appropriate to setup a separate dev container instance for every project, it is convenient to have a "master" instance for experimentation. The final is to setup a machine learning environment which merges all the above steps into one workflow.')]),e._v(" "),o("p",[e._v("Step one is to build the image you intend to use. In this case, we will setup a Dockerfile intended for machine learning and application development with FastAI and OpenCV, along with PyTorch and Tensorboard, as well as a handful of apt packages. On your host, run the build command against the Dockerfile as a named image: "),o("code",[e._v("docker build -t <my-image>")]),e._v(".")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('#currently using older base: https://hub.docker.com/r/pytorch/pytorch/\n#alternatively, build from cuda/conda base: https://github.com/pytorch/pytorch/blob/master/docker/pytorch/Dockerfile\nFROM pytorch/pytorch\n\n#sudo for vscode + jupyter, python-opengl for opencv\nRUN apt update && apt install sudo python-opengl -y \n\n#install latest, update\nRUN conda install conda\nRUN conda update --all\n\n#pytorch: https://pytorch.org/get-started/locally/\nRUN conda install pytorch torchvision cudatoolkit=10.0 -c pytorch\n\n#fastai: https://github.com/fastai/fastai/blob/master/README.md#installation\nRUN conda install -c fastai fastai\n\n#jupyter: https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html\n#fastai/extensions: https://docs.fast.ai/install.html\nRUN conda install -c conda-forge jupyterlab\nRUN conda install -c conda-forge jupyter_contrib_nbextensions\n\n#tensorboard\nRUN conda install -c conda-forge tensorboard\nRUN pip install future\nRUN pip install ipywidgets\n\n#opencv, do last conda install due to number of packages\nRUN conda install -c conda-forge opencv=4.1.1\n\n#pillow-simd: https://docs.fast.ai/performance.html#faster-image-processing\n#currently disabled due to version mismatch - Core version: 6.0.0.post0, Pillow version: 6.1.0\n#RUN conda uninstall -y --force pillow pil jpeg libtiff libjpeg-turbo\n#RUN pip uninstall -y pillow pil jpeg libtiff libjpeg-turbo\n#RUN conda install -yc conda-forge libjpeg-turbo\n#RUN CFLAGS="${CFLAGS} -mavx2" pip install --upgrade --no-cache-dir --force-reinstall --no-binary :all: --compile pillow-simd\n#RUN conda install -y jpeg libtiff\n\n#add non root user\n#https://code.visualstudio.com/docs/remote/containers-advanced#_adding-a-nonroot-user-to-your-dev-container\nARG USERNAME=fastai\nARG USER_UID=1000\nARG USER_GID=$USER_UID\nRUN groupadd --gid $USER_GID $USERNAME \\\n    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \\\n    && echo $USERNAME ALL=\\(root\\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \\\n    && chmod 0440 /etc/sudoers.d/$USERNAME\n\n#add user to video group for opencv webcam access\nRUN usermod -a -G video $USERNAME\n\n#switch to non root user\nUSER $USERNAME\nENV HOME /home/$USERNAME\n\n')])])]),o("p",[e._v("Next following the steps above, open VS Code at the root of your projects directory and add "),o("code",[e._v("devcontainer.json")]),e._v(" to the root of your projects directory with the relevant commands for your environment. In this case, we will setup webcam sharing (for OpenCV), X and display sharing for GUI applications (like OpenAI Spinning Up), Docker socket sharing for running Docker commands inside the dev container and finally sharing the GPU and RAM.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{\n\t"context": "..",\n\t"image": "fastai",\n\t"runArgs": \n\t[\n\t\t"-u", "1000:1000",\n\t\t"--device", "/dev/video0:/dev/video0",\n\t\t"-v", "/tmp/.X11-unix:/tmp/.X11-unix",\n\t\t"-v","/var/run/docker.sock:/var/run/docker.sock",\n\t\t"--group-add", "video",\n\t\t"-e", "DISPLAY=:0",\n\t\t"--gpus", "all",\n\t\t"--shm-size", "16G"\n\t],\n\t\n\t"settings": \n\t{ \n\t\t"terminal.integrated.shell.linux": "/bin/bash"\n\t},\n\t\n\t"extensions" : ["ms-azuretools.vscode-docker", "ms-python.python"],\n\t"appPort": ["8888:8888", "6006:6006"],\n\t"postCreateCommand": "/bin/bash -c \'jupyter lab --ip=0.0.0.0 --notebook-dir=/workspaces &>/dev/null &\'",\n\t"shutdownAction": "none"\n}\n\n')])])]),o("p",[e._v('Your environment is now setup. Open VS Code at the root of your project and you will be prompted to reopen the folder in a dev container. Doing so will build and launch the dev container and then launch Jupyter as well. The "shutdownAction": "none" setting will ensure that even if VS Code is closed, the container will continue running - if you reopen your projects folder in the container, it will simply reconnect to the existing container instead of rebuilding it. Note, on the first launch (or if the container relaunched after being forcibly shutdown), you will need to run jupyter notebook list in the VS Code terminal to get the authentication cookie of Jupyter. You can navigate to http://localhost:8888/ to login using the cookie outputted by the startup script. To startup Tensorboard, open up a console in Jupyter and run '),o("code",[e._v("tensorboard --logdir=<dir>")]),e._v(" and then navigate to http://localhost:6006 to view the output.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);