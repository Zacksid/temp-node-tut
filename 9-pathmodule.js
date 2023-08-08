const path=require('path')

console.log(path.sep)
//it s gives path
const filePath =path.join('/Content','subfolder','text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute =path.resolve(__dirname,'Content','subfolder','text.txt')
console.log(absolute)