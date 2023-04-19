//10. using ReadStream to read the file content
const fs = require('fs');
try{
    let data='';
const readStream = fs.createReadStream('task13.txt','utf-8');

readStream.on('data', function (chunk){
    data += chunk
})

readStream.on('end', function(){
    console.log(data);
})
}
catch(err){
    console.log("Error: " + err);
}
