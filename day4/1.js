//1) declare function calculate(...a) and display addition of data display only odd numbers from given data 

  //call calculate function with multiple parameters
     
  function add(...a){
  let sum=0;
        for (let i=0;i<a.length;i++){
            sum=sum+a[i];
            if(a[i]%2!=0){
            console.log(a[i]);
        }
        }
        console.log("sum is ",sum)
  }
  function odd(...a){
        for(let i=0;i<a.length;i++){
        if(a[i]%2!=0){
            console.log(a[i]);
        }
    }
  }
add(2,4,6,7,8);
odd(6,78,4,3,6,21,9);