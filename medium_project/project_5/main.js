let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let submit = $('.submit_js')
let inputs = $$('input')
let checkvar = true

inputs.forEach(item=>{
    check(item)
    remove(item)
})

submit.onclick = function() {
    inputs.forEach(item=>{
        if(!item.value) checkvar = false
    })
    if(checkvar) {
        $('.number_js').innerHTML = $('#card_number').value
        $('.add_name').innerHTML = $('#name').value
        $('.add_date').innerHTML = `${$('#month').value}/${$('#year').value}`
        $('.add_pass').innerHTML = $('#pass').value
        $('#form_1').classList.add('d-none') 
        $('.tks_js').classList.remove('d-none')
    }
}

function check(item) {
    item.onblur = function() {
        if ($('#card_number') === item) {
            item.value.split(' ').forEach(item2=> {
                if (item2.length < 4 || item2. length > 4) {
                    $('.card_error').innerHTML = 'Please enter the correct example'
                    item.classList.add('invalid')
                    checkvar = false
                }
                if (isNaN(item2)) {
                    $('.card_error').innerHTML = 'Wrong format, numbers only'
                    item.classList.add('invalid')
                    checkvar = false
                }
            })
        }

        if (!item.value) {
            $$('span').forEach(element => {
                if(element.dataset.index === item.dataset.index) element.innerHTML = `Can't be blank` 
                item.classList.add('invalid')
                checkvar = false
            });
        }
        if (item.type === 'number') {
            if (item.value > item.max)
            $$('span').forEach(element => {
                if(element.dataset.index === item.dataset.index) element.innerHTML = `The maximum value of ${item.id} is ${item.max}` 
                checkvar = false
                item.classList.add('invalid')
            }); 
        }
    }
}

function remove(item) {
    item.oninput = function() {
        $$('span').forEach(element => {
            if(element.dataset.index === item.dataset.index) element.innerHTML = `` 
            checkvar = true
            item.classList.remove('invalid')
        });
    }
}

