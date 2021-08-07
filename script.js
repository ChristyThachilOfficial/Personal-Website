
$(document).ready(function(){
    $('#signup-form').validate({
        
        rules:{
            name:{
                required:true,
                minlength:3
                
            },
            
            email:{
                required:true,
                
                
                
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
        
            message:"Type something"
            
        },
            
        
        submitHandler :function(form){
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbxcD4V_STM7JG-05KRYWZfLmuiZ88aLWZ5Dnun_MLEgch5HMMU/exec",
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