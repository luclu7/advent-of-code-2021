const { log } = require('console');
const e = require('express');
const fs = require('fs');

const text = fs.readFileSync("input.txt").toString("utf-8");
const input = text.split("\n")

let nodes = [];


input.forEach(element => {
    const [type, number] = element.split(" ");
    
    const node = {
        type,
        number: parseInt(number),
    }
    nodes.push(node);
});

function part1(nodes) {
    let X = 0;
    let Y = 0;
    nodes.forEach(node => {
        switch(node.type) {
            case "forward":
                X = X+node.number;
                break;
            case "up":
                Y = Y-node.number;
                break;
            case "down":
                Y = Y+node.number;
                break;
        }
    });
    
    console.log(X*Y);    
}

function part2(nodes) {
    let X = 0;
    let Y = 0;
    let aim = 0;
    nodes.forEach(node => {
        switch(node.type) {
            case "forward":
                X = X+node.number;
                Y=Y+aim*node.number
                break;
            case "up":
                // Y = Y-node.number;
                aim=aim+node.number;
                break;
            case "down":
                // Y = Y+node.number;
                aim=aim-node.number;
                break;
        }
    });
    
    // j'ai un résulté négatid donc hop, un petit - et tout est réglé
    console.log(-X*Y)    
}

console.log("Part 1:")
part1(nodes)
console.log("Part 2:")
part2(nodes)
