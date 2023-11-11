const fs=require('fs');

function confirmationText(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("File is written");
}

fs.writeFile('3a.txt', "i am getting used it", 'utf8', confirmationText);