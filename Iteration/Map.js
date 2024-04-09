const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40) //KNOWN AS CHAINING IE, MAP INSIDE MAP INSIDE FILTER

console.log(newNums);

//MAP IS USED TO DO SOME OPERATION ON GIVEN ARRAY OR OBJECT AND RETURNING IT AUTOMATICALLY,
        //FOR EXAMPLE : WE WANT TO ADD +10ON EACH ELEMENT THEN MAP IS BEST TO USED RATHER THAN USING FOR EACH OR FOR OF LOOPS BECAUSE , 
        // IF WE USE FOR EACH LOOP THEN WE HAVE TO CREATE ONE NEW ARRAY TO STORE NEW VALUE AND THEN WE'LL PRINT THAT 
        //BUT IN MAP ,WE CAN EASILY DO IT IN SINGLE LINE WITHOUT CREATING NEW ARRAY