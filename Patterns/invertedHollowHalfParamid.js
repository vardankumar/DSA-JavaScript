let n = 7;

for(let row = 0; row < n; row++){
    for(let j = row; j < n; j++){
        if(row == 0 || row === n-1 || j === row || j === n-1 ){
            process.stdout.write("* ")
        }
        else {
            process.stdout.write("  ")
        }
    }
    console.log()
}