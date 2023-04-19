//9. Delete all the files with a particular extension.
const fs = require('fs');
try {
  function deleteParticularExtension(directory){
    const extension = '.txt';
    const files = fs.readdirSync(directory);
    for (const file of files) {
      if (file.endsWith(extension)) {
        const filePath = directory +'/'+ file;
        fs.unlinkSync(filePath);
        console.log(`Deleted file: ${filePath}`);
      }
    }
}
  deleteParticularExtension('./example3');
} 

catch (err) {
  console.log(`Error: ${err}`);
}

///********************************************************************************************** */

// try {
//   function deleteParticularExtension(directory){
//     const extension = '.txt';
//     const files = fs.readdir(directory, function (err){
//       if (err) {
//         console.log("Error::", err);
//       }
//     })

//       for (const file of files) {
//         if (file.endsWith(extension)) {
//           const filePath = directory +'/'+ file;
//           fs.unlink(filePath);
//           console.log(`Deleted file: ${filePath}`);
//           }
//       }  
// }
//   deleteParticularExtension('./example3');
// } 
// catch (err) {
//   console.log(`Error: ${err}`);
// }
