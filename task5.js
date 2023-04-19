//5. Write some content in the file.
const fs = require('fs');
// try{
//     function writeFileAsync(file){
//         fs.writeFile(file, 'This content added Async writefile', function(err,data){
//          if(err){
//             console.log("Error: " + err);
//             }
//         else{
//                 console.log("File written successfully");
//             }
//         }
//     )}
//         writeFileAsync('./example/d.txt')
// }
// catch{
//     console.log("Error: " + err);
// }

//************************************************************************************************88 */
try{
    function writeFileSync(file){
        fs.writeFileSync(file, 'This content added sync writefile')
        {
            console.log("File written successfully");
        }
    }
        writeFileSync('./example/e.js')
}
catch(err){
    console.log("Error: " + err);
}