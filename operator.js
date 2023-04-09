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

// function singUp(phoneNumber){
//     phoneNumber = parseInt(phoneNumber);
//     let temp = phoneNumber;
//     if(isNaN(temp)){
//         throw new Error('Input error');
//     }
//     return temp;
// }

// function sendOTP(phoneNumber){
//     phoneNumber = parseInt(phoneNumber);
//     let temp = phoneNumber;
//     var OTP = 9999;
//     if(isNaN(temp)){
//         throw new Error('Input error');
//     }
//     return OTP;
// }

function is_valid_phone_number(phone_number) {
    if (typeof phone_number !== 'string') {
      throw new Error('Input must be a string');
    }
    
    const regex = /^0\d{9}$/;
    return regex.test(phone_number);
  }

async function sendOTP(phone_number) {
    if (typeof phone_number !== 'string') {
      throw new Error('Phone number must be a string');
    }
    return 9999;
  }

module.exports={
    is_valid_phone_number,sendOTP
}