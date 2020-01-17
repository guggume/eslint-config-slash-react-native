module.exports = {
  extends: ["@react-native-community"],
  rules: {
    "no-unused-vars": 0,
    "padding-line-between-statements": [
      2,
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"]
      }
    ],
    "no-multiple-empty-lines": [2, { max: 1, maxBOF: 1 }],
    "vars-on-top": 2
  }
};
