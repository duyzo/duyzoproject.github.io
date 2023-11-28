let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
let submit = $('.submit')
let input = $('.email_input')
let error = $('.error')
let content = $('.text')



function add() {
    error.classList.add('on')
    input.classList.add('invalid')
    content.innerText='Please provide a valid email'
}

function remove() {

    error.classList.remove('on')
    input.classList.remove('invalid')
    content.innerText = ''
}

submit.onclick = function() {
    let values = input.value
    let test = (values) => {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       return (regex.test(values))
    }
    if(!test(values)) {
        add()
    }

}
input.oninput = remove