//commonJS ,every file is module(by default)
//Module - Encapsulated code (only share minimun)
//require is used to import file
const names = require('./4-name')
const sayHi = require('./5-utils')
const data=require('./6-alternative')
console.log(data)
require('./7-mind')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)