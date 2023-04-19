const fs = require('fs');
try{
    console.log("Reading file task13.txt");
    console.log("File content is this:",(fs.readFileSync('./task13.txt', 'utf8')));
    fs.writeFileSync('./task13.txt', "This is written to File...");
    console.log("Write operation is completed");
    console.log("File content after write:",(fs.readFileSync('./task13.txt', 'utf8')));
    console.log("Appending content to file:")
    fs.appendFileSync('./task13.txt',"This is Appended Text.");
    console.log("Append operation is completed");
    console.log(fs.readFileSync('./task13.txt', 'utf8'));
    fs.chmod('task13.txt', 0o400, ()=>{
        try{
            fs.writeFileSync('./task13.txt', "This is written Fter permission to read-only...");
        }
        catch(e){
            console.log("Error of permission: " + e.code);
        }
            
    })
}
catch(e){
    console.log("Error::", e);
}