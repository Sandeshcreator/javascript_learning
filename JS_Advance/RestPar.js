const add =(...number)=>{
    let sum =0;
    for (const i of number) {
        sum+= i;
    
    }
    return sum;
}
console.log(add(1,2)); //3
console.log(add(1,2,3)); //6
console.log(add(1,2,3,4,5)); //15 



