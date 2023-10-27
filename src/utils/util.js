
export const getRandonColor = () =>{

    let elem = 'RGB('
    for(let i = 1; i<4; i++){
        elem += `${255 - Math.round(Math.random()*100)},`
    }
    let randomElem = elem.slice(0,-1) + ")"

    return randomElem
}