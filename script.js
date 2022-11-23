$(window).on('load', function(){
    $('main').css('margin-top', $('.navbar').height()+40+'px');
    $('.list-group-item').on('click',function(){
        $('.list-group').slideUp();

        id = $(this).attr('id');
        $('iframe').show();
        $('iframe').attr('src',"exs/"+id+"/index.php");
        // $('.result').load("exs/"+id+"/index.php",function(response, status, xhr) { if(status == "error") { $(".result").html("An error occured: " + xhr.status + " " + xhr.statusText); }});
        $('.result').before("<input type='button' class='btn' id='back' value='Назад'>")
    })
    $(document).on('click','#back',function(){
        $('iframe').hide();
        $(this).slideUp();
        $('.list-group').slideDown();
    })
    $('#addZad').on('click',function(){

        $.ajax({
            url: 'form.php',
            success:function(res){
                $('.list-group').slideUp();
                $('.result').html(res);
            }
        });
    })

    $(document).on("change", "#addCss", function () {
        if($(this).is(':checked')){
            $('.form-group1').slideDown();
        }else{
            $('.form-group1').slideUp();
            $('.form-group1').children('textarea').val('');
        }
    })
    $(document).on("change", "#addJs", function () {
        if($(this).is(':checked')){
            $('.form-group2').slideDown();
        }else{
            $('.form-group2').slideUp();
            $('.form-group2').children('textarea').val('');
        }
    })
    $(document).on('focus','#title,#html_php',function(){
        $(this).css('border','1px solid #ced4da')
    })
    $(document).on('click','#submit',function(){

        form = $('#myForm');
        var mas = form.serializeArray();
        var check = true;
        $.each(mas,function(i, el){
            if(this.name == 'title' || this.name == 'html_php'){
                if(el.value.trim() == ''){
                    $("#"+el.name).css('border','1px solid red');
                    check = false;
                }
            }
        });
        if(check){
            mas = $.grep(mas, function (el, i) {
                if (el.value.trim() == '') return false;
                return true;
            });
            $.ajax({
                url: 'addZad.php',
                type: 'POST',
                data: {arr: mas},
                success:function(res){
                    alert("Было успешно добавлено задание"+res);
                    location.reload();
                }
            })
        }

    })
})
