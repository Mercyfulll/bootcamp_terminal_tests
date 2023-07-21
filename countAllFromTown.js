export default function countAllFromTown(regNumbers, regNumStart){
	var regNumber = regNumbers.split(",");
  
  	var regNumArray = [];
  	for(var i = 0; i < regNumber.length; i++){
    	var regNum = regNumber[i].trim();
      	
      if(regNum.startsWith(regNumStart)){
        regNumArray.push(regNum)
    }
   }
	  return regNumArray.length;
}