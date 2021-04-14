# Find the Dockerfile for mcr.microsoft.com/azure-functions/dotnet:3.0-dotnet3-core-tools at this URL
# https://github.com/Azure/azure-functions-docker/blob/master/host/3.0/buster/amd64/dotnet/dotnet-core-tools.Dockerfile
FROM mcr.microsoft.com/azure-functions/dotnet:3.0-dotnet3-core-tools
ADD sources.list /etc/apt/

# [Option] Install Node.js
# ARG INSTALL_NODE="true"
# ARG NODE_VERSION="lts/*"
# https://github.com/microsoft/vscode-dev-containers/tree/master/containers/dotnet/.devcontainer/library-scripts
# https://github.com/microsoft/vscode-dev-containers/tree/master/script-library
# COPY library-scripts/node-debian.sh /tmp/library-scripts/
# RUN if [ "${INSTALL_NODE}" = "true" ]; then bash /tmp/library-scripts/node-debian.sh; fi

# # Comment out these lines if you want to use zsh.

ARG INSTALL_ZSH=true
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

COPY library-scripts/common-debian.sh /tmp/library-scripts/
RUN /bin/bash /tmp/library-scripts/common-debian.sh "$INSTALL_ZSH" "$USERNAME" "$USER_UID" "$USER_GID"
# && rm /tmp/common-script.sh 

# install vim for build-in editor
RUN apt-get update && apt-get -y install vim

# Install ngrok for local test
RUN wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip -P ~/ \
   && unzip ~/ngrok-stable-linux-amd64.zip -d ~/ \
   && sudo mv ~/ngrok /usr/local/bin/