import { cpSync } from "node:fs";

cpSync('src/lib/assets/', 'build/src/lib/assets/', {recursive: true});
