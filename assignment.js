function  mindGame(number) {
    const value1 = number * 3;
    const value2 =  value1 + 10;
    const value3 = value2 / 2 ;
    const value4 =  value3 - 5;

    if (typeof number !== 'number') {
        return 'Please Input Valid Information';

    }
     else if (number >= 0 ) {
        return value4;

    }

}
// const result = mindGame (5);
// console.log(result);
  


function  evenOdd(text) {
    if (typeof text !== "string" ) {
     return 'Please Input a valid info' ;

    }
     else if (text.length %2 === 1) {
       return 'odd' ;
    }

    else  {
       return 'even';
    }

}

// const texts = 'josim';
// const resultText =  evenOdd (texts);
// console.log(resultText);





function isLGSeven(number) {
    const num1 = number - 7 ;

    if (typeof number !== 'number') {
        return 'please enter a valid value' ;

     }
     else if (num1 < 7) {

        return num1 ;
    }
    else if (num1 >  7) {
        return  number*2 ;

    }

}

// const inputNumber = 15;
// const resultLG = isLGSeven (inputNumber);
// console.log(resultLG);



function  findingBadData(number) {
    let count = 0;
 for (let i = 0; i < number.length; i++) {
    const data = number [i];

     if (typeof data !== 'number' ) {
        return 'Please Enter Number'

       }

    else if (data  < 0 ) {
        count ++;

    }

 }
    return count;

}
// const ages = [20, 58, -85, -95, 0, -58];
// const badDataCount = findingBadData (ages);
// console.log(badDataCount);



function  gemsToDiamond(rakib,josim,korim) {
    const rakibGemPower = 21;
    const josimGemPower = 32;
    const korimGemPower = 43;

    const rakibDiaomond = rakibGemPower * rakib;
    const josimDiamond = josimGemPower * josim ;
    const korimDiamond = korimGemPower * korim ;

    const totalDiamond = rakibDiaomond + josimDiamond + korimDiamond;

    if (typeof rakib !== 'number' && typeof josim !== 'number ' && typeof korim !== "number"   ) {
        return 'please enter a valid information';

    }

     else if (totalDiamond > 2*1000 ) {
       return  totalDiamond - 2000;
    }
    else {
       return totalDiamond ;
    }

}

// const results =  gemsToDiamond (100, 5 , 1);
// console.log( results);
