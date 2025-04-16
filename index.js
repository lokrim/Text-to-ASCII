const characters = require('./characters.json');
function textToASCII(string){
    let temp = [];
    for (let i of string){
        i = i.toUpperCase();
        temp.push(characters[i]);
    }
    let rowNum = temp[0].length;
    for (let row=0; row<rowNum; row++){
        let line = "|  ";
        for (let char=0; char<temp.length; char++){
            line += temp[char][row] + "  ";
        }
        line += "  |";
        console.log(line);
    }
}

textToASCII("Hello world");