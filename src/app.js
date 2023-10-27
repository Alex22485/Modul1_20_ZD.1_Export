
import {getRandonColor} from './utils/util'

export const initApp = () =>{
    console.log('hi');

    const btn = document.createElement('button')
    btn.className = 'button'
    btn.textContent = 'Измените цвет страницы'

    document.body.append(btn)

    btn.addEventListener('click', () =>{
        document.body.style.background = getRandonColor()
 
    })
}