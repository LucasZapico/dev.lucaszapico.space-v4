#/bin/zsh

 


dirLoop () {
 echo $arg
 #if [[ -d $arg]]; then
 # echo "$arg is a dir"
 #elif [[ -f $arg]]; then 
 # echo "$arg is a file" 
 #fi 
 
}


for dir in *; do 
 dirLoop $dir
done


# dirLoop 

#for dir in */*; do 
#    # ls -d $PWD/*
#    dir=${dir%*/}
#    echo "${dir##*/}"  
#done
