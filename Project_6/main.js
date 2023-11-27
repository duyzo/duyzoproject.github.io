let share = document.querySelector('.share')
let box = document.querySelector('.box_share')
let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
let html = $('.big_container')
let links = $$('.img_link')
html.onclick = () => {
    box.classList.remove('on')
}

share.onclick = (e) => {
    e.stopPropagation()
    box.classList.add('on')
}
    links.forEach((item) => {
        item.onclick = () => {
            box.classList.remove('on')
        }
    })

box.onclick = (e) => {e.stopPropagation()
}