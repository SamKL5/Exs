<?php

    echo "<form id='myForm'>
    <input type='button' id='submit' class='btn btn-outline-secondary col-12' value='Сохранить'>
    <div class='form-group'>
        <label for='title'>Название задания</label>
        <input type='text' class='form-control' required name='title' id='title' placeholder='Введите название'>
    </div>

    <div class='form-group'>
        <label class='form-label' for='html_php'>Введите код</label>
        <textarea class='form-control' required id='html_php' rows='10'  name='html_php'></textarea>
    </div>

    <div class='form-check'>
        <input type='checkbox' class='form-check-input' id='addCss'>
        <label class='form-check-label' for='addCss'>Добавить CSS</label>
    </div>

    <div class='form-check'>
        <input type='checkbox' class='form-check-input' id='addJs'>
        <label class='form-check-label' for='addJs'>Добавить JS</label>
    </div>

    <div class='form-group1'>
        <label class='form-label' for='textAreaExample'>Введите код css</label>
        <textarea class='form-control' id='textAreaExample2' rows='10' name='css'></textarea>
    </div>

    <div class='form-group2'>
        <label class='form-label' for='textAreaExample'>Введите код js</label>
        <textarea class='form-control' id='textAreaExample3' rows='10' name='js'></textarea>
    </div>
</form>";


?>