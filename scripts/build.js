const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "src");
const distDir = path.join(root, "dist");

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

for (const file of ["index.html", "style.css"]) {
  fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
}

const buildInfo = {
  name: "statische-webseite-build",
  builtAt: new Date().toISOString(),
  source: "src",
  output: "dist"
};

fs.writeFileSync(
  path.join(distDir, "build-info.json"),
  JSON.stringify(buildInfo, null, 2),
  "utf8"
);

console.log("Build abgeschlossen: dist/");

