export default function allPaarl(regNumbers){
	var regNum = regNumbers.split(", "); 	
  	var paarl = [];

	for (var i = 0; i < regNum.length; i++){
   
    if (regNum[i].startsWith('CJ')){
        paarl.push(regNum[i]);
      }
    }
   //Return the registrations from Paarl.
  	return paarl.length;
}