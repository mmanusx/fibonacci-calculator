function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
        var n = n;
    var f = 0;
    var list = []
    for(var i = 0; i<n; i++)
    {
        if (i === 0){
            list.push(0);
        
        }else if(i == 1){
            list.push(1);
        }else{
          list.push(list[i-1]+list[i-2]);
        }
    }
      
  
    //Return an array of fibonacci numbers starting from 0.
    return list;
//Do NOT change any of the code below 👇
}
console.log(fibonacciGenerator(4));