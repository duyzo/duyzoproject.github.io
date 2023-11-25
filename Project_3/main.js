
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
let imgs = $$('.img_down')

imgs.forEach((item)=>{
  item.onclick =  function() {
    let check = true
    if ($('.img_down.a')) {
        if ($('.img_down.a') == this) check = false
        $('.img_down.a').classList.remove('a')
        $('.answer.on').classList.remove('on')
    } 
    if(check) {
        this.classList.add('a')
        let test = getParent(this,'.box')
        let abc = [...test.children].pop()
        abc.classList.add('on')
    }
  }
})
function getParent(element,selector) {
    while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
            return element.parentElement
        } 
        element = element.parentElement
    } 
}