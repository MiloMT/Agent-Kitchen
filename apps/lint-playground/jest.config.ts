import type { Config } from "jest"

const config: Config = {
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(components|hooks|lib)/(.*)$":
      "<rootDir>/../../libs/Miloberry/src/$1/$2",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(t|j)sx?$": [
      "ts-jest",
      {
        diagnostics: false,
        tsconfig: {
          module: "commonjs",
          moduleResolution: "node10",
          jsx: "react-jsx",
          verbatimModuleSyntax: false,
          isolatedModules: false,
          target: "es2022",
          esModuleInterop: true,
        },
      },
    ],
  },
  transformIgnorePatterns: ["node_modules/(?!(.pnpm/)?@shadcn)"],
}

export default config
