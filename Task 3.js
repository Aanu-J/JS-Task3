//divResult problem in JavaScript

//start the function
function divResult(num){

    //create an array
      const result = [];
      
    //begin the loop
      for (let i = 1; i <= num; i++) {

        //declear a boolean value
        let isDivisible = false;
        const val = [];
        //detect values divisible by 2
        if (i % 2 == 0) {
          isDivisible = true;
          val.push("yu");
        }
        //detect values divisible by 3
        if (i % 3 == 0) {
          isDivisible = true;
          val.push("gi");
        }
        //detect values divisible by 5
        if (i % 5 == 0) {
          isDivisible = true;
          val.push("oh");
        }
        //
        if (isDivisible) {
          result.push(val.join('-'))
        //detect values not divisible by 2, 3 or 5
        } else {
          result.push(i)
        }
      }
      //print array
      console.log(result);
    }
    
    //call 100 as an argument
    divResult (100);
    
    //call 100892 as an argument
    divResult (100892);