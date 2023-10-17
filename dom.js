var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header')
console.log(headerTitle);
headerTitle.textContent = 'Hello';
// headerTitle.innerText= 'Goodbye';
//headerTitle.innerHTML = <h3> Hello</h3>
//  headerTitle.style.border = 'solid 3px #000'
header.style.border = 'solid 3px #000'

var add = document.getElementsByClassName('title');
// add.style.backgroundColor = 'green'

// get elements by class name // 
// var items =document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// querry selector 
// var header= document.querySelector('#main-header');
// header.style.borderBottom = 'solid 10px #ccc'

// var input = document.querySelector('input');
// input.value = 'Hello world'

// var submit = document.querySelector('input[type="submit"]');
// submit.value= "Send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

var titles = document.querySelectorAll('.title');
titles[0] = 'Hellooo!!!'

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i< odd.length; i++){
    odd[i].style.backgroundColor = '#008000'  
} 

