// // Bad examples that should fail checks
// export const BadExportPattern = () => {
//   // Should fail: Not using export function
//   return <div>Test</div>
// }

// export function badNamingConvention() {
//   // Should fail: Not camelCase
//   return <div>Test</div>
// }

// function GoodComponent() {
//   a = 5
//   // Should fail: Not camelCase (starts with capital)
//   return <div>Test</div>
// }

// // Formatting issues that should fail Prettier
// export function formattingTest() {
//   GoodComponent()
//   return <div>Test</div>
// } // Should fail: No spaces

// // ESLint issues
// export function eslintTest() {
//   return <div>Test</div>
// }

// // Good examples that should pass all checks
// export function goodComponent() {
//   // Should pass: Correct export pattern & camelCase
//   return <div>Test Component</div>
// }

// export function testEslintRules() {
//   const used = 'test'
//   return <div>{used}</div> // Should pass: Variable is used
// }

// // Test file structure
// export function fileStructureTest() {
//   return (
//     <div className="properly-formatted">
//       <h1>Test Component</h1>
//       <p>This component follows all code quality rules:</p>
//       <ul>
//         <li>Uses export function pattern</li>
//         <li>Uses camelCase naming</li>
//         <li>Properly formatted</li>
//         <li>No ESLint warnings</li>
//       </ul>
//     </div>
//   )
// }
