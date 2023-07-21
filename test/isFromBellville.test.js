import assert from 'assert';
import isFromBellville from '../isFromBellville.js';

describe("The isFromBellville function", ()=>{
    it("It should return true if registration startswith 'CY'", ()=>{
        assert.equal(true,isFromBellville('CY 1234'))
    });
    it("It should return false if registration start with ''",()=>{
        assert.equal(false, isFromBellville(''))
    });
})