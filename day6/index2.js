const { log } = require('console');
const fs = require('fs');

const text = fs.readFileSync("input.txt").toString("utf-8");
const fish = text.split(",").map(BigInt);

for (let index = 0; index < 256; index++) {
    log("Round " + index);
    fish.forEach((element, i) => {
        if(element > 0){
            fish[i] = BigInt(element)-BigInt(1);
        } else {
            fish.push(BigInt(8));
            fish[i] = BigInt(6);
        }
    });
    log(fish);
    log(fish.length)
}