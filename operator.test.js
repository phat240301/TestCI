// const {add,minus} = require('./operator');
const {is_valid_phone_number,sendOTP} = require('./operator');

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

    test('Valid phone number should return true', () => {
        expect(sendOTP('0987654321')).toBe(true);
      });
    test('Invalid phone number should return false', () => {
        expect(sendOTP('12345678')).toBe(false);
      });
      test('Function should throw an error if input is not a string', () => {
        expect(() => sendOTP(123)).toThrowError('Input must be a string');
      });    
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