/// <reference types = "cypress"/>

// it('Testing assertives equality...', () => {
//     const a = 5;

//     expect(a).equal(1);
//     expect(a,'Should be 1').equal(1);
//     expect('a').not.to.be.equal('b')
// })

// it('Check if truthy', () => {
//     const a = true;
//     const b = null;
//     let c;

//     expect(a).to.be.true;
//     expect(true).to.be.true;
//     expect(b).to.be.null;
//     expect(a).to.be.not.null;
//     expect(c).to.be.undefined;

// // })

// it('Object Equality', () => {
//     const obj = {
//         a:1,
//         b:2

//     }

//     expect(obj).equal(obj);
//     expect(obj).equals(obj);
//     expect(obj).eq(obj);
//     expect(obj).to.be.equal(obj)
//     expect(obj).to.be.deep.equal({a:1, b:2})
//     expect(obj).include({b:2})
// })

it('Testing string', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.match(/teste/)
    expect(str).to.match(/.{8}/)  //check if is there 8 numbers of caracters
   
})

it('Check numbers', () => {
    const number = 4
    const floatnumber = 5.21

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)
})