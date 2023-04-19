
const fs = require('fs')
try {
    const fileListWithExtension = (dir, extension) => {
    const matchFiles = []
    const files = fs.readdirSync(dir)

    for (const file of files) {
        if (file.endsWith(extension)) {
        matchFiles.push(file)
        }
    }

    return matchFiles
    }
    const files = fileListWithExtension('./example', '.js')
    console.log(files)
}

catch (err) {
    console.log("error: " + err);
}