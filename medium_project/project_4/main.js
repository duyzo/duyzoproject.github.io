let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

let bill = $('.bill')
let tips = $$('.tip_percent')
let custom = $('.custom')
let people = $('.people')

let Money = 0
let percent = 0
let numberPeople = 0
tips.forEach(tip=> {
    tip.onclick = function() {
        let check = true
        if ($('.on')=== this) check = false 
        if ($('.on'))
        $('.on').classList.remove('on')
         if(check) this.classList.add('on')
        percent = (this.dataset.percent);
        custom.value = ''
    }
})
bill.onblur = function() {Money =(this.value);}
custom.onclick = () => {if ($('.on')) $('.on').classList.remove('on')}
custom.onblur = function() {percent =(this.value);}
people.onblur = function() {
    numberPeople =(this.value); 
    if(!numberPeople || numberPeople === 0) {
        $('.error').innerHTML = `Can't be zero`
        this.classList.add('invalid')
    } 
    // else $('.error').innerHTML = ``

}
people.oninput = function() { 
    $('.error').innerHTML = ``
    $('.invalid') ? this.classList.remove('invalid'):null
}

function check(Money,percent,numberPeople) {
    let checkvar = true; let arr = [...arguments]
    arr.forEach(item=>{
        item ? null : checkvar = false
    })
 if (checkvar) {
    let tip = (Money*percent/100)/numberPeople
    console.log(tip);
    let total = tip + Money/numberPeople
    console.log(total);
    $('.tip').innerHTML = `$${tip.toFixed(2)}`
    $('.total').innerHTML = `$${total.toFixed(2)}`
 }

} 
$('.ok').onclick = () => check(Money,percent,numberPeople)


$('.reset').onclick =  function(){
    $$('.mn').forEach(item=>{item.innerHTML = '$0.00'})
    $$('.input_js').forEach(item=>{item.value = ''})
    if($('.on')) $('.on').classList.remove('on')
}
