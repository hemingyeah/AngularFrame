
//验证码读秒
var COUNTDOWN=60; 
function settime(val) { 
    if (COUNTDOWN == 0) { 
        val.removeAttribute("disabled");
        val.value="发送验证码"; 
        val.className ='btn-second width-120 mrg10L float-left';
        COUNTDOWN = 60; 
    } else { 
        val.setAttribute("disabled", true); 
        val.className ='validate-phone btn-second width-120 mrg10L float-left';
        val.value="重新发送(" + COUNTDOWN + ")"; 
        COUNTDOWN--; 
        setTimeout(function() { 
            settime(val);
        },1000) 
    } 
} 
function setPhone(val) {
    var phone= $("input[name=phone]").val();
    if(phone == '13051443788'){
        $('.callPwd-from-tip-error.phone').hide();
        settime(val);
    }else{
        $('.callPwd-from-tip-error.phone').show();
        $('.callPwd-from-tip-error.phone span').text('关联手机号不正确');
    }
    
}
$(function(){
  // 用户名非空
    $("input[name=uid]").blur(function(){
        var user= $("input[name=uid]").val();
        if( user == "" || user == undefined || user == null){
            $(".callPwd-from-tip-error ").show();
            $("input[name=uid]").addClass('error');
            $(".callPwd-from-tip-error span").text("请输入工号");
        }else{
            $(".callPwd-from-tip-error ").hide();
            $("input[name=uid]").removeClass('error');
        }
    });
});

