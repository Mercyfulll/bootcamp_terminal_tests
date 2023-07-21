import assert from 'assert';
import countRegNumber from '../countRegNumber.js';

describe("The countRegNumber function", ()=>{
    it("It should return 4", ()=>{
        assert.equal(4, countRegNumber('AS 546 EC,CA 236444,CC 59 NM GP,8328 L'))
    })
    it("It should return 3", ()=>{
        assert.equal(3, countRegNumber('AS 546 EC,CA 236444,8328 L'))
    })
    it("It should return 1", ()=>{
        assert.equal(1, countRegNumber('QX 546 MP'))
    })
})