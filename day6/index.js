const { log } = require('console');
const fs = require('fs');

let text = fs.readFileSync("input.txt").toString("utf-8").trim();

fishes = new Array(9).fill(0);

for (let index = 0; index < 8; index++) {
    var re = new RegExp(index,"g");
    if(text.match(re) != null) {
        fishes[index] = text.match(re).length;
    }
}

function printFishes(fishes) {
        log("0: " + fishes[0]+ " 1: "+fishes[1]+
        " 2: " + fishes[2]+ " 3: "+fishes[3]+
        " 4: " + fishes[4]+ " 5: "+fishes[5]+
        " 6: " + fishes[6]+ " 7: "+fishes[7]+" 8: " + fishes[8]);
}

for (let index = 0; index <= 1; index++) {
    log("Round " + index);

    let newFishes = new Array(9).fill(0);
    for (let index = 0; index < 8; index++) {
        if(index==0){
            newFishes[0] = fishes[0];
            newFishes[6] = fishes[0];
        }
        newFishes[index] = fishes[index+1];
        printFishes(newFishes);
    }
    fishes = newFishes;

    log(fishes)
}