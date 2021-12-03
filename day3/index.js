const { log } = require('console');
const fs = require('fs');

const text = fs.readFileSync("input.txt").toString("utf-8");
const arrayNumbers = text.split("\n");

function part1(arrayNumbers) {
    let valeur = ""
    for (let index = 0; index < arrayNumbers[1].length; index++) {
        let counter = 0;
        arrayNumbers.forEach(element => {
            if(element[index] === '1'){
                counter++;
            }
        });
        if(counter/arrayNumbers.length >= 0.5){
            valeur=valeur+"1";
        } else {
            valeur=valeur+"0";
        }
    }
    
    gamma = parseInt(valeur, 2)
    epsilon = parseInt(valeur.split("").map(n => 1 - n).join(""), 2)
    log(gamma*epsilon);    
}

function part2(arrayNumbers) {
    function countNumber(arrayNumbers, index, higherOrLower) {
        let counter = 0;
        let valeur;
        arrayNumbers.forEach(element => {
            if(element[index] === '1'){
                counter++;
            }
        });
        if(higherOrLower == 1){
            if(counter/arrayNumbers.length < 0.5){
                valeur=1;
            } else {
                valeur=0;
            }} else {
            if(counter/arrayNumbers.length >= 0.5){
                valeur=1;
            } else {
                valeur=0;
            }
        }
        return valeur;
    }
    
    function recursiveResolve(arrayNumbers, index, higherOrLower) {
        valeur = countNumber(arrayNumbers,index, higherOrLower);
        
        var filteredInput = arrayNumbers.filter(function(value, i, arr){ 
            return value[index] == parseInt(valeur);
        });
    
        if(filteredInput.length !== 1){
            return recursiveResolve(filteredInput, index+1, higherOrLower);
        } 
        
        return filteredInput[0];    
    }
    
    log("Oxygen:");
    oxygen = parseInt(recursiveResolve(arrayNumbers,0,0),2);
    log(oxygen);
    log("CO2:")
    co2 = parseInt(recursiveResolve(arrayNumbers,0,1),2);
    log(co2);
    
    log("Finally:")
    log(co2*oxygen);    
}

part1(arrayNumbers);
part2(arrayNumbers);