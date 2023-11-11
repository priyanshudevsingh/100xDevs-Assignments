const fs=require('fs');

function printText(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
}

fs.readFile('3a.txt', 'utf8', printText);