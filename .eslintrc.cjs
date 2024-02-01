module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Add this line
    "plugin:react-hooks/recommended", // Add this line
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Add this line
    },
  },
  settings: {
    react: {
      version: "detect", // Add this line
    },
  },
  rules: {
    // Your custom rules here
  },
};
