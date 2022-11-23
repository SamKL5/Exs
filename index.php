<!DOCTYPE html>
<html lang="ru">
    <head>
    <meta charset="UTF-8">
    <link href="style.css" rel=" stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script.js"></script>
    <!-- CSS only -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Разные работы</title>
    </head>
<body>
    <?php
    include('db.php');
    if($mysql = connectDb()){

    ?>
<header class="header">
    <nav class="navbar navbar-expand-lg fixed-top ">
    <a class="navbar-brand" href="/">Главная</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mr-4">
            <li class="nav-item">
                <a class="nav-link" id='addZad'>Работы</a>
            </li>
        </ul>
    </div>
    </nav>
</header>
<main>
    <div class='container col-lg-12'>
        <ul class="list-group">
            <?php

            $all = $mysql->query("SELECT * FROM `pages`");
            foreach($all as $value){
                echo "<a id=".$value['id']." class='list-group-item list-group-item-action'>".$value['title']."</a>";
            }
            ?>
        </ul>
        <div class='result col-lg-12'>
            <iframe class="col-12">

            </iframe>
        </div>
    </div>
</main>
<?php } ?>
</body>
</html>