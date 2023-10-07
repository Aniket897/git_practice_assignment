function CheckPrime(number){
    let count = 0;
    for(let i = 0; i <= number; i++){
        if(number % i == 0){
            count++;
        }
    }

    console.log(count);
}

CheckPrime(22);
