let words = ['hallo', 'world', 'this', 'is', 'javascript']
// words = undefined
function gabungKata(kata, cb) {
    if(!kata) {
        console.log('error')
        cb(err)
    }else {
        cb(null, kata)
    }
}

gabungKata(words[0], (fail, w1) => {
    if(fail) {
        console.log(fail)
    }else {
        let result = ''
        gabungKata(words[1], (fail, w2) => {
            if(fail){
                console.log(fail)
            }else{
                gabungKata(words[2], (fail, w3) => {
                    if(fail) {
                        console.log(fail)
                    }else {
                        gabungKata(words[3], (fail, w4) => {
                            if(fail) {
                                console.log(fail)
                            }else {
                                gabungKata(words[4], (fail, w5) => {
                                    if(fail) {
                                        console.log(fail)
                                    }else {
                                        result += `${w1} ${w2} ${w3} ${w4} ${w5}`
                                        console.log(result)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})