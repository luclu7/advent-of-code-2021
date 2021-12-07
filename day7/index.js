const { log } = require('console');
const fs = require('fs');

const text = fs.readFileSync("input.txt").toString("utf-8");
const inputArray = text.split(",").map(Number);

log(inputArray);

let biggest = {total: Number.POSITIVE_INFINITY, i: 0};
for (let i = 0; i <= Math.max(...inputArray); i++) {
    let total = 0;
    inputArray.forEach(crabPosition => {
        let N = Math.abs(crabPosition - i);
        // total = total + N; // part 1
        total = total + ((N+1)*N)/2; // part 2
    });
    log("i = " + i+", Total = " + total);
    
    if(biggest.total > total){
        biggest = {total, i};
    }
}

log(biggest);