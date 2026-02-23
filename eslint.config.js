import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { tseslint } from 'typescript-eslint'
import { globalIgnores } from '@eslint/global-ignores'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      // ... other configs if needed

      // Enable type-aware rules:
      ...tseslint.configs.recommendedTypeChecked,
      // For stricter rules, use:
      // ...tseslint.configs.strictTypeChecked,
      // For stylistic rules, add:
      // ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.json'], // Use your actual tsconfig file(s)
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
