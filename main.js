var form = document.getElementById('addform');
var itemlist = document.getElementById('items')

// form submit event
form.addEventListener('submit' , addItem);
// delete event 
itemlist.addEventListener('click', removeItem);

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