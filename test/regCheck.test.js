import assert from "assert";
import regCheck from "../regCheck.js";

describe("The regCheck function", ()=>{
    it("It should return true if registration ends with 'GP'",()=>{
        assert.equal(true, regCheck("NJ 45 KM GP","GP"))
    })
    it("It should return true if registration ends with 'L'",()=>{
        assert.equal(true, regCheck("8754 L","L"))
    })
    it("It should return true if registration ends with 'EC'",()=>{
        assert.equal(true, regCheck("MMK 234 EC","EC"))
    })
    it("It should return true if registration ends with 'MP'",()=>{
        assert.equal(true, regCheck("NJI 452 MP","MP"))
    })
    it("It should return false if registration does not end with 'GP'",()=>{
        assert.equal(false, regCheck("SAK 234 EC","GP"))
    })
    it("It should return false if registration does not end with 'L'",()=>{
        assert.equal(false, regCheck("BER 445 EC","L"))
    })
    it("It should return false if registration does not end with 'EC'",()=>{
        assert.equal(false, regCheck("1113 L","EC"))
    })
    it("It should return false if registration does not end with 'MP'",()=>{
        assert.equal(false, regCheck("LUS 113 GP","MP"))
    })

})