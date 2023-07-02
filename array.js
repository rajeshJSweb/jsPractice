const name = "rajaesh"
const arr = Array.from(name)


const myFunc=(arr)=>{
    const newName = arr.map(item => {
        item.length
    })
    return(newName)
}

const newValue = myFunc(arr)

console.log(newValue)