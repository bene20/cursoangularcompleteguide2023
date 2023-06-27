#!/bin/bash

# Atualizando as versões do nodejs e do npm
sudo apt update
sudo apt upgrade nodejs
sudo apt install npm

# Alterando para a versão específica 20.3.1 do node (o curso usou a versão 10.0.0)
nvm install v20.3.1

# Atualizando a versão do npm para 9.7.2
npm install -g npm@9.7.2

# Instalando o angular-cli (o curso usou a versão 6.0.0)
npm install -g @angular/cli@latest
