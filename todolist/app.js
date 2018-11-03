
var todos = [];
function onAddClick(){
    var newToDo = document.getElementById('newToDo').value;  // lay gia tri nhap
    todos.push(newToDo); // day vao mang

    updateToDoList();    // cap nhat gia dien

    document.getElementById('newToDo').value = '';
}
function updateToDoList(){
    var eleToDoList = document.getElementById('todo-list');

    eleToDoList.innerHTML= ''; // thiet lap html ben trong bat dau la khong co gi sau do them dan dan cac gia tri todo vao trong 

    for(var i = 0; i < todos.length; i++) {
        eleToDoList.innerHTML += '<li onClick="onToDoClick(' + i + ')">' + todos[i] + '</li>';
    }
}
function onToDoClick(index){
    todos.splice(index,1);

    updateToDoList();
}