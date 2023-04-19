//1. list down all the files in a particular folder. (EXTRA: Here,folder name must be dynamic.)
//const prompt=require('prompt-sync')();
const fs = require('fs')


// function fileList(directory){
// try{
//     fs.readdir(directory,{
//     withFileTypes: true
//     }, function(err, files) {
//     if(err){
//         console.log("Error occured:"+ err);
//     }
//     else{
//         console.log(files);
//     }
//     })
// }
// catch(err){
//     console.log("Error",err);
// }
// }

// var dirName = prompt("Enter directory name from you wants list of files:");
// fileList(dirName)

//****************************************************************************************************** 
// var dirNameSync = prompt(" Sync: Enter directory name from you wants list of files:");
    try{
        function fileListSync(dirNameSync){
           const files= fs.readdirSync(dirNameSync,{withFileTypes: false})
            {
            console.log(files);
           }
        }
        fileListSync('NodeFS Refrence')
        }  
    catch(err){
    console.log("Error",err);
    }