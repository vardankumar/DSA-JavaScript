let n = 7;

for(let row = 0; row < n; row++){
    for(let col = 0; col < row+1; col++){
        if(row === 0 || row === n - 1 || col === 0 ||  col === row){
            process.stdout.write("* ")
        }else {
            process.stdout.write("  ")
        }
    }
    console.log()
}