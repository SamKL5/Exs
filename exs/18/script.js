function data(){ 
    let day = prompt ("Введите день");
    let month = prompt ("Введите месяц");
switch (month) { 
    case "1": month="Января";break; 
    case "2": month="Февраля";break; 
    case "3": month="Марта";break;
    case "4": month="Апреля";break; 
    case "5": month="Мая";break; 
    case "6": month="Июня";break; 
    case "7": month="Июля";break; 
    case "8": month="Августа";break; 
    case "9": month="Сентября";break; 
    case "10": month="Октября";break; 
    case "11": month="Ноября";break; 
    case "12": month="Декабря";break; 
default: month="Проверьте правильность ввода";
}
let dweek = prompt ("Введите день недели числом"); 
switch (dweek) { 
    case "1": dweek="Понедельник";break; 
    case "2": dweek="Вторник";break;
    case "3": dweek="Среда";break; 
    case "4": dweek="Четверг";break; 
    case "5": dweek="Пятница";break; 
    case "6": dweek="Суббота";break; 
    case "7": dweek="Воскресенье";break; 
default: dweek="Проверьте правильность ввода"; 
} 
alert("Сегодня, " + day + " " + month + ", " + dweek); 
} 
function chislo(){ 
    var s = prompt ("Введите число"); 
    var a = s % 10; 
    var z = Math.round (s/10); 
    var b = z % 10; 
    var w = Math.round (z/10); 
    var c = w % 10; 
    var q = Math.round (w/10); 
    var d = q % 10; 
    var l = a + b + c + d; 
    var y = a * b * c * d; 
document.write("Цифра - "+a +"<br>"+"Цифра - "+b +"<br>"+"Цифра - "+c +"<br>"+"Цифра - "+ d +"<br>"+ "Сумма цифр:"+ l +"<br>"+"Произвидение цифр:" + y) 
} 
function random() { 
    var min = parseInt(prompt ("Введите минимальное число")); 
    var max = parseInt(prompt ("Введите максимальное число")); 
    var number = parseInt(min + Math.random() * (max + 1 - min)); 
document.write (number); 
} 