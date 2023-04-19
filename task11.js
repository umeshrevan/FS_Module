const fs = require('fs');
try {
const writeStream = fs.createWriteStream('output.txt','utf-8')

writeStream.write("This is written by writeStream",'utf-8')

writeStream.end()

writeStream.on('finish', function(){
    console.log("Write completed successfully");
})
}
catch(err){
    console.log("Erro:",err);
}