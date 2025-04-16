const characters = require('./characters.json');
function textToASCII(string){
    let letters = [];
    for (let i of string){
        i = i.toUpperCase();
        letters.push(characters[i]);
    }
    let TopBottomBorder = "---------".repeat(letters.length);
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

function textToASCIISlant(string){
    let letters = [];
    for (let i of string){
        i = i.toUpperCase();
        letters.push(characters[i]);
    }
    let TopBottomBorder = "----------".repeat(letters.length);
    console.log(" " + TopBottomBorder);
    let rowNum = letters[0].length;
    let slant = " ".repeat(rowNum);
    for (let row=0; row<rowNum; row++){
        let line = "|  " + slant;
        slant = slant.slice(0,slant.length - 1);
        for (let char=0; char<letters.length; char++){
            line += letters[char][row] + "  ";
        }
        let trailingSpaces = " ".repeat(row);
        line += trailingSpaces + "  |";
        console.log(line);
    }
    console.log(" " + TopBottomBorder);
}

textToASCII("hello World");
textToASCIISlant("Hello World");
textToASCIISlant("Ahmed Zyed");