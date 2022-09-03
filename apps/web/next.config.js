const withTM = require("next-transpile-modules")(["ui", "editor-core"]);

module.exports = withTM({
  reactStrictMode: true,
});
