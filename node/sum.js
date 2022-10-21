const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;
function getNumber(){
    readline.question("Enter a number or stop to stop", (input) =>{

        if(input !== "stop"){
            sum += parseFloat(input);
            getNumber();
        }
        else{
            readline.close();
            console.log(`The sum is  ${sum}`);
        }

    });
}
getNumber();


