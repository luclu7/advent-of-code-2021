const { log } = require('console');
const fs = require('fs');
const { connectableObservableDescriptor } = require('rxjs/internal/observable/ConnectableObservable');

const text = fs.readFileSync("input.txt").toString("utf-8");
const arrayNumbers = text.split("\n").map(x=>+x);
arrayNumbers.pop();

let groupCounter = [];
for(let i=0; i<arrayNumbers.length; i++){
    groupCounter[i] = arrayNumbers[i]+arrayNumbers[i+1]+arrayNumbers[i+2];
}

function part1(arrayNumbers) {
    let counter = 0;
    for(let i=0; i<arrayNumbers.length; i++){
        if(arrayNumbers[i]>arrayNumbers[i-1]){
            counter = counter+1;
        }
    }
    log(counter);
}

function part2(arrayNumbers) {
    let counter = 0;
    for(let i=0; i<groupCounter.length; i++){
        if(groupCounter[i]>groupCounter[i-1]){
            counter = counter+1;
        }
    }
    log(counter);
}

console.log("Part 1: ");
part1(arrayNumbers);
console.log("Part 2: ");
part2(arrayNumbers);