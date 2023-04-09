// const {add,minus} = require('./operator');
const {singUp,sendOTP} = require('./operator');

test("singUp(0938270524)",()=>{
    expect(()=>{
        singUp(0938270524)
    }).toThrow('Input error');
})

test("singUp('0938270524')",()=>{
    expect(()=>{
        singUp('0938270524')
    }).toThrow('Input error');
})

test("singUp('')",()=>{
    expect(()=>{
        singUp('')
    }).toThrow('Input error');
})

test("sendOTP(0938270524)",()=>{
    expect(()=>{
        sendOTP(0938270524)
    }).toThrow('Input error');
})

test("sendOTP('0938270524')",()=>{
    expect(()=>{
        sendOTP('0938270524')
    }).toThrow('Input error');
})

test("sendOTP('')",()=>{
    expect(()=>{
        sendOTP('')
    }).toThrow('Input error');
})

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