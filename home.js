$(document).ready(function () {
    $("#sms").click(function () {
        var message = $("#message").val();
        var number = $("#number").val();

        if(!message || !number){
            alert("please enter the field");
            return;
        }

        var smsObj = {
            message: message,
            number: number
        }

        $.ajax({
            type: "POST",
            url: "/api/send_mail",
            data: smsObj,
            success: function(data){
                alert("mail sendsuccessfully");
            },
            error: function(e){
                alert("unable to send")
            }
        })
    })
})