module.exports = {
  extends: [
    "expo",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native", "prettier"],
  env: {
    "react-native/react-native": true,
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": ["error"]``,
    "react/react-in-jsx-scope": "off",
    "linebreak-style": "off",
  },
};
