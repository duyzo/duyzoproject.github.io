import {category, brand,vendor,provices} from "./data.js"

let category2 = category.filter((item,i)=>{
    return (!item.hostCategoryId) 
}).map(item2=>`<option>${item2.name}</option>`).join('')

let brand2 = brand.map(item=>`<option>${item.title}</option>`).join('')
let vendor2 = vendor.map(item=>`<option>${item.title}</option>`).join('')
let provices2 = provices.map(item=> `<option>${item.nameWithType}</option>`).join('')
let $ = document.getElementById.bind(document)
let $$ = document.querySelector.bind(document)

let close = $$('.close')
let box = $$('.box_container')
let html = $$('.container')
let unClose = $$('.box')
let on = $$('.add_address')
let addAddress = $$('.add')
let pickup = [],delivery = []
let inputs = document.querySelectorAll('input')

$('menu').innerHTML = category2
$('brand').innerHTML = brand2
$('vendor').innerHTML = vendor2
$('address').innerHTML = provices2

// Xử lí input img
// $('img_file').onchange = function() {
//     chooseFile(this)
// }

// function chooseFile(fileInput)  {
//     if (fileInput.files && fileInput.files[0]) {
//         let reader = new FileReader()

//         reader.onload = function (e) {
//             $('img').attr('src',e.target.result)
//         }
//         reader.readAsDataURL(fileInput.files[0])
//     }
// }



function Close() {
    box.classList.remove('on')
}

function Add() {
    box.classList.add('on')
}

function reset() {
    selects.forEach(item=>{
        item.value = ''
    })
    inputs.forEach(item=>{
        item.value = ''
    })
}

function restore(arr,i,newArr=arr[i]) {
    let g =1,f
    // trả lại giá trị ban đầu
    $('name_produce').value = newArr[0]
    selects.forEach(item=>{
        item.value = newArr[g]
        g++;
    })
    $$('.edit_bt').classList.remove('hidden')
    //tìm vị trí cập nhật
    addInfo.forEach((item,index) => {
        if (item.includes(`data-index="${i}"`))
        f = index
    })
    console.log(addInfo.indexOf(`data-index="${i}"`));
    //Cập nhật
    $$('.edit_bt').onclick = () => {
        saveInfo(false,f)
        table.innerHTML = addInfo.join('')
        $$('.edit_bt').classList.add('hidden')
        action()
    }
}

function deleteRow(arr = addInfo,i) {
    addInfo = arr.filter(item=>!item.includes(`data-index="${i}"`))
    console.log(addInfo);
    table.innerHTML = addInfo.join('')
    if (addInfo.length === 1) table.innerHTML = ''
    action()
}

let j = 1
function saveInfo(check = true,k) {
    let arr = [],number,file = $$('img').src
    // tạo dòng nhận thông tin
    let row = [$('name_produce').value]
    selects.forEach(item=>{
        if(item!== $('address'))
        row.push(item.value)
    })
    check ? number = j: number = k
    row.splice(row.length,0,`<img src="${file}"  style="width: 100px; height: 100px;" >`,`<div class="action">
    <div class="edit p-1 pointer bg-gray-400 text-center" data-index="${number}">edit</div>
    <div class="delete p-1 pointer bg-gray-400 text-center mt-2" data-i="${number}">&times</div>
    </div>`)
    let nRow = row.map(item=>{
        if(!item.includes('action') )  arr.push(item)
        return  `<td >${item}</td>`}).join('')

    if(check) {
        addInfo.push(`<tr data-index="${number}">${nRow}</tr>`)
        store.push(arr)
    }
    // xử lí trường hợp cập nhật
    else{
        addInfo.splice(k,1,`<tr >${nRow}</tr>`)
        store.splice(k,1,arr)
    } 
}

// mở bảng thêm địa chỉ
on.onclick = (e) => {
    e.stopPropagation()
    $$('.pick').checked = false
    $$('.give').checked = false
    Add()
}

//tắt bảng thêm địa chỉ
close.onclick = Close
html.onclick = Close
unClose.onclick = (e) =>{e.stopPropagation()}

// Xử lí thêm địa chỉ
addAddress.onclick = ()=>{
    if($$('.pick').checked) {
        if (!pickup.includes(address.value))
        pickup.push(address.value)
        $('address_pickup').innerHTML = pickup.map(item=>`<option>${item}</option>`).join('')
        Close()
    }
    if($$('.give').checked) {
        if (!delivery.includes(address.value))
        delivery.push(address.value)
        $('address_give').innerHTML = delivery.map(item=>`<option>${item}</option>`).join('')
        Close()
    }
    
}

//table
let table = $$('.table')
let addsp = $$('.add_produce')
let selects = document.querySelectorAll('select')

let addInfo = [`<tr>
    <th>Tên sản phẩm</th>
    <th>Danh mục</th>
    <th>Thương hiệu</th>
    <th>Nhà cung cấp</th>
    <th>Địa chỉ lấy hàng</th>
    <th>Địa chỉ giao hàng</th>
    <th>Hình ảnh</th>
    <th>Action</th>
  </tr>`]
let store = ['none']

// Thêm sản phẩm
addsp.onclick = function() {
    saveInfo()
    table.innerHTML =addInfo.join('')
    action()
    reset()
    j++
}

// Xử lí action
function action() {
    let edits = document.querySelectorAll('.edit')
    let deleteds = document.querySelectorAll('.delete')

    // Xóa
    deleteds.forEach(item=> {
        item.onclick = function(){
            deleteRow(addInfo,this.dataset.i)
        }
    })

// Sửa
    edits.forEach(edit=> {
        edit.onclick = function(){
            console.log(this.dataset.index);
            restore(store,this.dataset.index)
            action()
        }
    })
    
}
window.onload = reset()