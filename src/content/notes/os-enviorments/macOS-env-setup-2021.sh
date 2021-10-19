
#!/bin/bash

# todo: 
# - add vscode extensions
# - trouble shoot success failure message on loops

GITEMAIL='zapicolucas@gmail.com'
GITUSERNAME='Lucas Zapico'

##
## test command
##
echo "macOS up and running script"

## 
## Colors 
##
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Yellow='\033[0;33m'       # Yellow
Blue='\033[0;34m'         # Blue
Purple='\033[0;35m'       # Purple
Cyan='\033[0;36m'         # Cyan
White='\033[0;37m'        # White
NC='\033[0m'             # No Color


##
## install brew
##
#$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.s$
wait

## 
## brew packages
## 
installBrewPackages() {
  BrewPackages=(vim zsh node 'python@3.9')

  for i in "${BrewPackages[@]}"; do
      echo -e "${Cyan} start: ${NC}installing $i via brew"
      brew install $i
      echo -e "${Cyan} end: ${NC} $i installed via brew"
  done
  
  return 1
}

# for i in "${arrayName[@]}"; do
#   echo $i
# done

if installBrewPackages; then
  echo -e "${Green} --- success --- ${NC}"
else
  echo -e "${Red} --- failure --- ${NC}"
fi

# alias lastest python to python
# alias python=python3
# alias pip=pip3

# packages 

## 
## install brew casks 
##
installBrewCasks() {
BrewCasks=('dropbox' 'clipy' 'devdocs' 'insomnia' 'brave-browser' 'firefox' 'lepton' 'iterm2' 'slack' 'rectangle' 'discord' 'fantastical' 'notion' 'bartender' 'figma' 'visual-studio-code' 'homebrew/cask-versions/google-chrome-canary' 'google-chrome' '1password' )
  for i in "${BrewCasks[@]}"; do
      echo -e "${Cyan} start: ${NC}installing $i cask via brew"
      brew install --cask $i
      echo -e "${Cyan} end: ${NC}  $i  cask installed via brew"
  done
  
  return 1
}

if installBrewCasks; then
  echo -e "${Green} --- success --- ${NC}"
else
  echo -e "${Red} --- failure --- ${NC}"
fi

# TEST="curl http://127.0.0.1 -H $CT"
# echo $TEST

# RESPONSE=`$TEST`
# echo $RESPONSE
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

git config --global user.email ${GITEMAIL}
git config --global user.name ${GITUSERNAME}
