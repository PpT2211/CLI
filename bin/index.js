#! /usr/bin/env node


//IMPORTS AND RELATED

import { createRequire } from "module"
import { franc } from "franc"
import utils from "./utils.js"
import makeProject from "../custom_modules/makeProject.js"
import scraper from "../custom_modules/scraper.js"

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
    .option("m", { alias: "make", describe: "Make a project folder. Includes an html file, a css file and a js file", type: "boolean", demandOption: false })
    .option("c", { alias: "covid", describe: "Latest covid status. You can get no.of cases in a specific state by entering the state name at the end", type: "boolean", demandOption: false })
    .help(true)
    .argv;



if (yargs.argv.l == true || yargs.argv.languages == true) {
    var input = franc(yargs.argv["_"][0],{minLength: 3})
    utils.guessLang(input)
}
else if (yargs.argv.m == true || yargs.argv.make == true) {
    makeProject(yargs.argv._);
}
else if (yargs.argv.c == true || yargs.argv.covid == true) {
    if (yargs.argv["_"][0] == null) {
        scraper.allInfo()
    } else if (yargs.argv._) {
        for (let i of yargs.argv._) {
            if(i.includes("_")){
                i = i.split("_").join(" ")
            }
            scraper.stateWise(i)
        }
    }
}
else if (yargs.argv["_"][0] == null) {
    utils.showOptions(usage)
}
//TESTS AND CHECKS

