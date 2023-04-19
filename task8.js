//8. Delete all the files in a particular folder.
const fs = require('fs');
try{
    function deleteFileAsync(directory){
        const files = fs.readdirSync(directory);
            for (const file of files) {
                const filePath = directory + '/'+file;
                fs.unlink(filePath, function(error){
                    if(error) {
                        console.log("Error: "+ err);
                    }
                    else{
                        console.log(`Deleted file: ${filePath}`);
                    }
                });
        }
    }
    deleteFileAsync('./example3')
}
catch(err){
    console.log("Error:: " + err);
}

//********************************************************** */
// try{
//     function deleteFileSync(directory){
//         const files = fs.readdirSync(directory);
//         for (const file of files) {
//             const filePath = directory + '/'+file;
//             fs.unlinkSync(filePath);
//             console.log(`Deleted file: ${filePath}`);
//           }
        
//     }
//     deleteFileSync('./example3')
// }
// catch(err){
//     console.log("Error: " + err);
// }