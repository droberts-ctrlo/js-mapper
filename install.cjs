const {existsSync, writeFileSync, rmSync} = require("fs");

const filepath = "./build/esm/package.json";
if(existsSync(filepath)) rmSync(filepath);
writeFileSync(filepath, '{ "type": "module" }');
