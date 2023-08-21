
const fs = require('fs');
const path = require('path');

function isIneffective(name) {
  return ['.vuepress', 'index.md'].includes(name) || name.includes('.png');
}

fs.readdir('./docs', (err, dirList) => {
  dirList.forEach(i => {
    if (isIneffective(i)) return;
    const dir1 = './' + path.join('docs', i)
    console.log(dir1);

    printSameLevelMenu('./docs', i)
  })
})


function printSameLevelMenu ( preDir, dirName) {
  if (isIneffective(dirName)) return
  const dir = './' + path.join(preDir, dirName)
  console.log(dir)
  fs.readdir(dir, (err, dirList) => {
    if (!dirList) return
    const list = dirList.filter(i => {
      if (isIneffective(i)) return false
      console.log(2, dir, dirName)
      printSameLevelMenu(dir, i)
      return true
    })
let str =
`---
sidebar: false
--- 

### 目录
`
      list.forEach(tmp => {
        if(isIneffective(tmp)) return
        if (tmp.includes('.md')) tmp = tmp.substr(0, tmp.length - 3)
str = 
`${str}- [${tmp}](./${tmp}/)
`
      })
      fs.writeFile(dir + '/index.md', str, (err) => {
        console.log(err);
      } )
    })
}