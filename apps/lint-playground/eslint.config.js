// @ts-check
import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import functional from "eslint-plugin-functional"
import tseslint from "typescript-eslint"

/**
 * Flat config for ESLint 9+ (the current config system).
 *
 * This is the *starting point* for a locked-down linting setup. The layers:
 *
 *   1. js.configs.recommended        — baseline JS rules
 *   2. tseslint strictTypeChecked    — type-aware TS rules (strictest preset)
 *   3. react-hooks recommended       — Rules of Hooks enforcement
 *   4. project-specific rule layers  — the "house style" enforcement
 *
 * Candidate plugins for the next iteration of heavy enforcement:
 *   - eslint-plugin-import-x        — import order, no cycles, first-party vs 3rd-party groups
 *   - eslint-plugin-boundaries      — enforce the feature folder architecture
 *   - @tanstack/eslint-plugin-query — when server state is introduced
 *
 * Architecture: Functional Core, Imperative Shell (see AGENTS.md).
 *   - "Functional core"   → src/**\/domain/** — pure business rules only
 *   - "Imperative shell"  → everything else (routes, hooks, components)
 * The functional core is enforced by the dedicated config block at the bottom.
 */
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
      // React
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "warn",

      // TypeScript: strictness baseline
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

      // Architecture: consume features through their public API (index.ts) only.
      // Intra-feature imports must be relative; cross-feature imports go via the barrel.
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
    // Config/build files don't run in the browser and don't need type-aware rules.
    files: ["*.config.js", "*.config.ts"],
    extends: [js.configs.recommended],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    // ---------------------------------------------------------------------
    // Functional Core: src/**/domain/** must be pure business logic.
    // No React, no DOM, no I/O, no mutation. See AGENTS.md.
    // ---------------------------------------------------------------------
    files: ["src/**/domain/**"],
    plugins: { functional },
    rules: {
      // Immutability & purity
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

      // No side-effect channels: no React, no UI libs, no browser globals.
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
)
