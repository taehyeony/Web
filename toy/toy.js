let toyRobot = {
    productID : "123-12",
    name : "Robot",
    price : "25000",
    medeIn : "Korea",
    quantity : 10,
    showStock : function(){
        document.querySelector('#display').innerHTML = this.name + "제품은 " + this.quantity + "개 남아있습니다."; 
    }
}