const { readFileSync , writeFileSync } =require('fs')
console.log('start')
const first =readFileSync('./Content/subfolder/first.txt','utf8')
const second =readFileSync('./Content/subfolder/second.txt','utf8')

writeFileSync('./content/subfolder/result-sync.txt',`here is the result.${first},${second}`,{flag:'a'})
console.log(first,second)

console.log('done with  the task')
console.log('starting the next one')