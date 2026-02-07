/*function signature/sample */


function newPrice(currentPrice , discount ) {
    

    if(typeof currentPrice !== 'number' || typeof discount !== 'number' || currentPrice <= 0 || discount < 0 || discount > 100) {
        return 'Invalid';
    }
    
    let discountAmount = (currentPrice * discount) / 100;
    let finalPrice = currentPrice - discountAmount;

    return finalPrice.toFixed(3);
}

 
console.log(newPrice(500, 5));