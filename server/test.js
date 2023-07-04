import chai from "chai";
import mocha from "mocha";
import {  Aproach_1 , Aproach_2, Aproach_3 , Aproach_4, Aproach_5 } from "./controllers/aproaches.js";

const {describe , test } = mocha;
const {expect} = chai;

describe ('Aproach_1' , ()=>{
    test('Testing All Cases for first Algorithm' , ()=>{
        expect(Aproach_1(0 , 10)).to.deep.equal([2 , 3 , 5 , 7]);
        expect(Aproach_1(11 , 20)).to.deep.equal([11 , 13 , 17 , 19]);
        expect(Aproach_1(0 , 0)).to.deep.equal([]);
        expect(Aproach_1( 10 , 5)).to.deep.equal([]);
        expect(Aproach_1(-10 , 5)).to.deep.equal([]);
        expect(Aproach_1(-10 , -5)).to.deep.equal([]);
   
    })  
})

describe ('Aproach_2' , ()=>{
    test('Testing All Cases for second Algorithm' , ()=>{
        expect(Aproach_2(1 , 7)).to.deep.equal([2 , 3 , 5 , 7]);
        expect(Aproach_2(10 , 23)).to.deep.equal([11 , 13 , 17 , 19 ,23]);
        expect(Aproach_2(0 , 0)).to.deep.equal([]);
        expect(Aproach_2( 10 , 5)).to.deep.equal([]);
        expect(Aproach_2(-10 , -5)).to.deep.equal([]);
        expect(Aproach_2(-10 , 5)).to.deep.equal([]);
    })
})

describe ('Aproach_3' , ()=>{
    test('Testing All Cases for third Algorithm' , ()=>{
        expect(Aproach_3(0 , 10)).to.deep.equal([2 , 3 , 5 , 7]);
        expect(Aproach_3(10 , 20)).to.deep.equal([11 , 13 , 17 , 19]);
        expect(Aproach_3(0 , 0)).to.deep.equal([]);
        expect(Aproach_3( 10 , 5)).to.deep.equal([]);
        expect(Aproach_3(-10 , -5)).to.deep.equal([]);
        expect(Aproach_3(-10 , 5)).to.deep.equal([]);
    })
})

describe ('Aproach_4' , ()=>{
    test('Testing All Cases for fourth Algorithm' , ()=>{
        expect(Aproach_4(1 , 10)).to.deep.equal([2 , 3 , 5 , 7]);
        expect(Aproach_4(13 , 18)).to.deep.equal([ 13 , 17 ]);
        expect(Aproach_4(0 , 0)).to.deep.equal([]);
        expect(Aproach_4( 10 , 5)).to.deep.equal([]);
        expect(Aproach_4(-10 , -5)).to.deep.equal([]);
        expect(Aproach_4(-10 , 15)).to.deep.equal([]);
    })
})
describe ('Aproach_5' , ()=>{
    test('Testing All Cases for fifth Algorithm' , ()=>{
        expect(Aproach_5(1 , 15)).to.deep.equal([2 , 3 , 5 , 7 , 11 , 13 ]);
        expect(Aproach_5(10 , 20)).to.deep.equal([11 , 13 , 17 , 19]);  
        expect(Aproach_5(0 , 0)).to.deep.equal([]);
        expect(Aproach_5( 10 , 0)).to.deep.equal([]);
        expect(Aproach_5(-10 , -20)).to.deep.equal([]);
        expect(Aproach_5(-10 , 5)).to.deep.equal([]);
    })

})