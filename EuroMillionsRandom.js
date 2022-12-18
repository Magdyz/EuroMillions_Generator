// create random number function

function createRandomNum( n ) {
    let random = Math.random();
    random = Math.floor( random * n ) + 1;
    return random
}

function generateNums (firstNumbersCount,secondNumbersCount){
    let newNum = [];
    let luckyNum = [];

    for (let i = 0 ; i < 5 ; i ++){
        newNum.push( createRandomNum (firstNumbersCount) );
    }

    for (let i = 0 ; i < 2 ; i ++){
        firstPick = createRandomNum (secondNumbersCount);
        if (luckyNum.includes( firstPick )){
            firstPick = createRandomNum (secondNumbersCount);
            luckyNum.push( firstPick );
        } else {
            luckyNum.push( firstPick );
        }
    }

  // combine two lists
    return newNum.concat( luckyNum ) ;
}

const euroMillionsMain = generateNums ( 50 , 12 ).slice ( 0 , 5 );
const euroMillionsLucky = generateNums ( 50 , 12 ).slice ( 5 , 8 );

let euroMillions = "First number: "+(euroMillionsMain.toString()) + ' ' + "\nLucky number: " + euroMillionsLucky.toString() 

console.log(euroMillions)
