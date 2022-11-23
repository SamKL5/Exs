 <h1>Заявка на тур</h1>
        <form method="POST" action="#" name="form1">
            <fieldset class="first">
                <legend>Контактная информация</legend>
            <label>Введите логин:</label>
            <input type="text" required class="one" placeholder="Обязательное поле">
            <br>
            <label>Введите пароль:</label>
            <input type="password" required class="two" placeholder="Обязательное поле">
            <br>
            <label>Телефон:</label>
            <input type="tel" class="three">
            <br>
            <label>e-mail:</label>
            </fieldset>
            <fieldset class="second">
            <legend>Ваши предпочтения</legend>
                <label>Предполагаемая дата отъезда:</label>
                <input type="date" required class="four">
                <br>
                <p>Оставьте свoи пожелания (мы подберем для вас тур):<br>
                <textarea name="comment" cols="90" rows="3"></textarea></p>
                <div><label>Класс отеля:</label><br>
                <select size="4">
                    <option>2<sup>*</sup></option>
                    <option>3<sup>*</sup></option>
                    <option>4<sup>*</sup></option>
                    <option>5<sup>*</sup></option>
                </select si></div>
                <p class="five">Цена:<br>
                    1000<input type="range" min="1000" max="300000"id="price" name="price"/>300000
                    </p>
            </fieldset>
            <div class="thridth">
            <input type="submit" value="Передать">
            <input type="submit" value="Очистить">
            </div>
        </form>