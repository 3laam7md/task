
const fs = require("fs")

const addPerson = (id, fname, lname, city, age) => {
    const AllData = loadData()

    const duplicationData = AllData.filter((obj)=>{
        return obj.id===id
    })
    if (duplicationData.length==0){

        AllData.push({
            id: id,
            fname: fname,
            lname: lname,
            city: city,
            age: age
        })
      saveData(AllData)
    }else{
        console.log("error")
    }
}


const loadData = () => {
    try {

        const dataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse(dataJson)

    }

    catch {
        return []
    }
}



const saveData = (AllData) => {
    const saveAllData = JSON.stringify(AllData)
    fs.writeFileSync("data10.json", saveAllData)
}

// Delete //////////////////////////////////////////////

const deletePerson = (id) => {
    const AllData = loadData()

    const dataTOKeep = AllData.filter((obj) => {
        return obj.id !== id
    })
    saveData(dataTOKeep)


}

// List /////////////////////////////////////////////////

const dataList = () => {
    let allData = loadData();
    allData.forEach((obj) => {
        console.log(obj.id, obj.fname, obj.lname, obj.city)
    })
}



// Read  ///////////////////////////////////////////////
const read = (id) => {

    let allData = loadData()

    const itemNeded = allData.find((obj) => {

        return obj.id == id
    })
    console.log(itemNeded)
}


module.exports = {
    addPerson,
    deletePerson,
    dataList,
    read
}



