//write a funstions odd numbers that takes in two numbers as arguments
//should return all odd numbers between min and max, exclusive.
function oddNumbers(min, max){
    let arr = [];
    for(let i = min + 1; i <= max -1; i++){
        if(i %2 !==0){
            arr.push( i);
            
        }
    }
return arr;
};
console.log(oddNumbers(12, 17));
//printing the return of the functions
