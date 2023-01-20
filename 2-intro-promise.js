let words = ['hallo', 'world', 'this', 'is', 'javascript']
// let tempGabung = ''

let gabungKata =(input)=> new Promise((resolve, reject) => {
    if(input) {
        // tempGabung += `${input} `
        return resolve(input)
    }else {
        return reject(input)
    }
})

gabungKata(words[0])
    .then(data0 => {
        // console.log(data0)
        // console.log({ data })
        let word1 =  `${data0} ${words[1]}`
        return gabungKata(word1)
    })
    .then((data1) => {
        let word2 = `${data1} ${words[2]}`
        return gabungKata(word2)
    })
    .then((data2) => {
        let word3 = `${data2} ${words[3]}`
        return gabungKata(word3)
    })
    .then((data3) => {
        let word4 = `${data3} ${words[4]}`
        return gabungKata(word4)
    })
    .then(data4 => {
        console.log(data4)
    })
    .catch((err) => {
        console.log('### ERROR ###')
        console.log({ err })
    })