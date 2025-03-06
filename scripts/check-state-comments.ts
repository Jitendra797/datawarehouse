// scripts/check-exports.ts
import * as glob from 'glob'
import * as fs from 'fs'

const files: string[] = glob.sync('app/**/*.tsx')
let hasError: boolean = false

files.forEach((file: string) => {
  const content: string = fs.readFileSync(file, 'utf8')

  const hasArrowFunction = content.match(
    /export\s+const\s+\w+\s*=\s*(\(\)|[\w\s,]*)\s*=>/
  )
  const hasNonExportedFunction = content.match(
    /^function\s+[A-Z]\w*|const\s+[A-Z]\w*\s*=/m
  )
  const hasProperExport = content.match(/export\s+function\s+[A-Z]\w*\s*\(/)

  if (hasArrowFunction) {
    console.error(`${file}: Uses arrow function instead of 'export function'`)
    hasError = true
  }

  if (hasNonExportedFunction) {
    console.error(
      `${file}: Contains function that should use 'export function'`
    )
    hasError = true
  }

  if (!hasProperExport && (hasArrowFunction || hasNonExportedFunction)) {
    console.error(`${file}: Missing proper 'export function' pattern`)
    hasError = true
  }
})

if (hasError) {
  process.exit(1)
}
