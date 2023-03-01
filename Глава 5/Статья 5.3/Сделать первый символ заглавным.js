function ucFirst(str) {

    if (!str) return str;
    
    return str[0].toUpperCase() + str.slise(1);
}
alert( ucFirst("вася") );