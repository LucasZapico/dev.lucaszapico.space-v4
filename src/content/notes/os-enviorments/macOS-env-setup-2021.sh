
#!/bin/bash

##
## test command
##
echo "macOS up and running script"

##
## install brew
##
#$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.s$
wait



brew install vim
echo "vim installed and ready to go"
brew install zsh
echo "zsh installed and ready to go"
brew install node
brew install python@3.9
wait
alias python=python3

alias pip=pip3

brew install --cask iterm2
brew install --cask slack
brew install --cask rectangle
brew install --cask discord
brew install --cask fantastical
brew install --cask notion
brew install --cask bartender
brew install netlify-cli
brew install --cask figma
brew install --cask visual-studio-code
brew install --cask homebrew/cask-versions/google-chrome-canary
brew install --cask google-chrome
