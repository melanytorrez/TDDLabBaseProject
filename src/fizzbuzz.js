function fizzbuzz(num){
    if((num % 5 === 0) && (num % 3 === 0)){
        return "Fizzbuzz";
    }
    if(num % 3 === 0){
        return "Fizz";
    }
    if(num % 5 === 0){
        return "Buzz";
    }
    return num + "";
}

export default fizzbuzz;