let length = 5;
let width =18;

for(let row = 0; row < length; row++){
    for (let col = 0; col < width; col++){
        if(row === 0 || row === length - 1 || col === 0 || col === width - 1){
            process.stdout.write("* ")
        }else{
            process.stdout.write("  ")
        }
    }
    console.log()
}