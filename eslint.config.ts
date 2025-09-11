import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  formatters: true,
  typescript: true,
  react: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  ignores: [
    "./src/routeTree.gen.ts",
    "./src/lib/db/migrations/*",
  ],
});
