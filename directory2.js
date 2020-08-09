const fs = require('fs')
const path = require('path')

const getFilesandFolders = function () {
  const pathCwd = process.cwd()
  const path2 = path.dirname(pathCwd)
  const names = []
  console.log('Your current working directory is', pathCwd)
  fs.readdir(path2, (err, files) => {
    if (err) {
      console.log('Something went wrong', err)
    } else {
      const checklen = files.length
      if (!checklen) {
        console.log('Empty')
        return names
      } else {
        files.forEach(function (file) {
          file = path.resolve(path2, file)
          fs.stat(file, (error, result) => {
            if (error) {
              console.log('Something went wrong', error)
            } else {
              if (result.isFile()) {
                return result
              } else if (result.isDirectory()) {
                getFilesandFolders()
              }
            }
          })
        })
      }
    }
  })
}

getFilesandFolders()
