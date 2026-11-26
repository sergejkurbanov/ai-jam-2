// PostToolUse hook: after Claude edits or writes a file, format it with Prettier.
// Claude Code sends JSON on stdin, e.g. { "tool_input": { "file_path": "/…/src/App.tsx" } }.
import { readFileSync, writeFileSync } from 'node:fs'

try {
  const input = JSON.parse(readFileSync(0, 'utf8'))
  const file = input.tool_input?.file_path
  if (file && /\.(tsx?|jsx?|css|json|html)$/.test(file)) {
    const prettier = await import('prettier')
    const options = (await prettier.resolveConfig(file)) ?? {}
    const source = readFileSync(file, 'utf8')
    const formatted = await prettier.format(source, { ...options, filepath: file })
    if (formatted !== source) writeFileSync(file, formatted)
  }
} catch {
  // never block Claude because of formatting
}
