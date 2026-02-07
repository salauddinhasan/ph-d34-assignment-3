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

 const tokenCount = str.replace( / /g,'').length;
 return {longwords:longwords, token:tokenCount };
    
}

console.log(analyzeText(" "));