// create random number function

function createRandomNum( n ) {
    let random = Math.random();
    random = Math.floor( random * n ) + 1;
    return random
}

function generateNums (){
    let newNum = [];
    let luckyNum = [];

    for (let i = 0 ; i < 5 ; i ++){
        newNum.push( createRandomNum (50) );
    }

    for (let i = 0 ; i < 2 ; i ++){
        firstPick = createRandomNum (12);
        if (luckyNum.includes( firstPick )){
            firstPick = createRandomNum (12);
            luckyNum.push( firstPick );
        } else {
            luckyNum.push( firstPick );
        }
    }

  // combine two lists
    return newNum.concat(luckyNum)
}

// console.log(generateNums())
