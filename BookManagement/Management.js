function Book(title,author,volume,price){
    this.title = title; //제목
    this.author = author; //저자
    this.volume = volume; //분량
    this.price = price; //가격
}

let html = new Book("html","홍길동",300,27000);
let design = new Book("Web design","LEE",600,34000);
let youtube = new Book("Movie","KIM",400,22000);
let python = new Book("Python","PARK",360,25000);

let bookList = [html,design,youtube,python];

document.write("<h1>책 제목으로 살펴보기</h1>");
for(let i in bookList){
    document.write("<p>" + bookList[i].title + "</p>");
}