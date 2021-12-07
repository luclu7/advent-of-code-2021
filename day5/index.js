const { log } = require('console');
const fs = require('fs');

const inputArray = text.split("\n");

let map = new Array(1000);
for (let i = 0; i < map.length; i++) {
    map[i] = new Array(1000).fill("0");
}

function printMap(map) {
    let line = "";
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            line=line+(String(map[i][j]).replace("0","."));
        }
        log(line);
        line = ""
    }
}

//printMap(map);

inputArray.forEach((element, ligne) => {
    let entry = element.split(" -> ")
    let start = entry[0].split(",")
    let end = entry[1].split(",")
    x1 = parseInt(start[0])
    y1 = parseInt(start[1])
    x2 = parseInt(end[0])
    y2 = parseInt(end[1])

    deltaX=x2-x1
    deltaY=y2-y1

    smallestX=Math.min(x1,x2)
    smallestY=Math.min(y1,y2)
    biggestX=Math.max(x1,x2)
    biggestY=Math.max(y1,y2)

    //log("Ligne: "+(ligne+1)+" Start: "+x1+","+y1+" End: "+x2+","+y2, "Delta X: "+deltaX+" Delta Y: "+deltaY)
    //log(x1, x2)
    if(x1 == x2 || y1 == y2) {
        for (let i = smallestX; i <= smallestX+Math.abs(deltaX); i++) {
            for (let j = smallestY; j <= smallestY+Math.abs(deltaY); j++) {
               // log("Setting "+i+","+j+" to 1")
                map[j][i] = parseInt(map[j][i])+1;
            }
        }
    } else { // diagonal

        let incrementX = Math.round((x2-x1)/Math.hypot(deltaX, deltaY))
        let incrementY = Math.round((y2-y1)/Math.hypot(deltaX, deltaY))
        //log("IncrementX: "+incrementX)
        //log("IncrementY: "+incrementY)

        let size = Math.hypot(deltaX, deltaY)
        //log("Size: "+size)
        
        for (let i = 0; i <= deltaY; i++) {
            //log("i: "+i)
            let x = x1+incrementX*i
            let y = y1+incrementY*i
            //log("Setting "+x+","+y+" to 1")
            map[y][x] = parseInt(map[y][x])+1;
        }
    }
});

listOfItems = [].concat(...map);
listOfItems = listOfItems.filter(item => item >= 2);
log(listOfItems)

// help
log("Number of items: "+listOfItems.length)

//printMap(map);