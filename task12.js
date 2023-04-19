//12. perform various types of operations using chmode method.
const fs = require('fs')
fs.chmod('chfile.txt', 0o600, ()=>{
try{
    console.log(fs.appendFileSync('chfile.txt',"This is edited!!!"))
    console.log(fs.readFileSync('chfile.txt','utf8'));
}
catch(e){
    console.log("error",e.code);
}
})
