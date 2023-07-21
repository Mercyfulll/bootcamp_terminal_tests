export default function mostProfitableDepartment(salesData){
    var allDepartments = {};
    for(var i =0; i < salesData.length ;i++){
        var sales = salesData[i];
        allDepartments[sales.department] = 0;
      }
      for(var i =0; i < salesData.length ;i++){
          var allsales = salesData[i];
          var totalSalesDep = allDepartments[allsales.department];
          totalSalesDep += allsales.sales;
          allDepartments[allsales.department] = totalSalesDep;
      }
      var maxSales = 0;
      var depSales = '';
      for(var salesDataDepartments in allDepartments){
      var currentSales = allDepartments[salesDataDepartments]
          if(currentSales > maxSales){
              maxSales = currentSales;
              depSales = salesDataDepartments;
          }
      }
      return depSales;
  }
