export default function  findItemsOver20(itemList){
    var result = []
    for(var i = 0; i < itemList.length;i++){
        if(itemList[i].qty > 20){
          result.push(itemList[i])
      }
    }
        return result;
  }
  
