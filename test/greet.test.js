import assert from "assert";
import greet from "../Javascript/greet.js";

describe('The greet function', ()=>{

    it('should greet Andrew correctly', ()=>{
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    it('should greet Karen correctly', ()=>{
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});