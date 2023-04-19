//4. print the content of a particular file.
const fs = require('fs');
// try{
//     function readFileAsync(file){
//         fs.readFile(file, 'utf8', function(err,data){
//          if(err){
//             console.log("Error: " + err);
//             }
//         else{
//                 console.log(data);
//             }
//         }
//     )}
//         readFileAsync('./example/a.txt')
// }
// catch{
//     console.log("Error: " + err);
// }

//************************************************************************************* */
try{
    function readFileSync(file){
        let content = fs.readFileSync(file,'utf-8')
        console.log(content)
    }
    readFileSync('./example/a.txt')
}
catch{
    console.log("Error: " + err);
}
