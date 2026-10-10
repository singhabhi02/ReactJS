const fs = require("node:fs")

fs.readFile("messages.txt","utf8",(err, data)=>{
    if(err){
        console.error("Unab'le to read File:", err.message)
        return
    }

    console.log(data);

})