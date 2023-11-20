function getTodos(){
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => showOutput(res))
    .catch(err => console.log(err))
}

function addTodo() {

    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: 'new Todo',
         completed : false
    })
        .then(res => showOutput(res))
        .catch(err => console.log(err))
   }

   function updateTodo() {

    axios.put('https://jsonplaceholder.typicode.com/todos/1'), {
        title: 'update Todo',
         completed : true
    }
        .then(res => showOutput(res))
        .catch(err => console.log(err))
   }   

   function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
    .then(axios.spread((todos, posts) => showOutput(posts)))
    .catch(err => console.log(err))
  }

