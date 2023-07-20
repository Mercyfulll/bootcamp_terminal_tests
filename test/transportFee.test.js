import assert from "assert";
import transportFee from "../Javascript/transportFee.js";

describe("Test my transportFee function",()=>{

    it("It should return the right price based on the shift worked 'R20'",()=>{
        assert.deepEqual('R20', transportFee('morning'))
    })
    it("It should return the right price based on the shift worked 'R10'",()=>{
        assert.deepEqual('R10', transportFee('afternoon'))
    })
    it("It should return the right price based on the shift worked 'free'",()=>{
        assert.deepEqual('free', transportFee('nightshift'))
    })
})