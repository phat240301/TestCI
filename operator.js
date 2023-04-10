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

  function addFood(foodList, foodName, foodPrice, foodQuantity) {
    // Kiểm tra xem tên món ăn đã tồn tại trong danh sách hay chưa
    const existingFood = foodList.find((food) => food.name === foodName)
    if (existingFood) {
      throw new Error('A food with this name already exists')
    }
  
    // Kiểm tra xem giá của món ăn có hợp lệ hay không
    if (foodPrice <= 0) {
      throw new Error('Price must be greater than zero')
    }
  
    // Kiểm tra xem số lượng của món ăn có hợp lệ hay không
    if (foodQuantity <= 0) {
      throw new Error('Quantity must be greater than zero')
    }
  
    // Thêm món ăn vào danh sách
    const newFood = { name: foodName, price: foodPrice, quantity: foodQuantity }
    foodList.push(newFood)
  }  
  
module.exports={
    is_valid_phone_number,sendOTP,addFood
}