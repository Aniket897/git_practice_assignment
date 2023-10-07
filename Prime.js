function CheckPrime(number){
    let count = 0;
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            count++;
        }
    }
    return count == 2;
}