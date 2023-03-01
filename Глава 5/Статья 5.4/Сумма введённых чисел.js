function sumInput(){

    let nums = [];

    while(true){
        
        let item = prompt('Введите число', '');

        if (item === "" || item === null || !isFinite(item)) break;

        nums.push(+item);
    }
    let sum = 0;

    for (let number of nums){
        sum += number;
    }
    return sum;
}
alert(sumInput());