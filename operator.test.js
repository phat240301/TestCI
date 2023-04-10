// const {add,minus} = require('./operator');
const {is_valid_phone_number,sendOTP,addFood} = require('./operator');

// test("singUp(0938270524)",()=>{
//     expect(()=>{
//         singUp(0938270524)
//     }).toThrow('Input error');
// })

// test("singUp('0938270524')",()=>{
//     expect(()=>{
//         singUp('0938270524')
//     }).toThrow('Input error');
// })

// test("singUp('')",()=>{
//     expect(()=>{
//         singUp('')
//     }).toThrow('Input error');
// })

// test("sendOTP(0938270524)",()=>{
//     expect(()=>{
//         sendOTP(0938270524)
//     }).toThrow('Input error');
// })

// test("sendOTP('0938270524')",()=>{
//     expect(()=>{
//         sendOTP('0938270524')
//     }).toThrow('Input error');
// })

// test("sendOTP('')",()=>{
//     expect(()=>{
//         sendOTP('')
//     }).toThrow('Input error');
// })

describe('Phone number checker', () => {
    test('Valid phone number should return true', () => {
      expect(is_valid_phone_number('0987654321')).toBe(true);
    });
  
    test('Invalid phone number should return false', () => {
      expect(is_valid_phone_number('1234567890')).toBe(false);
    });
  
    test('Function should throw an error if input is not a string', () => {
      expect(() => is_valid_phone_number(123)).toThrowError('Input must be a string');
    });

  });

  describe('sendOTP', () => {
    test('should return 9999 if input is a valid phone number', async () => {
      const phone_number = '0987654321';
  
      const result = await sendOTP(phone_number);
  
      expect(result).toBe(9999);
    });
  
    test('should throw an error if input is not a string', async () => {
      const phone_number = 1234567890;
  
      await expect(sendOTP(phone_number)).rejects.toThrowError('Phone number must be a string');
    });
  });

  describe('addFood', () => {
    test('should add a new food', () => {
      const foodList = []
      const foodName = 'Burger'
      const foodPrice = 10
      const foodQuantity = 20
  
      addFood(foodList, foodName, foodPrice, foodQuantity)
  
      expect(foodList).toHaveLength(1)
      expect(foodList[0]).toMatchObject({
        name: foodName,
        price: foodPrice,
        quantity: foodQuantity,
      })
    })
  
    test('should not add a food with an existing name', () => {
      const foodList = [
        { name: 'Pizza', price: 12, quantity: 15 },
        { name: 'Spaghetti', price: 8, quantity: 25 },
      ]
      const foodName = 'Pizza'
      const foodPrice = 10
      const foodQuantity = 20
  
      addFood(foodList, foodName, foodPrice, foodQuantity)
  
      expect(foodList).toHaveLength(2)
    })
  
    test('should not add a food with price less than or equal to zero', () => {
      const foodList = []
      const foodName = 'Fries'
      const foodPrice = 0
      const foodQuantity = 30
  
      expect(() => addFood(foodList, foodName, foodPrice, foodQuantity)).toThrow(
        'Price must be greater than zero'
      )
  
      expect(foodList).toHaveLength(0)
    })
  
    test('should not add a food with quantity less than or equal to zero', () => {
      const foodList = []
      const foodName = 'Salad'
      const foodPrice = 5
      const foodQuantity = -1
  
      expect(() => addFood(foodList, foodName, foodPrice, foodQuantity)).toThrow(
        'Quantity must be greater than zero'
      )
  
      expect(foodList).toHaveLength(0)
    })
  });
    
// test("add('2',3)",()=>{
//     expect(add('2',3)).toBe(2+3);
// })
// test("add(2,'3')",()=>{
//     expect(add(2,'3')).toBe(2+3);
// })
// test("add(2,'abc')",()=>{
//     expect(()=>{
//         add(2,'abc')
//     }).toThrow('Input error');
// })
// test("add('abc',3)",()=>{
//     expect(()=>{
//         add('abc',3)
//     }).toThrow('Input error');
// })

// test('minus(2,3)',()=>{
//     expect(minus(2,3)).toBe(-1);
// })
// test("minus('2',3)",()=>{
//     expect(minus('2',3)).toBe(-1);
// })
// test("minus(2,'3')",()=>{
//     expect(minus(2,'3')).toBe(-1);
// })
// test("minus(2,'abc')",()=>{
//     expect(()=>{
//         minus(2,'abc')
//     }).toThrow('Input error');
// })
// test("minus('abc',3)",()=>{
//     expect(()=>{
//         minus('abc',3)
//     }).toThrow('Input error');
// })