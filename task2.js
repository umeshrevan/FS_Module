//2. Create and delete new folders using fs methods.
const prompt=require('prompt-sync')();
const fs = require('fs')

var dirName = prompt("Enter Directory name to create:");
try{
    if(!fs.existsSync(dirName)){
    fs.mkdirSync(dirName);
    console.log("Directory created successfully");
    }
    else{
        console.log("Directory already Exists");
    }
}
catch(err){
    console.log("Error:",err);
}

var rmDir = prompt("Enter directory name to remove")
try{
    if(fs.existsSync(rmDir)){
    fs.rmdirSync(rmDir);
    console.log("Directory removed successfully");
    }
    else{
        console.log("Directory not exists");
    }
}
catch(err){
    console.log("Error:",err);
}

//********************************************************************************************************* */
//    try{
//     function createDirectory(directory){
//     fs.mkdir(directory,function(err){
//         if(err){ 
//             console.log("Error:",err);
//         }
//     console.log("Directory created successfully Asynchronously");
//     })
//     } 
// createDirectory('Task-2')
// }
// catch(err){
//     console.log(" Catch Error:",err);
// }

// try{
//     function removeDirectory(directory){
//     fs.rmdir(directory, err => {
//         if (err) {
//         throw err;
//         }
    
//         console.log(`${directory} is deleted!`);
//     });
// }

//     removeDirectory('Task-2');
// }
// catch(err){
//     console.log("Remove DirectoryError:",err);
// }