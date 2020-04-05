   //An array of objects called data
   const data = [
            {p: 2500, t: 1.8},
            {p: 1000, t: 5},
            {p: 3000, t: 1},
            {p: 2000, t: 3}
         ]
    data.length
    //lets call interestData intda
    const intda = interestCalculator(data)
    intda.length
    //interestCalculator takes an array as a single argument
    function interestCalculator(data) {
        let rate = 1;
        let interest = 0.0
        let interestData =[]

        for(let i =0; i < data.length; i++){

           let item = data[i]
           let principal = item.p
           let time = item.t
        
            if (principal >= 2500 && (time > 1 && time < 3 )) {
                rate = 3  
            }
            else if (principal >= 2500 && time >= 3){
               rate = 4
            }
            else if (principal < 2500 && time <= 1){
                rate = 2
            }
        
        //Calculating the interest of each individual
           interest = (principal * rate * time) / 1000;
           interestData[i] = {principal:principal, rate:rate, time:time, interest:interest}
        }
        console.log(interestData)
        return interestData
    }
















    
 