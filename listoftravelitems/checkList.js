let itemList = [];

function addList(){
    let item = document.querySelector('#item').value;
    //console.log(item);
    if(item!=null){
        itemList.push(item);
        document.querySelector('#item').value = null;
        document.querySelector("#item").focus();
    }
    showList();
}

function removeList(){
    let id = this.getAttribute("id");
    itemList.splice(id,1);
    showList();
}

function showList(){
    let list = "<ul>";
    for(let i of itemList){
        list += (`<li>${i}<span class='close' id=${itemList.indexOf(i)}>X</span></li>`);
    }
    list += "</ul>";
    document.querySelector('#itemList').innerHTML = list;

    var remove = document.querySelectorAll(".close");
    for(let i of remove){
        i.addEventListener("click",removeList);
    }
}

let addBtn = document.querySelector('#add');
addBtn.addEventListener("click",addList);
