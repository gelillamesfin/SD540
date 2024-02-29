
import {readFileSync, writeFileSync} from 'node:fs'
import { EventEmitter } from 'node:stream'

type Data={
    id:number,
    name:string
}

class Names extends EventEmitter {
    
    data:Data[];
    
    constructor(){
        super()
        const content=readFileSync("./data.json","utf-8");
        this.data=JSON.parse(content)
     }

    persist(){
        try{
        const dataStr=JSON.stringify(this.data,null,2);
        writeFileSync("./data.json",dataStr);
        const event= new EventEmitter();
  event.emit("data_saved",dataStr);
  console.log("file is successfully written")
  
}catch(err){
    console.log("error writing  data to file ",err)
}
}
addName(id:number,name:string){
    if(!this.data.some(x=>x.id==id)){
        this.data.push({ id, name });
        this.persist();
    }
}
getNames(){
for(let name of this.data){
    console.log (name.name)
}
}
getNameByID(id:number){
    const idIndex=this.data.findIndex(x=> x.id==id)
       return this.data[idIndex]
}
deleteNameById(id:number){
this.data=this.data.filter((x)=>x.id!==id);
this.persist();
return this.data
}
}
    
const names= new Names();
    //names.addName(3, "gelilla");
    names.deleteNameById(3)

names.on('data_saved',message=>{
    console.log(message);
names.persist();

})

names.persist();

