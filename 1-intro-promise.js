let words = ['hallo', 'world', 'this', 'is', 'javascript']
let tempGabung = ''

let gabungKata =(input)=> new Promise((resolve, reject) => {
    if(input) {
        tempGabung += `${input} `
        return resolve(tempGabung)
    }else {
        return reject(input)
    }
})

gabungKata(words[0])
    .then(data0 => {
        // console.log(data0)
        // console.log({ data })
        return gabungKata(words[1])
    })
    .then(() => {
        return gabungKata(words[2])
    })
    .then(() => {
        return gabungKata(words[3])
    })
    .then(() => {
        return gabungKata(words[4])
    })
    .then(data4 => {
        console.log(data4)
    })
    .catch((err) => {
        console.log(err)
        console.log({ err })
    })