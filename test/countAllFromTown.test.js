import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe("Test my countAllFromTown function", ()=>{

    it("It should return the number of registration numbers in the string that is for that town '3'",()=>{
        assert.deepEqual(3,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
    })
    it("It should return the number of registration numbers in the string that is for that town '1'",()=>{
        assert.deepEqual(1,countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'))
    })     
})