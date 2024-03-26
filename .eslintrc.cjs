module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "stylelint-config-prettier-scss",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/typescript",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {

    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "no-empty": "warn",
    "import/no-unresolved": 0,
    "@typescript-eslint/no-non-null-assertion": 1,
    "import/order": [
      "warn",
      {
        "groups": ["builtin", "external", "internal"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "react-dom",
            "group": "external",
            "position": "before"
          },
          { "pattern": "@*", "group": "external", "position": "before" },
          {
            "pattern": "*",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "app/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "never",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "@typescript-eslint/no-duplicate-imports": "off",
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "none",
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",

    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "ignore"
      }
    ],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "react/jsx-key": "error"
  },
  settings: {
    "react": {
      "version": "detect"
    },
  }
}
