function SF(arr) {
            arr.sort(function(a,b){return (a-b)})
        }
 
        function gen_arr(ln = 10, min = 1, max = 100) {
            let result = new Array(ln);
            for (let i = 0; i < result.length; i++) {
                result[i] = parseInt(Math.random() * (max - min) + min);
            }
            return result;
        }
 
        function print_table(table) {
            let html = "<table align='center' border='1px' cellspacing='0'>"
            for (let i = 0; i < table.length; i++){
                html += "<tr>"
                for (var j = 0; j < table[i].length; j++) {
                    html += "<td style='height:50px; width:70px; text-align:center'>" + table[i][j];
                }
            }
            document.write(html);
        }
            
        function copy(arr) {
            let res = new Array();
            for (let i = 0; i < arr.length; i++)
                res.push(arr[i]);
            return res;
        }
 
        function mmm() {
            let min = parseInt(prompt("Минимальное число")); 
            let max = parseInt(prompt("Максимальное число"));
            let count = parseInt(prompt("Количество"));
            let ar = gen_arr(count, min, max);
            let sar = copy(ar);
            SF(sar);
            let out_tbl = new Array(); 
            out_tbl.push(["№"])
            out_tbl.push(["Вывод"]);
            out_tbl.push(["Сортировка"]);
            for (let j = 0; j < ar.length; j++)
                out_tbl[0].push(j+1);
            for (let j = 0; j < ar.length; j++)
                out_tbl[1].push(ar[j]);
            for (let j = 0; j < sar.length; j++)
                out_tbl[2].push(sar[j]);
            print_table(out_tbl);
        }