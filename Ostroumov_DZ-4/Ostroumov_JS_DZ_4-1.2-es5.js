"use strict";
/*1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных 
видео -> 3 примеры наследования -> механика наследования), 
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. 
Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство 
text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти 
свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost 
должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost 
методы из Post.Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет 
назначать свойству highlighted значение true.*/

//es5

function Post (author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function () {
    this.text = text;
}

const message = new Post('Vasya', 'Всем привет!', "21-01-2021")
console.log(message);
message.edit = "Всем пока!";

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighLight = function(){
    this.highlighted = true;
}

const attached = new AttachedPost("Petya", "Как дела?", "04-04-2021");
console.log(attached);
attached.makeTextHighLight();
attached.edit = "Тоже норм";
console.log(attached);


