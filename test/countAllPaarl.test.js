import assert from 'assert';
import countAllPaarl from '../countAllPaarl.js';

describe("The countAllPaarl function", ()=>{
    it("It should return 3 registration numbers from Paarl",()=>{
        assert.equal(3, countAllPaarl('CJ 678 543, CA 34567, CJ 67890, CJ 7864'))
    })
    it("It should return 2 registration numbers from Paarl",()=>{
        assert.equal(2, countAllPaarl('CJ 987 456, CJ 1133, GH 09 HN GP'))
    })
    it("It should return 1 registration numbers from Paarl",()=>{
    assert.equal(1, countAllPaarl('FN 898 MP, CJ 1133, GH 09 HN GP'))
    })
})

