import assert from "assert";
import totalPhoneBill from "../Javascript/totalPhoneBill.js";

describe("Test my totalPhoneBill function",()=>{

    it("It should the total bill for the data provided 'R7.45'",()=>{
        assert.deepEqual('R7.45',totalPhoneBill('call, sms, call, sms, sms'))
    })
    it("It should the total bill for the data provided 'R3.40'",()=>{
        assert.deepEqual('R3.40',totalPhoneBill('call, sms'))
    })
    it("It should the total bill for the data provided 'R1.30'",()=>{
        assert.deepEqual('R1.30',totalPhoneBill('sms, sms'))
    })
})