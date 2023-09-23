
// write
//const data = 'I Love Bun'
//await Bun.write('output.txt', data)

//read
const file = await Bun.file('output.txt')
console.log(await file.text())
console.log(file.size)
console.log(await file.stream())
console.log(await file.arrayBuffer)
console.log( file.lastModified)