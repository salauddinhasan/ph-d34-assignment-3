 
 
 /*function signature/sample */

function validOtp(otp) {
         
    if(typeof otp !== 'string') {
        return 'Invalid';
    }

    else if(otp.startsWith('ph-') && otp.length === 8) {
        return true;
        
    } else {
        return false;
    }
 
}

console.log(validOtp(12345678));