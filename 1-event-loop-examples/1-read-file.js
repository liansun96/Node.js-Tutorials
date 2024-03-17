const {readFile, read} = require('fs')

console.log('Starting first task');

readFile('./content/first.txt' , 'utf8' , (err, res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(res);
    console.log('Complete first task');
})

console.log('Starting next task');
