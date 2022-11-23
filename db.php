<?php
function connectDb(){
    $mysql = mysqli_connect('localhost','root','root','hlam'); // подключение к базе данных
    $mysql->set_charset("utf8"); // устанавливается кодировку
    
    if($mysql->connect_error){ // проверяем на соединение
        return false;
        // die("Ошибка подключения"); // если оно некорректное, мы завершаем скрипт и вывоводим сообщение, что не удалось подключиться
    }else {
        return $mysql;
    }
}
?>