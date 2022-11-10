let now = new Date();
let firstDay = new Date("2022-11-09");

let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.ceil(passedTime/(1000*60*60*24));
document.querySelector('#accent').innerText = (`${passedDay}일`);

function calDate(days){
    let future = toFirst + days * (1000*60*60*24);
    let someday = new Date(future);
    let year = someday.getFullYear();
    let month = someday.getMonth() + 1;
    let date = someday.getDate();
    document.querySelector('#date'+days).innerText =(`${year}년${month}월${date}일`);
}

calDate(100);
calDate(200);
calDate(365);
calDate(500);
