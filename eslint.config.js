import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  formatters: true,
  react: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
});
