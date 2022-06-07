var list = document.getElementById("task")

function addItem(){


    ////////Create li///////////
    var input = document.getElementById("todo")
    var li = document.createElement("li")
    var text = document.createTextNode(todo.value)
    li.appendChild(text)
    // console.log(li)

    var div=document.createElement("div") 
    div.setAttribute("class","div")
    li.appendChild(div)
    // console.log(div)


    /////////Edit Button/////////
    var edit = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    edit.appendChild(edittext)
    edit.setAttribute("class","edit")
    edit.setAttribute("onclick","editItem(this)")
    li.appendChild(edit)
    div.appendChild(edit)
    // console.log(div)


    /////////Delete Button///////
    var del = document.createElement("button")
    var deltext = document.createTextNode("Delete")
    del.setAttribute("class","delete")
    del.setAttribute("onclick","delItem(this)")
    del.appendChild(deltext)
    li.appendChild(del)
    div.appendChild(del)

    


    list.appendChild(li)
    
    todo.value = ""
}

function editItem(e){
    var value = e.parentNode.firstChild.nodeValue;
    var edvalue = prompt ("Enter Edit Value",e.parentNode.parentNode.firstChild.nodeValue)
    e.parentNode.parentNode.firstChild.nodeValue = edvalue;
}

function delItem(e){
    e.parentNode.parentNode.remove()
}
function delall(){
   list.innerHTML = ""
}









