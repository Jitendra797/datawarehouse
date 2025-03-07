// // scripts/check-state-comments.ts
// const glob = require('glob')
// const fs = require('fs')

// const files = glob.sync('app/**/*.tsx')
// let hasError = false

// files.forEach((file) => {
//   const content = fs.readFileSync(file, 'utf8')
//   const stateDeclarations = content.match(
//     /const\s+\[\w+,\s*set\w+\]\s*=\s*useState[<\w*>]*\(/g
//   )

//   if (stateDeclarations) {
//     stateDeclarations.forEach((declaration) => {
//       const contentBeforeState = content.substring(
//         0,
//         content.indexOf(declaration)
//       )
//       const lines = contentBeforeState.split('\n')

//       let hasComment = false
//       let i = lines.length - 1

//       while (i >= 0) {
//         const line = lines[i].trim()

//         // Check for single-line comment
//         if (line.startsWith('//')) {
//           hasComment = true
//           break
//         }

//         // Check for multi-line comment end
//         if (line.includes('*/')) {
//           while (i >= 0) {
//             if (lines[i].trim().includes('/*')) {
//               hasComment = true
//               break
//             }
//             i--
//           }
//           break
//         }

//         // Stop if non-comment line found
//         if (line !== '' && !line.startsWith('*')) {
//           break
//         }

//         i--
//       }

//       const stateName = declaration.match(/const\s+\[(\w+)/)[1]

//       if (!hasComment) {
//         console.error(`${file}: State variable '${stateName}' missing comment.`)
//         hasError = true
//       }
//     })
//   }
// })

// if (hasError) {
//   process.exit(1)
// }
