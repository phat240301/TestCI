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
      throw new Error('Phai la mot chuoi');
    }
    
    const regex = /^0\d{9}$/;
    return regex.test(phone_number);
  }

async function sendOTP(phone_number) {
    if (typeof phone_number !== 'string') {
      throw new Error('So Dien thoai phai la chuoi');
    }
    return 9999;
  }

module.exports={
    is_valid_phone_number,sendOTP
}