function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function move(){    
    var dx =Math.floor(Math.random() * 820);
    var dy =Math.floor(Math.random() * 460);
    document.getElementById('block').style.position = 'relative';
    document.getElementById('block').style.top = dy+'px';
    document.getElementById('block').style.left = dx+'px';
    var d = document.getElementById('block');
    d.innerHTML = 'x: '+ dx +' px<br>y: '+ dy +' px';
}
