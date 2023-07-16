const yargs = require("yargs")
const data1 = require("./data1")


yargs.command({
    command: 'add',
    describe: 'Add items.',
    builder: {
        id: {
            describe: 'this is the id',
            demandOption: true,
            type: "string"
        },
        fname: {
            describe: 'this is the firstname',
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: 'this is the lastname',
            demandOption: true,
            type: "string"
        },
        city: {
            describe: 'this is the city',
            demandOption: true,
            type: "string"
        },
        age: {
            describe: 'this is the age',
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data1.addPerson(x.id, x.fname, x.lname, x.city, x.age)
    }

})
// Delete///////////////////////////////////////////////////////////

yargs.command({
    command: 'delete',
    describe: 'Delete items.',
    builder:{
        id:{
            describe:'this is an id',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        data1.deletePerson(x.id)
    }
})

//  list  /////////////////////////////////////////////////////////



yargs.command({
    command:"list",
    description:"List all persons.",
    builder:{
    },
handler:()=>{
    data1.dataList()
}
})



// Read //////////////////////////////////////////////////////////////////


yargs.command({
    command:"read",
    description:"Read only 5th person",
    builder:{
        id:{
            describe:'this is an id',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        data1.read(x.id)
    }
})   
yargs.parse()