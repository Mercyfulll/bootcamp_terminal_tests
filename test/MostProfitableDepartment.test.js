import assert from "assert";
import mostProfitableDepartment from "../Javascript/MostProfitableDepartment.js";

describe("Test my mostProfitableDepartment function",()=>{

    var salesData = [
        {department : 'hardware', sales : 4500, day : 'Monday'},
        {department : 'outdoor', sales : 1500, day : 'Monday'},
        {department : 'carpentry', sales : 5500, day : 'Monday'},
        {department : 'hardware', sales : 7500, day : 'Tuesday'},
        {department : 'outdoor', sales : 2505, day : 'Tuesday'},
        {department : 'carpentry', sales : 1540, day : 'Tuesday'},
        {department : 'hardware', sales : 1500, day : 'Wednesday'},
        {department : 'outdoor', sales : 8507, day : 'Wednesday'},
        {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        {department : 'hardware', sales : 12000, day : 'Thursday'},
        {department : 'outdoor', sales : 18007, day : 'Thursday'},
        {department : 'carpentry', sales : 6109, day : 'Thursday'},
        {department : 'hardware', sales : 7005, day : 'Friday'},
        {department : 'outdoor', sales : 12006, day : 'Friday'},
        {department : 'carpentry', sales : 16109, day : 'Friday'},
    ];
    
    var salesData2 = [
        {department : 'electronics', sales : 4500, day : 'Monday'},
        {department : 'outdoor', sales : 1500, day : 'Monday'},
        {department : 'carpentry', sales : 5500, day : 'Monday'},
        {department : 'steelwork', sales : 7500, day : 'Tuesday'},
        {department : 'outdoor', sales : 2505, day : 'Tuesday'},
        {department : 'carpentry', sales : 1540, day : 'Tuesday'},
        {department : 'hardware', sales : 1500, day : 'Wednesday'},
        {department : 'outdoor', sales : 8507, day : 'Wednesday'},
        {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        {department : 'hardware', sales : 12000, day : 'Thursday'},
        {department : 'carpentry', sales : 6109, day : 'Thursday'},
        {department : 'hardware', sales : 7005, day : 'Friday'},
        {department : 'electronics', sales : 12006, day : 'Friday'},
        {department : 'electronics', sales : 16109, day : 'Saturday'},
        {department : 'steelwork', sales : 7500, day : 'Tuesday'},
        {department : 'outdoor', sales : 2505, day : 'Tuesday'},
        {department : 'carpentry', sales : 1540, day : 'Tuesday'},
        {department : 'steelwork', sales : 1500, day : 'Wednesday'},
        {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    ];

    var salesData3 = [
        {department : 'confectionery', sales : 3500, day : 'Monday'},
        {department : 'fruit & veg', sales : 1000, day : 'Monday'},
        {department : 'kiosk', sales : 5500, day : 'Monday'},
        {department : 'kiosk', sales : 2800, day : 'Tuesday'},
        {department : 'fruit & veg', sales : 3500, day : 'Tuesday'},
        {department : 'kiosk', sales : 4000, day : 'Tuesday'},
        {department : 'butchery', sales : 19500, day : 'Wednesday'},
        {department : 'fruit & veg', sales : 1300, day : 'Wednesday'},
        {department : 'kiosk', sales : 4080, day : 'Wednesday'},
        {department : 'butchery', sales : 12070, day : 'Thursday'},
        {department : 'kiosk', sales : 8111, day : 'Thursday'},
        {department : 'butchery', sales : 26564, day : 'Friday'},
        {department : 'confectionery', sales : 2677, day : 'Friday'},
        {department : 'confectionery', sales : 6289, day : 'Saturday'},
        {department : 'clearance', sales : 1700, day : 'Tuesday'},
        {department : 'fruit & veg', sales : 2675, day : 'Tuesday'},
        {department : 'kiosk', sales : 5409, day : 'Tuesday'},
        {department : 'clearance', sales : 1020, day : 'Wednesday'},
        {department : 'kiosk', sales : 9003, day : 'Wednesday'},
    ];
    it("It should return 'outdoor' as the most profitable department ",()=>{
        assert.deepEqual('outdoor',mostProfitableDepartment(salesData))
    })
    it("It should return 'electronics' as the most profitable department ",()=>{
        assert.deepEqual('electronics',mostProfitableDepartment(salesData2))
    })
    it("It should return 'butchery' as the most profitable department ",()=>{
        assert.deepEqual('butchery',mostProfitableDepartment(salesData3))
    })
})
