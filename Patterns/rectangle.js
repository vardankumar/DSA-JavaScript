let width = 4; 
let length = 6;

for (let row = 0; row < width; row++){
    for (let col = 0; col < length; col++) {
        process.stdout.write("* ")
    }
    console.log()
}