//7. move a file from one location to another.
const fs = require('fs');
// try{
//     function moveFile(oldfile_path, newfile_path){
//         fs.rename(oldfile_path,newfile_path, function(err){
//          if(err){
//             console.log("Error: " + err);
//             }
//         else{
//                 console.log("Moved " + oldfile_path + " to " + newfile_path);
//             }
//         }
//     )}
//         moveFile('./example/b.txt','./example2/b.txt')
// }
// catch{
//     console.log("Error: " + err);
// }

//***************************************************************************************************************** */
try{
    function moveFile(oldfile_path, newfile_path){
        fs.renameSync(oldfile_path,newfile_path)
        console.log("Moved " + oldfile_path + " to " + newfile_path);
        
    }
        
     moveFile('./example/b.txt','./example2/b.txt')
}
catch{
    console.log("Error: " + err);
}