// function add(a,b){
//     a = parseInt(a);
//     b = parseInt(b);
//     let c = a+b;
//     if(isNaN(c)){
//         throw new Error('Input error');
//     }
//     return c;
// }
// function minus(a,b){
//     a = parseInt(a);
//     b = parseInt(b);
//     let c = a-b;
//     if(isNaN(c)){
//         throw new Error('Input error');
//     }
//     return c;
// }

function singUp(phoneNumber){
    phoneNumber = parseInt(phoneNumber);
    let temp = phoneNumber;
    if(isNaN(temp)){
        throw new Error('Input error');
    }
    return temp;
}

function sendOTP(phoneNumber){
    phoneNumber = parseInt(phoneNumber);
    let temp = phoneNumber;
    var OTP = 9999;
    if(isNaN(temp)){
        throw new Error('Input error');
    }
    return OTP;
}

module.exports={
    singUp,sendOTP
}