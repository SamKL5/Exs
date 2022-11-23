<?php
include('db.php');
if($mysql = connectDb()){
$css = 0;
$js = 0;
// echo "<pre>";print_r($_POST['arr']);echo "</pre>";
if(isset($_POST['arr']) && !empty($_POST['arr'])){
    $arr = $_POST['arr'];
    foreach($arr as $v){
        if($v['name'] == 'html_php'){
            $code_html = $v['value'];
        }
        if($v['name'] == 'css'){
            $css = 1;
            $code_css = $v['value'];
        }
        if($v['name'] == 'js'){
            $js = 1;
            $code_js = $v['value'];
        }
    };

}

$q = "INSERT INTO `pages`VALUES (NULL,'".$arr[0]['value']."',1,".$css.",".$js.")";
if($mysql->query($q)){
    $path = "exs/".$mysql->insert_id;
    mkdir($path);
    file_put_contents($path."/index.php",$code_html);
    if(isset($code_css)){
        file_put_contents($path."/style.css",$code_css);
        file_put_contents($path."/index.php","<link href='style.css' rel='stylesheet' type='text/css'>", FILE_APPEND);
    }
    if(isset($code_js)){
        file_put_contents($path."/script.js",$code_js);
        file_put_contents($path."/index.php","<script src='script.js'></script>", FILE_APPEND);
    }
    return $arr[0]['value'];
}else{
    return false;
}
// echo $q;
// echo "<pre>";print_r($query_mas);echo "</pre>";
// file_put_contents('data.txt', 'Vasya');
// echo $arr['title'];
// return "ok";
        }
?>