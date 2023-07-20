import assert from "assert"
import isWeekday from "../Javascript/isWeekday.js"

describe("The isWeekday function", ()=>{
    it("It should return true if its the day of the week", ()=>{
        assert.equal(true, isWeekday("Monday"))
    })
    it("It should return true if its the day of the week", ()=>{
        assert.equal(true, isWeekday("Wednesday"))
    })
    it("It should return true if its the day of the week", ()=>{
        assert.equal(false, isWeekday("Sunday"))
    })

})