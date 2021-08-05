$(document).ready(function(){
    $('#submit-form').validate({
        rules:{
            fullname:{
                required:true,
                minlength:2,
                digits:false
                

            },
            Email:{
                required:true,
                email:true
            },
            subject:{
                required:true
            }
        },
        submitHandler :function(form){
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbwAgmUw3yAyfqFen8Seh9fT-CaR0CnAieeXaZ81G_oLGH_emBKCM3YuhQynrB02A7Uk/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        }
    })
})