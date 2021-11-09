
const options = []
for(let i = 0; i < 10; i++ ){
    let v = `${i}`
    options.push({
        id: v,
        label: v,
    })
}

const values = [{id: "1",label: '1'}]

export {
    values,
    options
}