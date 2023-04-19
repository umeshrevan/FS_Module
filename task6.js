//6. rename a file
const fs = require('fs');
// try{
//     function renameFile(oldfile_name, newfile_name){
//         fs.rename(oldfile_name,newfile_name, function(err){
//          if(err){
//             console.log("Error: " + err);
//             }
//         else{
//                 console.log("Renamed " + oldfile_name + " to " + newfile_name);
//             }
//         }
//     )}
//         renameFile('./example/a.txt','./example/a_new.txt')
// }
// catch{
//     console.log("Error: " + err);
// }

//************************************************************************************************************** */
try{
    function renameFile(oldfile_name, newfile_name){
        fs.renameSync(oldfile_name,newfile_name)
        console.log("Renamed " + oldfile_name + " to " + newfile_name);    
    }
    renameFile('./example/a_new.txt','./example/a.txt')
}
catch(err){
    console.log("Error: " + err);
}