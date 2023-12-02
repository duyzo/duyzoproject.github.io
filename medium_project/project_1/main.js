


let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
let day = $('#day')
let month = $('#month')
let year = $('#year')

$('.submit').onclick = () => {
    let check = true
    let pres = new Date()
    year.max = 100000000000
    console.log(month.value);
    if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 ||month.value == 8 ||month.value == 10 || month.value == 12 ) day.max = 31;
    else if (month.value == 2) {
        let valueYear = year.value
        if(valueYear % 4 == 0 || (valueYear%100 != 0 && valueYear%400 == 0)) day.max = 29
        else day.max = 28;
    } else day.max =30

    $$('input').forEach((item)=>{
        if (+item.value > +item.max || +item.value < 0 || !item.value) {
            add(item) 
            check = false
            console.log(check);
        }
        
    })
if(check) action()

}

function add(item) {
    item.parentElement.classList.add('invalid')
    item.classList.add('invalid')
    $(`.${item.id}_content`).innerHTML = (item.id==='year' && item.value) ? `must be in the past` :  item.value ? `Must  be a valid ${item.id}` : 'this field is required'
}

function action() {
    let d = new Date()
    d.setFullYear(year.value);
    d.setMonth(month.value-1);
    d.setDate(day.value)
    let present = new Date()
    let time = (d.getTime() - present.getTime())/60/60/24/1000
    if (time < 0) time = -time
    let newyear = time >365 ? Math.floor((time/365)): 0
    let newmonth = time > 30 ? Math.floor((time%365/30)) : 0
    let newday = (time%365%30)
        $('.add_year').innerHTML = newyear
        $('.add_month').innerHTML = newmonth
        $('.add_day').innerHTML = newday
        $$('input').forEach((item)=>{remove(item)})

    }

function remove(item) {
    item.parentElement.classList.remove('invalid')
    item.classList.remove('invalid')
    $(`.${item.id}_content`).innerHTML = ''
}

day.oninput = remove(day)
month.oninput = remove(month)
year.oninput = remove(year)


