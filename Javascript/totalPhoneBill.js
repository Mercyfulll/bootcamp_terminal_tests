export default function totalPhoneBill(callsMadeAndSmsSent){
	var callsAndSmss = callsMadeAndSmsSent.split(",");
	//console.log(callsAndSmss);
    	
  	var calls = [];
  	var sms = [];
    for (var i = 0; i < callsAndSmss.length; i++){
      var callAndSms = callsAndSmss[i].trim();
      	if (callAndSms.startsWith("c")){
      	   calls.push(callAndSms)
      } else if (callAndSms.startsWith("s")){
          sms.push(callAndSms);
      }
    } var totalSms = sms.length * 0.65
      var totalCalls = calls.length * 2.75
      var totalBill = totalSms + totalCalls;
 	return "R" + totalBill.toFixed(2)
} 