
$(document).ready(function(){
    $('#signup-form').validate({
        
        rules:{
            fname:{
                required:true,
                minlength:3
                
            },
            lname:{
                required:true,
                minlength:3
                
            },
            email:{
                required:true,
                minlength:10
                
                
            },
            message:{
                required:true,
                minlength:10
                
            },
            mobile:{
                required:true,
                number:true,
                minlength:10,
                maxlength:10
            }
        },
        messages:{
            email:"enter valid email",
            message:"Type something"
            
        },
            
        
        submitHandler :function(form){
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbwAgmUw3yAyfqFen8Seh9fT-CaR0CnAieeXaZ81G_oLGH_emBKCM3YuhQynrB02A7Uk/exec",
                data:$("#signup-form").serialize(),
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