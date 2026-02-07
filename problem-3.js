
/*function signature/sample */

function finalScore (omr) {
    

    if(typeof omr !== 'object' || omr === null)  {
        return 'Invalid';
    }

    const {right, wrong, skip } = omr; 

    if(right + wrong + skip !== 100) {
        return 'Invalid';
    }


    let score = (right * 1) - (wrong * 0.5);
    return Math.round(score);

 }  
 


console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
