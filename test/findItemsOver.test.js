import assert from 'assert';
import findItemsOver from '../findItemsOver.js';

describe("Test my findItemsOver function",()=>{
    var threshold = 20;

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];
    
    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 19},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
    ];
    
    var results2 = [];
    
    var itemList3 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];
    
    var results3 = [
        {name : 'apples', qty : 40},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];
    it("It should return 'results' products that have quantity higher than the threshold.",()=>{
        assert.deepEqual(results,findItemsOver(itemList,threshold))
    })
    it("It should return 'results2' products that have quantity higher than the threshold.",()=>{
        assert.deepEqual(results2,findItemsOver(itemList2,threshold))
    })
    it("It should return 'results3' products that have quantity higher than the threshold.",()=>{
        assert.deepEqual(results3,findItemsOver(itemList3,threshold))
    })
})