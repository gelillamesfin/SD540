import os from "node:os";


function checkSystem():Promise<string>{
return new Promise((resolve,reject)=>{
const totalMemoryGB=os.totalmem()/(1024*1024*1024)
const numCores=os.cpus().length;
if(totalMemoryGB<8){
reject("you need at least 8 GB of RAM")
}if (numCores<4){
    reject("Processor must have at least 4 cores");
}else {
    resolve("System is checked successfully.")
}
});
}
checkSystem()
.then(msg=>console.log(msg))
.catch(err=>console.error(err));