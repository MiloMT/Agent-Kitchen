// @ts-check
import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import functional from "eslint-plugin-functional"
import checkFile from "eslint-plugin-check-file"
import tseslint from "typescript-eslint"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.strictTypeChecked],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "warn",

      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: true },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*/*", "!@/features/*/index"],
              message: "Import features through their public API (the feature's index.ts).",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["*.config.js", "*.config.ts"],
    extends: [js.configs.recommended],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["src/features/**/lib/**"],
    plugins: { functional },
    rules: {
      "functional/no-let": "error",
      "functional/immutable-data": "error",
      "functional/prefer-immutable-types": [
        "error",
        {
          parameters: { enforcement: "ReadonlyDeep" },
          variables: { enforcement: "ReadonlyDeep" },
          returnTypes: { enforcement: "ReadonlyDeep" },
        },
      ],
      "functional/prefer-readonly-type": "error",
      "functional/no-classes": "error",
      "functional/no-this-expressions": "error",
      "functional/no-throw-statements": "error",
      "functional/no-try-statements": "error",
      "functional/no-promise-reject": "error",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            { name: "react", message: "The functional core must not depend on React." },
            { name: "react-dom", message: "The functional core must not depend on React." },
            { name: "miloberry", message: "The functional core must not depend on UI libraries." },
            { name: "lucide-react", message: "The functional core must not depend on UI libraries." },
          ],
        },
      ],
      "no-restricted-globals": [
        "error",
        { name: "document", message: "The functional core must not touch the DOM." },
        { name: "window", message: "The functional core must not touch browser APIs." },
        { name: "localStorage", message: "The functional core must not perform I/O." },
        { name: "fetch", message: "The functional core must not perform I/O." },
        { name: "console", message: "The functional core must not log; return values instead." },
      ],
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/App.tsx", "src/routes/RootLayout.tsx", "src/vite-env.d.ts"],
    plugins: { "check-file": checkFile },
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        { "**/*.ts": "CAMEL_CASE", "**/*.tsx": "CAMEL_CASE" },
        { ignoreMiddleExtensions: true },
      ],
    },
  },
  {
    files: ["src/features/**/components/**"],
    plugins: { "check-file": checkFile },
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        { "**/*.ts": "CAMEL_CASE", "**/*.tsx": "PASCAL_CASE" },
        { ignoreMiddleExtensions: true },
      ],
    },
  },
)
