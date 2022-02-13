import langs from "langs"

const parseSentence = (words) => {
    var sentence = "";
    for (var i = 1; i < words.length; i++) {
        sentence = sentence + words[i] + " ";
    }
    return sentence
}

const showOptions = (usage) => {
    console.log(usage)
    console.log("Options:")
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')
    console.log('    -l, --languages\t' + '      ' + 'List all languages.' + '\t\t' + '[boolean]\r')
    console.log('    -m, --make\t' + '      ' + 'Make a project folder. Includes an html file, a css file and a js file.' + '\t\t' + '[boolean]\r')
    console.log('    -c, --covid\t' + '      ' + 'Latest covid status. You can get no.of cases in a specific state by entering the state name at the end.' + '\t\t' + '[boolean]\r')
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')
}

const showAll = () => {
    for (let i = 0; i < langs.all().length; i++) {
        console.log(`Name: ${langs.all()[i].name}, code: ${langs.all()[i]["2T"]} `)
    }
}

const utils = {
    parseSentence: parseSentence,
    showOptions: showOptions,
    showAll: showAll
}

export default utils