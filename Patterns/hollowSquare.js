let squareLength = 4;

for(let row = 0; row < squareLength; row++){
    for (let col = 0; col < squareLength; col++){
        if(row === 0 || row === squareLength - 1 || col === 0 || col === squareLength - 1){
            process.stdout.write("* ")
        }else{
            process.stdout.write("  ")
        }
    }
    console.log()
}