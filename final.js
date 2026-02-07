/*function signature/sample */

function newPrice(currentPrice , discount ) {
    

    if(typeof currentPrice !== 'number' || typeof discount !== 'number' || currentPrice <= 0 || discount < 0 || discount > 100) {
        return 'Invalid';
    }
    
    let discountAmount = (currentPrice * discount) / 100;
    let finalPrice = currentPrice - discountAmount;

    return finalPrice.toFixed(3);
}


/*function signature/sample */

function newPrice(currentPrice , discount ) {
    

    if(typeof currentPrice !== 'number' || typeof discount !== 'number' || currentPrice <= 0 || discount < 0 || discount > 100) {
        return 'Invalid';
    }
    
    let discountAmount = (currentPrice * discount) / 100;
    let finalPrice = currentPrice - discountAmount;

    return finalPrice.toFixed(3);
}


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



 /*function signature/sample */

 function gonoVote(array) {
  
    if(!Array.isArray(array)){
        return 'Invalid';
    }

    let haCount = 0;
    let naCount = 0;

    for(let i = 0; i < array.length; i++) {

        if(array[i] === 'ha') {
            haCount++;
        } else if(array[i] === 'na') {
            naCount++;
        }
    }


    if(haCount > naCount) {
        return true;
    } else if( haCount === naCount) {
        return 'equal';
    } else {
        return false;
    } 
}



/*function signature/sample */

function  analyzeText(str) {
         
    if(typeof str !== 'string' || str.trim() === '') {
        return 'Invalid';
    } 

 const words = str.split(' ');
 let longwords = '';


 for(let word of words) {

    if(word.length > longwords.length) {
        longwords = word;
    }
 }

 const tokenCount = str.replace( / /g, '').length;
 return {longwords:longwords, token:tokenCount };
    
}
