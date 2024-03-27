const fs=require("fs")

//sync.....
fs.writeFileSync('./test.text',"Hello world")




//Async....

fs.writeFile('./test.text', 'Hello Nandu', (err) => {
    if (err) {
        console.error('An error occurred:', err);
    } else {
        console.log('File "test.txt" has been saved successfully.');
    }
});




const result=fs.readFileSync("./contacts.text","utf-8")
console.log(result)


fs.readFile("./contacts.text","utf-8",(err,result)=>{
    if (err) {
        console.log("Error",err)
    }else{
        console.log(result)
    }
})
