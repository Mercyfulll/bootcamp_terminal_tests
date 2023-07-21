import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe("The yearsAgo function", ()=>{
    it("It should return 29.", ()=>{
        assert.equal(29,yearsAgo(1994))
    })
    it("It should 23.", ()=>{
        assert.equal(23,yearsAgo(2000))
    })
    it("It should return 2.", ()=>{
        assert.equal(2,yearsAgo(2021))
    })
})

