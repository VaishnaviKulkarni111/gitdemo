var form = document.getElementById('addform');
form.addEventListener('submit', addExpence)
let editstate = null;


function addExpence(e){
e.preventDefault()

const exp = e.target.exp.value
const desc = e.target.description.value
const category = e.target.category.value

const obj ={ exp, desc, category}
  let key = Math.random().toString()  

  // to replace by removing existing stuff
if(editstate){
  key = editstate;
  const li = document.getElementById(key) // get li
  const expList = li.parentElement;  // 
    expList.removeChild(li)
  editstate = null;  // 
}
showUserOnScreen(obj , key)
localStorage.setItem(key, JSON.stringify(obj));
 
 e.target.reset();  // resets after edit
}

 function showUserOnScreen(obj,id){

    var expList = document.getElementById('expList')
   const listItem = document.createElement('li');
   listItem.id = id;
   listItem.setAttribute('exp' , obj.exp)
   listItem.setAttribute('desc' , obj.desc)
   listItem.setAttribute('category' , obj.category)
   var ITEM = `${obj.exp} - ${obj.desc} - ${obj.category}`;
   listItem.textContent= ITEM
   expList.appendChild(listItem)

   var deletebtn = document.createElement('button')
   deletebtn.className= 'btn'
   deletebtn.addEventListener('click', deleteEvent)
   deletebtn.appendChild(document.createTextNode('Delete'))
   listItem.appendChild(deletebtn)

   // edit btn
   var editbtn = document.createElement('button')
   editbtn.className= 'btn'
  editbtn.appendChild(document.createTextNode('Edit'))
  listItem.appendChild(editbtn)
  editbtn.addEventListener('click', editEvent)
}

const deleteEvent = (e)=>{
    e.preventDefault();
    const li = e.target.parentElement;
    const expList = li.parentElement
      expList.removeChild(li)
      localStorage.removeItem(li.id)
}

const editEvent= (e) =>{
    e.preventDefault();
    const li= e.target.parentElement;
  const exp = document.getElementById('exp')
  exp.value = li.getAttribute('exp');
  const description = document.getElementById('description');
    description.value = li.getAttribute('desc');
  const category = document.getElementById('category');
  category.value = li.getAttribute('category');
editstate = li.id;
}