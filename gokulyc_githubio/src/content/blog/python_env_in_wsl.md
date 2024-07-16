---
title: 'Setup python environment in WSL'
description: 'Install Homebrew, Pyenv, Pipenv in WSL (Windows) Ubuntu 20.04'
pubDate: 'Aug 13 2021'
heroImage: '/assets/hitesh-choudhary-D9Zow2REm8U-unsplash.jpg'
---

# How to install Homebrew, Pyenv, Pipenv in WSL (Windows) Ubuntu 20.04


### Why homebrew? :

- Homebrew installs the linux apps you need with the single command. 
[Available applications](https://formulae.brew.sh/formula/)



### Homebrew Installation : 

- Follow the steps mentioned in the below script

```console
$/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```



#### output and follow next steps : 

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xsgevwbxfvvrj6wthzr8.png)

  

### install homebrew dependencies for Ubuntu (If needed) :

```console
$sudo apt-get install build-essential procps curl file git
```


### Test installation by running below command:

```console
$brew install hello
```



***

## Pyenv installation

### Why pyenv ? :

- pyenv lets you to switch between python versions in ubuntu.

### Install python build dependencies for ubuntu :

```console
$sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev

```

then run

```console
$curl https://pyenv.run | bash

```

Below lines should be available in .bashrc

```text
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

Restart Shell (If needed)  : 

```console
$exec $SHELL
```

or 

Run below in windows command prompt :

```console

wsl --shutdown 
& login into ubuntu again

```


***


## PIPENV Installation   


### Why pipenv? :  


- pipenv is used to create virtual environment, similar to venv,virtualenv,conda,etc. 

### Install pipenv using homebrew :

```console
$brew install pipenv

```

output:
![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gfqml1pn32fn5e2ycw4s.png)
 

***




References :

1. https://brew.sh/
2. https://docs.brew.sh/Homebrew-on-Linux
3. https://github.com/pyenv/pyenv/wiki#suggested-build-environment
4. https://github.com/pyenv/pyenv-installer
5. https://pipenv.pypa.io/en/latest/
6. Cover Photo by <a href="https://unsplash.com/@hiteshchoudhary?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hitesh Choudhary</a> on <a href="https://unsplash.com/s/photos/python-development?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


