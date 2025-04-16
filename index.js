const characters = require('./characters.json');
function textToASCII(string){
    let letters = [];
    for (let i of string){
        i = i.toUpperCase();
        letters.push(characters[i]);
    }
    let TopBottomBorder = "";
    for (let j=0; j<letters.length;j++){
        TopBottomBorder += "---------";
    }
    console.log("   " + TopBottomBorder);
    let rowNum = letters[0].length;
    for (let row=0; row<rowNum; row++){
        let line = "|  ";
        for (let char=0; char<letters.length; char++){
            line += letters[char][row] + "  ";
        }
        line += "  |";
        console.log(line);
    }
    console.log("   " + TopBottomBorder);
}

textToASCII("hello World");