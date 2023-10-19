var form = document.getElementById('addform');
var itemlist = document.getElementById('items')
var filter = document.getElementById('filter')
// form submit event
form.addEventListener('submit' , addItem);
// delete event 
itemlist.addEventListener('click', removeItem);
// filter event 
filter.addEventListener('keyup', filterItem)

// add item
function addItem(e){
    e.preventDefault()
    // get input value
    var newItem = document.getElementById('item').value
    // create new li element
    var li= document.createElement('li')
    li.className= 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem))

    // create delete btn
    var deletebtn = document.createElement('button')
    deletebtn.className= 'btn btn-danger btn-sm float-right delete'
    // append text node 
    deletebtn.appendChild(document.createTextNode('X'))
    li.appendChild(deletebtn)
    itemlist.appendChild(li)
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u sure ??')){
            var li = e.target.parentElement;
            itemlist.removeChild(li)
        }
    }
}

// filter items
function filterItem(e){
    // convert text to lowercase
    var text= e.target.value.toLowerCase();
    //get list
    var items = itemlist.getElementsByTagName('li');
    // convert t array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display= 'block'
        } 
        else{
            item.style.display= 'none'
        }
    })
}

function test(){
    // retrive data 
    var newITEM = document.getElementById('item').value

    // store
    var store = localStorage.setItem("newITEM" , newITEM)
}