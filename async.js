const fs=require("fs")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    for (let i = 0; i < 5; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 1000);
    }
    console.log('Done');
}


console.log(1)
//sync.....
// fs.writeFileSync('./test.text',"With Sync")

// const result=fs.readFileSync("./test.text","utf-8")

// console.log(result)

console.log(2)

//Async....

fs.writeFile('./test.text', 'Without Sync', (err) => {
    if (err) {
        console.error('An error occurred:', err);
    } else {
        console.log('File "test.txt" has been saved successfully.');
    }
});


// const result=fs.readFileSync("./test.text","utf-8")
// console.log(result)
var a = "sadf";
fs.readFileSync('./test.text', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    var a = data
    console.log(data);
  });

  console.log(a)

console.log(3)




// fs.readFile("./contacts.text","utf-8",(err,result)=>{
//     if (err) {
//         console.log("Error",err)
//     }else{
//         console.log(result)
//     }
// })
