
let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
let selects = $$('.box_number')
let submit = $('.submit')

    selects.forEach((item) =>{
        item.onclick = function() {
            $('.box_number.on')?.classList.remove('on')
            let number = this.dataset.index
            $('.selecte').innerHTML = `You selected  Add rating ${number} here  out of 5`
            this.classList.add('on')
        }
    })

    submit.onclick = function() {
        this.parentElement.classList.remove('active')
        $('.box_tks').classList.add('active')
    }