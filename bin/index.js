#! /usr/bin/env node


//IMPORTS AND RELATED

import { createRequire } from "module"
import { franc } from "franc"
import utils from "./utils.js"

const require = createRequire(import.meta.url)
const yargs = require("yargs")


//GREET :)

console.log("Heylo :)");

//VARIABLE DECLARATIONS

var line = yargs.argv["_"][0]


//BODY

const usage = "\nUsage: test project";
const options = yargs
    .usage(usage)
    .option("l", { alias: "languages", describe: "List all supported languages.", type: "boolean", demandOption: false })
    .help(true)
    .argv;

if (yargs.argv["_"][0] == null) {
    utils.showOptions(usage)
}

if (yargs.argv.l == true || yargs.argv.languages == true) {
    utils.showAll();
}
//TESTS AND CHECKS

