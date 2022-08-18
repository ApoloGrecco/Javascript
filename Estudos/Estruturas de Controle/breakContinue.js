const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5 ){
        break
    }
    console.log(x + " = " + nums[x])
}

for(let x in nums) {
    if (x == 5){
        continue
    }
    console.log(x + " = " + nums[x])
}


externo: for(let x in nums) {
    for(let y in nums){
        if( x == 2 && y == 3) break externo
        console.log("Par = " + x + "," + y)
    }
}

console.log("Fim!")