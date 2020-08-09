const fs = require('fs')
const path = require('path')

const checkRoot = function (path2) {
//   const pathCwd = process.cwd()
//   const path2 = path.dirname(pathCwd)
  console.log('Your current working directory is', path2)
  fs.stat(path2, (error, stats) => {
    if (error) {
      console.log('Something wrong happened', error)
    } else {
      //   console.log('got stats obj', stats)
      if (stats.isFile()) {
        console.log('reached end')
      } else if (stats.isDirectory()) {
        // checkContents(path2, stats)
        console.log('This is a folder ,showing its contents')
        fs.readdir(path2, (err, files) => {
          if (err) {
            console.log('An error occurred')
          } else {
            files.forEach(function (file) {
              console.log(file)
              console.log('%%Path next', path.resolve(path2, file))
            })
          }
        })
      }
    }
  })
}
// const checkContents = function (path2, stats) {
//   fs.readdir(path2, (err, files) => {
//     if (err) {
//       console.log('An error occurred')
//     } else {
//       files.forEach(function (file) {
//         console.log(file)
//         if (stats.isDirectory()) {
//           console.log('found a folder inside')
//         }
//       })
//     }
//   })
// }
checkRoot('C:/Users')
