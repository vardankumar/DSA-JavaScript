let n = 7;
for(let row = 0; row < n; row++){
    for(let col = 0; col < n-row ; col++){
        process.stdout.write(`${col + 1}`)
    }
    console.log()
}