const { log } = require('console');
const fs = require('fs');

const text = fs.readFileSync("input.txt").toString("utf-8");
const inputArray = text.split("\n\n");

numbers = text.split("\n")[0].split(",").map(Number);
log(numbers);

inputArray.shift();

let cards = [];
inputArray.forEach(input => {
    
    let card = new Array(5);
    for (let i = 0; i < card.length; i++) {
        card[i] = new Array(5);
    }

    input.split("\n").forEach((element, i1) => {
        element.split(" ").filter(e => e).forEach((chiffre, i2) => {
            card[i1][i2] = chiffre;
        });
    });
    cards.push(card);
});

let nbofwin = 0;

log(cards);
try {
    numbers.forEach((n, i0) => {
        cards.forEach((card, i1) => {
            card.forEach((line, i2) => {
                line.forEach((chiffre, i3) => {
                    if (chiffre == n) {
                        cards[i1][i2][i3] = "X";
                    }
                });
            });
        });
        if(i0 >= 4) {
            log(n);
            log(cards);
            cards.forEach((card, i1) => {
                card.forEach((line, i2) => {
                    if(line.every(element => element == "X") || (card[i2][0] == "X" && card[i2][1] == "X" && card[i2][2] == "X" && card[i2][3] == "X" && card[i2][4] == "X")) {
                        let toAdd = card.join(" ").replace(/X/gm, "").split(",").join(" ").split(" ").filter(e => (e != 0 ));
                        let finalResult = toAdd.reduce((a, b) => parseInt(a) + parseInt(b));
                        nbofwin++;
                        if(nbofwin !== cards.length) {
                            log("Bingo let's go: card "+i1+": "+(n*finalResult));
                        } else {
                            throw "Bingo ! "+i1+": "+n*finalResult;
                        }
                    }    
                });
            });    
        }
    });
} catch (error) {
    log(error);
}