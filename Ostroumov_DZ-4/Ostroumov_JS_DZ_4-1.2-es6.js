"use strict"
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

//es 6
class Post {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text){
        this.text = text;
    }
}

let message = new Post ('Anna', 'А вот и новые технологии', '21-09-2021');
console.log(message);
message.edit('перезаписываемся');
console.log(message);

class AttachedPost extends Post {
    constructor(author, text, date, highlighted){
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighLight (){
        this.highlighted = true;
    }
}

let attached = new AttachedPost ('Dasha', 'Это космос!', '22-09-2021')
console.log(attached)
attached.makeTextHighLight();
attached.edit("не туда нажала!");
console.log(attached);
