function zad1(){
    var m = parseInt(prompt ("Введите левую"));
    var n = parseInt(prompt ("Введите границу"));
        if (m % 2 == 0)
        {
         m++;
        }
    var sum=0;
    for(let i = m;i <= n;i += 2){
        sum += i;
    }
        document.write(sum);
}